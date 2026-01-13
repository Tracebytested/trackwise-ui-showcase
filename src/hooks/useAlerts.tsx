import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

export interface Alert {
  id: string;
  device_id: string;
  type: 'speed' | 'geofence_enter' | 'geofence_exit' | 'battery_low' | 'offline' | 'sos';
  message: string;
  details: Record<string, unknown> | null;
  is_read: boolean;
  resolved_at: string | null;
  created_at: string;
}

export const useAlerts = () => {
  const { user } = useAuth();
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setAlerts([]);
      setLoading(false);
      return;
    }

    const fetchAlerts = async () => {
      const { data, error } = await supabase
        .from('alerts')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50);

      if (error) {
        setError(error.message);
      } else {
        setAlerts(data as Alert[]);
      }
      setLoading(false);
    };

    fetchAlerts();

    // Real-time subscription
    const channel = supabase
      .channel('alerts-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'alerts',
        },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setAlerts(prev => [payload.new as Alert, ...prev].slice(0, 50));
          } else if (payload.eventType === 'UPDATE') {
            setAlerts(prev => prev.map(a => a.id === payload.new.id ? payload.new as Alert : a));
          } else if (payload.eventType === 'DELETE') {
            setAlerts(prev => prev.filter(a => a.id !== payload.old.id));
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user]);

  const markAsRead = async (alertId: string) => {
    const { error } = await supabase
      .from('alerts')
      .update({ is_read: true })
      .eq('id', alertId);

    return { error };
  };

  const unreadCount = alerts.filter(a => !a.is_read).length;

  return { alerts, loading, error, markAsRead, unreadCount };
};

import { useState, useEffect } from 'react';

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

// Mock alerts - replace with your API/database calls
const mockAlerts: Alert[] = [
  {
    id: 'alert-1',
    device_id: '1',
    type: 'speed',
    message: 'Speed limit exceeded: 85 km/h in 60 km/h zone',
    details: { speed: 85, limit: 60 },
    is_read: false,
    resolved_at: null,
    created_at: new Date().toISOString(),
  },
];

export const useAlerts = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        // Replace with your actual API call:
        // const { data } = await supabase
        //   .from('alerts')
        //   .select('*')
        //   .order('created_at', { ascending: false });
        
        await new Promise(resolve => setTimeout(resolve, 300));
        setAlerts(mockAlerts);
      } catch (err) {
        setError('Failed to load alerts');
      } finally {
        setLoading(false);
      }
    };

    fetchAlerts();
  }, []);

  const markAsRead = async (alertId: string) => {
    // Replace with your API call
    setAlerts(prev => prev.map(a => 
      a.id === alertId ? { ...a, is_read: true } : a
    ));
  };

  const unreadCount = alerts.filter(a => !a.is_read).length;

  return {
    alerts,
    loading,
    error,
    unreadCount,
    markAsRead,
    refetch: () => {},
  };
};

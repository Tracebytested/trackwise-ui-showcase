import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

export interface Device {
  id: string;
  user_id: string;
  name: string;
  plate: string | null;
  type: string;
  imei: string | null;
  sim_iccid: string | null;
  sim_number: string | null;
  status: 'moving' | 'idle' | 'parked' | 'offline';
  icon: string | null;
  created_at: string;
  updated_at: string;
}

export const useDevices = () => {
  const { user } = useAuth();
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setDevices([]);
      setLoading(false);
      return;
    }

    const fetchDevices = async () => {
      const { data, error } = await supabase
        .from('devices')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        setError(error.message);
      } else {
        setDevices(data as Device[]);
      }
      setLoading(false);
    };

    fetchDevices();

    // Real-time subscription
    const channel = supabase
      .channel('devices-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'devices',
        },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setDevices(prev => [payload.new as Device, ...prev]);
          } else if (payload.eventType === 'UPDATE') {
            setDevices(prev => prev.map(d => d.id === payload.new.id ? payload.new as Device : d));
          } else if (payload.eventType === 'DELETE') {
            setDevices(prev => prev.filter(d => d.id !== payload.old.id));
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user]);

  const addDevice = async (device: Omit<Partial<Device>, 'id' | 'user_id' | 'created_at' | 'updated_at'>) => {
    if (!user) return { error: new Error('Not authenticated'), data: null };
    
    const { data, error } = await supabase
      .from('devices')
      .insert({
        name: device.name || 'New Device',
        plate: device.plate,
        type: device.type || 'vehicle',
        imei: device.imei,
        sim_iccid: device.sim_iccid,
        sim_number: device.sim_number,
        status: device.status || 'offline',
        icon: device.icon,
        user_id: user.id,
      })
      .select()
      .single();

    return { data, error };
  };

  const updateDevice = async (id: string, updates: Partial<Device>) => {
    const { data, error } = await supabase
      .from('devices')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    return { data, error };
  };

  const deleteDevice = async (id: string) => {
    const { error } = await supabase
      .from('devices')
      .delete()
      .eq('id', id);

    return { error };
  };

  const activeCount = devices.filter(d => d.status === 'moving' || d.status === 'idle').length;
  const movingCount = devices.filter(d => d.status === 'moving').length;

  return { 
    devices, 
    loading, 
    error, 
    addDevice, 
    updateDevice, 
    deleteDevice,
    activeCount,
    movingCount,
    totalCount: devices.length,
  };
};

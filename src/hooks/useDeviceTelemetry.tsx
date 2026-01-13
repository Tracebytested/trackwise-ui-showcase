import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface DeviceTelemetry {
  id: string;
  device_id: string;
  speed: number;
  latitude: number | null;
  longitude: number | null;
  altitude: number | null;
  heading: number | null;
  satellites: number;
  signal_strength: number;
  battery_level: number;
  ignition: boolean;
  address: string | null;
  created_at: string;
}

export const useDeviceTelemetry = (deviceId: string | null) => {
  const [telemetry, setTelemetry] = useState<DeviceTelemetry | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!deviceId) {
      setTelemetry(null);
      setLoading(false);
      return;
    }

    const fetchTelemetry = async () => {
      const { data, error } = await supabase
        .from('device_telemetry')
        .select('*')
        .eq('device_id', deviceId)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (error && error.code !== 'PGRST116') {
        setError(error.message);
      } else {
        setTelemetry(data as DeviceTelemetry | null);
      }
      setLoading(false);
    };

    fetchTelemetry();

    // Real-time subscription for this device
    const channel = supabase
      .channel(`telemetry-${deviceId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'device_telemetry',
          filter: `device_id=eq.${deviceId}`,
        },
        (payload) => {
          setTelemetry(payload.new as DeviceTelemetry);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [deviceId]);

  return { telemetry, loading, error };
};

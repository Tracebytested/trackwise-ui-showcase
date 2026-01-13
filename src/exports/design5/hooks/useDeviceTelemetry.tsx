import { useState, useEffect } from 'react';

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

// Mock telemetry data - replace with your API/database calls
const mockTelemetry: Record<string, DeviceTelemetry> = {
  '1': {
    id: 'tel-1',
    device_id: '1',
    speed: 72.5,
    latitude: 51.5074,
    longitude: -0.1278,
    altitude: 45,
    heading: 145,
    satellites: 14,
    signal_strength: 85,
    battery_level: 94,
    ignition: true,
    address: '123 Main Street, London',
    created_at: new Date().toISOString(),
  },
  '2': {
    id: 'tel-2',
    device_id: '2',
    speed: 0,
    latitude: 51.5155,
    longitude: -0.1419,
    altitude: 38,
    heading: 90,
    satellites: 12,
    signal_strength: 78,
    battery_level: 67,
    ignition: false,
    address: '456 Park Lane, London',
    created_at: new Date().toISOString(),
  },
};

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
      try {
        // Replace with your actual API call:
        // const { data } = await supabase
        //   .from('device_telemetry')
        //   .select('*')
        //   .eq('device_id', deviceId)
        //   .order('created_at', { ascending: false })
        //   .limit(1)
        //   .single();
        
        await new Promise(resolve => setTimeout(resolve, 300));
        setTelemetry(mockTelemetry[deviceId] || null);
      } catch (err) {
        setError('Failed to load telemetry');
      } finally {
        setLoading(false);
      }
    };

    fetchTelemetry();

    // For real-time updates, set up a subscription:
    // const channel = supabase
    //   .channel(`telemetry-${deviceId}`)
    //   .on('postgres_changes', { event: 'INSERT', ... }, (payload) => {
    //     setTelemetry(payload.new);
    //   })
    //   .subscribe();

  }, [deviceId]);

  return { telemetry, loading, error };
};

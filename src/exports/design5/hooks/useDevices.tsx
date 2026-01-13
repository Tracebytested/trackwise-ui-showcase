import { useState, useEffect } from 'react';

// Types
export interface Device {
  id: string;
  user_id: string;
  name: string;
  type: string;
  plate: string | null;
  imei: string | null;
  sim_number: string | null;
  sim_iccid: string | null;
  icon: string | null;
  status: 'moving' | 'idle' | 'parked' | 'offline';
  created_at: string;
  updated_at: string;
}

// Mock data for standalone use - replace with your API/database calls
const mockDevices: Device[] = [
  {
    id: '1',
    user_id: 'user-1',
    name: 'BMW X5 M Sport',
    type: 'car',
    plate: 'AB12 CDE',
    imei: '123456789',
    sim_number: null,
    sim_iccid: null,
    icon: null,
    status: 'moving',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '2',
    user_id: 'user-1',
    name: 'Mercedes Sprinter',
    type: 'car',
    plate: 'XY98 ZZZ',
    imei: '987654321',
    sim_number: null,
    sim_iccid: null,
    icon: null,
    status: 'parked',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export const useDevices = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call - replace with your actual data fetching
    const fetchDevices = async () => {
      try {
        // Replace with: const { data } = await supabase.from('devices').select('*')
        await new Promise(resolve => setTimeout(resolve, 500));
        setDevices(mockDevices);
      } catch (err) {
        setError('Failed to load devices');
      } finally {
        setLoading(false);
      }
    };

    fetchDevices();
  }, []);

  const addDevice = async (device: Partial<Device>) => {
    // Replace with your API call
    const newDevice: Device = {
      ...device,
      id: Date.now().toString(),
      user_id: 'user-1',
      status: 'offline',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    } as Device;
    setDevices(prev => [...prev, newDevice]);
    return newDevice;
  };

  const deleteDevice = async (id: string) => {
    // Replace with your API call
    setDevices(prev => prev.filter(d => d.id !== id));
  };

  const totalCount = devices.length;
  const activeCount = devices.filter(d => d.status !== 'offline').length;
  const movingCount = devices.filter(d => d.status === 'moving').length;

  return {
    devices,
    loading,
    error,
    totalCount,
    activeCount,
    movingCount,
    addDevice,
    deleteDevice,
    refetch: () => {},
  };
};

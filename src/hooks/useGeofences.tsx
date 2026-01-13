import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

export interface Geofence {
  id: string;
  user_id: string;
  name: string;
  description: string | null;
  type: string;
  center_lat: number | null;
  center_lng: number | null;
  radius: number | null;
  coordinates: Record<string, unknown> | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export const useGeofences = () => {
  const { user } = useAuth();
  const [geofences, setGeofences] = useState<Geofence[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setGeofences([]);
      setLoading(false);
      return;
    }

    const fetchGeofences = async () => {
      const { data, error } = await supabase
        .from('geofences')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        setError(error.message);
      } else {
        setGeofences(data as Geofence[]);
      }
      setLoading(false);
    };

    fetchGeofences();
  }, [user]);

  const addGeofence = async (geofence: {
    name: string;
    description: string | null;
    type: string;
    center_lat: number | null;
    center_lng: number | null;
    radius: number | null;
    is_active: boolean;
  }) => {
    if (!user) return { error: new Error('Not authenticated'), data: null };
    
    const { data, error } = await supabase
      .from('geofences')
      .insert({
        name: geofence.name,
        description: geofence.description,
        type: geofence.type,
        center_lat: geofence.center_lat,
        center_lng: geofence.center_lng,
        radius: geofence.radius,
        is_active: geofence.is_active,
        user_id: user.id,
      })
      .select()
      .single();

    if (!error && data) {
      setGeofences(prev => [data as Geofence, ...prev]);
    }

    return { data, error };
  };

  const updateGeofence = async (id: string, updates: {
    name?: string;
    description?: string | null;
    type?: string;
    center_lat?: number | null;
    center_lng?: number | null;
    radius?: number | null;
    is_active?: boolean;
  }) => {
    const { data, error } = await supabase
      .from('geofences')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (!error && data) {
      setGeofences(prev => prev.map(g => g.id === id ? data as Geofence : g));
    }

    return { data, error };
  };

  const deleteGeofence = async (id: string) => {
    const { error } = await supabase
      .from('geofences')
      .delete()
      .eq('id', id);

    if (!error) {
      setGeofences(prev => prev.filter(g => g.id !== id));
    }

    return { error };
  };

  const activeCount = geofences.filter(g => g.is_active).length;

  return { 
    geofences, 
    loading, 
    error, 
    addGeofence, 
    updateGeofence, 
    deleteGeofence,
    activeCount,
    totalCount: geofences.length,
  };
};

import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

export interface Subscription {
  id: string;
  user_id: string;
  plan: 'free' | 'pro' | 'enterprise';
  status: 'active' | 'cancelled' | 'past_due' | 'trialing';
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  current_period_start: string | null;
  current_period_end: string | null;
  created_at: string;
  updated_at: string;
}

export const useSubscription = () => {
  const { user } = useAuth();
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setSubscription(null);
      setLoading(false);
      return;
    }

    const fetchSubscription = async () => {
      const { data, error } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        setError(error.message);
      } else {
        setSubscription(data as Subscription | null);
      }
      setLoading(false);
    };

    fetchSubscription();
  }, [user]);

  const isPro = true; // Unlocked for testing
  const isEnterprise = true; // Unlocked for testing
  const isActive = true; // Unlocked for testing

  const canAccessLiveTracking = true; // Unlocked for testing
  const canAccessGeofencing = true; // Unlocked for testing
  const canAccessAlerts = true; // Unlocked for testing

  return { 
    subscription, 
    loading, 
    error, 
    isPro, 
    isEnterprise, 
    isActive,
    canAccessLiveTracking,
    canAccessGeofencing,
    canAccessAlerts,
  };
};

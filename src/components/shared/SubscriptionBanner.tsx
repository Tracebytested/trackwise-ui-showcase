import { useNavigate } from 'react-router-dom';
import { useSubscription } from '@/hooks/useSubscription';

interface SubscriptionBannerProps {
  variant?: 'dark' | 'light' | 'gradient';
  compact?: boolean;
}

export const SubscriptionBanner = ({ variant = 'gradient', compact = false }: SubscriptionBannerProps) => {
  const navigate = useNavigate();
  const { isPro, loading } = useSubscription();

  if (loading || isPro) return null;

  const handleSubscribe = () => {
    // Navigate to subscription page or trigger Stripe checkout
    navigate('/subscribe');
  };

  if (compact) {
    return (
      <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-xl p-4">
        <p className="text-sm font-medium text-amber-400 mb-1">Upgrade to Pro</p>
        <p className="text-xs text-slate-400 mb-3">Unlock live tracking & more</p>
        <button 
          onClick={handleSubscribe}
          className="w-full py-2 bg-amber-500 text-black text-sm font-medium rounded-lg hover:bg-amber-400 transition-colors"
        >
          Subscribe
        </button>
      </div>
    );
  }

  if (variant === 'light') {
    return (
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 flex items-center justify-between text-white">
        <div>
          <h3 className="text-lg font-semibold mb-1">Upgrade to Enterprise</h3>
          <p className="text-blue-100 text-sm">Get live tracking, advanced geofencing, and priority support</p>
        </div>
        <button 
          onClick={handleSubscribe}
          className="px-6 py-2.5 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
        >
          View Plans
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6 flex items-center justify-between">
      <div>
        <h3 className="font-semibold mb-1">Upgrade to Pro</h3>
        <p className="text-sm text-zinc-400">Unlock live tracking, geofencing, and more</p>
      </div>
      <button 
        onClick={handleSubscribe}
        className="px-6 py-2 bg-blue-600 rounded-lg font-medium hover:bg-blue-500 transition-colors"
      >
        Subscribe
      </button>
    </div>
  );
};

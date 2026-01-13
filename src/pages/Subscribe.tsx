import { Link } from 'react-router-dom';
import { ArrowLeft, Check, MapPin } from 'lucide-react';
import { useSubscription } from '@/hooks/useSubscription';

const Subscribe = () => {
  const { subscription, isPro, isEnterprise } = useSubscription();

  const plans = [
    {
      name: 'Free',
      price: '£0',
      period: '/month',
      description: 'Basic tracking for personal use',
      features: [
        'Up to 2 devices',
        'Basic device info',
        'Manual location refresh',
        'Email support',
      ],
      current: subscription?.plan === 'free',
      buttonText: subscription?.plan === 'free' ? 'Current Plan' : 'Downgrade',
      buttonStyle: 'bg-gray-700 hover:bg-gray-600',
    },
    {
      name: 'Pro',
      price: '£9.99',
      period: '/month',
      description: 'Advanced tracking for professionals',
      features: [
        'Unlimited devices',
        'Live real-time tracking',
        'Geofencing alerts',
        'Speed & battery alerts',
        'Device ping',
        'History playback (30 days)',
        'Priority support',
      ],
      current: isPro && !isEnterprise,
      popular: true,
      buttonText: isPro ? 'Current Plan' : 'Upgrade to Pro',
      buttonStyle: isPro ? 'bg-blue-800' : 'bg-blue-600 hover:bg-blue-500',
    },
    {
      name: 'Enterprise',
      price: '£29.99',
      period: '/month',
      description: 'Full fleet management solution',
      features: [
        'Everything in Pro',
        'Unlimited history',
        'Custom geofence shapes',
        'API access',
        'Team management',
        'White-label reports',
        'Dedicated account manager',
        'SLA guarantee',
      ],
      current: isEnterprise,
      buttonText: isEnterprise ? 'Current Plan' : 'Contact Sales',
      buttonStyle: isEnterprise ? 'bg-purple-800' : 'bg-purple-600 hover:bg-purple-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link to="/" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">TracePortal</span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Unlock powerful tracking features with our flexible subscription plans.
            All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-6 rounded-2xl border transition-all ${
                plan.popular
                  ? 'bg-blue-950/30 border-blue-500/50'
                  : 'bg-gray-900 border-gray-800 hover:border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-blue-600 text-xs font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                disabled={plan.current}
                className={`w-full py-3 rounded-xl font-medium transition-colors ${plan.buttonStyle} ${
                  plan.current ? 'cursor-not-allowed opacity-75' : ''
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            All plans include SSL encryption, 99.9% uptime guarantee, and GDPR compliance.
            <br />
            Need a custom solution?{' '}
            <a href="mailto:sales@traceportal.net" className="text-blue-400 hover:underline">
              Contact our sales team
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Subscribe;

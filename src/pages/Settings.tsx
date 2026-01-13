import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Bell, Shield, CreditCard, Smartphone, Save, Check } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useSubscription } from '@/hooks/useSubscription';
import { supabase } from '@/integrations/supabase/client';

const Settings = () => {
  const { user } = useAuth();
  const { subscription, isPro, isEnterprise } = useSubscription();
  const [activeTab, setActiveTab] = useState('profile');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  
  const [profile, setProfile] = useState({
    full_name: '',
    phone: '',
  });

  const [notifications, setNotifications] = useState({
    email_alerts: true,
    push_alerts: true,
    speed_alerts: true,
    geofence_alerts: true,
    battery_alerts: true,
    offline_alerts: true,
  });

  useEffect(() => {
    if (user) {
      // Fetch profile
      supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .single()
        .then(({ data }) => {
          if (data) {
            setProfile({
              full_name: data.full_name || '',
              phone: data.phone || '',
            });
          }
        });
    }
  }, [user]);

  const handleSaveProfile = async () => {
    if (!user) return;
    setSaving(true);

    await supabase
      .from('profiles')
      .update(profile)
      .eq('user_id', user.id);

    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'subscription', label: 'Subscription', icon: CreditCard },
    { id: 'devices', label: 'Devices', icon: Smartphone },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link to="/" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-xl font-bold">Settings</h1>
            <p className="text-sm text-gray-500">Manage your account and preferences</p>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-48 space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 bg-gray-900 border border-gray-800 rounded-2xl p-6">
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-lg font-semibold mb-6">Profile Settings</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      value={user?.email || ''}
                      disabled
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-gray-400 cursor-not-allowed"
                    />
                    <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={profile.full_name}
                      onChange={(e) => setProfile({ ...profile, full_name: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={profile.phone}
                      onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500"
                      placeholder="+44 7911 123456"
                    />
                  </div>
                  <button
                    onClick={handleSaveProfile}
                    disabled={saving}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-500 disabled:opacity-50"
                  >
                    {saved ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
                    {saving ? 'Saving...' : saved ? 'Saved!' : 'Save Changes'}
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-lg font-semibold mb-6">Notification Preferences</h2>
                <div className="space-y-4">
                  {Object.entries(notifications).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between p-4 bg-gray-800 rounded-xl">
                      <span className="capitalize">{key.replace(/_/g, ' ')}</span>
                      <button
                        onClick={() => setNotifications({ ...notifications, [key]: !value })}
                        className={`w-12 h-6 rounded-full transition-colors ${
                          value ? 'bg-blue-600' : 'bg-gray-600'
                        }`}
                      >
                        <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                          value ? 'translate-x-6' : 'translate-x-0.5'
                        }`} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div>
                <h2 className="text-lg font-semibold mb-6">Security Settings</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-800 rounded-xl">
                    <h3 className="font-medium mb-2">Change Password</h3>
                    <p className="text-sm text-gray-500 mb-4">Update your password regularly to keep your account secure</p>
                    <button className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600">
                      Change Password
                    </button>
                  </div>
                  <div className="p-4 bg-gray-800 rounded-xl">
                    <h3 className="font-medium mb-2">Two-Factor Authentication</h3>
                    <p className="text-sm text-gray-500 mb-4">Add an extra layer of security to your account</p>
                    <button className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600">
                      Enable 2FA
                    </button>
                  </div>
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                    <h3 className="font-medium text-red-400 mb-2">Danger Zone</h3>
                    <p className="text-sm text-gray-500 mb-4">Permanently delete your account and all data</p>
                    <button className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-500">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'subscription' && (
              <div>
                <h2 className="text-lg font-semibold mb-6">Subscription</h2>
                <div className="p-6 bg-gray-800 rounded-xl mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold capitalize">{subscription?.plan || 'Free'} Plan</h3>
                      <p className="text-sm text-gray-500">
                        Status: <span className="text-green-400 capitalize">{subscription?.status || 'Active'}</span>
                      </p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      isEnterprise ? 'bg-purple-500/20 text-purple-400' :
                      isPro ? 'bg-blue-500/20 text-blue-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {isEnterprise ? 'Enterprise' : isPro ? 'Pro' : 'Free'}
                    </div>
                  </div>
                  {!isPro && (
                    <Link
                      to="/subscribe"
                      className="inline-block px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-500"
                    >
                      Upgrade Plan
                    </Link>
                  )}
                  {isPro && (
                    <button className="px-6 py-3 bg-gray-700 rounded-xl hover:bg-gray-600">
                      Manage Subscription
                    </button>
                  )}
                </div>
                <div className="text-sm text-gray-500">
                  <p>Need help with billing? Contact support@traceportal.net</p>
                </div>
              </div>
            )}

            {activeTab === 'devices' && (
              <div>
                <h2 className="text-lg font-semibold mb-6">Connected Devices</h2>
                <div className="p-4 bg-gray-800 rounded-xl mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Current Browser</p>
                      <p className="text-sm text-gray-500">Last active: Just now</p>
                    </div>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Current</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  These are devices that have logged into your account. You can revoke access to any device here.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

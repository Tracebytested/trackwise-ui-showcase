import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Gauge, Satellite, Signal, Battery, Navigation, Car, Ship, Caravan, Home, Map, Bell, Settings, BarChart3, Shield, Clock, LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useDevices } from '@/hooks/useDevices';
import { useDeviceTelemetry } from '@/hooks/useDeviceTelemetry';
import { useAlerts } from '@/hooks/useAlerts';
import { useSubscription } from '@/hooks/useSubscription';
import { DeviceStatusBadge } from '@/components/shared/DeviceStatusBadge';
import { SubscriptionBanner } from '@/components/shared/SubscriptionBanner';
import { AddDeviceDialog } from '@/components/shared/AddDeviceDialog';

const getDeviceIcon = (type: string) => {
  switch (type) {
    case 'yacht': return Ship;
    case 'caravan': return Caravan;
    default: return Car;
  }
};

const Design10 = () => {
  const { signOut } = useAuth();
  const { devices, loading, totalCount, activeCount, movingCount } = useDevices();
  const { unreadCount } = useAlerts();
  const { canAccessLiveTracking, isPro } = useSubscription();
  const [selectedDeviceId, setSelectedDeviceId] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const [showAddDevice, setShowAddDevice] = useState(false);

  const selectedDevice = devices.find(d => d.id === selectedDeviceId) || devices[0];
  const { telemetry } = useDeviceTelemetry(selectedDevice?.id || null);

  const menuItems = [
    { icon: Home, label: "Dashboard" },
    { icon: Map, label: "Live Map" },
    { icon: Car, label: "Vehicles" },
    { icon: Shield, label: "Geofences" },
    { icon: BarChart3, label: "Reports" },
    { icon: Clock, label: "History" },
    { icon: Bell, label: "Alerts", badge: unreadCount > 0 ? unreadCount : undefined },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white flex">
      {/* Heavy Sidebar */}
      <aside className="w-72 bg-slate-950 border-r border-slate-800 flex flex-col">
        <div className="p-6 border-b border-slate-800">
          <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Gallery</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <Navigation className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-bold text-lg">SideTrack</h1>
              <p className="text-xs text-slate-400">Fleet Management</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <div className="space-y-1">
            {menuItems.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveMenu(item.label)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  activeMenu === item.label 
                    ? 'bg-blue-600 text-white' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* Devices in Sidebar */}
        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs text-slate-500 uppercase tracking-wider">Quick Access</h3>
            <button 
              onClick={() => setShowAddDevice(true)}
              className="text-xs text-blue-400 hover:text-blue-300"
            >
              + Add
            </button>
          </div>
          <div className="space-y-2">
            {loading ? (
              <div className="text-sm text-slate-500">Loading...</div>
            ) : devices.length === 0 ? (
              <div className="text-sm text-slate-500">No devices yet</div>
            ) : (
              devices.slice(0, 3).map((device) => {
                const Icon = getDeviceIcon(device.type);
                return (
                  <button 
                    key={device.id} 
                    onClick={() => setSelectedDeviceId(device.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      selectedDevice?.id === device.id 
                        ? 'bg-blue-600/20 border border-blue-500/50' 
                        : 'hover:bg-slate-800'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-slate-400" />
                    <span className="text-sm">{device.name}</span>
                    <DeviceStatusBadge status={device.status} />
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* Pro Badge */}
        {!isPro && (
          <div className="p-4">
            <SubscriptionBanner compact />
          </div>
        )}

        {/* Logout */}
        <div className="p-4 border-t border-slate-800">
          <button 
            onClick={signOut}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-slate-800 hover:text-white rounded-xl transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">Dashboard</h2>
            <p className="text-slate-400">Monitor your fleet in real-time</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-3 bg-slate-800 rounded-xl hover:bg-slate-700 relative">
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </button>
            <button 
              className={`px-5 py-3 rounded-xl font-medium flex items-center gap-2 ${
                canAccessLiveTracking 
                  ? 'bg-blue-600 hover:bg-blue-500' 
                  : 'bg-slate-700 cursor-not-allowed'
              }`}
              disabled={!canAccessLiveTracking}
            >
              <MapPin className="w-4 h-4" />
              {canAccessLiveTracking ? 'Live Track' : '🔒 Live Track'}
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            { label: "Active Vehicles", value: activeCount.toString(), sub: `${movingCount} moving`, color: "text-blue-400" },
            { label: "Total Distance", value: "0 km", sub: "Today", color: "text-emerald-400" },
            { label: "Avg Speed", value: `${telemetry?.speed || 0} km/h`, sub: "Fleet average", color: "text-amber-400" },
            { label: "Alerts", value: unreadCount.toString(), sub: "Unread", color: "text-red-400" },
          ].map((stat, i) => (
            <div key={i} className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <p className="text-sm text-slate-400 mb-2">{stat.label}</p>
              <p className="text-3xl font-bold mb-1">{stat.value}</p>
              <p className={`text-sm ${stat.color}`}>{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Map and Details */}
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
            <div className="p-4 border-b border-slate-700 flex items-center justify-between">
              <h3 className="font-semibold">Fleet Map</h3>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 bg-blue-600 rounded-lg text-sm">Live</button>
                <button className="px-3 py-1.5 bg-slate-700 rounded-lg text-sm hover:bg-slate-600">Satellite</button>
              </div>
            </div>
            <div className="h-80 bg-slate-900 flex items-center justify-center relative">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                <p className="text-slate-400">
                  {selectedDevice ? `Tracking: ${selectedDevice.name}` : 'Select a device'}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl border border-slate-700 p-4">
            <h3 className="font-semibold mb-4">
              {selectedDevice ? `${selectedDevice.name} - Live` : 'No Device Selected'}
            </h3>
            <div className="space-y-4">
              {[
                { icon: Gauge, label: "Speed", value: `${telemetry?.speed || 0} km/h` },
                { icon: Satellite, label: "Satellites", value: `${telemetry?.satellites || 0} GPS` },
                { icon: Signal, label: "Signal", value: telemetry?.signal_strength ? `${telemetry.signal_strength}%` : 'N/A' },
                { icon: Battery, label: "Battery", value: `${telemetry?.battery_level || 0}%` },
                { icon: MapPin, label: "Location", value: telemetry?.address || 'Unknown' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-slate-900 rounded-xl">
                  <item.icon className="w-5 h-5 text-blue-400" />
                  <div className="flex-1">
                    <p className="text-xs text-slate-400">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <button className="py-2 bg-blue-600 rounded-lg text-sm hover:bg-blue-500">Ping</button>
              <button className="py-2 bg-slate-700 rounded-lg text-sm hover:bg-slate-600">History</button>
            </div>
          </div>
        </div>
      </main>

      <AddDeviceDialog isOpen={showAddDevice} onClose={() => setShowAddDevice(false)} />
    </div>
  );
};

export default Design10;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Gauge, Satellite, Signal, Battery, Car, Ship, Caravan, Navigation, Bell, Settings, LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useDevices, Device } from '@/hooks/useDevices';
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

const Design1 = () => {
  const { signOut } = useAuth();
  const { devices, loading, totalCount } = useDevices();
  const { unreadCount } = useAlerts();
  const { canAccessLiveTracking } = useSubscription();
  const [selectedDeviceId, setSelectedDeviceId] = useState<string | null>(null);
  const [showAddDevice, setShowAddDevice] = useState(false);

  const selectedDevice = devices.find(d => d.id === selectedDeviceId) || devices[0];
  const { telemetry } = useDeviceTelemetry(selectedDevice?.id || null);

  const activeDevices = devices.filter(d => d.status !== 'offline');

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-xl font-semibold">TrackPro</h1>
          <span className="text-xs px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded">Live</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-zinc-800 rounded-lg transition-colors relative">
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>
          <button className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
          </button>
          <button onClick={signOut} className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-zinc-800 p-4 min-h-[calc(100vh-65px)]">
          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 bg-zinc-800 rounded-lg text-left">
              <Car className="w-5 h-5 text-blue-400" />
              <span>All Vehicles</span>
              <span className="ml-auto text-xs bg-zinc-700 px-2 py-1 rounded">{totalCount}</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-zinc-800/50 rounded-lg text-left text-zinc-400">
              <MapPin className="w-5 h-5" />
              <span>Geofences</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-zinc-800/50 rounded-lg text-left text-zinc-400">
              <Navigation className="w-5 h-5" />
              <span>Routes</span>
            </button>
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs text-zinc-500 uppercase tracking-wider">Active Devices</h3>
              <button 
                onClick={() => setShowAddDevice(true)}
                className="text-xs text-blue-400 hover:text-blue-300"
              >
                + Add
              </button>
            </div>
            <div className="space-y-2">
              {loading ? (
                <div className="text-sm text-zinc-500">Loading...</div>
              ) : activeDevices.length === 0 ? (
                <div className="text-sm text-zinc-500">No active devices</div>
              ) : (
                activeDevices.slice(0, 5).map((device) => {
                  const Icon = getDeviceIcon(device.type);
                  return (
                    <div 
                      key={device.id} 
                      onClick={() => setSelectedDeviceId(device.id)}
                      className={`px-3 py-2 bg-zinc-900 rounded-lg border cursor-pointer transition-colors ${
                        selectedDevice?.id === device.id 
                          ? 'border-blue-500' 
                          : 'border-zinc-800 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-zinc-400" />
                          <span className="text-sm">{device.name}</span>
                        </div>
                        <DeviceStatusBadge status={device.status} />
                      </div>
                      <p className="text-xs text-zinc-500 mt-1">
                        <DeviceStatusBadge status={device.status} showLabel /> • {telemetry?.speed || 0} km/h
                      </p>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Map Placeholder */}
          <div className="h-96 bg-zinc-900 rounded-2xl border border-zinc-800 mb-6 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23555' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
            <div className="text-center z-10">
              <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-2" />
              <p className="text-zinc-400">
                {selectedDevice ? `Tracking: ${selectedDevice.name}` : 'Select a device to track'}
              </p>
              {telemetry?.address && (
                <p className="text-xs text-zinc-500 mt-1">{telemetry.address}</p>
              )}
            </div>
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button 
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  canAccessLiveTracking 
                    ? 'bg-blue-600 hover:bg-blue-500' 
                    : 'bg-zinc-700 cursor-not-allowed'
                }`}
                disabled={!canAccessLiveTracking}
              >
                {canAccessLiveTracking ? 'Live Track' : '🔒 Live Track'}
              </button>
              <button className="px-4 py-2 bg-zinc-800 rounded-lg text-sm hover:bg-zinc-700">History</button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { icon: Gauge, label: "Speed", value: `${telemetry?.speed || 0} km/h`, color: "text-blue-400" },
              { icon: Satellite, label: "Satellites", value: `${telemetry?.satellites || 0} GPS`, color: "text-emerald-400" },
              { icon: Signal, label: "SIM Signal", value: telemetry?.signal_strength ? `${telemetry.signal_strength}%` : 'N/A', color: "text-yellow-400" },
              { icon: Battery, label: "Battery", value: `${telemetry?.battery_level || 0}%`, color: "text-purple-400" },
            ].map((stat, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                <stat.icon className={`w-5 h-5 ${stat.color} mb-2`} />
                <p className="text-2xl font-semibold">{stat.value}</p>
                <p className="text-xs text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Subscription Banner */}
          <SubscriptionBanner variant="dark" />
        </main>
      </div>

      <AddDeviceDialog isOpen={showAddDevice} onClose={() => setShowAddDevice(false)} />
    </div>
  );
};

export default Design1;

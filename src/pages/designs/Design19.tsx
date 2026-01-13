import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Gauge, Satellite, Signal, Battery, Car, Ship, Caravan, MoreVertical, LogOut } from 'lucide-react';
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

const Design19 = () => {
  const { signOut } = useAuth();
  const { devices, loading, totalCount, activeCount } = useDevices();
  const { unreadCount } = useAlerts();
  const { canAccessLiveTracking, isPro } = useSubscription();
  const [selectedDeviceId, setSelectedDeviceId] = useState<string | null>(null);
  const [showAddDevice, setShowAddDevice] = useState(false);

  const selectedDevice = devices.find(d => d.id === selectedDeviceId) || devices[0];
  const { telemetry } = useDeviceTelemetry(selectedDevice?.id || null);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Left Panel - Fleet */}
      <div className="w-1/2 bg-gray-950 border-r border-gray-800 flex flex-col">
        <header className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-xl font-bold">SplitView</h1>
                <p className="text-sm text-gray-500">Fleet Overview</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setShowAddDevice(true)}
                className="px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium hover:bg-blue-500"
              >
                + Add Device
              </button>
              <button 
                onClick={signOut}
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 p-6 border-b border-gray-800">
          {[
            { label: "Total", value: totalCount.toString(), bgColor: "bg-blue-500/10", borderColor: "border-blue-500/30", textColor: "text-blue-400" },
            { label: "Active", value: activeCount.toString(), bgColor: "bg-green-500/10", borderColor: "border-green-500/30", textColor: "text-green-400" },
            { label: "Alerts", value: unreadCount.toString(), bgColor: "bg-yellow-500/10", borderColor: "border-yellow-500/30", textColor: "text-yellow-400" },
          ].map((stat, i) => (
            <div key={i} className={`${stat.bgColor} border ${stat.borderColor} rounded-xl p-4 text-center`}>
              <p className={`text-3xl font-bold ${stat.textColor}`}>{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Device List */}
        <div className="flex-1 overflow-auto p-4">
          <div className="space-y-3">
            {loading ? (
              <div className="text-center py-8 text-gray-500">Loading devices...</div>
            ) : devices.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p>No devices yet</p>
                <button 
                  onClick={() => setShowAddDevice(true)}
                  className="mt-2 text-blue-400 hover:text-blue-300"
                >
                  Add your first device
                </button>
              </div>
            ) : (
              devices.map((device) => {
                const Icon = getDeviceIcon(device.type);
                const isSelected = selectedDevice?.id === device.id;
                
                return (
                  <div 
                    key={device.id} 
                    onClick={() => setSelectedDeviceId(device.id)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      isSelected 
                        ? 'bg-blue-500/10 border-blue-500/50' 
                        : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isSelected ? 'bg-blue-500' : 'bg-gray-700'
                      }`}>
                        <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-gray-400'}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">{device.name}</h3>
                          <button className="p-1 hover:bg-gray-700 rounded">
                            <MoreVertical className="w-4 h-4 text-gray-500" />
                          </button>
                        </div>
                        <p className="text-sm text-gray-500">{device.plate || 'No plate'}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-700/50">
                      <DeviceStatusBadge status={device.status} showLabel />
                      <span className="text-lg font-bold">
                        {isSelected && telemetry ? `${telemetry.speed} km/h` : '-- km/h'}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* Right Panel - Details */}
      <div className="w-1/2 flex flex-col">
        {/* Map Section */}
        <div className="flex-1 bg-gray-800 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <p className="text-gray-500">Live Location Map</p>
              <p className="text-sm text-gray-600">
                {selectedDevice ? selectedDevice.name : 'Select a device'}
              </p>
            </div>
          </div>
          
          {/* Map Controls */}
          <div className="absolute top-4 right-4 flex gap-2">
            <button 
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                canAccessLiveTracking 
                  ? 'bg-blue-600 hover:bg-blue-500' 
                  : 'bg-gray-700 cursor-not-allowed'
              }`}
              disabled={!canAccessLiveTracking}
            >
              {canAccessLiveTracking ? 'Live' : '🔒 Live'}
            </button>
            <button className="px-4 py-2 bg-gray-700 rounded-lg text-sm hover:bg-gray-600">History</button>
            <button className="px-4 py-2 bg-gray-700 rounded-lg text-sm hover:bg-gray-600">Geofence</button>
          </div>

          {/* Location Info */}
          {selectedDevice && (
            <div className="absolute bottom-4 left-4 bg-gray-900/90 backdrop-blur rounded-xl p-4">
              <p className="text-sm text-gray-400">Current Location</p>
              <p className="font-medium">{telemetry?.address || 'Location unavailable'}</p>
              {telemetry?.latitude && telemetry?.longitude && (
                <p className="text-xs text-gray-500 mt-1">
                  {telemetry.latitude.toFixed(4)}° N, {telemetry.longitude.toFixed(4)}° W
                </p>
              )}
            </div>
          )}
        </div>

        {/* Telemetry Section */}
        <div className="bg-gray-900 border-t border-gray-800 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold">
                {selectedDevice ? selectedDevice.name : 'No Device Selected'}
              </h2>
              <p className="text-sm text-gray-500">
                {selectedDevice?.plate || 'No plate'} • Last update: {telemetry ? 'Just now' : 'N/A'}
              </p>
            </div>
            <button className="px-4 py-2 bg-gray-800 rounded-lg text-sm hover:bg-gray-700">
              Ping Device
            </button>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {[
              { icon: Gauge, label: "Speed", value: `${telemetry?.speed || 0} km/h`, color: "text-blue-400" },
              { icon: Satellite, label: "GPS Sats", value: telemetry?.satellites?.toString() || '0', color: "text-green-400" },
              { icon: Signal, label: "Signal", value: telemetry?.signal_strength ? `${telemetry.signal_strength}%` : 'N/A', color: "text-purple-400" },
              { icon: Battery, label: "Battery", value: `${telemetry?.battery_level || 0}%`, color: "text-yellow-400" },
            ].map((item, i) => (
              <div key={i} className="bg-gray-800 rounded-xl p-4">
                <item.icon className={`w-5 h-5 ${item.color} mb-3`} />
                <p className="text-2xl font-bold">{item.value}</p>
                <p className="text-sm text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>

          {/* SIM Info */}
          {selectedDevice && (
            <div className="mt-4 bg-gray-800 rounded-xl p-4">
              <h3 className="text-sm font-medium text-gray-400 mb-3">SIM Information</h3>
              <div className="grid grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">ICCID</p>
                  <p className="font-mono">{selectedDevice.sim_iccid ? `${selectedDevice.sim_iccid.slice(0, 4)}...${selectedDevice.sim_iccid.slice(-4)}` : 'N/A'}</p>
                </div>
                <div>
                  <p className="text-gray-500">Carrier</p>
                  <p>Unknown</p>
                </div>
                <div>
                  <p className="text-gray-500">Data Used</p>
                  <p>0 MB</p>
                </div>
                <div>
                  <p className="text-gray-500">Roaming</p>
                  <p className="text-green-400">No</p>
                </div>
              </div>
            </div>
          )}

          {/* Subscription CTA */}
          {!isPro && (
            <div className="mt-4">
              <SubscriptionBanner variant="gradient" />
            </div>
          )}
        </div>
      </div>

      <AddDeviceDialog isOpen={showAddDevice} onClose={() => setShowAddDevice(false)} />
    </div>
  );
};

export default Design19;

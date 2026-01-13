import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Gauge, Satellite, Signal, Battery, Car, Ship, Caravan, Bell, User, Search, ChevronDown, LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useDevices } from '@/hooks/useDevices';
import { useDeviceTelemetry } from '@/hooks/useDeviceTelemetry';
import { useAlerts } from '@/hooks/useAlerts';
import { useSubscription } from '@/hooks/useSubscription';
import { DeviceStatusBadge } from '@/components/shared/DeviceStatusBadge';
import { SubscriptionBanner } from '@/components/shared/SubscriptionBanner';
import { AddDeviceDialog } from '@/components/shared/AddDeviceDialog';
import mapPlaceholder from '@/assets/map-placeholder.jpg';

const getDeviceIcon = (type: string) => {
  switch (type) {
    case 'yacht': return Ship;
    case 'caravan': return Caravan;
    default: return Car;
  }
};

const Design4 = () => {
  const { signOut } = useAuth();
  const { devices, loading, totalCount, activeCount, movingCount } = useDevices();
  const { unreadCount } = useAlerts();
  const { canAccessLiveTracking } = useSubscription();
  const [selectedDeviceId, setSelectedDeviceId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddDevice, setShowAddDevice] = useState(false);

  const selectedDevice = devices.find(d => d.id === selectedDeviceId) || devices[0];
  const { telemetry } = useDeviceTelemetry(selectedDevice?.id || null);

  const filteredDevices = devices.filter(d => 
    d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.plate?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate average speed from devices with telemetry
  const avgSpeed = telemetry?.speed || 0;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Corporate Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-slate-500 hover:text-slate-700">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-slate-800">FleetCommand</span>
            </div>
            <nav className="flex items-center gap-6 ml-8">
              <a href="#" className="text-blue-600 font-medium text-sm border-b-2 border-blue-600 pb-3 -mb-3">Dashboard</a>
              <a href="#" className="text-slate-500 text-sm hover:text-slate-700">Vehicles</a>
              <a href="#" className="text-slate-500 text-sm hover:text-slate-700">Geofences</a>
              <a href="#" className="text-slate-500 text-sm hover:text-slate-700">Reports</a>
              <a href="#" className="text-slate-500 text-sm hover:text-slate-700">Settings</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search vehicles..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 bg-slate-100 border border-slate-200 rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-lg">
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </button>
            <div className="flex items-center gap-2 pl-4 border-l border-slate-200">
              <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-slate-600" />
              </div>
              <button onClick={signOut} className="p-1 hover:bg-slate-100 rounded">
                <LogOut className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          {[
            { label: "Total Vehicles", value: totalCount.toString(), change: `${devices.length > 0 ? '+' + devices.filter(d => {
              const date = new Date(d.created_at);
              const weekAgo = new Date();
              weekAgo.setDate(weekAgo.getDate() - 7);
              return date > weekAgo;
            }).length : 0} this week`, icon: Car, bgColor: "bg-blue-50", iconColor: "text-blue-600" },
            { label: "Active Now", value: activeCount.toString(), change: `${totalCount > 0 ? Math.round((activeCount / totalCount) * 100) : 0}% of fleet`, icon: Signal, bgColor: "bg-emerald-50", iconColor: "text-emerald-600" },
            { label: "Avg Speed", value: `${avgSpeed} km/h`, change: "Within limits", icon: Gauge, bgColor: "bg-amber-50", iconColor: "text-amber-600" },
            { label: "Alerts Today", value: unreadCount.toString(), change: "0 resolved", icon: Bell, bgColor: "bg-red-50", iconColor: "text-red-600" },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-slate-500 mb-1">{stat.label}</p>
                  <p className="text-2xl font-semibold text-slate-800">{stat.value}</p>
                  <p className="text-xs text-slate-400 mt-1">{stat.change}</p>
                </div>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Map Section */}
          <div className="col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
              <h2 className="font-semibold text-slate-800">Live Fleet Map</h2>
              <div className="flex items-center gap-2">
                <button 
                  className={`px-3 py-1.5 text-sm rounded-lg ${
                    canAccessLiveTracking 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-slate-200 text-slate-500 cursor-not-allowed'
                  }`}
                  disabled={!canAccessLiveTracking}
                >
                  {canAccessLiveTracking ? 'Live View' : '🔒 Live View'}
                </button>
                <button className="px-3 py-1.5 bg-slate-100 text-slate-600 text-sm rounded-lg hover:bg-slate-200">History</button>
              </div>
            </div>
            <div className="h-80 relative overflow-hidden">
              <img 
                src={mapPlaceholder} 
                alt="Fleet tracking map" 
                className="w-full h-full object-cover"
              />
              {/* Vehicle marker overlay */}
              {selectedDevice && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                      <Car className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-xs font-medium whitespace-nowrap">
                      {selectedDevice.name}
                    </div>
                  </div>
                </div>
              )}
              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow px-4 py-3 flex items-center gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  <span className="text-slate-600">Moving ({movingCount})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                  <span className="text-slate-600">Idle</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-slate-400"></span>
                  <span className="text-slate-600">Offline</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vehicle List */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
              <h2 className="font-semibold text-slate-800">Fleet Vehicles</h2>
              <button 
                onClick={() => setShowAddDevice(true)}
                className="text-xs text-blue-600 hover:text-blue-500"
              >
                + Add
              </button>
            </div>
            <div className="divide-y divide-slate-100 max-h-80 overflow-auto">
              {loading ? (
                <div className="p-5 text-sm text-slate-500">Loading vehicles...</div>
              ) : filteredDevices.length === 0 ? (
                <div className="p-5 text-sm text-slate-500">
                  {searchQuery ? 'No vehicles match your search' : 'No vehicles added yet'}
                </div>
              ) : (
                filteredDevices.slice(0, 6).map((vehicle) => {
                  const Icon = getDeviceIcon(vehicle.type);
                  return (
                    <div 
                      key={vehicle.id} 
                      onClick={() => setSelectedDeviceId(vehicle.id)}
                      className={`px-5 py-4 cursor-pointer flex items-center gap-4 transition-colors ${
                        selectedDevice?.id === vehicle.id ? 'bg-blue-50' : 'hover:bg-slate-50'
                      }`}
                    >
                      <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-slate-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-slate-800 text-sm">{vehicle.name}</p>
                        <p className="text-xs text-slate-400">{vehicle.plate || 'No plate'}</p>
                      </div>
                      <div className="text-right">
                        <DeviceStatusBadge status={vehicle.status} showLabel />
                        <p className="text-xs text-slate-500">{telemetry?.speed || 0} km/h</p>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
            <div className="px-5 py-3 border-t border-slate-200">
              <button className="text-blue-600 text-sm font-medium hover:text-blue-500">View All Vehicles →</button>
            </div>
          </div>
        </div>

        {/* Telematics Panel */}
        {selectedDevice && (
          <div className="mt-6 bg-white rounded-xl border border-slate-200 shadow-sm p-5">
            <h3 className="font-semibold text-slate-800 mb-4">
              Selected Vehicle: {selectedDevice.name} {selectedDevice.plate ? `- ${selectedDevice.plate}` : ''}
            </h3>
            <div className="grid grid-cols-6 gap-4">
              {[
                { label: "Speed", value: `${telemetry?.speed || 0} km/h`, icon: Gauge },
                { label: "GPS Satellites", value: telemetry?.satellites?.toString() || '0', icon: Satellite },
                { label: "SIM Signal", value: telemetry?.signal_strength ? `${telemetry.signal_strength}%` : 'N/A', icon: Signal },
                { label: "Battery", value: `${telemetry?.battery_level || 0}%`, icon: Battery },
                { label: "Heading", value: telemetry?.heading ? `${telemetry.heading}°` : 'N/A', icon: MapPin },
                { label: "Last Update", value: telemetry?.created_at ? 'Just now' : 'N/A', icon: Signal },
              ].map((item, i) => (
                <div key={i} className="text-center p-3 bg-slate-50 rounded-lg">
                  <item.icon className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                  <p className="text-lg font-semibold text-slate-800">{item.value}</p>
                  <p className="text-xs text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Subscription CTA */}
        <div className="mt-6">
          <SubscriptionBanner variant="light" />
        </div>
      </div>

      <AddDeviceDialog isOpen={showAddDevice} onClose={() => setShowAddDevice(false)} />
    </div>
  );
};

export default Design4;

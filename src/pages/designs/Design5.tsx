import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Gauge, Satellite, Signal, Battery, Car, Ship, Caravan, Navigation, Bell, Settings, LogOut, Search, ChevronRight } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useDevices } from '@/hooks/useDevices';
import { useDeviceTelemetry } from '@/hooks/useDeviceTelemetry';
import { useAlerts } from '@/hooks/useAlerts';
import { DeviceStatusBadge } from '@/components/shared/DeviceStatusBadge';
import { AddDeviceDialog } from '@/components/shared/AddDeviceDialog';
import mapPlaceholder from '@/assets/map-placeholder.jpg';

const getDeviceIcon = (type: string) => {
  switch (type) {
    case 'yacht': return Ship;
    case 'caravan': return Caravan;
    default: return Car;
  }
};

// Design 5: Corporate Blue + Left Sidebar (Clean Professional)
const Design5 = () => {
  const { signOut } = useAuth();
  const { devices, loading, totalCount, activeCount, movingCount } = useDevices();
  const { unreadCount } = useAlerts();
  const [selectedDeviceId, setSelectedDeviceId] = useState<string | null>(null);
  const [showAddDevice, setShowAddDevice] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const selectedDevice = devices.find(d => d.id === selectedDeviceId) || devices[0];
  const { telemetry } = useDeviceTelemetry(selectedDevice?.id || null);

  const filteredDevices = devices.filter(d => 
    d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.plate?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 hover:bg-slate-100 rounded-lg">
              <ArrowLeft className="w-5 h-5 text-slate-600" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-800">FleetTracker Pro</h1>
                <p className="text-xs text-slate-500">Real-time fleet management</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/alerts" className="p-2 hover:bg-slate-100 rounded-lg relative">
              <Bell className="w-5 h-5 text-slate-600" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </Link>
            <Link to="/settings" className="p-2 hover:bg-slate-100 rounded-lg">
              <Settings className="w-5 h-5 text-slate-600" />
            </Link>
            <div className="w-px h-6 bg-slate-200" />
            <button onClick={signOut} className="p-2 hover:bg-slate-100 rounded-lg">
              <LogOut className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-72 bg-white border-r border-slate-200 min-h-[calc(100vh-73px)] flex flex-col">
          {/* Navigation */}
          <div className="p-4 border-b border-slate-100">
            <nav className="space-y-1">
              <Link to="/vehicles" className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-700 rounded-xl font-medium">
                <Car className="w-5 h-5" />
                <span>All Vehicles</span>
                <span className="ml-auto text-xs bg-blue-100 px-2 py-1 rounded-full">{totalCount}</span>
              </Link>
              <Link to="/geofences" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl">
                <MapPin className="w-5 h-5" />
                <span>Geofences</span>
              </Link>
              <Link to="/history" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl">
                <Navigation className="w-5 h-5" />
                <span>Trip History</span>
              </Link>
            </nav>
          </div>

          {/* Device Search */}
          <div className="p-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search vehicles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Device List */}
          <div className="flex-1 overflow-auto px-4 pb-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Fleet Devices</h3>
              <button 
                onClick={() => setShowAddDevice(true)}
                className="text-xs text-blue-600 hover:text-blue-700 font-medium"
              >
                + Add New
              </button>
            </div>
            <div className="space-y-2">
              {loading ? (
                <div className="text-sm text-slate-500 p-4 text-center">Loading devices...</div>
              ) : filteredDevices.length === 0 ? (
                <div className="text-sm text-slate-500 p-4 text-center">No devices found</div>
              ) : (
                filteredDevices.map((device) => {
                  const Icon = getDeviceIcon(device.type);
                  const isSelected = selectedDevice?.id === device.id;
                  return (
                    <div
                      key={device.id}
                      onClick={() => setSelectedDeviceId(device.id)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-blue-50 border-blue-500 shadow-sm'
                          : 'bg-white border-slate-100 hover:border-slate-200 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          isSelected ? 'bg-blue-600' : 'bg-slate-100'
                        }`}>
                          <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-slate-600'}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`font-medium truncate ${isSelected ? 'text-blue-900' : 'text-slate-800'}`}>
                            {device.name}
                          </p>
                          <p className="text-xs text-slate-500">{device.plate || 'No plate'}</p>
                        </div>
                        <DeviceStatusBadge status={device.status} />
                      </div>
                      {isSelected && telemetry && (
                        <div className="mt-3 pt-3 border-t border-blue-100 grid grid-cols-2 gap-2 text-xs">
                          <div className="flex items-center gap-1 text-slate-600">
                            <Gauge className="w-3 h-3" />
                            <span>{telemetry.speed || 0} km/h</span>
                          </div>
                          <div className="flex items-center gap-1 text-slate-600">
                            <Battery className="w-3 h-3" />
                            <span>{telemetry.battery_level || 0}%</span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: "Total Devices", value: totalCount, icon: Car, color: "bg-blue-500" },
              { label: "Active Now", value: activeCount, icon: Signal, color: "bg-emerald-500" },
              { label: "Moving", value: movingCount, icon: Gauge, color: "bg-amber-500" },
              { label: "Alerts", value: unreadCount, icon: Bell, color: "bg-red-500" },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">{stat.label}</p>
                    <p className="text-3xl font-bold text-slate-800 mt-1">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-6">
            <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
              <h2 className="font-semibold text-slate-800">Live Fleet Map</h2>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
                  Live View
                </button>
                <Link to="/history" className="px-4 py-2 bg-slate-100 text-slate-600 text-sm rounded-lg hover:bg-slate-200">
                  History
                </Link>
              </div>
            </div>
            <div className="h-96 relative">
              <img src={mapPlaceholder} alt="Fleet map" className="w-full h-full object-cover" />
              {selectedDevice && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-xl border-3 border-white animate-pulse">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white px-3 py-1.5 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap">
                    {selectedDevice.name}
                  </div>
                </div>
              )}
              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur rounded-lg shadow-lg px-4 py-3 flex items-center gap-4 text-xs">
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

          {/* Telemetry Panel */}
          {selectedDevice && (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-slate-800">
                  {selectedDevice.name} — {selectedDevice.plate || 'No Plate'}
                </h3>
                <Link to="/vehicles" className="text-blue-600 text-sm hover:text-blue-700 flex items-center gap-1">
                  View Details <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-6 gap-4">
                {[
                  { label: "Speed", value: `${telemetry?.speed || 0} km/h`, icon: Gauge, color: "text-blue-600" },
                  { label: "GPS Satellites", value: telemetry?.satellites?.toString() || '0', icon: Satellite, color: "text-emerald-600" },
                  { label: "Signal Strength", value: telemetry?.signal_strength ? `${telemetry.signal_strength}%` : 'N/A', icon: Signal, color: "text-amber-600" },
                  { label: "Battery Level", value: `${telemetry?.battery_level || 0}%`, icon: Battery, color: "text-purple-600" },
                  { label: "Heading", value: telemetry?.heading ? `${telemetry.heading}°` : 'N/A', icon: Navigation, color: "text-rose-600" },
                  { label: "Last Update", value: telemetry?.created_at ? 'Just now' : 'N/A', icon: Signal, color: "text-cyan-600" },
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 bg-slate-50 rounded-xl">
                    <item.icon className={`w-5 h-5 ${item.color} mx-auto mb-2`} />
                    <p className="text-xl font-bold text-slate-800">{item.value}</p>
                    <p className="text-xs text-slate-500 mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      <AddDeviceDialog isOpen={showAddDevice} onClose={() => setShowAddDevice(false)} />
    </div>
  );
};

export default Design5;

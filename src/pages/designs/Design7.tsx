import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Gauge, Satellite, Signal, Battery, Car, Ship, Caravan, Navigation, Bell, Settings, LogOut, LayoutGrid, List, ChevronRight } from 'lucide-react';
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

// Design 7: Corporate Blue + Compact Sidebar (Enterprise Dashboard)
const Design7 = () => {
  const { signOut } = useAuth();
  const { devices, loading, totalCount, activeCount, movingCount } = useDevices();
  const { unreadCount } = useAlerts();
  const [selectedDeviceId, setSelectedDeviceId] = useState<string | null>(null);
  const [showAddDevice, setShowAddDevice] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  const selectedDevice = devices.find(d => d.id === selectedDeviceId) || devices[0];
  const { telemetry } = useDeviceTelemetry(selectedDevice?.id || null);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800/50 backdrop-blur-xl border-b border-slate-700/50">
        <div className="px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="p-2 hover:bg-slate-700/50 rounded-lg">
              <ArrowLeft className="w-5 h-5 text-slate-400" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-white">TrackForce Enterprise</h1>
                <p className="text-xs text-slate-500">Fleet Management Platform</p>
              </div>
            </div>
          </div>
          <nav className="flex items-center gap-1">
            <button className="px-4 py-2 bg-blue-500/20 text-blue-400 text-sm rounded-lg font-medium border border-blue-500/30">
              Dashboard
            </button>
            <Link to="/vehicles" className="px-4 py-2 text-slate-400 text-sm rounded-lg hover:bg-slate-700/50">
              Vehicles
            </Link>
            <Link to="/geofences" className="px-4 py-2 text-slate-400 text-sm rounded-lg hover:bg-slate-700/50">
              Zones
            </Link>
            <Link to="/history" className="px-4 py-2 text-slate-400 text-sm rounded-lg hover:bg-slate-700/50">
              Analytics
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/alerts" className="p-2 hover:bg-slate-700/50 rounded-lg relative">
              <Bell className="w-5 h-5 text-slate-400" />
              {unreadCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </Link>
            <Link to="/settings" className="p-2 hover:bg-slate-700/50 rounded-lg">
              <Settings className="w-5 h-5 text-slate-400" />
            </Link>
            <button onClick={signOut} className="p-2 hover:bg-slate-700/50 rounded-lg">
              <LogOut className="w-5 h-5 text-slate-400" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-72 bg-slate-800/30 border-r border-slate-700/50 min-h-[calc(100vh-57px)]">
          {/* Status Overview */}
          <div className="p-4 border-b border-slate-700/50">
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-slate-800 rounded-xl p-3 border border-slate-700/50">
                <p className="text-2xl font-bold text-white">{totalCount}</p>
                <p className="text-xs text-slate-500">Total</p>
              </div>
              <div className="bg-emerald-500/10 rounded-xl p-3 border border-emerald-500/30">
                <p className="text-2xl font-bold text-emerald-400">{activeCount}</p>
                <p className="text-xs text-emerald-400/70">Active</p>
              </div>
            </div>
          </div>

          {/* Device List Header */}
          <div className="p-4 flex items-center justify-between border-b border-slate-700/50">
            <h3 className="font-medium text-white text-sm">Vehicles</h3>
            <div className="flex items-center gap-2">
              <div className="flex bg-slate-800 rounded-lg p-0.5">
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-md ${viewMode === 'list' ? 'bg-slate-700 text-white' : 'text-slate-500'}`}
                >
                  <List className="w-3.5 h-3.5" />
                </button>
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-md ${viewMode === 'grid' ? 'bg-slate-700 text-white' : 'text-slate-500'}`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                </button>
              </div>
              <button 
                onClick={() => setShowAddDevice(true)}
                className="text-xs text-blue-400 hover:text-blue-300"
              >
                + Add
              </button>
            </div>
          </div>

          {/* Device List */}
          <div className="p-3 space-y-1.5 max-h-[calc(100vh-240px)] overflow-auto">
            {loading ? (
              <div className="text-sm text-slate-500 p-4 text-center">Loading...</div>
            ) : devices.length === 0 ? (
              <div className="text-sm text-slate-500 p-4 text-center">No devices</div>
            ) : (
              devices.map((device) => {
                const Icon = getDeviceIcon(device.type);
                const isSelected = selectedDevice?.id === device.id;
                return (
                  <div
                    key={device.id}
                    onClick={() => setSelectedDeviceId(device.id)}
                    className={`p-3 rounded-xl cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-blue-500/20 border border-blue-500/40'
                        : 'bg-slate-800/50 border border-slate-700/30 hover:border-slate-600/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                        isSelected ? 'bg-blue-500' : 'bg-slate-700'
                      }`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`font-medium truncate text-sm ${isSelected ? 'text-blue-400' : 'text-white'}`}>
                          {device.name}
                        </p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <DeviceStatusBadge status={device.status} />
                          <span className="text-xs text-slate-500">{device.plate || 'No plate'}</span>
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-blue-400' : 'text-slate-600'}`} />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Map */}
          <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden mb-6">
            <div className="px-5 py-4 border-b border-slate-700/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <h2 className="font-semibold text-white">Live Fleet View</h2>
                <span className="text-xs text-slate-500 bg-slate-700/50 px-2 py-1 rounded-md">
                  {movingCount} moving
                </span>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600">
                  Live Mode
                </button>
                <Link to="/history" className="px-4 py-2 bg-slate-700 text-slate-300 text-sm rounded-lg hover:bg-slate-600">
                  Playback
                </Link>
              </div>
            </div>
            <div className="h-80 relative">
              <img src={mapPlaceholder} alt="Fleet map" className="w-full h-full object-cover opacity-80" />
              {selectedDevice && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/40 border-2 border-white/20">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-slate-800 px-3 py-1.5 rounded-lg text-sm font-medium text-white whitespace-nowrap border border-slate-700">
                    {selectedDevice.name}
                  </div>
                </div>
              )}
              <div className="absolute bottom-4 left-4 bg-slate-800/90 backdrop-blur rounded-xl px-4 py-3 flex items-center gap-4 text-xs border border-slate-700/50">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span className="text-slate-300">Moving ({movingCount})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  <span className="text-slate-300">Idle</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-500"></span>
                  <span className="text-slate-300">Offline</span>
                </div>
              </div>
            </div>
          </div>

          {/* Telemetry */}
          {selectedDevice && (
            <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-5">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="font-semibold text-white">{selectedDevice.name}</h3>
                  <p className="text-sm text-slate-500">{selectedDevice.plate || 'No Plate'} • {selectedDevice.type}</p>
                </div>
                <Link to="/vehicles" className="px-4 py-2 bg-slate-700 text-slate-300 text-sm rounded-lg hover:bg-slate-600">
                  View Details
                </Link>
              </div>
              <div className="grid grid-cols-6 gap-3">
                {[
                  { label: "Speed", value: `${telemetry?.speed || 0}`, unit: "km/h", icon: Gauge, color: "text-blue-400" },
                  { label: "Satellites", value: telemetry?.satellites?.toString() || '0', unit: "GPS", icon: Satellite, color: "text-emerald-400" },
                  { label: "Signal", value: telemetry?.signal_strength ? `${telemetry.signal_strength}` : 'N/A', unit: "%", icon: Signal, color: "text-amber-400" },
                  { label: "Battery", value: `${telemetry?.battery_level || 0}`, unit: "%", icon: Battery, color: "text-purple-400" },
                  { label: "Heading", value: telemetry?.heading ? `${telemetry.heading}` : 'N/A', unit: "°", icon: Navigation, color: "text-rose-400" },
                  { label: "Updated", value: telemetry?.created_at ? 'Now' : 'N/A', unit: "", icon: Signal, color: "text-cyan-400" },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/30 text-center">
                    <item.icon className={`w-5 h-5 ${item.color} mx-auto mb-2`} />
                    <p className="text-xl font-bold text-white">{item.value}<span className="text-sm font-normal text-slate-500 ml-0.5">{item.unit}</span></p>
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

export default Design7;

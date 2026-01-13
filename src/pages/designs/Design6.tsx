import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Gauge, Satellite, Signal, Battery, Car, Ship, Caravan, Navigation, Bell, Settings, LogOut, Menu, X, Zap } from 'lucide-react';
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

// Design 6: Corporate Blue + Collapsible Sidebar (Modern Dashboard)
const Design6 = () => {
  const { signOut } = useAuth();
  const { devices, loading, totalCount, activeCount, movingCount } = useDevices();
  const { unreadCount } = useAlerts();
  const [selectedDeviceId, setSelectedDeviceId] = useState<string | null>(null);
  const [showAddDevice, setShowAddDevice] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const selectedDevice = devices.find(d => d.id === selectedDeviceId) || devices[0];
  const { telemetry } = useDeviceTelemetry(selectedDevice?.id || null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-slate-200/50 sticky top-0 z-50">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-slate-100 rounded-lg lg:hidden"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <Link to="/" className="p-2 hover:bg-slate-100 rounded-lg">
              <ArrowLeft className="w-5 h-5 text-slate-600" />
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-slate-800 text-lg">VelocityFleet</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-1 bg-slate-100 rounded-xl p-1">
            <button className="px-4 py-2 bg-white text-slate-800 text-sm rounded-lg shadow-sm font-medium">Dashboard</button>
            <Link to="/vehicles" className="px-4 py-2 text-slate-500 text-sm rounded-lg hover:text-slate-700">Vehicles</Link>
            <Link to="/geofences" className="px-4 py-2 text-slate-500 text-sm rounded-lg hover:text-slate-700">Geofences</Link>
            <Link to="/history" className="px-4 py-2 text-slate-500 text-sm rounded-lg hover:text-slate-700">Reports</Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/alerts" className="p-2.5 hover:bg-slate-100 rounded-xl relative">
              <Bell className="w-5 h-5 text-slate-600" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center font-medium">
                  {unreadCount}
                </span>
              )}
            </Link>
            <Link to="/settings" className="p-2.5 hover:bg-slate-100 rounded-xl">
              <Settings className="w-5 h-5 text-slate-600" />
            </Link>
            <button onClick={signOut} className="p-2.5 hover:bg-slate-100 rounded-xl">
              <LogOut className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'w-80' : 'w-0'} transition-all duration-300 overflow-hidden bg-white border-r border-slate-200/50 min-h-[calc(100vh-57px)]`}>
          <div className="w-80 p-4">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 text-white">
                <Car className="w-5 h-5 opacity-80 mb-2" />
                <p className="text-2xl font-bold">{totalCount}</p>
                <p className="text-xs opacity-80">Total Fleet</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-4 text-white">
                <Signal className="w-5 h-5 opacity-80 mb-2" />
                <p className="text-2xl font-bold">{activeCount}</p>
                <p className="text-xs opacity-80">Online Now</p>
              </div>
            </div>

            {/* Device List Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-800">Fleet Vehicles</h3>
              <button 
                onClick={() => setShowAddDevice(true)}
                className="px-3 py-1.5 bg-blue-50 text-blue-600 text-xs font-medium rounded-lg hover:bg-blue-100"
              >
                + Add
              </button>
            </div>

            {/* Device List */}
            <div className="space-y-2 max-h-[calc(100vh-320px)] overflow-auto">
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
                      className={`p-4 rounded-2xl cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/25'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                          isSelected ? 'bg-white/20' : 'bg-white shadow-sm'
                        }`}>
                          <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-slate-600'}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{device.name}</p>
                          <p className={`text-xs ${isSelected ? 'text-white/70' : 'text-slate-500'}`}>
                            {device.plate || 'No plate'}
                          </p>
                        </div>
                        <DeviceStatusBadge status={device.status} />
                      </div>
                      {isSelected && telemetry && (
                        <div className="mt-3 pt-3 border-t border-white/20 flex items-center justify-between text-xs">
                          <span className="flex items-center gap-1">
                            <Gauge className="w-3 h-3" /> {telemetry.speed || 0} km/h
                          </span>
                          <span className="flex items-center gap-1">
                            <Battery className="w-3 h-3" /> {telemetry.battery_level || 0}%
                          </span>
                          <span className="flex items-center gap-1">
                            <Satellite className="w-3 h-3" /> {telemetry.satellites || 0}
                          </span>
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
          {/* Map Card */}
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200/50 overflow-hidden mb-6">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h2 className="font-bold text-slate-800 text-lg">Live Tracking</h2>
                <p className="text-sm text-slate-500">Real-time vehicle positions</p>
              </div>
              <div className="flex gap-2">
                <button className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm rounded-xl font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-shadow">
                  Live View
                </button>
                <Link to="/history" className="px-5 py-2.5 bg-slate-100 text-slate-600 text-sm rounded-xl font-medium hover:bg-slate-200">
                  History
                </Link>
              </div>
            </div>
            <div className="h-[400px] relative">
              <img src={mapPlaceholder} alt="Fleet map" className="w-full h-full object-cover" />
              {selectedDevice && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/40 border-4 border-white">
                      <Car className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-xl shadow-lg text-sm font-semibold whitespace-nowrap border border-slate-100">
                      {selectedDevice.name}
                    </div>
                  </div>
                </div>
              )}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-xl shadow-lg px-5 py-3 flex items-center gap-5 text-xs font-medium">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50"></span>
                  <span className="text-slate-700">Moving ({movingCount})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-amber-500 shadow-lg shadow-amber-500/50"></span>
                  <span className="text-slate-700">Idle</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-slate-400 shadow-lg shadow-slate-400/50"></span>
                  <span className="text-slate-700">Offline</span>
                </div>
              </div>
            </div>
          </div>

          {/* Telemetry Grid */}
          {selectedDevice && (
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { label: "Speed", value: `${telemetry?.speed || 0}`, unit: "km/h", icon: Gauge, gradient: "from-blue-500 to-blue-600" },
                { label: "GPS", value: telemetry?.satellites?.toString() || '0', unit: "sats", icon: Satellite, gradient: "from-emerald-500 to-emerald-600" },
                { label: "Signal", value: telemetry?.signal_strength ? `${telemetry.signal_strength}` : '0', unit: "%", icon: Signal, gradient: "from-amber-500 to-orange-500" },
                { label: "Battery", value: `${telemetry?.battery_level || 0}`, unit: "%", icon: Battery, gradient: "from-purple-500 to-violet-600" },
                { label: "Heading", value: telemetry?.heading ? `${telemetry.heading}` : '0', unit: "°", icon: Navigation, gradient: "from-rose-500 to-pink-600" },
                { label: "Status", value: selectedDevice.status, unit: "", icon: Zap, gradient: "from-cyan-500 to-teal-600" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 shadow-lg shadow-slate-200/50 border border-slate-100">
                  <div className={`w-10 h-10 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-3`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-slate-800">
                    {item.value}<span className="text-sm font-normal text-slate-400 ml-1">{item.unit}</span>
                  </p>
                  <p className="text-xs text-slate-500 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      <AddDeviceDialog isOpen={showAddDevice} onClose={() => setShowAddDevice(false)} />
    </div>
  );
};

export default Design6;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Gauge, Satellite, Signal, Battery, Car, Ship, Caravan, Navigation, Bell, Settings, LogOut, Search, ChevronRight, Zap, Key, Wifi, PlugZap, Route, Clock, Thermometer, Fuel, Info, Shield, Truck, HelpCircle, RefreshCw, Power, Lock, Unlock, Volume2, MapPinned, History } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/hooks/useAuth';
import { useDevices } from '@/hooks/useDevices';
import { useDeviceTelemetry } from '@/hooks/useDeviceTelemetry';
import { useAlerts } from '@/hooks/useAlerts';
import { DeviceStatusBadge } from '@/components/shared/DeviceStatusBadge';
import { AddDeviceDialog } from '@/components/shared/AddDeviceDialog';
import mapPlaceholder from '@/assets/map-placeholder.jpg';
const getDeviceIcon = (type: string) => {
  switch (type) {
    case 'boat':
      return Ship;
    case 'caravan':
      return Caravan;
    case 'security_tower':
      return Shield;
    case 'truck':
      return Truck;
    case 'other':
      return HelpCircle;
    default:
      return Car;
  }
};

// Design 5: Corporate Blue + Left Sidebar (Clean Professional)
const Design5 = () => {
  const {
    signOut
  } = useAuth();
  const {
    devices,
    loading,
    totalCount,
    activeCount,
    movingCount
  } = useDevices();
  const {
    unreadCount
  } = useAlerts();
  const [selectedDeviceId, setSelectedDeviceId] = useState<string | null>(null);
  const [showAddDevice, setShowAddDevice] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const selectedDevice = devices.find(d => d.id === selectedDeviceId) || devices[0];
  const {
    telemetry
  } = useDeviceTelemetry(selectedDevice?.id || null);
  const filteredDevices = devices.filter(d => d.name.toLowerCase().includes(searchQuery.toLowerCase()) || d.plate?.toLowerCase().includes(searchQuery.toLowerCase()));
  return <div className="min-h-screen bg-slate-100">
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
              {unreadCount > 0 && <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  {unreadCount}
                </span>}
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
              <input type="text" placeholder="Search vehicles..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
          </div>

          {/* Device List */}
          <div className="flex-1 overflow-auto px-4 pb-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">DEVICES LIST</h3>
              <button onClick={() => setShowAddDevice(true)} className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                + Add New
              </button>
            </div>
            <div className="space-y-2">
              {loading ? <div className="text-sm text-slate-500 p-4 text-center">Loading devices...</div> : filteredDevices.length === 0 ? <div className="text-sm text-slate-500 p-4 text-center">No devices found</div> : filteredDevices.map(device => {
              const Icon = getDeviceIcon(device.type);
              const isSelected = selectedDevice?.id === device.id;
              return <div key={device.id} onClick={() => setSelectedDeviceId(device.id)} className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${isSelected ? 'bg-blue-50 border-blue-500 shadow-sm' : 'bg-white border-slate-100 hover:border-slate-200 hover:shadow-sm'}`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isSelected ? 'bg-blue-600' : 'bg-slate-100'}`}>
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
                      {isSelected && telemetry && <div className="mt-3 pt-3 border-t border-blue-100 grid grid-cols-2 gap-2 text-xs">
                          <div className="flex items-center gap-1 text-slate-600">
                            <Gauge className="w-3 h-3" />
                            <span>{telemetry.speed || 0} km/h</span>
                          </div>
                          <div className="flex items-center gap-1 text-slate-600">
                            <Battery className="w-3 h-3" />
                            <span>{telemetry.battery_level || 0}%</span>
                          </div>
                        </div>}
                    </div>;
            })}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[{
            label: "Total Devices",
            value: totalCount,
            icon: Car,
            color: "bg-blue-500"
          }, {
            label: "Active Now",
            value: activeCount,
            icon: Signal,
            color: "bg-emerald-500"
          }, {
            label: "Moving",
            value: movingCount,
            icon: Gauge,
            color: "bg-amber-500"
          }, {
            label: "Alerts",
            value: unreadCount,
            icon: Bell,
            color: "bg-red-500"
          }].map((stat, i) => <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">{stat.label}</p>
                    <p className="text-3xl font-bold text-slate-800 mt-1">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>)}
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
              {selectedDevice && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-xl border-3 border-white animate-pulse">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white px-3 py-1.5 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap">
                    {selectedDevice.name}
                  </div>
                </div>}
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

          {/* Device Information Panel */}
          {selectedDevice && <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              {/* Tabs Header */}
              <Tabs defaultValue="status" className="w-full">
                <div className="px-5 pt-4 border-b border-slate-100">
                  <TabsList className="bg-slate-100 p-1 w-full grid grid-cols-3">
                    <TabsTrigger value="status" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                      Status
                    </TabsTrigger>
                    <TabsTrigger value="control" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                      Control
                    </TabsTrigger>
                    <TabsTrigger value="history" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                      History
                    </TabsTrigger>
                  </TabsList>
                </div>

                {/* Status Tab Content */}
                <TabsContent value="status" className="mt-0 p-5 space-y-4">
                  {/* Device Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-slate-800">Device Information</h3>
                      <p className="text-sm text-slate-500">IMEI: {selectedDevice.imei || '—'}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-slate-500">Last Update: {telemetry?.created_at ? new Date(telemetry.created_at).toLocaleString() : '—'}</span>
                        <span className="px-2 py-0.5 bg-emerald-500 text-white text-xs rounded-full">Live</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <label className="flex items-center gap-2 text-sm text-slate-600">
                        <input type="checkbox" defaultChecked className="rounded" />
                        Auto-refresh (30s)
                      </label>
                      <button className="p-2 hover:bg-slate-100 rounded-lg">
                        <RefreshCw className="w-4 h-4 text-slate-600" />
                      </button>
                    </div>
                  </div>

                {/* Quick Status Cards */}
                <div className="grid grid-cols-5 gap-3 mb-4">
                  <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                    <p className="text-xs text-slate-500 mb-1">Movement</p>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${selectedDevice.status === 'moving' ? 'bg-emerald-100 text-emerald-700' : selectedDevice.status === 'idle' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'}`}>
                      {selectedDevice.status === 'moving' ? 'Moving' : selectedDevice.status === 'idle' ? 'Idle' : 'Parked'}
                    </span>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                    <p className="text-xs text-slate-500 mb-1">Satellites</p>
                    <div className="flex items-center justify-center gap-1">
                      <Satellite className="w-4 h-4 text-slate-600" />
                      <span className="font-semibold text-slate-800">{telemetry?.satellites || 0}</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                    <p className="text-xs text-slate-500 mb-1">Network</p>
                    <div className="flex items-center justify-center gap-1">
                      <Signal className="w-4 h-4 text-slate-600" />
                      <span className="font-semibold text-slate-800">4G</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                    <p className="text-xs text-slate-500 mb-1">External Voltage</p>
                    <div className="flex items-center justify-center gap-1">
                      <Zap className="w-4 h-4 text-amber-500" />
                      <span className="font-semibold text-amber-600">12.64V</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                    <p className="text-xs text-slate-500 mb-1">Ignition</p>
                    <div className="flex items-center justify-center gap-1">
                      <Key className="w-4 h-4 text-slate-600" />
                      <span className="font-semibold text-slate-800">{telemetry?.ignition ? 'ON' : 'OFF'}</span>
                    </div>
                  </div>
                </div>

                {/* Battery Level */}
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 mb-4">
                  <div className="flex items-center gap-2">
                    <Battery className="w-5 h-5 text-slate-600" />
                    <span className="text-xs text-slate-500">Battery Level</span>
                    <span className="font-bold text-slate-800 text-lg ml-2">{telemetry?.battery_level || 0}%</span>
                  </div>
                </div>

                {/* Second Row Status */}
                <div className="grid grid-cols-4 gap-3">
                  <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                    <p className="text-xs text-slate-500 mb-1">OBD Speed</p>
                    <span className="font-semibold text-slate-800">—</span>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                    <p className="text-xs text-slate-500 mb-1">Unplug Detection</p>
                    <div className="flex items-center justify-center gap-1">
                      <PlugZap className="w-4 h-4 text-emerald-500" />
                      <span className="font-semibold text-emerald-600">Plugged In</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                    <p className="text-xs text-slate-500 mb-1">Trip Odometer</p>
                    <div className="flex items-center justify-center gap-1">
                      <Route className="w-4 h-4 text-slate-600" />
                      <span className="font-semibold text-slate-800">0.00 km</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                    <p className="text-xs text-slate-500 mb-1">Engine Runtime</p>
                    <div className="flex items-center justify-center gap-1">
                      <Clock className="w-4 h-4 text-slate-600" />
                      <span className="font-semibold text-slate-800">—</span>
                    </div>
                  </div>
                </div>

                  {/* System Information */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <div className="flex items-center gap-2 mb-4">
                      <Signal className="w-4 h-4 text-slate-600" />
                      <h4 className="font-semibold text-slate-800">System Information</h4>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs text-blue-600">Device Battery Voltage</p>
                        <p className="font-medium text-slate-800">4.05V</p>
                      </div>
                      <div>
                        <p className="text-xs text-blue-600">External Voltage</p>
                        <p className="font-medium text-slate-800">12.64V</p>
                      </div>
                      <div>
                        <p className="text-xs text-blue-600">Carrier</p>
                        <p className="font-medium text-slate-800">Optus</p>
                      </div>
                      <div>
                        <p className="text-xs text-blue-600">Carrier Country</p>
                        <p className="font-medium text-slate-800">Australia</p>
                      </div>
                      <div>
                        <p className="text-xs text-blue-600">Battery Level</p>
                        <p className="font-medium text-slate-800">{telemetry?.battery_level || 0}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-blue-600">Battery Current</p>
                        <p className="font-medium text-slate-800">0</p>
                      </div>
                      <div>
                        <p className="text-xs text-blue-600">GSM Signal</p>
                        <p className="font-medium text-slate-800">—</p>
                      </div>
                      <div>
                        <p className="text-xs text-blue-600">Cellular Signal</p>
                        <p className="font-medium text-slate-800">{telemetry?.signal_strength || 0}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-blue-600">Sleep Mode</p>
                        <p className="font-medium text-slate-800">Off</p>
                      </div>
                      <div>
                        <p className="text-xs text-blue-600">Unplug Detection</p>
                        <p className="font-medium text-emerald-600">Plugged In</p>
                      </div>
                      <div>
                        <p className="text-xs text-blue-600">ICCID</p>
                        <p className="font-medium text-slate-800">{selectedDevice.sim_iccid || '—'}</p>
                      </div>
                    </div>
                  </div>

                  {/* GPS Information */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <div className="flex items-center gap-2 mb-4">
                      <Satellite className="w-4 h-4 text-slate-600" />
                      <h4 className="font-semibold text-slate-800">GPS Information</h4>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs text-blue-600">Altitude</p>
                        <p className="font-medium text-slate-800">{telemetry?.altitude || 0} m</p>
                      </div>
                      <div>
                        <p className="text-xs text-blue-600">GNSS HDOP</p>
                        <p className="font-medium text-amber-600">6.0 (Fair)</p>
                      </div>
                      <div>
                        <p className="text-xs text-blue-600">Gnss Pdop</p>
                        <p className="font-medium text-emerald-600">Good</p>
                      </div>
                      <div>
                        <p className="text-xs text-blue-600">Gnss Status</p>
                        <p className="font-medium text-emerald-600">ON (Fix)</p>
                      </div>
                      <div>
                        <p className="text-xs text-blue-600">Estimated Speed (GPS BASED)</p>
                        <p className="font-medium text-slate-800">{telemetry?.speed || 0} km/h</p>
                      </div>
                    </div>
                  </div>

                  {/* Engine Information */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <div className="flex items-center gap-2 mb-4">
                      <Gauge className="w-4 h-4 text-slate-600" />
                      <h4 className="font-semibold text-slate-800">Engine Information</h4>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs text-blue-600">Engine RPM</p>
                        <p className="font-medium text-slate-800">—</p>
                      </div>
                      <div>
                        <p className="text-xs text-blue-600">Coolant Temp</p>
                        <p className="font-medium text-slate-800">—</p>
                      </div>
                      <div>
                        <p className="text-xs text-blue-600">Engine Load</p>
                        <p className="font-medium text-slate-800">—</p>
                      </div>
                      <div>
                        <p className="text-xs text-blue-600">Intake MAP</p>
                        <p className="font-medium text-slate-800">—</p>
                      </div>
                      <div>
                        <p className="text-xs text-blue-600">Intake Air Temp</p>
                        <p className="font-medium text-slate-800">—</p>
                      </div>
                      <div>
                        <p className="text-xs text-blue-600">MAF Air Flow</p>
                        <p className="font-medium text-slate-800">—</p>
                      </div>
                      <div>
                        <p className="text-xs text-blue-600">Engine Runtime</p>
                        <p className="font-medium text-slate-800">—</p>
                      </div>
                      <div>
                        <p className="text-xs text-blue-600">OBD Speed</p>
                        <p className="font-medium text-slate-800">—</p>
                      </div>
                    </div>
                  </div>

                  {/* OBD Diagnostics */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <div className="flex items-center gap-2 mb-4">
                      <Info className="w-4 h-4 text-slate-600" />
                      <h4 className="font-semibold text-slate-800">OBD Diagnostics</h4>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">DTC Codes</p>
                      <p className="font-medium text-slate-800">—</p>
                    </div>
                  </div>

                  {/* Mileage Information */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <div className="flex items-center gap-2 mb-4">
                      <Route className="w-4 h-4 text-slate-600" />
                      <h4 className="font-semibold text-slate-800">Mileage Information</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-blue-600">Total Odometer</p>
                        <p className="font-medium text-slate-800">139208 km</p>
                      </div>
                      <div>
                        <p className="text-xs text-blue-600">Trip Odometer</p>
                        <p className="font-medium text-slate-800">0.00 km</p>
                      </div>
                    </div>
                  </div>

                  {/* Fuel & Economy */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <div className="flex items-center gap-2 mb-4">
                      <Fuel className="w-4 h-4 text-slate-600" />
                      <h4 className="font-semibold text-slate-800">Fuel & Economy</h4>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs text-blue-600">Fuel Used Gps</p>
                        <p className="font-medium text-amber-600">13.65 L (estimate)</p>
                      </div>
                      <div>
                        <p className="text-xs text-blue-600">Fuel Rate Gps</p>
                        <p className="font-medium text-slate-800">0.00 L/h</p>
                      </div>
                      <div>
                        <p className="text-xs text-blue-600">Ecoscore</p>
                        <p className="font-medium text-slate-800">1000</p>
                      </div>
                    </div>
                  </div>

                  {/* Vehicle Information */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <div className="flex items-center gap-2 mb-4">
                      <Car className="w-4 h-4 text-slate-600" />
                      <h4 className="font-semibold text-slate-800">Vehicle Information</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-blue-600">VIN</p>
                        <p className="font-medium text-slate-800">—</p>
                      </div>
                      <div>
                        <p className="text-xs text-blue-600">Ignition</p>
                        <p className="font-medium text-slate-800">{telemetry?.ignition ? 'ON' : 'OFF'}</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Control Tab Content */}
                <TabsContent value="control" className="mt-0 p-5">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-4">Device Controls</h3>
                      <p className="text-sm text-slate-500 mb-6">Send commands to your device remotely</p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <button className="flex flex-col items-center gap-3 p-6 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                          <Power className="w-6 h-6 text-emerald-600" />
                        </div>
                        <span className="text-sm font-medium text-slate-700">Engine On</span>
                      </button>
                      
                      <button className="flex flex-col items-center gap-3 p-6 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                          <Power className="w-6 h-6 text-red-600" />
                        </div>
                        <span className="text-sm font-medium text-slate-700">Engine Off</span>
                      </button>
                      
                      <button className="flex flex-col items-center gap-3 p-6 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <Lock className="w-6 h-6 text-blue-600" />
                        </div>
                        <span className="text-sm font-medium text-slate-700">Lock Doors</span>
                      </button>
                      
                      <button className="flex flex-col items-center gap-3 p-6 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors">
                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                          <Unlock className="w-6 h-6 text-amber-600" />
                        </div>
                        <span className="text-sm font-medium text-slate-700">Unlock Doors</span>
                      </button>
                      
                      <button className="flex flex-col items-center gap-3 p-6 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                          <Volume2 className="w-6 h-6 text-purple-600" />
                        </div>
                        <span className="text-sm font-medium text-slate-700">Sound Horn</span>
                      </button>
                      
                      <button className="flex flex-col items-center gap-3 p-6 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors">
                        <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                          <MapPinned className="w-6 h-6 text-cyan-600" />
                        </div>
                        <span className="text-sm font-medium text-slate-700">Locate Now</span>
                      </button>
                      
                      <button className="flex flex-col items-center gap-3 p-6 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors">
                        <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                          <RefreshCw className="w-6 h-6 text-slate-600" />
                        </div>
                        <span className="text-sm font-medium text-slate-700">Refresh Status</span>
                      </button>
                    </div>
                    
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6">
                      <p className="text-sm text-amber-800">
                        <strong>Note:</strong> Commands may take up to 30 seconds to be executed depending on device connectivity.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                {/* History Tab Content */}
                <TabsContent value="history" className="mt-0 p-5">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-slate-800">Device History</h3>
                        <p className="text-sm text-slate-500">View past trips and location history</p>
                      </div>
                      <div className="flex gap-2">
                        <select className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm">
                          <option>Today</option>
                          <option>Yesterday</option>
                          <option>Last 7 days</option>
                          <option>Last 30 days</option>
                          <option>Custom range</option>
                        </select>
                        <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
                          View Trips
                        </button>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {/* Sample history entries */}
                      {[
                        { date: 'Today, 14:32', from: '123 Main Street', to: '456 Business Ave', distance: '12.4 km', duration: '24 min' },
                        { date: 'Today, 09:15', from: '456 Business Ave', to: '123 Main Street', distance: '12.1 km', duration: '28 min' },
                        { date: 'Yesterday, 17:45', from: '789 Park Lane', to: '123 Main Street', distance: '8.3 km', duration: '15 min' },
                      ].map((trip, index) => (
                        <div key={index} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                                <History className="w-5 h-5 text-blue-600" />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-slate-800">{trip.date}</p>
                                <p className="text-xs text-slate-500 mt-1">From: {trip.from}</p>
                                <p className="text-xs text-slate-500">To: {trip.to}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-semibold text-slate-800">{trip.distance}</p>
                              <p className="text-xs text-slate-500">{trip.duration}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center pt-4">
                      <Link to="/history" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        View Full History →
                      </Link>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>}
        </main>
      </div>

      <AddDeviceDialog isOpen={showAddDevice} onClose={() => setShowAddDevice(false)} />
    </div>;
};
export default Design5;
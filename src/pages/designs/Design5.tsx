import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Gauge, Satellite, Signal, Battery, Car, Ship, Caravan, Bell, Settings, LogOut, Search, ChevronRight, Zap, Key, Wifi, PlugZap, Route, Clock, Thermometer, Fuel, Info, Shield, Truck, HelpCircle, RefreshCw, Power, Lock, Unlock, Volume2, MapPinned, History, CreditCard, AlertTriangle, LayoutGrid, ChevronDown, Navigation } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
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
  const [mapView, setMapView] = useState<'live' | 'ping'>('live');
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
              <Link to="/alerts" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl">
                <AlertTriangle className="w-5 h-5" />
                <span>Alerts</span>
              </Link>
              <Link to="/subscribe" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl">
                <CreditCard className="w-5 h-5" />
                <span>Subscription</span>
              </Link>
              <button className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl w-full text-left">
                <LayoutGrid className="w-5 h-5" />
                <span>Multiview</span>
              </button>
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
                          <p className="text-xs text-slate-500">FMC003</p>
                        </div>
                        <DeviceStatusBadge status={device.status} />
                      </div>
                      {isSelected && telemetry && <div className="mt-3 pt-3 border-t border-blue-100 grid grid-cols-2 gap-2 text-xs">
                          <div className="flex items-center gap-1 text-slate-600">
                            <Wifi className="w-3 h-3" />
                            <span>Online</span>
                          </div>
                          <div className="flex items-center gap-1 text-slate-600">
                            <Settings className="w-3 h-3" />
                            <span>AJAX Configured</span>
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
              <h2 className="font-semibold text-slate-800">
                {mapView === 'live' ? 'Live Fleet Map' : 'Ping Locations'}
              </h2>
              <div className="flex gap-2">
                <button 
                  onClick={() => setMapView('live')}
                  className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                    mapView === 'live' 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Live View
                </button>
                <button 
                  onClick={() => setMapView('ping')}
                  className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                    mapView === 'ping' 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Ping Locations
                </button>
              </div>
            </div>
            <div className="h-96 relative">
              <img src={mapPlaceholder} alt="Fleet map" className="w-full h-full object-cover" />
              
              {/* Live View Content */}
              {mapView === 'live' && selectedDevice && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-xl border-3 border-white animate-pulse">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white px-3 py-1.5 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap">
                    {selectedDevice.name}
                  </div>
                </div>
              )}

              {/* Ping Locations Content */}
              {mapView === 'ping' && selectedDevice && (
                <>
                  {/* Sample ping markers - these would come from real ping data */}
                  <div className="absolute top-[30%] left-[25%]">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-slate-800 px-2 py-0.5 rounded text-xs text-white whitespace-nowrap">
                      09:15
                    </div>
                  </div>
                  <div className="absolute top-[45%] left-[40%]">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-slate-800 px-2 py-0.5 rounded text-xs text-white whitespace-nowrap">
                      10:32
                    </div>
                  </div>
                  <div className="absolute top-[55%] left-[60%]">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-slate-800 px-2 py-0.5 rounded text-xs text-white whitespace-nowrap">
                      12:45
                    </div>
                  </div>
                  <div className="absolute top-[40%] left-[75%]">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white animate-pulse">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-emerald-600 px-2 py-0.5 rounded text-xs text-white whitespace-nowrap">
                      Latest
                    </div>
                  </div>
                </>
              )}

              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur rounded-lg shadow-lg px-4 py-3 flex items-center gap-4 text-xs">
                {mapView === 'live' ? (
                  <>
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
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                      <span className="text-slate-600">Latest Ping</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                      <span className="text-slate-600">Previous Pings</span>
                    </div>
                    <span className="text-slate-500">|</span>
                    <span className="text-slate-600">{selectedDevice?.name || 'No device'}</span>
                  </>
                )}
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

                {/* Quick Status Cards - 3x3 Grid */}
                <div className="grid grid-cols-3 gap-3 mb-4">
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
                  <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                    <p className="text-xs text-slate-500 mb-1">Battery Level</p>
                    <div className="flex items-center justify-center gap-1">
                      <Battery className="w-4 h-4 text-slate-600" />
                      <span className="font-semibold text-slate-800">{telemetry?.battery_level || 0}%</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                    <p className="text-xs text-slate-500 mb-1">OBD Speed</p>
                    <span className="font-semibold text-slate-800">—</span>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                    <p className="text-xs text-slate-500 mb-1">Unplug Detection</p>
                    <div className="flex items-center justify-center gap-1">
                      <PlugZap className="w-4 h-4 text-emerald-500" />
                      <span className="font-semibold text-emerald-600">Plugged</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                    <p className="text-xs text-slate-500 mb-1">Trip Odometer</p>
                    <div className="flex items-center justify-center gap-1">
                      <Route className="w-4 h-4 text-slate-600" />
                      <span className="font-semibold text-slate-800">0.00 km</span>
                    </div>
                  </div>
                </div>

                {/* Accordion Sections */}
                <Accordion type="multiple" className="space-y-2">
                  {/* System Information */}
                  <AccordionItem value="system" className="bg-slate-50 rounded-xl border border-slate-100 px-4">
                    <AccordionTrigger className="hover:no-underline py-3">
                      <div className="flex items-center gap-2">
                        <Signal className="w-4 h-4 text-slate-600" />
                        <span className="font-semibold text-slate-800">System Information</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-3 gap-4 pb-2">
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
                    </AccordionContent>
                  </AccordionItem>

                  {/* GPS Information */}
                  <AccordionItem value="gps" className="bg-slate-50 rounded-xl border border-slate-100 px-4">
                    <AccordionTrigger className="hover:no-underline py-3">
                      <div className="flex items-center gap-2">
                        <Satellite className="w-4 h-4 text-slate-600" />
                        <span className="font-semibold text-slate-800">GPS Information</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-3 gap-4 pb-2">
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
                    </AccordionContent>
                  </AccordionItem>

                  {/* Engine Information */}
                  <AccordionItem value="engine" className="bg-slate-50 rounded-xl border border-slate-100 px-4">
                    <AccordionTrigger className="hover:no-underline py-3">
                      <div className="flex items-center gap-2">
                        <Gauge className="w-4 h-4 text-slate-600" />
                        <span className="font-semibold text-slate-800">Engine Information</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-3 gap-4 pb-2">
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
                    </AccordionContent>
                  </AccordionItem>

                  {/* OBD Diagnostics */}
                  <AccordionItem value="obd" className="bg-slate-50 rounded-xl border border-slate-100 px-4">
                    <AccordionTrigger className="hover:no-underline py-3">
                      <div className="flex items-center gap-2">
                        <Info className="w-4 h-4 text-slate-600" />
                        <span className="font-semibold text-slate-800">OBD Diagnostics</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pb-2">
                        <p className="text-xs text-slate-500">DTC Codes</p>
                        <p className="font-medium text-slate-800">—</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Mileage Information */}
                  <AccordionItem value="mileage" className="bg-slate-50 rounded-xl border border-slate-100 px-4">
                    <AccordionTrigger className="hover:no-underline py-3">
                      <div className="flex items-center gap-2">
                        <Route className="w-4 h-4 text-slate-600" />
                        <span className="font-semibold text-slate-800">Mileage Information</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-2 gap-4 pb-2">
                        <div>
                          <p className="text-xs text-blue-600">Total Odometer</p>
                          <p className="font-medium text-slate-800">139208 km</p>
                        </div>
                        <div>
                          <p className="text-xs text-blue-600">Trip Odometer</p>
                          <p className="font-medium text-slate-800">0.00 km</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Fuel & Economy */}
                  <AccordionItem value="fuel" className="bg-slate-50 rounded-xl border border-slate-100 px-4">
                    <AccordionTrigger className="hover:no-underline py-3">
                      <div className="flex items-center gap-2">
                        <Fuel className="w-4 h-4 text-slate-600" />
                        <span className="font-semibold text-slate-800">Fuel & Economy</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-3 gap-4 pb-2">
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
                    </AccordionContent>
                  </AccordionItem>

                  {/* Vehicle Information */}
                  <AccordionItem value="vehicle" className="bg-slate-50 rounded-xl border border-slate-100 px-4">
                    <AccordionTrigger className="hover:no-underline py-3">
                      <div className="flex items-center gap-2">
                        <Car className="w-4 h-4 text-slate-600" />
                        <span className="font-semibold text-slate-800">Vehicle Information</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-2 gap-4 pb-2">
                        <div>
                          <p className="text-xs text-blue-600">VIN</p>
                          <p className="font-medium text-slate-800">—</p>
                        </div>
                        <div>
                          <p className="text-xs text-blue-600">Ignition</p>
                          <p className="font-medium text-slate-800">{telemetry?.ignition ? 'ON' : 'OFF'}</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                </TabsContent>

                {/* Control Tab Content */}
                <TabsContent value="control" className="mt-0 p-5">
                  <div className="space-y-4">
                    {/* Sub-tabs for control sections */}
                    <Tabs defaultValue="config" className="w-full">
                      <TabsList className="w-full grid grid-cols-4 bg-slate-100 p-1 rounded-lg">
                        <TabsTrigger value="config" className="flex items-center gap-2 text-xs data-[state=active]:bg-white data-[state=active]:shadow-sm">
                          <Settings className="w-3.5 h-3.5" />
                          Config
                        </TabsTrigger>
                        <TabsTrigger value="network" className="flex items-center gap-2 text-xs data-[state=active]:bg-white data-[state=active]:shadow-sm">
                          <Signal className="w-3.5 h-3.5" />
                          Network
                        </TabsTrigger>
                        <TabsTrigger value="location" className="flex items-center gap-2 text-xs data-[state=active]:bg-white data-[state=active]:shadow-sm">
                          <MapPin className="w-3.5 h-3.5" />
                          Location
                        </TabsTrigger>
                        <TabsTrigger value="geofence" className="flex items-center gap-2 text-xs data-[state=active]:bg-white data-[state=active]:shadow-sm">
                          <Navigation className="w-3.5 h-3.5" />
                          Geofence
                        </TabsTrigger>
                      </TabsList>

                      {/* Config Tab */}
                      <TabsContent value="config" className="mt-4 space-y-4">
                        {/* Restart Device */}
                        <div className="bg-white rounded-xl border border-slate-200 p-4">
                          <h4 className="font-semibold text-slate-800 mb-2">Restart Device</h4>
                          <button className="w-full py-2.5 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-colors">
                            <RefreshCw className="w-4 h-4" />
                            Restart Device
                          </button>
                          <p className="text-xs text-slate-500 mt-2">This will perform a soft reset of the device</p>
                        </div>

                        {/* Data Acquisition */}
                        <div className="bg-white rounded-xl border border-slate-200 p-4">
                          <div className="flex items-center gap-2 mb-1">
                            <Zap className="w-4 h-4 text-slate-600" />
                            <h4 className="font-semibold text-slate-800">Data Acquisition</h4>
                          </div>
                          <p className="text-xs text-slate-500 mb-4">Configure how often the device sends location data to the portal</p>
                          
                          <p className="text-xs text-slate-600 mb-2">Select Data Acquisition Mode</p>
                          <div className="grid grid-cols-2 gap-3 mb-4">
                            <button className="py-3 px-4 bg-blue-600 text-white text-sm font-medium rounded-lg">
                              <div className="font-semibold">Standard</div>
                              <div className="text-xs opacity-80">On Stop: 5 minutes</div>
                              <div className="text-xs opacity-80">On Moving: 30 seconds</div>
                            </button>
                            <button className="py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm rounded-lg transition-colors">
                              <div className="font-semibold">High Frequency</div>
                              <div className="text-xs text-slate-500">On Stop: 30 seconds</div>
                              <div className="text-xs text-slate-500">On Moving: 10 seconds</div>
                            </button>
                          </div>
                          
                          <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-colors">
                            <Settings className="w-4 h-4" />
                            Apply to Device
                          </button>
                        </div>

                        {/* Speed Source */}
                        <div className="bg-white rounded-xl border border-slate-200 p-4">
                          <h4 className="font-semibold text-slate-800 mb-1">Speed Source</h4>
                          <p className="text-xs text-slate-500 mb-4">GNSS uses satellite positioning, while OBD/CAN reads from the vehicle's computer</p>
                          
                          <div className="grid grid-cols-2 gap-3">
                            <button className="py-2.5 px-4 bg-blue-600 text-white text-sm font-medium rounded-lg">
                              GNSS
                            </button>
                            <button className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition-colors">
                              OBD/CAN
                            </button>
                          </div>
                        </div>

                        {/* Sleep Mode */}
                        <div className="bg-white rounded-xl border border-slate-200 p-4">
                          <h4 className="font-semibold text-slate-800 mb-4">Sleep Mode</h4>
                          
                          <div className="space-y-4">
                            <div>
                              <label className="text-xs text-slate-600 block mb-1.5">Mode</label>
                              <select className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm">
                                <option>Sleep</option>
                                <option>Deep Sleep</option>
                                <option>Ultra Sleep</option>
                              </select>
                            </div>
                            
                            <div>
                              <label className="text-xs text-slate-600 block mb-1.5">Timeout (minutes)</label>
                              <input type="number" defaultValue="60" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" />
                            </div>
                            
                            <div>
                              <label className="text-xs text-slate-600 block mb-1.5">Periodic Wake-up (minutes, 0 = off)</label>
                              <input type="number" defaultValue="10" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" />
                            </div>
                            
                            <div className="flex items-center justify-between py-2">
                              <span className="text-sm text-slate-700">Bluetooth in Sleep</span>
                              <Switch />
                            </div>
                            
                            <p className="text-xs text-slate-500">This will save the configuration and immediately apply it to the device</p>
                            
                            <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-colors">
                              <Settings className="w-4 h-4" />
                              Apply Sleep Mode
                            </button>
                          </div>
                        </div>

                        {/* Ignition Detection */}
                        <div className="bg-white rounded-xl border border-slate-200 p-4">
                          <h4 className="font-semibold text-slate-800 mb-4">Ignition Detection</h4>
                          
                          <div className="space-y-4">
                            <div>
                              <label className="text-xs text-slate-600 block mb-1.5">Ignition Source</label>
                              <select className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm">
                                <option>DIN1</option>
                                <option>Power Voltage</option>
                                <option>Accelerometer</option>
                                <option>Movement</option>
                              </select>
                            </div>
                            
                            <div>
                              <label className="text-xs text-slate-600 block mb-1.5">High Voltage (mV)</label>
                              <input type="number" defaultValue="6000" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" />
                            </div>
                            
                            <div>
                              <label className="text-xs text-slate-600 block mb-1.5">Low Voltage (mV)</label>
                              <input type="number" defaultValue="1000" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" />
                            </div>
                            
                            <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-colors">
                              <Settings className="w-4 h-4" />
                              Save to Device
                            </button>
                          </div>
                        </div>

                        {/* LED & Battery */}
                        <div className="bg-white rounded-xl border border-slate-200 p-4">
                          <h4 className="font-semibold text-slate-800 mb-4">LED & Battery</h4>
                          
                          <div className="space-y-4">
                            <div className="flex items-center justify-between py-2">
                              <span className="text-sm text-slate-700">LED Indication</span>
                              <Switch defaultChecked />
                            </div>
                            
                            <div>
                              <label className="text-xs text-slate-600 block mb-1.5">Battery Charge Mode</label>
                              <select className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm">
                                <option>On Need</option>
                                <option>Always</option>
                                <option>Never</option>
                              </select>
                            </div>
                            
                            <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-colors">
                              <Settings className="w-4 h-4" />
                              Save to Device
                            </button>
                          </div>
                        </div>

                        {/* Bluetooth */}
                        <div className="bg-white rounded-xl border border-slate-200 p-4">
                          <h4 className="font-semibold text-slate-800 mb-4">Bluetooth</h4>
                          
                          <div className="space-y-4">
                            <div>
                              <label className="text-xs text-slate-600 block mb-1.5">Bluetooth Radio</label>
                              <select className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm">
                                <option>Disable</option>
                                <option>Enable (Hidden)</option>
                                <option>Enable (Visible)</option>
                              </select>
                            </div>
                            
                            <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-colors">
                              <Settings className="w-4 h-4" />
                              Save to Device
                            </button>
                          </div>
                        </div>
                      </TabsContent>

                      {/* Network Tab */}
                      <TabsContent value="network" className="mt-4 space-y-4">
                        {/* SIM APN Configuration */}
                        <div className="bg-white rounded-xl border border-slate-200 p-4">
                          <h4 className="font-semibold text-slate-800 mb-1">SIM APN Configuration</h4>
                          <p className="text-xs text-slate-500 mb-4">Configure the APN settings for the device's cellular connection</p>
                          
                          <div className="space-y-4">
                            <div>
                              <label className="text-xs text-slate-600 block mb-1.5">APN</label>
                              <input type="text" placeholder="e.g., telstra.internet" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" />
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="text-xs text-slate-600 block mb-1.5">Username (Optional)</label>
                                <input type="text" placeholder="APN username" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" />
                              </div>
                              <div>
                                <label className="text-xs text-slate-600 block mb-1.5">Password (Optional)</label>
                                <input type="password" placeholder="APN password" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" />
                              </div>
                            </div>
                            
                            <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-colors">
                              <Settings className="w-4 h-4" />
                              Apply APN Settings
                            </button>
                          </div>
                        </div>

                        {/* Ajax Integration */}
                        <div className="bg-white rounded-xl border border-slate-200 p-4">
                          <h4 className="font-semibold text-slate-800 mb-4">Ajax Integration</h4>
                          
                          <div className="space-y-4">
                            <div className="flex items-center justify-between py-2">
                              <div>
                                <span className="text-sm font-medium text-slate-700">Enable Ajax Integration</span>
                                <p className="text-xs text-slate-500">Toggle on to enable panic button functionality with Ajax systems</p>
                              </div>
                              <Switch defaultChecked />
                            </div>
                            
                            <div className="pt-2 border-t border-slate-100">
                              <h5 className="text-sm font-medium text-slate-800 mb-1">Ajax Configuration</h5>
                              <p className="text-xs text-slate-500 mb-4">Please enter your Ajax USER account information</p>
                              
                              <div className="space-y-4">
                                <div>
                                  <label className="text-xs text-slate-600 block mb-1.5">Username/Email</label>
                                  <input type="email" placeholder="Ajax username or email" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" />
                                </div>
                                
                                <div>
                                  <label className="text-xs text-slate-600 block mb-1.5">Password</label>
                                  <input type="password" placeholder="Ajax password" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" />
                                </div>
                                
                                <div className="bg-slate-50 rounded-lg p-3 flex items-center justify-between">
                                  <span className="text-sm text-slate-600">Verify credentials to continue</span>
                                  <button className="px-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors">
                                    Verify
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Server Configuration */}
                        <div className="bg-white rounded-xl border border-slate-200 p-4">
                          <h4 className="font-semibold text-slate-800 mb-4">Server Configuration</h4>
                          
                          <div className="space-y-4">
                            <div>
                              <label className="text-xs text-slate-600 block mb-1.5">Primary Server</label>
                              <input type="text" defaultValue="gps.traceportal.net" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" />
                            </div>
                            
                            <div>
                              <label className="text-xs text-slate-600 block mb-1.5">Port</label>
                              <input type="number" defaultValue="5027" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" />
                            </div>
                            
                            <div>
                              <label className="text-xs text-slate-600 block mb-1.5">Protocol</label>
                              <select className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm">
                                <option>TCP</option>
                                <option>UDP</option>
                              </select>
                            </div>
                            
                            <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-colors">
                              <Settings className="w-4 h-4" />
                              Save Server Settings
                            </button>
                          </div>
                        </div>
                      </TabsContent>

                      {/* Location Tab */}
                      <TabsContent value="location" className="mt-4 space-y-4">
                        {/* GNSS Settings */}
                        <div className="bg-white rounded-xl border border-slate-200 p-4">
                          <h4 className="font-semibold text-slate-800 mb-4">GNSS Settings</h4>
                          
                          <div className="space-y-4">
                            <div className="flex items-center justify-between py-2">
                              <span className="text-sm text-slate-700">Enable GPS</span>
                              <Switch defaultChecked />
                            </div>
                            
                            <div className="flex items-center justify-between py-2">
                              <span className="text-sm text-slate-700">Enable GLONASS</span>
                              <Switch defaultChecked />
                            </div>
                            
                            <div className="flex items-center justify-between py-2">
                              <span className="text-sm text-slate-700">Enable Galileo</span>
                              <Switch defaultChecked />
                            </div>
                            
                            <div className="flex items-center justify-between py-2">
                              <span className="text-sm text-slate-700">Enable BeiDou</span>
                              <Switch />
                            </div>
                            
                            <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-colors">
                              <Settings className="w-4 h-4" />
                              Save GNSS Settings
                            </button>
                          </div>
                        </div>

                        {/* Movement Detection */}
                        <div className="bg-white rounded-xl border border-slate-200 p-4">
                          <h4 className="font-semibold text-slate-800 mb-4">Movement Detection</h4>
                          
                          <div className="space-y-4">
                            <div>
                              <label className="text-xs text-slate-600 block mb-1.5">Movement Source</label>
                              <select className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm">
                                <option>Ignition</option>
                                <option>Accelerometer</option>
                                <option>GNSS</option>
                              </select>
                            </div>
                            
                            <div>
                              <label className="text-xs text-slate-600 block mb-1.5">Minimum Speed (km/h)</label>
                              <input type="number" defaultValue="5" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" />
                            </div>
                            
                            <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-colors">
                              <Settings className="w-4 h-4" />
                              Save Movement Settings
                            </button>
                          </div>
                        </div>

                        {/* Static Navigation */}
                        <div className="bg-white rounded-xl border border-slate-200 p-4">
                          <h4 className="font-semibold text-slate-800 mb-4">Static Navigation</h4>
                          
                          <div className="space-y-4">
                            <div className="flex items-center justify-between py-2">
                              <div>
                                <span className="text-sm font-medium text-slate-700">Enable Static Navigation</span>
                                <p className="text-xs text-slate-500">Filter out GPS drift when the vehicle is stationary</p>
                              </div>
                              <Switch defaultChecked />
                            </div>
                            
                            <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-colors">
                              <Settings className="w-4 h-4" />
                              Save to Device
                            </button>
                          </div>
                        </div>
                      </TabsContent>

                      {/* Geofence Tab */}
                      <TabsContent value="geofence" className="mt-4 space-y-4">
                        <div className="bg-white rounded-xl border border-slate-200 p-4">
                          <h4 className="font-semibold text-slate-800 mb-1">Device Geofences</h4>
                          <p className="text-xs text-slate-500 mb-4">Configure geofences stored directly on the device for offline alerts</p>
                          
                          <div className="space-y-3">
                            {[1, 2, 3, 4, 5].map((zone) => (
                              <div key={zone} className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-sm font-medium text-slate-700">Zone {zone}</span>
                                  <Switch />
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                  <input type="text" placeholder="Latitude" className="px-2 py-1.5 bg-white border border-slate-200 rounded text-xs" />
                                  <input type="text" placeholder="Longitude" className="px-2 py-1.5 bg-white border border-slate-200 rounded text-xs" />
                                </div>
                                <input type="text" placeholder="Radius (m)" className="w-full mt-2 px-2 py-1.5 bg-white border border-slate-200 rounded text-xs" />
                              </div>
                            ))}
                          </div>
                          
                          <button className="w-full mt-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-colors">
                            <Settings className="w-4 h-4" />
                            Save Geofences to Device
                          </button>
                        </div>

                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                          <p className="text-sm text-amber-800">
                            <strong>Note:</strong> Device geofences are stored locally on the tracker and work even without server connection.
                          </p>
                        </div>
                      </TabsContent>
                    </Tabs>
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
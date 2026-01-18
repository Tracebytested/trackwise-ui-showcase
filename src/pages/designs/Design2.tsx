import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Car, MapPin, Bell, Settings, LogOut, Plus, Search, 
  Battery, Signal, Navigation, Clock, ChevronRight, ChevronLeft,
  Activity, Fuel, Thermometer, Eye, MoreVertical, ArrowLeft, X
} from 'lucide-react';

// Arctic Frost - Light theme with blue accents
const Design2 = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const devices = [
    { id: 1, name: 'Tesla Model 3', plate: 'ABC-1234', status: 'moving', speed: 65, battery: 87, signal: 4, location: 'Highway 101, San Francisco', driver: 'John Smith' },
    { id: 2, name: 'Ford Transit', plate: 'XYZ-5678', status: 'idle', speed: 0, battery: 54, signal: 3, location: 'Warehouse District, Oakland', driver: 'Sarah Johnson' },
    { id: 3, name: 'BMW X5', plate: 'DEF-9012', status: 'parked', speed: 0, battery: 92, signal: 5, location: 'Downtown Parking, San Jose', driver: 'Mike Chen' },
    { id: 4, name: 'Mercedes Sprinter', plate: 'GHI-3456', status: 'offline', speed: 0, battery: 12, signal: 0, location: 'Last seen: Fremont', driver: 'Emma Davis' },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'moving': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'idle': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'parked': return 'bg-sky-100 text-sky-700 border-sky-200';
      case 'offline': return 'bg-slate-100 text-slate-700 border-slate-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex">
      {/* Sidebar */}
      <aside className={`${sidebarCollapsed ? 'w-16' : 'w-56'} bg-white border-r border-slate-200 flex flex-col transition-all duration-300 shadow-sm`}>
        <div className="p-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            {!sidebarCollapsed && <span className="font-bold text-slate-800">TracePortal</span>}
          </div>
          <button 
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-1 hover:bg-slate-100 rounded-md"
          >
            {sidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {[
            { icon: Home, label: 'Dashboard', active: true },
            { icon: Car, label: 'Fleet' },
            { icon: MapPin, label: 'Tracking' },
            { icon: Bell, label: 'Alerts', badge: 3 },
            { icon: Settings, label: 'Settings' },
          ].map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg transition-all ${
                item.active 
                  ? 'bg-sky-50 text-sky-700 font-medium' 
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!sidebarCollapsed && (
                <>
                  <span className="text-sm">{item.label}</span>
                  {item.badge && (
                    <span className="ml-auto bg-rose-500 text-white text-xs px-1.5 py-0.5 rounded-full">{item.badge}</span>
                  )}
                </>
              )}
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-slate-200">
          <Link
            to="/"
            className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-all"
          >
            <ArrowLeft className="w-5 h-5 flex-shrink-0" />
            {!sidebarCollapsed && <span className="text-sm">Back</span>}
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-14 border-b border-slate-200 flex items-center justify-between px-6 bg-white">
          <h1 className="text-lg font-semibold text-slate-800">Fleet Dashboard</h1>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 w-48"
              />
            </div>
            <button className="p-2 hover:bg-slate-100 rounded-lg relative">
              <Bell className="w-5 h-5 text-slate-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full"></span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors text-sm font-medium">
              <Plus className="w-4 h-4" />
              Add Vehicle
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-6 overflow-auto">
          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Total Vehicles', value: '24', change: '+2 this week', icon: Car, color: 'sky' },
              { label: 'Active', value: '18', change: '75%', icon: Activity, color: 'emerald' },
              { label: 'Alerts', value: '3', change: 'Requires attention', icon: Bell, color: 'rose' },
              { label: 'Distance Today', value: '847 km', change: '+12%', icon: Navigation, color: 'violet' },
            ].map((stat) => (
              <div key={stat.label} className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-slate-500">{stat.label}</span>
                  <stat.icon className={`w-5 h-5 text-${stat.color}-500`} />
                </div>
                <p className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</p>
                <p className="text-xs text-slate-400">{stat.change}</p>
              </div>
            ))}
          </div>

          {/* Vehicle Cards */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between">
              <h2 className="font-semibold text-slate-800">Fleet Overview</h2>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 text-sm bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200">Filter</button>
                <button className="px-3 py-1.5 text-sm bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200">Export</button>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {devices.map((device) => (
                <div key={device.id} className="p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    <Car className="w-6 h-6 text-slate-600" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium text-slate-800">{device.name}</h3>
                      <span className="text-sm text-slate-400">{device.plate}</span>
                    </div>
                    <p className="text-sm text-slate-500 truncate">{device.location}</p>
                  </div>

                  <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusStyle(device.status)}`}>
                    {device.status}
                  </span>

                  <div className="flex items-center gap-6 text-sm text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <Navigation className="w-4 h-4 text-slate-400" />
                      {device.speed} km/h
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Battery className="w-4 h-4 text-slate-400" />
                      {device.battery}%
                    </div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((bar) => (
                        <div key={bar} className={`w-1 h-3 rounded-full ${bar <= device.signal ? 'bg-emerald-500' : 'bg-slate-200'}`}></div>
                      ))}
                    </div>
                  </div>

                  <button className="p-2 hover:bg-slate-100 rounded-lg">
                    <MoreVertical className="w-4 h-4 text-slate-400" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Design2;

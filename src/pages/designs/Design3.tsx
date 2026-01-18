import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Car, MapPin, Bell, Settings, Plus, Search, 
  Battery, Signal, Navigation, ChevronDown, Activity, 
  Eye, MoreHorizontal, ArrowLeft, Leaf, Trees, Mountain
} from 'lucide-react';

// Emerald Forest - Dark green theme with nature vibes
const Design3 = () => {
  const [activeTab, setActiveTab] = useState('all');

  const devices = [
    { id: 1, name: 'Tesla Model 3', plate: 'ABC-1234', status: 'moving', speed: 65, battery: 87, signal: 4, location: 'Highway 101, SF', lastUpdate: '2 min ago' },
    { id: 2, name: 'Ford Transit', plate: 'XYZ-5678', status: 'idle', speed: 0, battery: 54, signal: 3, location: 'Oakland', lastUpdate: '5 min ago' },
    { id: 3, name: 'BMW X5', plate: 'DEF-9012', status: 'parked', speed: 0, battery: 92, signal: 5, location: 'San Jose', lastUpdate: '1 min ago' },
    { id: 4, name: 'Mercedes Sprinter', plate: 'GHI-3456', status: 'offline', speed: 0, battery: 12, signal: 0, location: 'Fremont', lastUpdate: '2 hours ago' },
    { id: 5, name: 'Rivian R1T', plate: 'JKL-7890', status: 'moving', speed: 45, battery: 78, signal: 4, location: 'Mountain View', lastUpdate: 'Just now' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'moving': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30';
      case 'idle': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'parked': return 'text-teal-400 bg-teal-400/10 border-teal-400/30';
      case 'offline': return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const tabs = [
    { id: 'all', label: 'All Vehicles', count: 24 },
    { id: 'moving', label: 'Moving', count: 8 },
    { id: 'idle', label: 'Idle', count: 6 },
    { id: 'parked', label: 'Parked', count: 7 },
    { id: 'offline', label: 'Offline', count: 3 },
  ];

  return (
    <div className="min-h-screen bg-[#0d1f17] text-white flex">
      {/* Sidebar - Wide with icons */}
      <aside className="w-72 bg-gradient-to-b from-[#132920] to-[#0d1f17] border-r border-emerald-900/30 flex flex-col">
        <div className="p-6 border-b border-emerald-900/30">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Leaf className="w-6 h-6" />
            </div>
            <div>
              <span className="font-bold text-lg">TracePortal</span>
              <p className="text-xs text-emerald-400/60">Fleet Management</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <p className="text-xs text-emerald-500/50 uppercase tracking-wider mb-3 px-3">Main Menu</p>
          <div className="space-y-1">
            {[
              { icon: Home, label: 'Dashboard', active: true },
              { icon: Car, label: 'Fleet Management' },
              { icon: MapPin, label: 'Live Tracking' },
              { icon: Mountain, label: 'Geofences' },
              { icon: Bell, label: 'Alerts Center', badge: 3 },
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  item.active 
                    ? 'bg-gradient-to-r from-emerald-600/30 to-teal-600/20 border border-emerald-500/30 text-emerald-300' 
                    : 'hover:bg-emerald-900/20 text-gray-400 hover:text-emerald-300'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-red-500/80 text-xs px-2 py-0.5 rounded-full">{item.badge}</span>
                )}
              </button>
            ))}
          </div>

          <p className="text-xs text-emerald-500/50 uppercase tracking-wider mt-8 mb-3 px-3">Settings</p>
          <div className="space-y-1">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-emerald-900/20 hover:text-emerald-300 transition-all">
              <Settings className="w-5 h-5" />
              <span className="font-medium">Settings</span>
            </button>
          </div>
        </nav>

        <div className="p-4 border-t border-emerald-900/30">
          <Link
            to="/"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-emerald-400 hover:bg-emerald-900/30 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Designs</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-20 border-b border-emerald-900/30 flex items-center justify-between px-8 bg-[#132920]/50">
          <div>
            <h1 className="text-2xl font-bold">Fleet Dashboard</h1>
            <p className="text-emerald-400/60 text-sm">Welcome back, Admin</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500/50" />
              <input 
                type="text" 
                placeholder="Search vehicles..." 
                className="pl-11 pr-4 py-2.5 bg-[#1a3328] border border-emerald-800/30 rounded-xl text-sm focus:outline-none focus:border-emerald-500/50 w-72"
              />
            </div>
            <button className="p-2.5 bg-[#1a3328] hover:bg-emerald-800/30 rounded-xl relative border border-emerald-800/30">
              <Bell className="w-5 h-5 text-emerald-400" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center">3</span>
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl hover:opacity-90 transition-opacity font-medium shadow-lg shadow-emerald-500/20">
              <Plus className="w-5 h-5" />
              Add Vehicle
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-8 overflow-auto">
          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {[
              { label: 'Total Fleet', value: '24', sub: 'Vehicles', icon: Car, gradient: 'from-emerald-500 to-emerald-700' },
              { label: 'On the Move', value: '8', sub: '33%', icon: Activity, gradient: 'from-teal-500 to-teal-700' },
              { label: 'Total Distance', value: '2,847', sub: 'km today', icon: Navigation, gradient: 'from-cyan-500 to-cyan-700' },
              { label: 'Active Alerts', value: '3', sub: 'Pending', icon: Bell, gradient: 'from-rose-500 to-rose-700' },
            ].map((stat) => (
              <div key={stat.label} className="p-6 rounded-2xl bg-gradient-to-br from-[#132920] to-[#0d1f17] border border-emerald-800/20 hover:border-emerald-600/30 transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <ChevronDown className="w-5 h-5 text-emerald-500/30 group-hover:text-emerald-500/60 transition-colors" />
                </div>
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-emerald-400/60 text-sm">{stat.label} • {stat.sub}</p>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-2 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/30'
                    : 'text-gray-400 hover:text-emerald-300 hover:bg-emerald-900/20'
                }`}
              >
                {tab.label}
                <span className={`px-1.5 py-0.5 rounded text-xs ${activeTab === tab.id ? 'bg-emerald-500/30' : 'bg-gray-800'}`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Vehicles Grid */}
          <div className="grid grid-cols-2 gap-4">
            {devices.map((device) => (
              <div key={device.id} className="p-5 rounded-2xl bg-gradient-to-br from-[#132920] to-[#0d1f17] border border-emerald-800/20 hover:border-emerald-600/30 transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-600/30 to-teal-600/30 flex items-center justify-center">
                      <Car className="w-7 h-7 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{device.name}</h3>
                      <p className="text-emerald-400/60 text-sm">{device.plate}</p>
                    </div>
                  </div>
                  <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-emerald-800/30 rounded-lg">
                    <MoreHorizontal className="w-5 h-5 text-emerald-400" />
                  </button>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(device.status)}`}>
                    {device.status}
                  </span>
                  <span className="text-emerald-400/60 text-sm">{device.lastUpdate}</span>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-emerald-800/20">
                  <div className="text-center">
                    <p className="text-2xl font-bold">{device.speed}</p>
                    <p className="text-xs text-emerald-400/60">km/h</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold">{device.battery}%</p>
                    <p className="text-xs text-emerald-400/60">Battery</p>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center gap-1 mb-1">
                      {[1, 2, 3, 4, 5].map((bar) => (
                        <div key={bar} className={`w-1.5 h-4 rounded-full ${bar <= device.signal ? 'bg-emerald-500' : 'bg-gray-700'}`}></div>
                      ))}
                    </div>
                    <p className="text-xs text-emerald-400/60">Signal</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Design3;

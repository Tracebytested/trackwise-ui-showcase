import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Car, MapPin, Bell, Settings, LogOut, Plus, Search, 
  Battery, Signal, Navigation, Clock, ChevronRight, Menu,
  Activity, Fuel, Thermometer, Eye, MoreVertical, ArrowLeft
} from 'lucide-react';

// Midnight Aurora - Dark theme with purple/cyan gradients
const Design1 = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const devices = [
    { id: 1, name: 'Tesla Model 3', plate: 'ABC-1234', status: 'moving', speed: 65, battery: 87, signal: 4, location: 'Highway 101, San Francisco' },
    { id: 2, name: 'Ford Transit', plate: 'XYZ-5678', status: 'idle', speed: 0, battery: 54, signal: 3, location: 'Warehouse District, Oakland' },
    { id: 3, name: 'BMW X5', plate: 'DEF-9012', status: 'parked', speed: 0, battery: 92, signal: 5, location: 'Downtown Parking, San Jose' },
    { id: 4, name: 'Mercedes Sprinter', plate: 'GHI-3456', status: 'offline', speed: 0, battery: 12, signal: 0, location: 'Last seen: Fremont' },
  ];

  const stats = [
    { label: 'Total Vehicles', value: '24', icon: Car, color: 'from-purple-500 to-cyan-500' },
    { label: 'Active Now', value: '18', icon: Activity, color: 'from-green-500 to-emerald-500' },
    { label: 'Alerts Today', value: '3', icon: Bell, color: 'from-orange-500 to-red-500' },
    { label: 'Total Distance', value: '1,247 km', icon: Navigation, color: 'from-blue-500 to-purple-500' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'moving': return 'bg-green-500';
      case 'idle': return 'bg-yellow-500';
      case 'parked': return 'bg-blue-500';
      case 'offline': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-[#12122a] border-r border-purple-900/30 flex flex-col transition-all duration-300`}>
        <div className="p-4 border-b border-purple-900/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            {sidebarOpen && <span className="font-bold text-lg">TracePortal</span>}
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {[
            { icon: Home, label: 'Dashboard', active: true },
            { icon: Car, label: 'Vehicles' },
            { icon: MapPin, label: 'Live Map' },
            { icon: Bell, label: 'Alerts', badge: 3 },
            { icon: Settings, label: 'Settings' },
          ].map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                item.active 
                  ? 'bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 text-purple-300' 
                  : 'hover:bg-purple-900/20 text-gray-400 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {sidebarOpen && (
                <>
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="ml-auto bg-red-500 text-xs px-2 py-0.5 rounded-full">{item.badge}</span>
                  )}
                </>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-purple-900/30">
          <Link
            to="/"
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-gray-400 hover:bg-purple-900/20 hover:text-white transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            {sidebarOpen && <span>Back to Designs</span>}
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 border-b border-purple-900/30 flex items-center justify-between px-6 bg-[#12122a]/50 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-purple-900/30 rounded-lg">
              <Menu className="w-5 h-5" />
            </button>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search vehicles..." 
                className="pl-10 pr-4 py-2 bg-[#1a1a35] border border-purple-900/30 rounded-xl text-sm focus:outline-none focus:border-purple-500 w-64"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-purple-900/30 rounded-lg relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center">3</span>
            </button>
            <button className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl hover:opacity-90 transition-opacity">
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium">Add Vehicle</span>
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-6 overflow-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {stats.map((stat) => (
              <div key={stat.label} className="p-4 rounded-2xl bg-[#12122a] border border-purple-900/20 hover:border-purple-500/30 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                </div>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Devices Table */}
          <div className="rounded-2xl bg-[#12122a] border border-purple-900/20 overflow-hidden">
            <div className="p-4 border-b border-purple-900/20 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Fleet Overview</h2>
              <button className="text-purple-400 text-sm hover:text-purple-300">View All</button>
            </div>
            <table className="w-full">
              <thead className="bg-purple-900/10">
                <tr>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-400">Vehicle</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-400">Status</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-400">Speed</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-400">Battery</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-400">Signal</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-400">Location</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-400"></th>
                </tr>
              </thead>
              <tbody>
                {devices.map((device) => (
                  <tr key={device.id} className="border-t border-purple-900/10 hover:bg-purple-900/10 transition-colors">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600/30 to-cyan-600/30 flex items-center justify-center">
                          <Car className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <p className="font-medium">{device.name}</p>
                          <p className="text-xs text-gray-500">{device.plate}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs ${getStatusColor(device.status)} bg-opacity-20`}>
                        <span className={`w-2 h-2 rounded-full ${getStatusColor(device.status)}`}></span>
                        {device.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-gray-300">{device.speed} km/h</td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <Battery className="w-4 h-4 text-gray-500" />
                        <span className={device.battery < 20 ? 'text-red-400' : 'text-gray-300'}>{device.battery}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((bar) => (
                          <div key={bar} className={`w-1 h-3 rounded-full ${bar <= device.signal ? 'bg-green-500' : 'bg-gray-700'}`}></div>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-gray-400 text-sm">{device.location}</td>
                    <td className="px-4 py-4">
                      <button className="p-2 hover:bg-purple-900/30 rounded-lg">
                        <Eye className="w-4 h-4 text-gray-500" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Design1;

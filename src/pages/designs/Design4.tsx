import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Car, MapPin, Bell, Settings, Plus, Search, 
  Battery, Navigation, Grid, List, Activity, 
  Eye, ArrowLeft, Sun, Filter, SortAsc
} from 'lucide-react';

// Sunset Blaze - Warm orange/red theme with top navigation
const Design4 = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const devices = [
    { id: 1, name: 'Tesla Model 3', plate: 'ABC-1234', status: 'moving', speed: 65, battery: 87, signal: 4, location: 'Highway 101, San Francisco', temp: 24 },
    { id: 2, name: 'Ford Transit', plate: 'XYZ-5678', status: 'idle', speed: 0, battery: 54, signal: 3, location: 'Warehouse District, Oakland', temp: 28 },
    { id: 3, name: 'BMW X5', plate: 'DEF-9012', status: 'parked', speed: 0, battery: 92, signal: 5, location: 'Downtown Parking, San Jose', temp: 22 },
    { id: 4, name: 'Mercedes Sprinter', plate: 'GHI-3456', status: 'offline', speed: 0, battery: 12, signal: 0, location: 'Last seen: Fremont', temp: 0 },
    { id: 5, name: 'Rivian R1T', plate: 'JKL-7890', status: 'moving', speed: 45, battery: 78, signal: 4, location: 'Mountain View', temp: 26 },
    { id: 6, name: 'Audi e-tron', plate: 'MNO-2345', status: 'parked', speed: 0, battery: 95, signal: 5, location: 'Palo Alto', temp: 21 },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'moving': return 'bg-gradient-to-r from-orange-500 to-amber-500 text-white';
      case 'idle': return 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900';
      case 'parked': return 'bg-gradient-to-r from-rose-400 to-rose-500 text-white';
      case 'offline': return 'bg-gradient-to-r from-slate-400 to-slate-500 text-white';
      default: return 'bg-slate-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Top Navigation */}
      <header className="border-b border-orange-500/20 bg-slate-900/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
                <Sun className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg">TracePortal</span>
            </div>
            
            <nav className="flex items-center gap-1">
              {[
                { icon: Home, label: 'Dashboard', active: true },
                { icon: Car, label: 'Fleet' },
                { icon: MapPin, label: 'Map' },
                { icon: Bell, label: 'Alerts', badge: 3 },
                { icon: Settings, label: 'Settings' },
              ].map((item) => (
                <button
                  key={item.label}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    item.active 
                      ? 'bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-400' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                  {item.badge && (
                    <span className="bg-red-500 text-xs px-1.5 py-0.5 rounded-full">{item.badge}</span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 px-3 py-2 text-gray-400 hover:text-orange-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back</span>
            </Link>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl hover:opacity-90 transition-opacity font-medium shadow-lg shadow-orange-500/30">
              <Plus className="w-4 h-4" />
              Add Vehicle
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8">
        {/* Stats Row */}
        <div className="flex items-center gap-6 mb-8">
          {[
            { label: 'Total Fleet', value: '24', icon: Car },
            { label: 'Active', value: '18', icon: Activity },
            { label: 'Distance', value: '2.4k km', icon: Navigation },
            { label: 'Alerts', value: '3', icon: Bell },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-800/50 border border-orange-500/10 flex-1">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search vehicles..." 
                className="pl-10 pr-4 py-2.5 bg-slate-800/50 border border-orange-500/20 rounded-xl text-sm focus:outline-none focus:border-orange-500/50 w-64"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-800/50 border border-orange-500/20 rounded-xl text-gray-400 hover:text-white transition-colors">
              <Filter className="w-4 h-4" />
              <span className="text-sm">Filter</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-800/50 border border-orange-500/20 rounded-xl text-gray-400 hover:text-white transition-colors">
              <SortAsc className="w-4 h-4" />
              <span className="text-sm">Sort</span>
            </button>
          </div>

          <div className="flex items-center gap-2 p-1 bg-slate-800/50 rounded-lg border border-orange-500/20">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-orange-500/20 text-orange-400' : 'text-gray-400 hover:text-white'}`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-orange-500/20 text-orange-400' : 'text-gray-400 hover:text-white'}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Vehicles */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-3 gap-6">
            {devices.map((device) => (
              <div key={device.id} className="group rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-orange-500/10 overflow-hidden hover:border-orange-500/30 transition-all">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                      <Car className="w-8 h-8 text-orange-400" />
                    </div>
                    <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${getStatusStyle(device.status)}`}>
                      {device.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1">{device.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{device.plate}</p>
                  
                  <p className="text-sm text-gray-500 truncate mb-4">{device.location}</p>

                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-700/50">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-orange-400 mb-1">
                        <Navigation className="w-4 h-4" />
                      </div>
                      <p className="font-bold">{device.speed}</p>
                      <p className="text-xs text-gray-500">km/h</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-orange-400 mb-1">
                        <Battery className="w-4 h-4" />
                      </div>
                      <p className="font-bold">{device.battery}%</p>
                      <p className="text-xs text-gray-500">Battery</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-orange-400 mb-1">
                        <Sun className="w-4 h-4" />
                      </div>
                      <p className="font-bold">{device.temp}°</p>
                      <p className="text-xs text-gray-500">Temp</p>
                    </div>
                  </div>
                </div>
                
                <div className="px-6 py-3 bg-orange-500/5 border-t border-orange-500/10 flex items-center justify-between">
                  <button className="text-sm text-orange-400 hover:text-orange-300 font-medium flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    View Details
                  </button>
                  <button className="text-sm text-gray-400 hover:text-white font-medium">
                    Track
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-slate-800/50 border border-orange-500/10 overflow-hidden">
            <table className="w-full">
              <thead className="bg-orange-500/5">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Vehicle</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Status</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Speed</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Battery</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Location</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {devices.map((device) => (
                  <tr key={device.id} className="border-t border-slate-700/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                          <Car className="w-5 h-5 text-orange-400" />
                        </div>
                        <div>
                          <p className="font-medium">{device.name}</p>
                          <p className="text-xs text-gray-500">{device.plate}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(device.status)}`}>
                        {device.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">{device.speed} km/h</td>
                    <td className="px-6 py-4">{device.battery}%</td>
                    <td className="px-6 py-4 text-gray-400 text-sm max-w-xs truncate">{device.location}</td>
                    <td className="px-6 py-4">
                      <button className="text-orange-400 hover:text-orange-300">
                        <Eye className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
};

export default Design4;

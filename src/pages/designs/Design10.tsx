import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Car, MapPin, Bell, Settings, Plus, Search, 
  Battery, Navigation, Activity, Eye, ArrowLeft, 
  Waves, Anchor, Ship
} from 'lucide-react';

// Ocean Breeze - Calm blue ocean-inspired theme
const Design10 = () => {
  const devices = [
    { id: 1, name: 'Tesla Model 3', plate: 'ABC-1234', status: 'moving', speed: 65, battery: 87, location: 'Highway 101, San Francisco' },
    { id: 2, name: 'Ford Transit', plate: 'XYZ-5678', status: 'idle', speed: 0, battery: 54, location: 'Warehouse District, Oakland' },
    { id: 3, name: 'BMW X5', plate: 'DEF-9012', status: 'parked', speed: 0, battery: 92, location: 'Downtown Parking, San Jose' },
    { id: 4, name: 'Mercedes Sprinter', plate: 'GHI-3456', status: 'offline', speed: 0, battery: 12, location: 'Last seen: Fremont' },
    { id: 5, name: 'Rivian R1T', plate: 'JKL-7890', status: 'moving', speed: 45, battery: 78, location: 'Mountain View' },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'moving': return 'bg-teal-500/20 text-teal-300 border-teal-500/30';
      case 'idle': return 'bg-sky-500/20 text-sky-300 border-sky-500/30';
      case 'parked': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'offline': return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
      default: return 'bg-slate-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      {/* Animated waves background */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" className="text-blue-500" fillOpacity="0.3" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="relative flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-slate-900/50 backdrop-blur-xl border-r border-blue-500/20 flex flex-col">
          <div className="p-6 border-b border-blue-500/20">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <Waves className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-lg">TracePortal</span>
                <p className="text-xs text-blue-400/60">Ocean Edition</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 p-4 space-y-1">
            {[
              { icon: Home, label: 'Dashboard', active: true },
              { icon: Ship, label: 'Fleet' },
              { icon: MapPin, label: 'Navigation' },
              { icon: Bell, label: 'Alerts', badge: 3 },
              { icon: Anchor, label: 'Settings' },
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  item.active 
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30' 
                    : 'text-blue-300/70 hover:bg-blue-500/10 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-cyan-500/30 text-cyan-300 text-xs px-2 py-0.5 rounded-full">{item.badge}</span>
                )}
              </button>
            ))}
          </nav>

          <div className="p-4 border-t border-blue-500/20">
            <Link
              to="/"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-blue-400 hover:bg-blue-500/10 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Designs</span>
            </Link>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-1">
                Fleet Dashboard
              </h1>
              <p className="text-blue-400/60">Monitor your vehicles in real-time</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400/50" />
                <input 
                  type="text" 
                  placeholder="Search fleet..." 
                  className="pl-11 pr-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl text-sm focus:outline-none focus:border-cyan-500/50 w-64"
                />
              </div>
              <button className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-medium shadow-lg shadow-cyan-500/30 hover:shadow-xl transition-all">
                <Plus className="w-5 h-5" />
                Add Vehicle
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {[
              { icon: Car, label: 'Total Fleet', value: '24' },
              { icon: Activity, label: 'Active', value: '18' },
              { icon: Navigation, label: 'Distance', value: '2.4k km' },
              { icon: Bell, label: 'Alerts', value: '3' },
            ].map((stat) => (
              <div key={stat.label} className="p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-blue-500/20 hover:border-cyan-500/40 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 flex items-center justify-center group-hover:from-cyan-500/50 group-hover:to-blue-500/50 transition-all">
                    <stat.icon className="w-6 h-6 text-cyan-300" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-blue-400/60">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Vehicles */}
          <div className="rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-blue-500/20 overflow-hidden">
            <div className="p-5 border-b border-blue-500/20 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Fleet Status</h2>
              <button className="text-cyan-400 text-sm font-medium hover:text-cyan-300">View All →</button>
            </div>

            <div className="divide-y divide-blue-500/10">
              {devices.map((device) => (
                <div key={device.id} className="p-5 flex items-center gap-5 hover:bg-blue-500/5 transition-colors group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/20">
                    <Car className="w-7 h-7 text-cyan-400" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-medium text-white mb-1">{device.name}</h3>
                    <p className="text-sm text-blue-400/60">{device.plate} • {device.location}</p>
                  </div>

                  <span className={`px-4 py-1.5 rounded-full text-xs font-medium border ${getStatusStyle(device.status)}`}>
                    {device.status}
                  </span>

                  <div className="flex items-center gap-8 text-sm">
                    <div className="flex items-center gap-2 text-blue-300">
                      <Navigation className="w-4 h-4 text-cyan-400" />
                      {device.speed} km/h
                    </div>
                    <div className="flex items-center gap-2 text-blue-300">
                      <Battery className="w-4 h-4 text-cyan-400" />
                      {device.battery}%
                    </div>
                  </div>

                  <button className="p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-cyan-500/20">
                    <Eye className="w-5 h-5 text-cyan-400" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Design10;

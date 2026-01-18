import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Car, MapPin, Bell, Settings, Plus, Search, 
  Battery, Navigation, Activity, Eye, ArrowLeft, 
  Zap, LayoutDashboard, ChevronRight
} from 'lucide-react';

// Neon Cyber - Cyberpunk theme with neon accents
const Design6 = () => {
  const devices = [
    { id: 1, name: 'Tesla Model 3', plate: 'ABC-1234', status: 'moving', speed: 65, battery: 87, location: 'Highway 101' },
    { id: 2, name: 'Ford Transit', plate: 'XYZ-5678', status: 'idle', speed: 0, battery: 54, location: 'Oakland' },
    { id: 3, name: 'BMW X5', plate: 'DEF-9012', status: 'parked', speed: 0, battery: 92, location: 'San Jose' },
    { id: 4, name: 'Mercedes Sprinter', plate: 'GHI-3456', status: 'offline', speed: 0, battery: 12, location: 'Fremont' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'moving': return 'text-[#00ff9f] border-[#00ff9f]/50 bg-[#00ff9f]/10';
      case 'idle': return 'text-[#ffea00] border-[#ffea00]/50 bg-[#ffea00]/10';
      case 'parked': return 'text-[#00d4ff] border-[#00d4ff]/50 bg-[#00d4ff]/10';
      case 'offline': return 'text-gray-500 border-gray-500/50 bg-gray-500/10';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Glowing border effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff00ff] to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ffff] to-transparent opacity-50"></div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-20 min-h-screen bg-[#0f0f15] border-r border-[#ff00ff]/20 flex flex-col items-center py-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff00ff] to-[#00ffff] flex items-center justify-center mb-8 shadow-lg shadow-[#ff00ff]/30">
            <Zap className="w-6 h-6" />
          </div>

          <nav className="flex-1 flex flex-col items-center gap-4">
            {[
              { icon: LayoutDashboard, active: true },
              { icon: Car },
              { icon: MapPin },
              { icon: Bell, badge: 3 },
              { icon: Settings },
            ].map((item, i) => (
              <button
                key={i}
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all relative ${
                  item.active 
                    ? 'bg-gradient-to-br from-[#ff00ff]/20 to-[#00ffff]/20 text-[#00ffff] shadow-lg shadow-[#00ffff]/20' 
                    : 'text-gray-500 hover:text-[#ff00ff] hover:bg-[#ff00ff]/10'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.badge && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#ff00ff] rounded-full text-xs flex items-center justify-center">{item.badge}</span>
                )}
              </button>
            ))}
          </nav>

          <Link
            to="/"
            className="w-12 h-12 rounded-xl flex items-center justify-center text-gray-500 hover:text-[#ff00ff] hover:bg-[#ff00ff]/10 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </aside>

        {/* Main */}
        <main className="flex-1 p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#ff00ff] to-[#00ffff] bg-clip-text text-transparent">
                Fleet Command
              </h1>
              <p className="text-gray-500">Real-time vehicle monitoring</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="pl-10 pr-4 py-2.5 bg-[#15151f] border border-[#ff00ff]/20 rounded-xl text-sm focus:outline-none focus:border-[#00ffff] w-64"
                />
              </div>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] rounded-xl font-medium hover:opacity-90 transition-opacity shadow-lg shadow-[#ff00ff]/30">
                <Plus className="w-4 h-4" />
                Add Vehicle
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Total Fleet', value: '24', color: '#ff00ff' },
              { label: 'Active', value: '18', color: '#00ff9f' },
              { label: 'Distance', value: '2.4k km', color: '#00ffff' },
              { label: 'Alerts', value: '3', color: '#ffea00' },
            ].map((stat) => (
              <div 
                key={stat.label} 
                className="p-6 rounded-2xl bg-[#15151f] border border-[${stat.color}]/20 relative overflow-hidden group hover:border-[${stat.color}]/50 transition-all"
                style={{ borderColor: `${stat.color}20` }}
              >
                <div 
                  className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${stat.color}, transparent 70%)` }}
                ></div>
                <p className="text-3xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Vehicles */}
          <div className="rounded-2xl bg-[#15151f] border border-[#ff00ff]/20 overflow-hidden">
            <div className="p-4 border-b border-[#ff00ff]/10 flex items-center justify-between">
              <h2 className="font-bold text-lg">Active Vehicles</h2>
              <button className="text-[#00ffff] text-sm flex items-center gap-1 hover:gap-2 transition-all">
                View All <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="divide-y divide-[#ff00ff]/10">
              {devices.map((device) => (
                <div key={device.id} className="p-4 flex items-center gap-4 hover:bg-[#ff00ff]/5 transition-colors group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#ff00ff]/20 to-[#00ffff]/20 flex items-center justify-center border border-[#ff00ff]/20">
                    <Car className="w-7 h-7 text-[#00ffff]" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-medium">{device.name}</h3>
                    <p className="text-sm text-gray-500">{device.plate} • {device.location}</p>
                  </div>

                  <span className={`px-4 py-1.5 rounded-full text-xs font-medium border ${getStatusColor(device.status)}`}>
                    {device.status}
                  </span>

                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Navigation className="w-4 h-4 text-[#00ffff]" />
                      <span>{device.speed} km/h</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Battery className="w-4 h-4 text-[#ff00ff]" />
                      <span>{device.battery}%</span>
                    </div>
                  </div>

                  <button className="p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#00ffff]/10">
                    <Eye className="w-5 h-5 text-[#00ffff]" />
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

export default Design6;

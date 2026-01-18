import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Wrench, Cpu, Bell, Settings, Building2, HelpCircle, LogOut,
  Plus, Search, Moon, Wifi, WifiOff, ArrowLeft, RefreshCw, UserPlus, 
  Mail, BarChart3, Cog, Zap, LayoutDashboard, ChevronRight
} from 'lucide-react';

// Neon Cyber - Cyberpunk installer theme
const Design6 = () => {
  const devices = [
    { id: 1, name: 'Nick FMC880', imei: '861076080724964', status: 'online', network: 'sim', assigned: 'kilaris56@gmail.com', lastSeen: '18/01/2026', satFix: 55 },
    { id: 2, name: '2021 Mitsubishi Triton', imei: '865124071241444', status: 'sleeping', network: 'sleeping', assigned: 'kilaris10@hotmail.com', lastSeen: '11/01/2026', satFix: 0 },
    { id: 3, name: 'Site Security Tower 1', imei: '861076080733585', status: 'online', network: 'sim', assigned: 'kilaris10@hotmail.com', lastSeen: '18/01/2026', satFix: 55 },
    { id: 4, name: 'Caravan', imei: '865124071449005', status: 'offline', network: 'disconnected', assigned: 'kilaris10@hotmail.com', lastSeen: '14/12/2025', satFix: 17 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'text-[#00ff9f] border-[#00ff9f]/50 bg-[#00ff9f]/10';
      case 'sleeping': return 'text-[#ffea00] border-[#ffea00]/50 bg-[#ffea00]/10';
      case 'offline': return 'text-[#ff0055] border-[#ff0055]/50 bg-[#ff0055]/10';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff00ff] to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ffff] to-transparent opacity-50"></div>
      </div>

      <div className="flex relative">
        {/* Sidebar */}
        <aside className="w-20 min-h-screen bg-[#0f0f15] border-r border-[#ff00ff]/20 flex flex-col items-center py-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff00ff] to-[#00ffff] flex items-center justify-center mb-8 shadow-lg shadow-[#ff00ff]/30">
            <Zap className="w-6 h-6" />
          </div>

          <nav className="flex-1 flex flex-col items-center gap-4">
            {[
              { icon: LayoutDashboard },
              { icon: Wrench },
              { icon: Cpu, active: true },
              { icon: Bell, badge: 3 },
              { icon: Settings },
              { icon: Building2 },
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

          <div className="flex flex-col items-center gap-4">
            <Link to="/" className="w-12 h-12 rounded-xl flex items-center justify-center text-gray-500 hover:text-[#ff00ff] hover:bg-[#ff00ff]/10">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <button className="w-12 h-12 rounded-xl flex items-center justify-center text-gray-500 hover:text-[#ff00ff] hover:bg-[#ff00ff]/10">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#ff00ff] to-[#00ffff] bg-clip-text text-transparent">
                Device Control Center
              </h1>
              <p className="text-gray-500">Installer Portal • {devices.length} Devices</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2.5 bg-[#15151f] border border-[#ff00ff]/20 rounded-xl text-sm w-64 focus:outline-none focus:border-[#00ffff]" />
              </div>
              <button className="px-5 py-2.5 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] rounded-xl font-medium flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add Device
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Total Devices', value: '24', color: '#ff00ff' },
              { label: 'Online', value: '18', color: '#00ff9f' },
              { label: 'Offline', value: '3', color: '#ff0055' },
              { label: 'Unassigned', value: '5', color: '#ffea00' },
            ].map((stat) => (
              <div 
                key={stat.label} 
                className="p-6 rounded-2xl bg-[#15151f] border relative overflow-hidden group"
                style={{ borderColor: `${stat.color}20` }}
              >
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity" style={{ background: `radial-gradient(circle at 50% 0%, ${stat.color}, transparent 70%)` }}></div>
                <p className="text-3xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Devices */}
          <div className="rounded-2xl bg-[#15151f] border border-[#ff00ff]/20 overflow-hidden">
            <div className="p-4 border-b border-[#ff00ff]/10 flex items-center justify-between">
              <h2 className="font-bold text-lg">Device Registry</h2>
              <button className="text-[#00ffff] text-sm flex items-center gap-1">View All <ChevronRight className="w-4 h-4" /></button>
            </div>

            <div className="divide-y divide-[#ff00ff]/10">
              {devices.map((device) => (
                <div key={device.id} className="p-4 flex items-center gap-4 hover:bg-[#ff00ff]/5 transition-colors group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#ff00ff]/20 to-[#00ffff]/20 flex items-center justify-center border border-[#ff00ff]/20">
                    <Cpu className="w-7 h-7 text-[#00ffff]" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-medium">{device.name}</h3>
                    <p className="text-sm text-gray-500">{device.imei}</p>
                  </div>

                  <span className={`px-4 py-1.5 rounded-full text-xs font-medium border ${getStatusColor(device.status)}`}>
                    {device.status}
                  </span>

                  <div className="flex items-center gap-2">
                    {device.network === 'disconnected' ? <WifiOff className="w-4 h-4 text-[#ff0055]" /> : <Wifi className="w-4 h-4 text-[#00ff9f]" />}
                    <span className="text-sm text-gray-400">{device.network}</span>
                  </div>

                  <div className="text-sm">
                    {device.assigned ? (
                      <span className="text-[#00ffff]">{device.assigned}</span>
                    ) : (
                      <span className="text-gray-500">Unassigned</span>
                    )}
                  </div>

                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 hover:bg-[#00ffff]/10 rounded"><BarChart3 className="w-4 h-4 text-[#00ffff]" /></button>
                    <button className="p-2 hover:bg-[#00ffff]/10 rounded"><Cog className="w-4 h-4 text-[#00ffff]" /></button>
                    <button className="p-2 hover:bg-[#00ffff]/10 rounded"><Mail className="w-4 h-4 text-[#00ffff]" /></button>
                    {!device.assigned && (
                      <button className="px-3 py-1.5 bg-[#00ff9f]/20 text-[#00ff9f] rounded text-xs border border-[#00ff9f]/30">
                        <UserPlus className="w-3 h-3" />
                      </button>
                    )}
                    <button className="px-3 py-1.5 bg-[#ff0055]/20 text-[#ff0055] rounded text-xs border border-[#ff0055]/30">Delete</button>
                  </div>
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

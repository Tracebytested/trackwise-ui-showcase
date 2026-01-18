import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Wrench, Cpu, Bell, Settings, Building2, HelpCircle, LogOut,
  Plus, Search, Moon, Wifi, WifiOff, ArrowLeft, RefreshCw, UserPlus, 
  Mail, BarChart3, Cog, Radio
} from 'lucide-react';

// Retro 80s - Neon retro synthwave theme
const Design17 = () => {
  const devices = [
    { id: 1, name: 'Nick FMC880', imei: '861076080724964', status: 'online', network: 'sim', assigned: 'kilaris56@gmail.com', lastSeen: '18/01/2026', satFix: 55 },
    { id: 2, name: '2021 Mitsubishi Triton', imei: '865124071241444', status: 'sleeping', network: 'sleeping', assigned: 'kilaris10@hotmail.com', lastSeen: '11/01/2026', satFix: 0 },
    { id: 3, name: 'Site Security Tower 1', imei: '861076080733585', status: 'online', network: 'sim', assigned: 'kilaris10@hotmail.com', lastSeen: '18/01/2026', satFix: 55 },
    { id: 4, name: 'Caravan', imei: '865124071449005', status: 'offline', network: 'disconnected', assigned: 'kilaris10@hotmail.com', lastSeen: '14/12/2025', satFix: 17 },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f23] text-white" style={{ fontFamily: "'Courier New', monospace" }}>
      {/* Retro grid background */}
      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(255,0,128,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,128,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>
      
      {/* Gradient horizon */}
      <div className="fixed bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-purple-900/50 via-pink-600/30 to-transparent pointer-events-none"></div>

      <div className="relative flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-[#1a1a2e]/90 backdrop-blur border-r-2 border-pink-500/50 flex flex-col">
          <div className="p-6 border-b-2 border-pink-500/50">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded border-2 border-cyan-400 bg-cyan-400/20 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                <Radio className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <span className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">TRACE</span>
                <p className="text-xs text-pink-400">// INSTALLER.SYS</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 p-4 space-y-2">
            {[
              { icon: Home, label: '> HOME' },
              { icon: Wrench, label: '> SETUP' },
              { icon: Cpu, label: '> DEVICES', active: true },
              { icon: Bell, label: '> ALERTS [3]' },
              { icon: Settings, label: '> CONFIG' },
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-all ${
                  item.active 
                    ? 'bg-pink-500/20 text-cyan-400 border-l-4 border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.3)]' 
                    : 'text-pink-300 hover:text-cyan-400 hover:bg-pink-500/10'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="p-4 border-t-2 border-pink-500/50">
            <Link to="/" className="w-full flex items-center gap-3 px-4 py-3 text-sm text-pink-300 hover:text-cyan-400">
              <ArrowLeft className="w-5 h-5" />
              <span>{"< BACK"}</span>
            </Link>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400" style={{ textShadow: '0 0 30px rgba(236,72,153,0.5)' }}>
                DEVICE REGISTRY
              </h1>
              <p className="text-pink-400">// SYSTEM STATUS: ONLINE</p>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 border-2 border-cyan-400 text-cyan-400 font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all">
              <Plus className="w-5 h-5" />
              NEW DEVICE
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {[
              { label: 'TOTAL', value: '24', color: 'cyan' },
              { label: 'ONLINE', value: '18', color: 'green' },
              { label: 'OFFLINE', value: '03', color: 'red' },
              { label: 'PENDING', value: '05', color: 'yellow' },
            ].map((stat) => (
              <div key={stat.label} className={`p-6 bg-[#1a1a2e]/80 border-2 border-${stat.color}-400/50 relative overflow-hidden`} style={{ boxShadow: `0 0 20px rgba(${stat.color === 'cyan' ? '34,211,238' : stat.color === 'green' ? '34,197,94' : stat.color === 'red' ? '239,68,68' : '234,179,8'},0.2)` }}>
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-pink-500/20 to-transparent"></div>
                <p className={`text-4xl font-bold text-${stat.color}-400 mb-1`} style={{ fontFamily: "'Courier New'" }}>{stat.value}</p>
                <p className="text-pink-300 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="bg-[#1a1a2e]/80 border-2 border-pink-500/50">
            <div className="p-4 border-b-2 border-pink-500/50 flex items-center justify-between">
              <span className="text-cyan-400 font-bold">// DEVICE_LIST.DAT</span>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-pink-400" />
                <input type="text" placeholder="SEARCH..." className="pl-10 pr-4 py-2 bg-transparent border-2 border-pink-500/50 text-cyan-400 text-sm w-48 focus:outline-none focus:border-cyan-400 placeholder:text-pink-400/50" />
              </div>
            </div>

            <div className="divide-y-2 divide-pink-500/30">
              {devices.map((device) => (
                <div key={device.id} className="p-4 flex items-center gap-6 hover:bg-pink-500/10 transition-colors">
                  <div className="w-12 h-12 border-2 border-cyan-400/50 bg-cyan-400/10 flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-cyan-400" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-cyan-400">{device.name.toUpperCase()}</h3>
                    <p className="text-xs text-pink-400">ID: {device.imei}</p>
                  </div>

                  <span className={`px-4 py-1 border-2 text-xs font-bold ${
                    device.status === 'online' ? 'border-green-400 text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.3)]' :
                    device.status === 'sleeping' ? 'border-yellow-400 text-yellow-400 shadow-[0_0_10px_rgba(234,179,8,0.3)]' :
                    'border-red-400 text-red-400 shadow-[0_0_10px_rgba(239,68,68,0.3)]'
                  }`}>
                    {device.status.toUpperCase()}
                  </span>

                  <div className="flex items-center gap-2">
                    {device.network === 'disconnected' ? <WifiOff className="w-4 h-4 text-red-400" /> : <Wifi className="w-4 h-4 text-green-400" />}
                    <span className="text-pink-300 text-sm">{device.network.toUpperCase()}</span>
                  </div>

                  <div className="text-cyan-400 text-sm">{device.assigned || 'UNASSIGNED'}</div>

                  <div className="flex items-center gap-2">
                    <button className="p-2 border border-cyan-400/50 hover:bg-cyan-400/20"><BarChart3 className="w-4 h-4 text-cyan-400" /></button>
                    <button className="p-2 border border-cyan-400/50 hover:bg-cyan-400/20"><Cog className="w-4 h-4 text-cyan-400" /></button>
                    <button className="px-3 py-1.5 border-2 border-red-400 text-red-400 text-xs font-bold hover:bg-red-400/20">DEL</button>
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

export default Design17;

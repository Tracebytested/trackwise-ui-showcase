import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Wrench, Cpu, Bell, Settings, Building2, HelpCircle, LogOut,
  Plus, Search, Moon, Wifi, WifiOff, ArrowLeft, RefreshCw, UserPlus, 
  Mail, BarChart3, Cog, Diamond
} from 'lucide-react';

// Art Deco - Elegant gold and black art deco theme
const Design18 = () => {
  const devices = [
    { id: 1, name: 'Nick FMC880', imei: '861076080724964', status: 'online', network: 'sim', assigned: 'kilaris56@gmail.com', lastSeen: '18/01/2026', satFix: 55 },
    { id: 2, name: '2021 Mitsubishi Triton', imei: '865124071241444', status: 'sleeping', network: 'sleeping', assigned: 'kilaris10@hotmail.com', lastSeen: '11/01/2026', satFix: 0 },
    { id: 3, name: 'Site Security Tower 1', imei: '861076080733585', status: 'online', network: 'sim', assigned: 'kilaris10@hotmail.com', lastSeen: '18/01/2026', satFix: 55 },
    { id: 4, name: 'Caravan', imei: '865124071449005', status: 'offline', network: 'disconnected', assigned: 'kilaris10@hotmail.com', lastSeen: '14/12/2025', satFix: 17 },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#d4af37]" style={{ fontFamily: "'Georgia', serif" }}>
      {/* Art deco pattern overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='%23d4af37' fill-opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="relative flex">
        {/* Sidebar */}
        <aside className="w-72 min-h-screen bg-[#1a1a1a] border-r-2 border-[#d4af37]/30 flex flex-col">
          <div className="p-8 border-b-2 border-[#d4af37]/30">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 border-2 border-[#d4af37] flex items-center justify-center bg-[#d4af37]/10" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                <Diamond className="w-7 h-7 text-[#d4af37]" />
              </div>
              <div>
                <span className="font-bold text-2xl tracking-widest">TRACE</span>
                <p className="text-xs text-[#d4af37]/60 tracking-[0.3em]">INSTALLER</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 p-6 space-y-2">
            {[
              { icon: Home, label: 'DASHBOARD' },
              { icon: Wrench, label: 'SETUP' },
              { icon: Cpu, label: 'DEVICES', active: true },
              { icon: Bell, label: 'ALERTS' },
              { icon: Settings, label: 'SETTINGS' },
              { icon: Building2, label: 'COMPANY' },
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-4 px-5 py-4 text-sm tracking-widest transition-all ${
                  item.active 
                    ? 'bg-[#d4af37]/10 text-[#d4af37] border-l-4 border-[#d4af37]' 
                    : 'text-[#d4af37]/60 hover:text-[#d4af37] hover:bg-[#d4af37]/5'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="p-6 border-t-2 border-[#d4af37]/30">
            <Link to="/" className="w-full flex items-center gap-4 px-5 py-4 text-sm tracking-widest text-[#d4af37]/60 hover:text-[#d4af37]">
              <ArrowLeft className="w-5 h-5" />
              <span>RETURN</span>
            </Link>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 p-10">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h1 className="text-4xl font-bold tracking-widest mb-2">DEVICE REGISTRY</h1>
              <div className="flex items-center gap-4">
                <div className="w-16 h-px bg-gradient-to-r from-[#d4af37] to-transparent"></div>
                <p className="text-sm text-[#d4af37]/60 tracking-widest">MANAGE YOUR FLEET</p>
              </div>
            </div>
            <button className="px-8 py-4 bg-[#d4af37] text-[#0d0d0d] font-bold tracking-widest flex items-center gap-3 hover:bg-[#b8962e] transition-colors">
              <Plus className="w-5 h-5" />
              NEW DEVICE
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 mb-10">
            {[
              { label: 'TOTAL', value: '24' },
              { label: 'ACTIVE', value: '18' },
              { label: 'INACTIVE', value: '03' },
              { label: 'PENDING', value: '05' },
            ].map((stat) => (
              <div key={stat.label} className="p-8 bg-[#1a1a1a] border border-[#d4af37]/30 relative">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#d4af37]"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#d4af37]"></div>
                <p className="text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-sm text-[#d4af37]/60 tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="bg-[#1a1a1a] border border-[#d4af37]/30">
            <div className="p-6 border-b border-[#d4af37]/30 flex items-center justify-between">
              <h2 className="text-lg tracking-widest">ALL DEVICES</h2>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#d4af37]/50" />
                <input type="text" placeholder="SEARCH..." className="pl-11 pr-4 py-3 bg-[#0d0d0d] border border-[#d4af37]/30 text-[#d4af37] text-sm w-64 focus:outline-none focus:border-[#d4af37] placeholder:text-[#d4af37]/30 tracking-wider" />
              </div>
            </div>

            <table className="w-full text-sm">
              <thead className="bg-[#d4af37]/5">
                <tr>
                  <th className="text-left px-6 py-4 font-normal tracking-widest text-[#d4af37]/60">DEVICE</th>
                  <th className="text-left px-6 py-4 font-normal tracking-widest text-[#d4af37]/60">STATUS</th>
                  <th className="text-left px-6 py-4 font-normal tracking-widest text-[#d4af37]/60">NETWORK</th>
                  <th className="text-left px-6 py-4 font-normal tracking-widest text-[#d4af37]/60">ASSIGNED</th>
                  <th className="text-left px-6 py-4 font-normal tracking-widest text-[#d4af37]/60">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {devices.map((device) => (
                  <tr key={device.id} className="border-t border-[#d4af37]/10 hover:bg-[#d4af37]/5">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 border border-[#d4af37]/50 flex items-center justify-center bg-[#d4af37]/10">
                          <Cpu className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-medium tracking-wider">{device.name.toUpperCase()}</p>
                          <p className="text-xs text-[#d4af37]/50">{device.imei}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className={`px-4 py-2 text-xs tracking-widest border ${
                        device.status === 'online' ? 'border-emerald-500/50 text-emerald-400 bg-emerald-500/10' :
                        device.status === 'sleeping' ? 'border-amber-500/50 text-amber-400 bg-amber-500/10' :
                        'border-red-500/50 text-red-400 bg-red-500/10'
                      }`}>{device.status.toUpperCase()}</span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        {device.network === 'disconnected' ? <WifiOff className="w-4 h-4 text-red-400" /> : <Wifi className="w-4 h-4 text-emerald-400" />}
                        <span className="tracking-wider">{device.network.toUpperCase()}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">{device.assigned || <span className="text-[#d4af37]/30">NONE</span>}</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <button className="p-3 border border-[#d4af37]/30 hover:bg-[#d4af37]/10"><BarChart3 className="w-4 h-4" /></button>
                        <button className="p-3 border border-[#d4af37]/30 hover:bg-[#d4af37]/10"><Cog className="w-4 h-4" /></button>
                        <button className="px-4 py-2 border border-red-500/50 text-red-400 text-xs tracking-widest hover:bg-red-500/10">DELETE</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Design18;

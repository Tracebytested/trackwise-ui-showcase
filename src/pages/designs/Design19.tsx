import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Wrench, Cpu, Bell, Settings, Building2, HelpCircle, LogOut,
  Plus, Search, Moon, Wifi, WifiOff, ArrowLeft, RefreshCw, UserPlus, 
  Mail, BarChart3, Cog, Square
} from 'lucide-react';

// Neo Brutalist - Bold brutalist design with harsh shadows
const Design19 = () => {
  const devices = [
    { id: 1, name: 'Nick FMC880', imei: '861076080724964', status: 'online', network: 'sim', assigned: 'kilaris56@gmail.com', lastSeen: '18/01/2026', satFix: 55 },
    { id: 2, name: '2021 Mitsubishi Triton', imei: '865124071241444', status: 'sleeping', network: 'sleeping', assigned: 'kilaris10@hotmail.com', lastSeen: '11/01/2026', satFix: 0 },
    { id: 3, name: 'Site Security Tower 1', imei: '861076080733585', status: 'online', network: 'sim', assigned: 'kilaris10@hotmail.com', lastSeen: '18/01/2026', satFix: 55 },
    { id: 4, name: 'Caravan', imei: '865124071449005', status: 'offline', network: 'disconnected', assigned: 'kilaris10@hotmail.com', lastSeen: '14/12/2025', satFix: 17 },
  ];

  return (
    <div className="min-h-screen bg-[#fffef0] text-black" style={{ fontFamily: "'Arial Black', sans-serif" }}>
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-black text-white flex flex-col">
          <div className="p-6 border-b-4 border-yellow-400">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center">
                <Square className="w-6 h-6 text-black" />
              </div>
              <div>
                <span className="font-bold text-xl">TRACE</span>
                <p className="text-xs text-yellow-400">INSTALLER</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 p-4 space-y-2">
            {[
              { icon: Home, label: 'HOME' },
              { icon: Wrench, label: 'SETUP' },
              { icon: Cpu, label: 'DEVICES', active: true },
              { icon: Bell, label: 'ALERTS', badge: '3' },
              { icon: Settings, label: 'CONFIG' },
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-4 py-4 text-sm font-bold transition-all ${
                  item.active 
                    ? 'bg-yellow-400 text-black' 
                    : 'hover:bg-white/10'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
                {item.badge && <span className="ml-auto bg-red-500 text-white px-2 py-0.5 text-xs">{item.badge}</span>}
              </button>
            ))}
          </nav>

          <div className="p-4 border-t-4 border-yellow-400">
            <Link to="/" className="w-full flex items-center gap-3 px-4 py-4 text-sm font-bold hover:bg-white/10">
              <ArrowLeft className="w-5 h-5" />
              <span>BACK</span>
            </Link>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-5xl font-bold mb-2">DEVICES</h1>
              <p className="text-lg">REGISTER & MANAGE YOUR FLEET</p>
            </div>
            <button className="px-8 py-4 bg-black text-white font-bold text-lg flex items-center gap-3 shadow-[6px_6px_0px_0px_#facc15] hover:shadow-[3px_3px_0px_0px_#facc15] hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
              <Plus className="w-6 h-6" />
              ADD NEW
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {[
              { label: 'TOTAL', value: '24', bg: 'bg-yellow-400', shadow: '#000' },
              { label: 'ONLINE', value: '18', bg: 'bg-green-400', shadow: '#000' },
              { label: 'OFFLINE', value: '03', bg: 'bg-red-400', shadow: '#000' },
              { label: 'PENDING', value: '05', bg: 'bg-blue-400', shadow: '#000' },
            ].map((stat) => (
              <div key={stat.label} className={`p-6 ${stat.bg} border-4 border-black shadow-[6px_6px_0px_0px_${stat.shadow}]`}>
                <p className="text-6xl font-bold mb-2">{stat.value}</p>
                <p className="text-sm font-bold">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="border-4 border-black shadow-[8px_8px_0px_0px_#000] bg-white">
            <div className="p-6 border-b-4 border-black flex items-center justify-between bg-yellow-400">
              <h2 className="text-xl font-bold">ALL DEVICES</h2>
              <div className="relative">
                <input type="text" placeholder="SEARCH..." className="px-4 py-3 border-4 border-black font-bold w-64 focus:outline-none" />
              </div>
            </div>

            <div className="divide-y-4 divide-black">
              {devices.map((device) => (
                <div key={device.id} className="p-6 flex items-center gap-6 hover:bg-yellow-50 transition-colors">
                  <div className="w-16 h-16 bg-black flex items-center justify-center">
                    <Cpu className="w-8 h-8 text-yellow-400" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-xl">{device.name.toUpperCase()}</h3>
                    <p className="text-sm text-gray-600">{device.imei}</p>
                  </div>

                  <span className={`px-4 py-2 font-bold text-sm border-4 border-black ${
                    device.status === 'online' ? 'bg-green-400' :
                    device.status === 'sleeping' ? 'bg-yellow-400' :
                    'bg-red-400'
                  }`}>
                    {device.status.toUpperCase()}
                  </span>

                  <div className="flex items-center gap-2">
                    {device.network === 'disconnected' ? 
                      <span className="px-3 py-1 bg-red-400 text-sm font-bold border-2 border-black">DISC</span> : 
                      <span className="px-3 py-1 bg-green-400 text-sm font-bold border-2 border-black">SIM</span>
                    }
                  </div>

                  <div className="w-48 font-bold text-sm truncate">{device.assigned || 'UNASSIGNED'}</div>

                  <div className="flex items-center gap-3">
                    <button className="p-3 bg-black text-white hover:bg-gray-800"><BarChart3 className="w-5 h-5" /></button>
                    <button className="p-3 bg-black text-white hover:bg-gray-800"><Cog className="w-5 h-5" /></button>
                    <button className="px-4 py-2 bg-red-500 text-white font-bold text-sm border-4 border-black shadow-[3px_3px_0px_0px_#000] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
                      DELETE
                    </button>
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

export default Design19;

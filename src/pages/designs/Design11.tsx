import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Wrench, Cpu, Bell, Settings, Building2, HelpCircle, LogOut,
  Plus, Search, Moon, Wifi, WifiOff, ArrowLeft, RefreshCw, UserPlus, 
  Mail, BarChart3, Cog, Layers
} from 'lucide-react';

// Glassmorphism - Frosted glass effect theme
const Design11 = () => {
  const devices = [
    { id: 1, name: 'Nick FMC880', imei: '861076080724964', status: 'online', network: 'sim', assigned: 'kilaris56@gmail.com', lastSeen: '18/01/2026', satFix: 55 },
    { id: 2, name: '2021 Mitsubishi Triton', imei: '865124071241444', status: 'sleeping', network: 'sleeping', assigned: 'kilaris10@hotmail.com', lastSeen: '11/01/2026', satFix: 0 },
    { id: 3, name: 'Site Security Tower 1', imei: '861076080733585', status: 'online', network: 'sim', assigned: 'kilaris10@hotmail.com', lastSeen: '18/01/2026', satFix: 55 },
    { id: 4, name: 'Caravan', imei: '865124071449005', status: 'offline', network: 'disconnected', assigned: 'kilaris10@hotmail.com', lastSeen: '14/12/2025', satFix: 17 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
      {/* Animated blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-white/10 backdrop-blur-xl border-r border-white/20 flex flex-col">
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <span className="font-bold text-lg">TRACE</span>
                <p className="text-xs text-white/60">Installer Portal</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 p-4 space-y-2">
            {[
              { icon: Home, label: 'Dashboard' },
              { icon: Wrench, label: 'Setup' },
              { icon: Cpu, label: 'Devices', active: true },
              { icon: Bell, label: 'Alerts', badge: 3 },
              { icon: Settings, label: 'Account' },
              { icon: Building2, label: 'Company' },
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  item.active 
                    ? 'bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg' 
                    : 'hover:bg-white/10'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
                {item.badge && <span className="ml-auto bg-pink-500 text-xs px-2 py-0.5 rounded-full">{item.badge}</span>}
              </button>
            ))}
          </nav>

          <div className="p-4 border-t border-white/10 space-y-2">
            <Link to="/" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Designs</span>
            </Link>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-1">Device Registry</h1>
              <p className="text-white/60">Manage and configure your devices</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                <input type="text" placeholder="Search..." className="pl-11 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-sm w-64 focus:outline-none focus:border-white/40 placeholder:text-white/40" />
              </div>
              <button className="px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl font-medium flex items-center gap-2 hover:bg-white/30 transition-all">
                <Plus className="w-5 h-5" />
                Add Device
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {[
              { label: 'Total Devices', value: '24' },
              { label: 'Online', value: '18' },
              { label: 'Offline', value: '3' },
              { label: 'Unassigned', value: '5' },
            ].map((stat) => (
              <div key={stat.label} className="p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all">
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 overflow-hidden">
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <h2 className="text-xl font-bold">All Devices</h2>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-white/20 rounded-xl text-sm">Device Management</button>
                <button className="px-4 py-2 text-white/60 rounded-xl text-sm hover:bg-white/10">System Overview</button>
              </div>
            </div>

            <div className="divide-y divide-white/10">
              {devices.map((device) => (
                <div key={device.id} className="p-6 flex items-center gap-6 hover:bg-white/5 transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <Cpu className="w-7 h-7" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{device.name}</h3>
                    <p className="text-sm text-white/50">{device.imei}</p>
                  </div>

                  <span className={`px-4 py-2 rounded-full text-xs font-medium backdrop-blur-sm border ${
                    device.status === 'online' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' :
                    device.status === 'sleeping' ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' :
                    'bg-red-500/20 text-red-300 border-red-500/30'
                  }`}>
                    {device.status}
                  </span>

                  <div className="flex items-center gap-2">
                    {device.network === 'disconnected' ? <WifiOff className="w-4 h-4 text-red-300" /> : <Wifi className="w-4 h-4 text-emerald-300" />}
                    <span className="text-sm text-white/60">{device.network}</span>
                  </div>

                  <div className="w-40 text-white/80">
                    {device.assigned || <span className="text-white/40">Unassigned</span>}
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20"><BarChart3 className="w-4 h-4" /></button>
                    <button className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20"><Cog className="w-4 h-4" /></button>
                    <button className="px-4 py-2 bg-pink-500/30 text-pink-200 rounded-xl text-xs border border-pink-500/30">Delete</button>
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

export default Design11;

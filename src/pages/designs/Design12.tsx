import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Wrench, Cpu, Bell, Settings, Building2, HelpCircle, LogOut,
  Plus, Search, Moon, Wifi, WifiOff, ArrowLeft, RefreshCw, UserPlus, 
  Mail, BarChart3, Cog, Sparkles, TrendingUp
} from 'lucide-react';

// Gradient Cards - Colorful gradient card-based design
const Design12 = () => {
  const devices = [
    { id: 1, name: 'Nick FMC880', imei: '861076080724964', status: 'online', network: 'sim', assigned: 'kilaris56@gmail.com', lastSeen: '18/01/2026', satFix: 55, gradient: 'from-violet-500 to-purple-600' },
    { id: 2, name: '2021 Mitsubishi Triton', imei: '865124071241444', status: 'sleeping', network: 'sleeping', assigned: 'kilaris10@hotmail.com', lastSeen: '11/01/2026', satFix: 0, gradient: 'from-amber-500 to-orange-600' },
    { id: 3, name: 'Site Security Tower 1', imei: '861076080733585', status: 'online', network: 'sim', assigned: 'kilaris10@hotmail.com', lastSeen: '18/01/2026', satFix: 55, gradient: 'from-emerald-500 to-teal-600' },
    { id: 4, name: 'Caravan', imei: '865124071449005', status: 'offline', network: 'disconnected', assigned: 'kilaris10@hotmail.com', lastSeen: '14/12/2025', satFix: 17, gradient: 'from-rose-500 to-pink-600' },
    { id: 5, name: 'Boat', imei: '865124070993946', status: 'offline', network: 'sim', assigned: 'kilaris10@hotmail.com', lastSeen: '18/01/2026', satFix: 14, gradient: 'from-blue-500 to-cyan-600' },
    { id: 6, name: 'FMC650 TEST', imei: '865124070737665', status: 'offline', network: 'disconnected', assigned: null, lastSeen: '26/11/2025', satFix: 31, gradient: 'from-slate-500 to-gray-600' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg">TRACE Installer</span>
            </div>
            
            <nav className="flex items-center gap-1">
              {['Dashboard', 'Setup', 'Devices', 'Alerts', 'Settings'].map((item, i) => (
                <button key={item} className={`px-4 py-2 rounded-lg text-sm ${i === 2 ? 'bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-300' : 'text-gray-400 hover:text-white'}`}>
                  {item}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/" className="text-gray-400 hover:text-white text-sm">← Back</Link>
            <button className="px-5 py-2.5 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl font-medium flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add Device
            </button>
          </div>
        </div>
      </header>

      <main className="p-8">
        {/* Stats with gradients */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Devices', value: '24', gradient: 'from-violet-500 to-purple-600', icon: Cpu },
            { label: 'Online', value: '18', gradient: 'from-emerald-500 to-teal-600', icon: Wifi },
            { label: 'Offline', value: '3', gradient: 'from-rose-500 to-pink-600', icon: WifiOff },
            { label: 'Unassigned', value: '5', gradient: 'from-amber-500 to-orange-600', icon: UserPlus },
          ].map((stat) => (
            <div key={stat.label} className={`p-6 rounded-2xl bg-gradient-to-br ${stat.gradient} relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <stat.icon className="w-8 h-8 mb-4 opacity-80" />
              <p className="text-4xl font-bold mb-1">{stat.value}</p>
              <p className="text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Device Registry</h2>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input type="text" placeholder="Search devices..." className="pl-11 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-sm w-72 focus:outline-none focus:border-violet-500" />
          </div>
        </div>

        {/* Device Cards Grid */}
        <div className="grid grid-cols-3 gap-6">
          {devices.map((device) => (
            <div key={device.id} className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-slate-700 transition-all group">
              <div className={`h-2 bg-gradient-to-r ${device.gradient}`}></div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${device.gradient} flex items-center justify-center`}>
                    <Cpu className="w-7 h-7 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    device.status === 'online' ? 'bg-emerald-500/20 text-emerald-400' :
                    device.status === 'sleeping' ? 'bg-amber-500/20 text-amber-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {device.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-1">{device.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{device.imei}</p>

                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Network</p>
                    <div className="flex items-center gap-1.5">
                      {device.network === 'disconnected' ? <WifiOff className="w-4 h-4 text-red-400" /> : <Wifi className="w-4 h-4 text-emerald-400" />}
                      <span>{device.network}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Sat Fix</p>
                    <span>{device.satFix}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-gray-500 text-sm mb-1">Assigned To</p>
                  <p className="text-sm truncate">{device.assigned || <span className="text-gray-600">Unassigned</span>}</p>
                </div>

                <div className="flex items-center gap-2 pt-4 border-t border-slate-800">
                  <button className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm">Status</button>
                  <button className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm">Control</button>
                  {device.assigned ? (
                    <button className="flex-1 py-2 bg-violet-500/20 text-violet-400 rounded-lg text-sm">Reassign</button>
                  ) : (
                    <button className={`flex-1 py-2 bg-gradient-to-r ${device.gradient} rounded-lg text-sm font-medium`}>Assign</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Design12;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Wrench, Cpu, Bell, Settings, Plus, Search, Wifi, WifiOff, 
  ArrowLeft, RefreshCw, UserPlus, Mail, BarChart3, Cog, Layers
} from 'lucide-react';

// Violet Fusion - Top nav with purple gradient (inspired by Design4)
const Design3 = () => {
  const devices = [
    { id: 1, name: 'Nick FMC880', imei: '861076080724964', model: 'FMC880', status: 'online', network: 'sim', assigned: 'kilaris56@gmail.com', lastSeen: '18/01/2026, 14:49:18', satFix: 55 },
    { id: 2, name: '2021 Mitsubishi Triton', imei: '865124071241444', model: 'FMC003', status: 'sleeping', network: 'sleeping', assigned: 'kilaris10@hotmail.com', lastSeen: '11/01/2026, 19:26:01', satFix: 0 },
    { id: 3, name: 'Site Security Tower 1', imei: '861076080733585', model: 'FMC650', status: 'online', network: 'sim', assigned: 'kilaris10@hotmail.com', lastSeen: '18/01/2026, 14:50:18', satFix: 55 },
    { id: 4, name: 'Caravan', imei: '865124071449005', model: 'FMC003', status: 'offline', network: 'disconnected', assigned: null, lastSeen: '14/12/2025, 23:59:09', satFix: 17 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 text-white">
      {/* Top Navigation */}
      <header className="bg-slate-900/80 backdrop-blur-lg border-b border-violet-500/20 sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold">TRACE</span>
                <span className="text-violet-400 text-xs ml-2">Installer</span>
              </div>
            </div>
            
            <nav className="flex items-center gap-1">
              {[
                { icon: Home, label: 'Home' },
                { icon: Wrench, label: 'Setup' },
                { icon: Cpu, label: 'Devices', active: true },
                { icon: Bell, label: 'Alerts', badge: 3 },
                { icon: Settings, label: 'Settings' },
              ].map((item) => (
                <button
                  key={item.label}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all ${
                    item.active ? 'bg-violet-500/20 text-violet-400' : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  {item.badge && <span className="bg-red-500 text-xs px-1.5 py-0.5 rounded-full">{item.badge}</span>}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/" className="text-gray-400 hover:text-violet-400 text-sm flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" /> Back
            </Link>
            <button className="px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg text-sm font-medium flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add Device
            </button>
          </div>
        </div>
      </header>

      <main className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Device Management</h1>
            <p className="text-gray-400">Register and manage {devices.length} devices</p>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input type="text" placeholder="Search devices..." className="pl-10 pr-4 py-2.5 bg-slate-800/50 border border-violet-500/20 rounded-xl text-sm w-64 focus:outline-none focus:border-violet-500" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Total Devices', value: '24' },
            { label: 'Online', value: '18' },
            { label: 'Offline', value: '3' },
            { label: 'Unassigned', value: '5' },
          ].map((stat) => (
            <div key={stat.label} className="p-4 rounded-xl bg-slate-800/50 border border-violet-500/10">
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="rounded-2xl bg-slate-800/50 border border-violet-500/10 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-violet-500/5">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-gray-400">Device</th>
                <th className="text-left px-4 py-3 font-medium text-gray-400">Model</th>
                <th className="text-left px-4 py-3 font-medium text-gray-400">Status</th>
                <th className="text-left px-4 py-3 font-medium text-gray-400">Network</th>
                <th className="text-left px-4 py-3 font-medium text-gray-400">Assigned User</th>
                <th className="text-left px-4 py-3 font-medium text-gray-400">Last Seen</th>
                <th className="text-left px-4 py-3 font-medium text-gray-400">Sat</th>
                <th className="text-left px-4 py-3 font-medium text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {devices.map((device) => (
                <tr key={device.id} className="border-t border-slate-700/30 hover:bg-violet-500/5 transition-colors">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center">
                        <Cpu className="w-5 h-5 text-violet-400" />
                      </div>
                      <div>
                        <p className="font-medium">{device.name}</p>
                        <p className="text-xs text-gray-500">{device.imei}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-gray-400">{device.model}</td>
                  <td className="px-4 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      device.status === 'online' ? 'bg-emerald-500/20 text-emerald-400' :
                      device.status === 'sleeping' ? 'bg-amber-500/20 text-amber-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {device.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1.5">
                      {device.network === 'disconnected' ? <WifiOff className="w-4 h-4 text-red-400" /> : <Wifi className="w-4 h-4 text-emerald-400" />}
                      <span className={device.network === 'disconnected' ? 'text-red-400' : 'text-gray-300'}>{device.network}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    {device.assigned ? <span className="text-violet-400">{device.assigned}</span> : <span className="text-gray-500">Unassigned</span>}
                  </td>
                  <td className="px-4 py-4 text-gray-400 text-xs">{device.lastSeen}</td>
                  <td className="px-4 py-4 text-violet-400">{device.satFix}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1">
                      <button className="p-1.5 hover:bg-violet-500/20 rounded"><BarChart3 className="w-4 h-4 text-gray-400" /></button>
                      <button className="p-1.5 hover:bg-violet-500/20 rounded"><Cog className="w-4 h-4 text-gray-400" /></button>
                      <button className="p-1.5 hover:bg-violet-500/20 rounded"><Mail className="w-4 h-4 text-gray-400" /></button>
                      {device.assigned ? (
                        <button className="p-1.5 hover:bg-violet-500/20 rounded"><RefreshCw className="w-4 h-4 text-gray-400" /></button>
                      ) : (
                        <button className="px-2 py-1 bg-emerald-600 text-white rounded text-xs"><UserPlus className="w-3 h-3" /></button>
                      )}
                      <button className="px-2 py-1 bg-red-600 text-white rounded text-xs">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Design3;

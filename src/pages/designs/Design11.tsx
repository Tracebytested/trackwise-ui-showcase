import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Wrench, Cpu, Bell, Settings, Plus, Search, Wifi, WifiOff, 
  ArrowLeft, RefreshCw, UserPlus, Mail, BarChart3, Cog, Terminal
} from 'lucide-react';

// Matrix Green - Dark top nav with neon green accents (inspired by Design4 layout)
const Design11 = () => {
  const devices = [
    { id: 1, name: 'Nick FMC880', imei: '861076080724964', model: 'FMC880', status: 'online', network: 'sim', assigned: 'kilaris56@gmail.com', lastSeen: '18/01/2026, 14:49:18', satFix: 55 },
    { id: 2, name: '2021 Mitsubishi Triton', imei: '865124071241444', model: 'FMC003', status: 'sleeping', network: 'sleeping', assigned: 'kilaris10@hotmail.com', lastSeen: '11/01/2026, 19:26:01', satFix: 0 },
    { id: 3, name: 'Site Security Tower 1', imei: '861076080733585', model: 'FMC650', status: 'online', network: 'sim', assigned: 'kilaris10@hotmail.com', lastSeen: '18/01/2026, 14:50:18', satFix: 55 },
    { id: 4, name: 'Caravan', imei: '865124071449005', model: 'FMC003', status: 'offline', network: 'disconnected', assigned: null, lastSeen: '14/12/2025, 23:59:09', satFix: 17 },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Top Navigation */}
      <header className="bg-zinc-950 border-b border-green-500/30 sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 border border-green-500/50 flex items-center justify-center">
                <Terminal className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <span className="font-bold text-green-400">TRACE</span>
                <span className="text-green-600 text-xs ml-2">// installer</span>
              </div>
            </div>
            
            <nav className="flex items-center gap-1">
              {[
                { icon: Home, label: 'home' },
                { icon: Wrench, label: 'setup' },
                { icon: Cpu, label: 'devices', active: true },
                { icon: Bell, label: 'alerts', badge: 3 },
                { icon: Settings, label: 'config' },
              ].map((item) => (
                <button
                  key={item.label}
                  className={`flex items-center gap-2 px-4 py-2 rounded text-sm transition-all ${
                    item.active ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'text-gray-500 hover:text-green-400 hover:bg-green-500/10'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  {item.badge && <span className="bg-red-500/80 text-xs px-1.5 py-0.5 rounded">{item.badge}</span>}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/" className="text-gray-500 hover:text-green-400 text-sm flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" /> [back]
            </Link>
            <button className="px-4 py-2 bg-green-500/20 border border-green-500/50 text-green-400 rounded text-sm font-medium flex items-center gap-2 hover:bg-green-500/30">
              <Plus className="w-4 h-4" />
              add_device
            </button>
          </div>
        </div>
      </header>

      <main className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl text-green-400">$ device_management</h1>
            <p className="text-gray-600 text-sm">// {devices.length} devices registered</p>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
            <input type="text" placeholder="grep devices..." className="pl-10 pr-4 py-2 bg-zinc-900 border border-green-500/20 rounded text-sm w-64 focus:outline-none focus:border-green-500 text-green-400 placeholder-gray-600" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { label: 'total', value: '24' },
            { label: 'online', value: '18' },
            { label: 'offline', value: '3' },
            { label: 'unassigned', value: '5' },
          ].map((stat) => (
            <div key={stat.label} className="p-4 rounded bg-zinc-900 border border-green-500/20">
              <p className="text-2xl font-bold text-green-400">{stat.value}</p>
              <p className="text-sm text-gray-600">// {stat.label}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="rounded bg-zinc-900 border border-green-500/20 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-green-500/5 border-b border-green-500/20">
              <tr>
                <th className="text-left px-4 py-3 font-normal text-gray-500">device</th>
                <th className="text-left px-4 py-3 font-normal text-gray-500">model</th>
                <th className="text-left px-4 py-3 font-normal text-gray-500">status</th>
                <th className="text-left px-4 py-3 font-normal text-gray-500">network</th>
                <th className="text-left px-4 py-3 font-normal text-gray-500">user</th>
                <th className="text-left px-4 py-3 font-normal text-gray-500">last_seen</th>
                <th className="text-left px-4 py-3 font-normal text-gray-500">sat</th>
                <th className="text-left px-4 py-3 font-normal text-gray-500">actions</th>
              </tr>
            </thead>
            <tbody>
              {devices.map((device) => (
                <tr key={device.id} className="border-t border-zinc-800 hover:bg-green-500/5 transition-colors">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                        <Cpu className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <p className="text-green-400">{device.name}</p>
                        <p className="text-xs text-gray-600">{device.imei}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-gray-500">{device.model}</td>
                  <td className="px-4 py-4">
                    <span className={`px-2 py-1 rounded text-xs ${
                      device.status === 'online' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      device.status === 'sleeping' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                      'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}>
                      {device.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1.5">
                      {device.network === 'disconnected' ? <WifiOff className="w-4 h-4 text-red-400" /> : <Wifi className="w-4 h-4 text-green-400" />}
                      <span className={device.network === 'disconnected' ? 'text-red-400' : 'text-gray-400'}>{device.network}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    {device.assigned ? <span className="text-green-400">{device.assigned}</span> : <span className="text-gray-600">null</span>}
                  </td>
                  <td className="px-4 py-4 text-gray-500 text-xs">{device.lastSeen}</td>
                  <td className="px-4 py-4 text-green-400">{device.satFix}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1">
                      <button className="p-1.5 hover:bg-green-500/20 rounded"><BarChart3 className="w-4 h-4 text-gray-500" /></button>
                      <button className="p-1.5 hover:bg-green-500/20 rounded"><Cog className="w-4 h-4 text-gray-500" /></button>
                      <button className="px-2 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded text-xs">rm</button>
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

export default Design11;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Wrench, Cpu, Bell, Settings, Building2, HelpCircle, LogOut,
  Plus, Search, Moon, Wifi, WifiOff, ArrowLeft, RefreshCw, UserPlus, 
  Mail, BarChart3, Cog, Terminal, Code, Database, Server
} from 'lucide-react';

// Terminal Tech - Developer/Hacker installer theme
const Design9 = () => {
  const devices = [
    { id: 1, name: 'UNIT_FMC880', imei: '861076080724964', status: 'ONLINE', network: 'SIM', assigned: 'kilaris56@gmail.com', lastSeen: '2026-01-18T14:49:18', satFix: 55 },
    { id: 2, name: 'UNIT_TRITON', imei: '865124071241444', status: 'SLEEP', network: 'IDLE', assigned: 'kilaris10@hotmail.com', lastSeen: '2026-01-11T19:26:01', satFix: 0 },
    { id: 3, name: 'UNIT_TOWER1', imei: '861076080733585', status: 'ONLINE', network: 'SIM', assigned: 'kilaris10@hotmail.com', lastSeen: '2026-01-18T14:50:18', satFix: 55 },
    { id: 4, name: 'UNIT_CARAVAN', imei: '865124071449005', status: 'OFFLINE', network: 'DISC', assigned: 'kilaris10@hotmail.com', lastSeen: '2025-12-14T23:59:09', satFix: 17 },
    { id: 5, name: 'UNIT_TEST650', imei: '865124070737665', status: 'OFFLINE', network: 'DISC', assigned: null, lastSeen: '2025-11-26T01:23:44', satFix: 31 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ONLINE': return 'text-green-400';
      case 'SLEEP': return 'text-yellow-400';
      case 'OFFLINE': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-green-400 font-mono">
      <div className="fixed inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,0,0.03)_2px,rgba(0,255,0,0.03)_4px)]"></div>

      <div className="relative flex">
        {/* Sidebar */}
        <aside className="w-56 min-h-screen bg-[#0d0d0d] border-r border-green-900/30 flex flex-col">
          <div className="p-4 border-b border-green-900/30">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-green-500" />
              <span className="text-green-500">trace@installer:~$</span>
            </div>
          </div>

          <nav className="flex-1 p-2">
            <p className="text-xs text-green-700 px-3 py-2">// NAVIGATION</p>
            {[
              { icon: Database, label: './dashboard' },
              { icon: Wrench, label: './setup' },
              { icon: Server, label: './devices', active: true },
              { icon: Bell, label: './alerts [3]' },
              { icon: Settings, label: './config' },
              { icon: Building2, label: './company' },
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition-all ${
                  item.active ? 'bg-green-900/20 text-green-400 border-l-2 border-green-400' : 'text-green-600 hover:text-green-400 hover:bg-green-900/10'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="p-2 border-t border-green-900/30">
            <Link to="/" className="w-full flex items-center gap-2 px-3 py-2 text-sm text-green-600 hover:text-green-400">
              <ArrowLeft className="w-4 h-4" />
              <span>cd ..</span>
            </Link>
            <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-green-600 hover:text-green-400">
              <LogOut className="w-4 h-4" />
              <span>exit</span>
            </button>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <div className="flex items-center gap-2 text-green-600 text-xs mb-2">
              <span>// INSTALLER PLATFORM v3.2.1</span>
              <span className="animate-pulse">●</span>
              <span>CONNECTED</span>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="text-2xl text-green-400">&gt; DEVICE_REGISTRY_</h1>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-700" />
                  <input type="text" placeholder="grep -r 'device'" className="pl-9 pr-4 py-2 bg-[#0d0d0d] border border-green-900/50 rounded text-sm w-56 focus:outline-none focus:border-green-500 placeholder:text-green-800" />
                </div>
                <button className="px-4 py-2 bg-green-900/20 border border-green-500/50 text-green-400 text-sm hover:bg-green-900/40 flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  add_device()
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: 'TOTAL_DEVICES', value: '24' },
              { label: 'ONLINE', value: '18' },
              { label: 'OFFLINE', value: '03' },
              { label: 'UNASSIGNED', value: '05' },
            ].map((stat) => (
              <div key={stat.label} className="p-4 bg-[#0d0d0d] border border-green-900/30 hover:border-green-500/50 transition-colors">
                <p className="text-2xl text-green-400 mb-1">{stat.value}</p>
                <p className="text-xs text-green-700">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Terminal Output */}
          <div className="bg-[#0d0d0d] border border-green-900/30 rounded overflow-hidden">
            <div className="px-4 py-2 border-b border-green-900/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-green-700" />
                <span className="text-sm text-green-600">device_registry.log</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/50"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/50"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/50"></span>
              </div>
            </div>

            <div className="p-4">
              <div className="text-xs text-green-700 mb-4">
                <span className="text-green-500">$</span> SELECT * FROM devices ORDER BY last_seen DESC
              </div>

              <table className="w-full text-sm">
                <thead>
                  <tr className="text-green-700 border-b border-green-900/30">
                    <th className="text-left py-2 font-normal">UNIT_ID</th>
                    <th className="text-left py-2 font-normal">IMEI</th>
                    <th className="text-left py-2 font-normal">STATUS</th>
                    <th className="text-left py-2 font-normal">NET</th>
                    <th className="text-left py-2 font-normal">ASSIGNED_TO</th>
                    <th className="text-left py-2 font-normal">LAST_SEEN</th>
                    <th className="text-left py-2 font-normal">SAT</th>
                    <th className="text-left py-2 font-normal">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {devices.map((device) => (
                    <tr key={device.id} className="border-b border-green-900/20 hover:bg-green-900/10">
                      <td className="py-3 text-cyan-400">{device.name}</td>
                      <td className="py-3">{device.imei}</td>
                      <td className={`py-3 ${getStatusColor(device.status)}`}>[{device.status}]</td>
                      <td className="py-3">
                        <span className={device.network === 'DISC' ? 'text-red-400' : 'text-green-400'}>{device.network}</span>
                      </td>
                      <td className="py-3 text-cyan-400">{device.assigned || 'NULL'}</td>
                      <td className="py-3 text-green-700">{device.lastSeen}</td>
                      <td className="py-3">{device.satFix}</td>
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <button className="text-cyan-400 hover:text-cyan-300">./status</button>
                          <button className="text-cyan-400 hover:text-cyan-300">./config</button>
                          {!device.assigned && <button className="text-green-400 hover:text-green-300">./assign</button>}
                          <button className="text-red-400 hover:text-red-300">./rm</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-4 text-xs text-green-700">
                <span className="text-green-500">$</span> <span className="animate-pulse">█</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Design9;

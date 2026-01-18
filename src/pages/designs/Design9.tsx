import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Car, MapPin, Bell, Settings, Plus, Search, 
  Battery, Navigation, Activity, Eye, ArrowLeft, 
  Terminal, Code, Cpu, Database, Server
} from 'lucide-react';

// Terminal Tech - Developer/Hacker inspired green terminal theme
const Design9 = () => {
  const devices = [
    { id: 1, name: 'UNIT_001', alias: 'Tesla Model 3', status: 'ONLINE', speed: 65, battery: 87, lat: '37.7749', lng: '-122.4194' },
    { id: 2, name: 'UNIT_002', alias: 'Ford Transit', status: 'IDLE', speed: 0, battery: 54, lat: '37.8044', lng: '-122.2712' },
    { id: 3, name: 'UNIT_003', alias: 'BMW X5', status: 'PARKED', speed: 0, battery: 92, lat: '37.3382', lng: '-121.8863' },
    { id: 4, name: 'UNIT_004', alias: 'Mercedes Sprinter', status: 'OFFLINE', speed: 0, battery: 12, lat: '37.5485', lng: '-121.9886' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ONLINE': return 'text-green-400';
      case 'IDLE': return 'text-yellow-400';
      case 'PARKED': return 'text-cyan-400';
      case 'OFFLINE': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-green-400 font-mono">
      {/* Scanlines effect */}
      <div className="fixed inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,0,0.03)_2px,rgba(0,255,0,0.03)_4px)]"></div>

      <div className="relative flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-[#0d0d0d] border-r border-green-900/30 flex flex-col">
          <div className="p-4 border-b border-green-900/30">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-green-500" />
              <span className="text-green-500">trace@portal:~$</span>
            </div>
          </div>

          <nav className="flex-1 p-2">
            <p className="text-xs text-green-700 px-3 py-2">// NAVIGATION</p>
            {[
              { icon: Database, label: './dashboard', active: true },
              { icon: Car, label: './fleet' },
              { icon: MapPin, label: './tracking' },
              { icon: Bell, label: './alerts', badge: 3 },
              { icon: Settings, label: './config' },
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition-all ${
                  item.active 
                    ? 'bg-green-900/20 text-green-400 border-l-2 border-green-400' 
                    : 'text-green-600 hover:text-green-400 hover:bg-green-900/10'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ml-auto text-xs text-red-400">[{item.badge}]</span>
                )}
              </button>
            ))}
          </nav>

          <div className="p-2 border-t border-green-900/30">
            <Link
              to="/"
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-green-600 hover:text-green-400 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>cd ..</span>
            </Link>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 p-6">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 text-green-600 text-xs mb-2">
              <span>// FLEET MANAGEMENT SYSTEM v2.4.1</span>
              <span className="animate-pulse">●</span>
              <span>CONNECTED</span>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="text-2xl text-green-400">&gt; DASHBOARD_</h1>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-700" />
                  <input 
                    type="text" 
                    placeholder="grep -r 'vehicle'" 
                    className="pl-9 pr-4 py-2 bg-[#0d0d0d] border border-green-900/50 rounded text-sm focus:outline-none focus:border-green-500 w-56 placeholder:text-green-800"
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-green-900/20 border border-green-500/50 text-green-400 text-sm hover:bg-green-900/40 transition-colors">
                  <Plus className="w-4 h-4" />
                  <span>new_unit()</span>
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: 'TOTAL_UNITS', value: '24', icon: Server },
              { label: 'ACTIVE', value: '18', icon: Activity },
              { label: 'DISTANCE_KM', value: '2847', icon: Navigation },
              { label: 'ALERTS', value: '03', icon: Bell },
            ].map((stat) => (
              <div key={stat.label} className="p-4 bg-[#0d0d0d] border border-green-900/30 hover:border-green-500/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className="w-4 h-4 text-green-700" />
                  <span className="text-xs text-green-700">■</span>
                </div>
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
                <span className="text-sm text-green-600">fleet_status.log</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/50"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/50"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/50"></span>
              </div>
            </div>

            <div className="p-4">
              <div className="text-xs text-green-700 mb-4">
                <span className="text-green-500">$</span> cat /var/log/fleet/status
              </div>

              <table className="w-full text-sm">
                <thead>
                  <tr className="text-green-700 border-b border-green-900/30">
                    <th className="text-left py-2 font-normal">UNIT_ID</th>
                    <th className="text-left py-2 font-normal">ALIAS</th>
                    <th className="text-left py-2 font-normal">STATUS</th>
                    <th className="text-left py-2 font-normal">SPEED</th>
                    <th className="text-left py-2 font-normal">BATTERY</th>
                    <th className="text-left py-2 font-normal">COORDS</th>
                    <th className="text-left py-2 font-normal">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {devices.map((device) => (
                    <tr key={device.id} className="border-b border-green-900/20 hover:bg-green-900/10">
                      <td className="py-3 text-cyan-400">{device.name}</td>
                      <td className="py-3">{device.alias}</td>
                      <td className={`py-3 ${getStatusColor(device.status)}`}>
                        [{device.status}]
                      </td>
                      <td className="py-3">{device.speed} km/h</td>
                      <td className="py-3">
                        <span className={device.battery < 20 ? 'text-red-400' : ''}>{device.battery}%</span>
                      </td>
                      <td className="py-3 text-green-700">
                        {device.lat}, {device.lng}
                      </td>
                      <td className="py-3">
                        <button className="text-cyan-400 hover:text-cyan-300">
                          ./view
                        </button>
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

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Wrench, Cpu, Bell, Settings, Building2, HelpCircle, LogOut,
  Plus, Search, Moon, Wifi, WifiOff, ArrowLeft, RefreshCw, UserPlus, 
  Mail, BarChart3, Cog, Flame
} from 'lucide-react';

// Dark Gradient - Dark theme with rich gradients
const Design16 = () => {
  const devices = [
    { id: 1, name: 'Nick FMC880', imei: '861076080724964', status: 'online', network: 'sim', assigned: 'kilaris56@gmail.com', lastSeen: '18/01/2026', satFix: 55 },
    { id: 2, name: '2021 Mitsubishi Triton', imei: '865124071241444', status: 'sleeping', network: 'sleeping', assigned: 'kilaris10@hotmail.com', lastSeen: '11/01/2026', satFix: 0 },
    { id: 3, name: 'Site Security Tower 1', imei: '861076080733585', status: 'online', network: 'sim', assigned: 'kilaris10@hotmail.com', lastSeen: '18/01/2026', satFix: 55 },
    { id: 4, name: 'Caravan', imei: '865124071449005', status: 'offline', network: 'disconnected', assigned: 'kilaris10@hotmail.com', lastSeen: '14/12/2025', satFix: 17 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 border-r border-gray-700/50 flex flex-col">
          <div className="p-6 border-b border-gray-700/50">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <span className="font-bold text-lg">TRACE</span>
                <p className="text-xs text-gray-400">Installer Portal</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 p-4 space-y-1">
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
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all ${
                  item.active 
                    ? 'bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 text-white border border-pink-500/30' 
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
                {item.badge && <span className="ml-auto bg-gradient-to-r from-orange-500 to-pink-500 text-xs px-2 py-0.5 rounded-full">{item.badge}</span>}
              </button>
            ))}
          </nav>

          <div className="p-4 border-t border-gray-700/50 space-y-1">
            <Link to="/" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-400 hover:bg-gray-800 hover:text-white">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Designs</span>
            </Link>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Device Registry
              </h1>
              <p className="text-gray-400">Manage and configure your devices</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input type="text" placeholder="Search..." className="pl-11 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-sm w-64 focus:outline-none focus:border-pink-500" />
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-xl font-medium flex items-center gap-2 shadow-lg shadow-pink-500/25">
                <Plus className="w-5 h-5" />
                Add Device
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {[
              { label: 'Total Devices', value: '24', gradient: 'from-orange-500 to-pink-600' },
              { label: 'Online', value: '18', gradient: 'from-emerald-500 to-teal-600' },
              { label: 'Offline', value: '3', gradient: 'from-red-500 to-rose-600' },
              { label: 'Unassigned', value: '5', gradient: 'from-amber-500 to-orange-600' },
            ].map((stat) => (
              <div key={stat.label} className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-gray-600 transition-all group relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="rounded-2xl bg-gray-800/50 border border-gray-700/50 overflow-hidden">
            <div className="p-6 border-b border-gray-700/50 flex items-center justify-between">
              <h2 className="text-xl font-bold">All Devices</h2>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-pink-500/30 rounded-lg text-sm">Device Management</button>
                <button className="px-4 py-2 text-gray-400 hover:text-white rounded-lg text-sm">System Overview</button>
              </div>
            </div>

            <table className="w-full text-sm">
              <thead className="bg-gray-900/50">
                <tr>
                  <th className="text-left px-6 py-4 font-medium text-gray-400">Device</th>
                  <th className="text-left px-6 py-4 font-medium text-gray-400">Status</th>
                  <th className="text-left px-6 py-4 font-medium text-gray-400">Network</th>
                  <th className="text-left px-6 py-4 font-medium text-gray-400">Assigned</th>
                  <th className="text-left px-6 py-4 font-medium text-gray-400">Last Seen</th>
                  <th className="text-left px-6 py-4 font-medium text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {devices.map((device) => (
                  <tr key={device.id} className="border-t border-gray-700/30 hover:bg-gray-700/20">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-pink-500/20 flex items-center justify-center border border-pink-500/20">
                          <Cpu className="w-5 h-5 text-pink-400" />
                        </div>
                        <div>
                          <p className="font-medium">{device.name}</p>
                          <p className="text-xs text-gray-500">{device.imei}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        device.status === 'online' ? 'bg-emerald-500/20 text-emerald-400' :
                        device.status === 'sleeping' ? 'bg-amber-500/20 text-amber-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>{device.status}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        {device.network === 'disconnected' ? <WifiOff className="w-4 h-4 text-red-400" /> : <Wifi className="w-4 h-4 text-emerald-400" />}
                        <span className="text-gray-300">{device.network}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-pink-400">{device.assigned || <span className="text-gray-500">Unassigned</span>}</td>
                    <td className="px-6 py-4 text-gray-400">{device.lastSeen}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-gray-700 rounded-lg"><BarChart3 className="w-4 h-4 text-gray-400" /></button>
                        <button className="p-2 hover:bg-gray-700 rounded-lg"><Cog className="w-4 h-4 text-gray-400" /></button>
                        <button className="px-3 py-1.5 bg-gradient-to-r from-red-500/20 to-rose-500/20 text-red-400 rounded-lg text-xs border border-red-500/30">Delete</button>
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

export default Design16;

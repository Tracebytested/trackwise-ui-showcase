import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Wrench, Cpu, Bell, Settings, Building2, HelpCircle, LogOut,
  Plus, Search, Moon, Wifi, WifiOff, ArrowLeft, RefreshCw, UserPlus, 
  Mail, BarChart3, Cog, Hexagon, ChevronRight
} from 'lucide-react';

// Soft Pastel - Gentle pastel colors with soft shadows
const Design20 = () => {
  const devices = [
    { id: 1, name: 'Nick FMC880', imei: '861076080724964', status: 'online', network: 'sim', assigned: 'kilaris56@gmail.com', lastSeen: '18/01/2026', satFix: 55, color: 'purple' },
    { id: 2, name: '2021 Mitsubishi Triton', imei: '865124071241444', status: 'sleeping', network: 'sleeping', assigned: 'kilaris10@hotmail.com', lastSeen: '11/01/2026', satFix: 0, color: 'amber' },
    { id: 3, name: 'Site Security Tower 1', imei: '861076080733585', status: 'online', network: 'sim', assigned: 'kilaris10@hotmail.com', lastSeen: '18/01/2026', satFix: 55, color: 'teal' },
    { id: 4, name: 'Caravan', imei: '865124071449005', status: 'offline', network: 'disconnected', assigned: 'kilaris10@hotmail.com', lastSeen: '14/12/2025', satFix: 17, color: 'rose' },
    { id: 5, name: 'FMC650 TEST', imei: '865124070737665', status: 'offline', network: 'disconnected', assigned: null, lastSeen: '26/11/2025', satFix: 31, color: 'blue' },
  ];

  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
    amber: { bg: 'bg-amber-100', text: 'text-amber-600', border: 'border-amber-200' },
    teal: { bg: 'bg-teal-100', text: 'text-teal-600', border: 'border-teal-200' },
    rose: { bg: 'bg-rose-100', text: 'text-rose-600', border: 'border-rose-200' },
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 text-gray-700">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-white/70 backdrop-blur-xl border-r border-purple-100 flex flex-col shadow-xl shadow-purple-100/50">
          <div className="p-6 border-b border-purple-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center shadow-lg shadow-purple-200">
                <Hexagon className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-lg text-gray-800">TRACE</span>
                <p className="text-xs text-purple-400">Installer Portal</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 p-4 space-y-2">
            {[
              { icon: Home, label: 'Dashboard', color: 'purple' },
              { icon: Wrench, label: 'Setup', color: 'pink' },
              { icon: Cpu, label: 'Devices', active: true, color: 'violet' },
              { icon: Bell, label: 'Alerts', badge: 3, color: 'rose' },
              { icon: Settings, label: 'Settings', color: 'indigo' },
              { icon: Building2, label: 'Company', color: 'blue' },
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm transition-all ${
                  item.active 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-200' 
                    : 'text-gray-500 hover:bg-purple-50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
                {item.badge && <span className={`ml-auto ${item.active ? 'bg-white/30' : 'bg-rose-400 text-white'} px-2 py-0.5 rounded-full text-xs`}>{item.badge}</span>}
              </button>
            ))}
          </nav>

          <div className="p-4 border-t border-purple-100">
            <Link to="/" className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm text-purple-500 hover:bg-purple-50">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Designs</span>
            </Link>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-1">Device Registry 🎀</h1>
              <p className="text-purple-400">Manage your devices with ease</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-300" />
                <input type="text" placeholder="Search devices..." className="pl-11 pr-4 py-3 bg-white/70 backdrop-blur-sm border border-purple-100 rounded-2xl text-sm w-64 focus:outline-none focus:ring-2 focus:ring-purple-300 shadow-lg shadow-purple-50 placeholder:text-purple-300" />
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-medium flex items-center gap-2 shadow-lg shadow-purple-200 hover:shadow-xl transition-all">
                <Plus className="w-5 h-5" />
                Add Device
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {[
              { label: 'Total Devices', value: '24', color: 'from-purple-400 to-violet-400' },
              { label: 'Online', value: '18', color: 'from-emerald-400 to-teal-400' },
              { label: 'Offline', value: '3', color: 'from-rose-400 to-pink-400' },
              { label: 'Unassigned', value: '5', color: 'from-amber-400 to-orange-400' },
            ].map((stat) => (
              <div key={stat.label} className="p-6 bg-white/70 backdrop-blur-sm rounded-3xl border border-purple-100 shadow-xl shadow-purple-50 hover:shadow-2xl transition-all">
                <p className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.value}</p>
                <p className="text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Device Cards */}
          <div className="grid grid-cols-2 gap-6">
            {devices.map((device) => {
              const colors = colorMap[device.color];
              return (
                <div key={device.id} className={`p-6 rounded-3xl bg-white/70 backdrop-blur-sm border ${colors.border} shadow-xl shadow-purple-50 hover:shadow-2xl transition-all group`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center`}>
                        <Cpu className={`w-7 h-7 ${colors.text}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">{device.name}</h3>
                        <p className="text-sm text-gray-400">{device.imei}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                      device.status === 'online' ? 'bg-emerald-100 text-emerald-600' :
                      device.status === 'sleeping' ? 'bg-amber-100 text-amber-600' :
                      'bg-rose-100 text-rose-600'
                    }`}>
                      {device.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1.5">
                      {device.network === 'disconnected' ? 
                        <WifiOff className="w-4 h-4 text-rose-400" /> : 
                        <Wifi className="w-4 h-4 text-emerald-400" />
                      }
                      <span className="text-gray-500">{device.network}</span>
                    </div>
                    <div className="text-gray-400">Sat: {device.satFix}</div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-1">Assigned To</p>
                    <p className={`text-sm ${colors.text} font-medium`}>{device.assigned || 'Unassigned'}</p>
                  </div>

                  <div className="flex items-center gap-2 pt-4 border-t border-purple-100">
                    <button className={`flex-1 py-2.5 ${colors.bg} ${colors.text} rounded-xl text-sm font-medium`}>Status</button>
                    <button className={`flex-1 py-2.5 ${colors.bg} ${colors.text} rounded-xl text-sm font-medium`}>Control</button>
                    <button className="flex-1 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl text-sm font-medium">
                      {device.assigned ? 'Reassign' : 'Assign'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Design20;

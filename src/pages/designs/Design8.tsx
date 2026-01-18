import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Wrench, Cpu, Bell, Settings, Building2, HelpCircle, LogOut,
  Plus, Search, Moon, Wifi, WifiOff, ArrowLeft, RefreshCw, UserPlus, 
  Mail, BarChart3, Cog, Sparkles, Star
} from 'lucide-react';

// Rose Gold Luxury - Premium rose gold installer theme
const Design8 = () => {
  const devices = [
    { id: 1, name: 'Nick FMC880', imei: '861076080724964', status: 'online', network: 'sim', assigned: 'kilaris56@gmail.com', lastSeen: '18/01/2026', satFix: 55 },
    { id: 2, name: '2021 Mitsubishi Triton', imei: '865124071241444', status: 'sleeping', network: 'sleeping', assigned: 'kilaris10@hotmail.com', lastSeen: '11/01/2026', satFix: 0 },
    { id: 3, name: 'Site Security Tower 1', imei: '861076080733585', status: 'online', network: 'sim', assigned: 'kilaris10@hotmail.com', lastSeen: '18/01/2026', satFix: 55 },
    { id: 4, name: 'Caravan', imei: '865124071449005', status: 'offline', network: 'disconnected', assigned: 'kilaris10@hotmail.com', lastSeen: '14/12/2025', satFix: 17 },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'online': return 'bg-gradient-to-r from-emerald-400 to-teal-400 text-white';
      case 'sleeping': return 'bg-gradient-to-r from-amber-300 to-orange-300 text-amber-900';
      case 'offline': return 'bg-gradient-to-r from-rose-300 to-pink-300 text-rose-900';
      default: return 'bg-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 text-gray-800">
      {/* Decorative */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-rose-200/40 to-pink-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-white/60 backdrop-blur-xl border-r border-rose-200/50 flex flex-col">
          <div className="p-6 border-b border-rose-200/50">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center shadow-lg shadow-rose-300/50">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-lg text-rose-900">TRACE</span>
                <p className="text-xs text-rose-400">Installer Portal</p>
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
              { icon: HelpCircle, label: 'Support' },
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  item.active 
                    ? 'bg-gradient-to-r from-rose-400 to-pink-400 text-white shadow-lg shadow-rose-300/50' 
                    : 'text-gray-600 hover:bg-rose-100/50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
                {item.badge && <span className={`ml-auto px-2 py-0.5 rounded-full text-xs ${item.active ? 'bg-white/20' : 'bg-rose-500 text-white'}`}>{item.badge}</span>}
              </button>
            ))}
          </nav>

          <div className="p-4 border-t border-rose-200/50 space-y-2">
            <Link to="/" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-rose-400 hover:bg-rose-100/50">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Designs</span>
            </Link>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-rose-100/50">
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Sign Out</span>
            </button>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-rose-900 mb-1">Device Management ✨</h1>
              <p className="text-rose-400">Register and configure your devices</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-rose-300" />
                <input type="text" placeholder="Search devices..." className="pl-11 pr-4 py-3 bg-white/60 backdrop-blur-sm border border-rose-200/50 rounded-2xl text-sm w-64 focus:outline-none focus:border-rose-400 placeholder:text-rose-300" />
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-2xl font-medium shadow-lg shadow-rose-300/50 flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Add Device
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {[
              { icon: Cpu, label: 'Total Devices', value: '24', color: 'from-rose-400 to-pink-400' },
              { icon: Wifi, label: 'Online', value: '18', color: 'from-emerald-400 to-teal-400' },
              { icon: WifiOff, label: 'Offline', value: '3', color: 'from-amber-400 to-orange-400' },
              { icon: UserPlus, label: 'Unassigned', value: '5', color: 'from-violet-400 to-purple-400' },
            ].map((stat) => (
              <div key={stat.label} className="p-6 rounded-3xl bg-white/60 backdrop-blur-sm border border-rose-200/50 hover:shadow-xl hover:shadow-rose-200/50 transition-all">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</p>
                <p className="text-sm text-rose-400">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Devices */}
          <div className="rounded-3xl bg-white/60 backdrop-blur-sm border border-rose-200/50 overflow-hidden">
            <div className="p-6 border-b border-rose-200/50 flex items-center justify-between">
              <h2 className="text-xl font-bold text-rose-900">Device Registry</h2>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-rose-400 text-white rounded-xl text-sm font-medium">Device Management</button>
                <button className="px-4 py-2 text-rose-400 border border-rose-200 rounded-xl text-sm">System Overview</button>
              </div>
            </div>

            <div className="divide-y divide-rose-100/50">
              {devices.map((device) => (
                <div key={device.id} className="p-6 flex items-center gap-6 hover:bg-rose-50/50 transition-colors">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
                    <Cpu className="w-8 h-8 text-rose-400" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-1">{device.name}</h3>
                    <p className="text-sm text-rose-400">{device.imei}</p>
                  </div>

                  <span className={`px-4 py-2 rounded-full text-xs font-medium ${getStatusStyle(device.status)}`}>
                    {device.status}
                  </span>

                  <div className="flex items-center gap-2">
                    {device.network === 'disconnected' ? <WifiOff className="w-4 h-4 text-rose-300" /> : <Wifi className="w-4 h-4 text-emerald-400" />}
                    <span className="text-sm text-gray-500">{device.network}</span>
                  </div>

                  <div className="w-40">
                    {device.assigned ? (
                      <p className="text-sm text-rose-500">{device.assigned}</p>
                    ) : (
                      <p className="text-sm text-gray-400">Unassigned</p>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="p-2.5 rounded-xl hover:bg-rose-100"><BarChart3 className="w-4 h-4 text-rose-400" /></button>
                    <button className="p-2.5 rounded-xl hover:bg-rose-100"><Cog className="w-4 h-4 text-rose-400" /></button>
                    <button className="p-2.5 rounded-xl hover:bg-rose-100"><Mail className="w-4 h-4 text-rose-400" /></button>
                    {device.assigned ? (
                      <button className="px-3 py-1.5 border border-rose-200 text-rose-500 rounded-xl text-xs">Reassign</button>
                    ) : (
                      <button className="px-3 py-1.5 bg-gradient-to-r from-emerald-400 to-teal-400 text-white rounded-xl text-xs">Assign</button>
                    )}
                    <button className="px-3 py-1.5 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-xl text-xs">Delete</button>
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

export default Design8;

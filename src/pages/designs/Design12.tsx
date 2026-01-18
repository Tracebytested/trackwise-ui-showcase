import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Wrench, Cpu, Bell, Settings, Building2,
  Plus, Search, Wifi, WifiOff, RefreshCw, UserPlus, 
  Mail, BarChart3, Cog, Server, Activity, Diamond
} from 'lucide-react';

// Sky Blue - Clean sidebar with light blue accents (inspired by Design5/Design13)
const Design12 = () => {
  const devices = [
    { id: 1, name: 'Nick FMC880', imei: '861076080724964', status: 'online', network: 'sim', assigned: 'kilaris56@gmail.com', lastSeen: '18/01/2026', satFix: 55 },
    { id: 2, name: '2021 Mitsubishi Triton', imei: '865124071241444', status: 'sleeping', network: 'sleeping', assigned: 'kilaris10@hotmail.com', lastSeen: '11/01/2026', satFix: 0 },
    { id: 3, name: 'Site Security Tower 1', imei: '861076080733585', status: 'online', network: 'sim', assigned: 'kilaris10@hotmail.com', lastSeen: '18/01/2026', satFix: 55 },
    { id: 4, name: 'Caravan', imei: '865124071449005', status: 'offline', network: 'disconnected', assigned: null, lastSeen: '14/12/2025', satFix: 17 },
  ];

  return (
    <div className="min-h-screen bg-sky-50 text-slate-900">
      {/* Top Bar */}
      <header className="bg-white border-b border-sky-200 sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 h-14">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center">
                <Diamond className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold">TRACE</span>
            </div>
            <Link to="/" className="text-sky-400 hover:text-sky-600 text-sm">← Back to Designs</Link>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-sky-100 rounded-lg"><Bell className="w-5 h-5 text-slate-500" /></button>
            <button className="p-2 hover:bg-sky-100 rounded-lg"><Settings className="w-5 h-5 text-slate-500" /></button>
            <button className="px-4 py-2 bg-sky-500 text-white rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-sky-600">
              <Plus className="w-4 h-4" />
              Add Device
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-56 min-h-[calc(100vh-56px)] bg-white border-r border-sky-200 p-4">
          <nav className="space-y-1">
            {[
              { icon: Home, label: 'Dashboard' },
              { icon: Wrench, label: 'Setup' },
              { icon: Server, label: 'Devices', active: true },
              { icon: Bell, label: 'Alerts', badge: 3 },
              { icon: Activity, label: 'Analytics' },
              { icon: Settings, label: 'Settings' },
              { icon: Building2, label: 'Company' },
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                  item.active ? 'bg-sky-100 text-sky-700 font-medium' : 'text-slate-600 hover:bg-sky-50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
                {item.badge && <span className="ml-auto bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">{item.badge}</span>}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Device Management</h1>
              <p className="text-slate-500">Manage {devices.length} registered devices</p>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input type="text" placeholder="Search devices..." className="pl-10 pr-4 py-2 border border-sky-200 rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white" />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Total', value: '24', bg: 'bg-sky-100', text: 'text-sky-700', icon: Cpu },
              { label: 'Online', value: '18', bg: 'bg-emerald-100', text: 'text-emerald-700', icon: Wifi },
              { label: 'Offline', value: '3', bg: 'bg-red-100', text: 'text-red-700', icon: WifiOff },
              { label: 'Unassigned', value: '5', bg: 'bg-amber-100', text: 'text-amber-700', icon: UserPlus },
            ].map((stat) => (
              <div key={stat.label} className={`p-4 rounded-xl ${stat.bg} flex items-center gap-4`}>
                <stat.icon className={`w-8 h-8 ${stat.text}`} />
                <div>
                  <p className={`text-2xl font-bold ${stat.text}`}>{stat.value}</p>
                  <p className="text-slate-600 text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl border border-sky-200 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-sky-50">
                <tr>
                  <th className="text-left px-6 py-3 font-medium text-slate-500">Device</th>
                  <th className="text-left px-6 py-3 font-medium text-slate-500">Status</th>
                  <th className="text-left px-6 py-3 font-medium text-slate-500">Network</th>
                  <th className="text-left px-6 py-3 font-medium text-slate-500">Assigned</th>
                  <th className="text-left px-6 py-3 font-medium text-slate-500">Last Seen</th>
                  <th className="text-left px-6 py-3 font-medium text-slate-500">Actions</th>
                </tr>
              </thead>
              <tbody>
                {devices.map((device) => (
                  <tr key={device.id} className="border-t border-sky-100 hover:bg-sky-50/50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center">
                          <Cpu className="w-5 h-5 text-sky-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">{device.name}</p>
                          <p className="text-xs text-slate-500">{device.imei}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                        device.status === 'online' ? 'bg-emerald-100 text-emerald-700' :
                        device.status === 'sleeping' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          device.status === 'online' ? 'bg-emerald-500' :
                          device.status === 'sleeping' ? 'bg-amber-500' : 'bg-red-500'
                        }`}></span>
                        {device.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        {device.network === 'disconnected' ? <WifiOff className="w-4 h-4 text-red-500" /> : <Wifi className="w-4 h-4 text-emerald-500" />}
                        <span className="text-slate-600">{device.network}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sky-600">{device.assigned || <span className="text-slate-400">—</span>}</td>
                    <td className="px-6 py-4 text-slate-500">{device.lastSeen}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <button className="p-1.5 hover:bg-sky-100 rounded"><BarChart3 className="w-4 h-4 text-slate-400" /></button>
                        <button className="p-1.5 hover:bg-sky-100 rounded"><Cog className="w-4 h-4 text-slate-400" /></button>
                        <button className="px-3 py-1.5 bg-red-50 text-red-600 rounded text-xs hover:bg-red-100">Delete</button>
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

export default Design12;

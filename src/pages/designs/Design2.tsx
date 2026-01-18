import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Wrench, Cpu, Bell, Settings, Building2, HelpCircle, LogOut,
  Plus, Search, CheckCircle2, XCircle, Moon, Wifi, WifiOff,
  ArrowLeft, RefreshCw, UserPlus, Mail, Trash2, BarChart3, Cog, ChevronLeft
} from 'lucide-react';

// Arctic Frost - Clean light installer theme
const Design2 = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const devices = [
    { id: 1, name: 'Nick FMC880', imei: '861076080724964', ajaxId: 'N/A', status: 'online', network: 'sim', assigned: 'kilaris56@gmail.com', lastSeen: '18/01/2026, 14:49:18', satFix: 55 },
    { id: 2, name: '2021 Mitsubishi Triton', imei: '865124071241444', ajaxId: '002F41A', status: 'sleeping', network: 'sleeping', assigned: 'kilaris10@hotmail.com', lastSeen: '11/01/2026, 19:26:01', satFix: 0 },
    { id: 3, name: 'Site Security Tower 1', imei: '861076080733585', ajaxId: 'N/A', status: 'online', network: 'sim', assigned: 'kilaris10@hotmail.com', lastSeen: '18/01/2026, 14:50:18', satFix: 55 },
    { id: 4, name: 'Caravan', imei: '865124071449005', ajaxId: '002F41A', status: 'offline', network: 'disconnected', assigned: 'kilaris10@hotmail.com', lastSeen: '14/12/2025, 23:59:09', satFix: 17 },
    { id: 5, name: 'Boat', imei: '865124070993946', ajaxId: '002F41A', status: 'offline', network: 'sim', assigned: 'kilaris10@hotmail.com', lastSeen: '18/01/2026, 14:47:20', satFix: 14 },
  ];

  const stats = [
    { label: 'Total Devices', value: '24', change: '+3 this week' },
    { label: 'Online', value: '18', change: '75% uptime' },
    { label: 'Needs Attention', value: '3', change: '2 critical' },
    { label: 'Unassigned', value: '5', change: 'Ready to ship' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex">
      {/* Sidebar */}
      <aside className={`${sidebarCollapsed ? 'w-16' : 'w-56'} bg-white border-r border-slate-200 flex flex-col transition-all`}>
        <div className="p-4 border-b border-slate-200 flex items-center justify-between">
          <div className={`flex items-center gap-2 ${sidebarCollapsed ? 'justify-center w-full' : ''}`}>
            <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white font-bold text-sm">T</div>
            {!sidebarCollapsed && <span className="font-bold text-slate-800">TRACE</span>}
          </div>
          <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} className="p-1 hover:bg-slate-100 rounded">
            <ChevronLeft className={`w-4 h-4 transition-transform ${sidebarCollapsed ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <nav className="flex-1 p-2 space-y-1">
          {[
            { icon: Home, label: 'Home' },
            { icon: Wrench, label: 'Setup' },
            { icon: Cpu, label: 'Devices', active: true },
            { icon: Bell, label: 'Alerts', badge: 3 },
            { icon: Settings, label: 'Account Settings' },
            { icon: Building2, label: 'Company Settings' },
            { icon: HelpCircle, label: 'Help' },
          ].map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                item.active ? 'bg-sky-50 text-sky-700 font-medium' : 'text-slate-600 hover:bg-slate-100'
              } ${sidebarCollapsed ? 'justify-center' : ''}`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!sidebarCollapsed && <span>{item.label}</span>}
              {!sidebarCollapsed && item.badge && (
                <span className="ml-auto bg-rose-500 text-white text-xs px-1.5 py-0.5 rounded-full">{item.badge}</span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-2 border-t border-slate-200 space-y-1">
          <Link to="/" className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:bg-slate-100 ${sidebarCollapsed ? 'justify-center' : ''}`}>
            <ArrowLeft className="w-5 h-5" />
            {!sidebarCollapsed && <span>Back</span>}
          </Link>
          <button className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:bg-slate-100 ${sidebarCollapsed ? 'justify-center' : ''}`}>
            <LogOut className="w-5 h-5" />
            {!sidebarCollapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="h-14 border-b border-slate-200 flex items-center justify-between px-6 bg-white">
          <h1 className="text-lg font-semibold text-slate-800">Device Management</h1>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input type="text" placeholder="Search..." className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm w-48 focus:outline-none focus:border-sky-400" />
            </div>
            <button className="px-4 py-2 bg-sky-600 text-white rounded-lg text-sm font-medium hover:bg-sky-700 flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add Device
            </button>
          </div>
        </header>

        <div className="flex-1 p-6 overflow-auto">
          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {stats.map((stat) => (
              <div key={stat.label} className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
                <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                <p className="text-sm text-slate-500">{stat.label}</p>
                <p className="text-xs text-slate-400 mt-1">{stat.change}</p>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-6">
            <button className="px-4 py-2 bg-sky-600 text-white rounded-lg text-sm font-medium">Device Management</button>
            <button className="px-4 py-2 bg-white text-slate-600 rounded-lg text-sm border border-slate-200 hover:bg-slate-50">System Overview</button>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-slate-600">Device</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-600">AJAX Hub</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-600">Status</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-600">Network</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-600">Assigned To</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-600">Last Seen</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-600">Sat</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {devices.map((device) => (
                  <tr key={device.id} className="border-t border-slate-100 hover:bg-slate-50">
                    <td className="px-4 py-4">
                      <p className="font-medium text-slate-800">{device.name}</p>
                      <p className="text-xs text-slate-400">{device.imei}</p>
                    </td>
                    <td className="px-4 py-4 text-slate-500">{device.ajaxId}</td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                        device.status === 'online' ? 'bg-emerald-100 text-emerald-700' :
                        device.status === 'sleeping' ? 'bg-amber-100 text-amber-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {device.status === 'online' ? <CheckCircle2 className="w-3 h-3" /> :
                         device.status === 'sleeping' ? <Moon className="w-3 h-3" /> :
                         <XCircle className="w-3 h-3" />}
                        {device.status}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-1.5">
                        {device.network === 'disconnected' ? <WifiOff className="w-4 h-4 text-red-500" /> : <Wifi className="w-4 h-4 text-emerald-500" />}
                        <span className={device.network === 'disconnected' ? 'text-red-500' : 'text-slate-600'}>{device.network}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className="text-sky-600">{device.assigned}</span>
                    </td>
                    <td className="px-4 py-4 text-slate-500 text-xs">{device.lastSeen}</td>
                    <td className="px-4 py-4 text-slate-600">{device.satFix}</td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-1">
                        <button className="p-1.5 hover:bg-slate-100 rounded" title="Status"><BarChart3 className="w-4 h-4 text-slate-400" /></button>
                        <button className="p-1.5 hover:bg-slate-100 rounded" title="Control"><Cog className="w-4 h-4 text-slate-400" /></button>
                        <button className="p-1.5 hover:bg-slate-100 rounded" title="Reassign"><RefreshCw className="w-4 h-4 text-slate-400" /></button>
                        <button className="px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-xs">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Design2;

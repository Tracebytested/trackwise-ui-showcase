import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Wrench, Cpu, Bell, Settings, Building2, HelpCircle, LogOut,
  Plus, Search, Moon, Wifi, WifiOff, ArrowLeft, RefreshCw, UserPlus, 
  Mail, BarChart3, Cog, LayoutDashboard, Server, Activity
} from 'lucide-react';

// Dashboard Tabs - Multi-tab interface with detailed views
const Design13 = () => {
  const [activeTab, setActiveTab] = useState<'devices' | 'overview' | 'analytics'>('devices');

  const devices = [
    { id: 1, name: 'Nick FMC880', imei: '861076080724964', status: 'online', network: 'sim', assigned: 'kilaris56@gmail.com', lastSeen: '18/01/2026', satFix: 55 },
    { id: 2, name: '2021 Mitsubishi Triton', imei: '865124071241444', status: 'sleeping', network: 'sleeping', assigned: 'kilaris10@hotmail.com', lastSeen: '11/01/2026', satFix: 0 },
    { id: 3, name: 'Site Security Tower 1', imei: '861076080733585', status: 'online', network: 'sim', assigned: 'kilaris10@hotmail.com', lastSeen: '18/01/2026', satFix: 55 },
    { id: 4, name: 'Caravan', imei: '865124071449005', status: 'offline', network: 'disconnected', assigned: 'kilaris10@hotmail.com', lastSeen: '14/12/2025', satFix: 17 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Top Bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 h-14">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                <LayoutDashboard className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold">TRACE</span>
            </div>
            <Link to="/" className="text-gray-400 hover:text-gray-600 text-sm">← Back to Designs</Link>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-lg"><Bell className="w-5 h-5 text-gray-500" /></button>
            <button className="p-2 hover:bg-gray-100 rounded-lg"><Settings className="w-5 h-5 text-gray-500" /></button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add Device
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-56 min-h-[calc(100vh-56px)] bg-white border-r border-gray-200 p-4">
          <nav className="space-y-1">
            {[
              { icon: Home, label: 'Dashboard' },
              { icon: Wrench, label: 'Setup' },
              { icon: Server, label: 'Devices', active: true },
              { icon: Bell, label: 'Alerts', badge: 3 },
              { icon: Activity, label: 'Analytics' },
              { icon: Settings, label: 'Settings' },
              { icon: Building2, label: 'Company' },
              { icon: HelpCircle, label: 'Help' },
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                  item.active ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-gray-600 hover:bg-gray-50'
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
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Device Management</h1>
              <p className="text-gray-500">Manage {devices.length} registered devices</p>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input type="text" placeholder="Search devices..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Total', value: '24', bg: 'bg-indigo-50', text: 'text-indigo-700', icon: Cpu },
              { label: 'Online', value: '18', bg: 'bg-emerald-50', text: 'text-emerald-700', icon: Wifi },
              { label: 'Offline', value: '3', bg: 'bg-red-50', text: 'text-red-700', icon: WifiOff },
              { label: 'Unassigned', value: '5', bg: 'bg-amber-50', text: 'text-amber-700', icon: UserPlus },
            ].map((stat) => (
              <div key={stat.label} className={`p-4 rounded-xl ${stat.bg} flex items-center gap-4`}>
                <stat.icon className={`w-8 h-8 ${stat.text}`} />
                <div>
                  <p className={`text-2xl font-bold ${stat.text}`}>{stat.value}</p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="border-b border-gray-200">
              <div className="flex">
                {[
                  { id: 'devices', label: 'Device Management', icon: Cpu },
                  { id: 'overview', label: 'System Overview', icon: BarChart3 },
                  { id: 'analytics', label: 'Analytics', icon: Activity },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === tab.id 
                        ? 'border-indigo-600 text-indigo-600' 
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Table */}
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-6 py-3 font-medium text-gray-500">Device</th>
                  <th className="text-left px-6 py-3 font-medium text-gray-500">Status</th>
                  <th className="text-left px-6 py-3 font-medium text-gray-500">Network</th>
                  <th className="text-left px-6 py-3 font-medium text-gray-500">Assigned</th>
                  <th className="text-left px-6 py-3 font-medium text-gray-500">Last Seen</th>
                  <th className="text-left px-6 py-3 font-medium text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody>
                {devices.map((device) => (
                  <tr key={device.id} className="border-t border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                          <Cpu className="w-5 h-5 text-indigo-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{device.name}</p>
                          <p className="text-xs text-gray-500">{device.imei}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                        device.status === 'online' ? 'bg-emerald-100 text-emerald-700' :
                        device.status === 'sleeping' ? 'bg-amber-100 text-amber-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          device.status === 'online' ? 'bg-emerald-500' :
                          device.status === 'sleeping' ? 'bg-amber-500' :
                          'bg-red-500'
                        }`}></span>
                        {device.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        {device.network === 'disconnected' ? <WifiOff className="w-4 h-4 text-red-500" /> : <Wifi className="w-4 h-4 text-emerald-500" />}
                        <span className="text-gray-600">{device.network}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-indigo-600">{device.assigned || <span className="text-gray-400">—</span>}</td>
                    <td className="px-6 py-4 text-gray-500">{device.lastSeen}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <button className="p-1.5 hover:bg-gray-100 rounded"><BarChart3 className="w-4 h-4 text-gray-400" /></button>
                        <button className="p-1.5 hover:bg-gray-100 rounded"><Cog className="w-4 h-4 text-gray-400" /></button>
                        <button className="p-1.5 hover:bg-gray-100 rounded"><Mail className="w-4 h-4 text-gray-400" /></button>
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

export default Design13;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Wrench, Cpu, Bell, Settings, Building2, HelpCircle, LogOut,
  Plus, Search, CheckCircle2, XCircle, Moon, Wifi, WifiOff,
  ArrowLeft, RefreshCw, UserPlus, Mail, Trash2, BarChart3, Cog, Leaf
} from 'lucide-react';

// Emerald Forest - Dark green installer theme
const Design3 = () => {
  const [activeTab, setActiveTab] = useState<'devices' | 'overview'>('devices');

  const devices = [
    { id: 1, name: 'Nick FMC880', imei: '861076080724964', status: 'online', network: 'connected', assigned: 'kilaris56@gmail.com', lastSeen: '18/01/2026, 14:49:18', health: 98 },
    { id: 2, name: '2021 Mitsubishi Triton', imei: '865124071241444', status: 'sleeping', network: 'sleeping', assigned: 'kilaris10@hotmail.com', lastSeen: '11/01/2026, 19:26:01', health: 85 },
    { id: 3, name: 'Site Security Tower 1', imei: '861076080733585', status: 'online', network: 'connected', assigned: 'kilaris10@hotmail.com', lastSeen: '18/01/2026, 14:50:18', health: 100 },
    { id: 4, name: 'Caravan', imei: '865124071449005', status: 'offline', network: 'disconnected', assigned: 'kilaris10@hotmail.com', lastSeen: '14/12/2025, 23:59:09', health: 45 },
    { id: 5, name: 'FMC650 TEST', imei: '865124070737665', status: 'offline', network: 'disconnected', assigned: null, lastSeen: '26/11/2025, 01:23:44', health: 23 },
  ];

  return (
    <div className="min-h-screen bg-[#0d1f17] text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-[#132920] to-[#0d1f17] border-r border-emerald-900/30 flex flex-col">
        <div className="p-5 border-b border-emerald-900/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold">TRACE</span>
              <p className="text-xs text-emerald-400/60">Installer Portal</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {[
            { icon: Home, label: 'Dashboard' },
            { icon: Wrench, label: 'Setup Wizard' },
            { icon: Cpu, label: 'Device Registry', active: true },
            { icon: Bell, label: 'System Alerts', badge: 5 },
            { icon: Settings, label: 'Account' },
            { icon: Building2, label: 'Organization' },
            { icon: HelpCircle, label: 'Support' },
          ].map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all ${
                item.active 
                  ? 'bg-gradient-to-r from-emerald-600/30 to-teal-600/20 text-emerald-300 border border-emerald-500/30' 
                  : 'text-gray-400 hover:bg-emerald-900/20 hover:text-emerald-300'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
              {item.badge && <span className="ml-auto bg-red-500/80 text-xs px-2 py-0.5 rounded-full">{item.badge}</span>}
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-emerald-900/30 space-y-1">
          <Link to="/" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-emerald-400 hover:bg-emerald-900/30">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Designs</span>
          </Link>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-400 hover:bg-emerald-900/20">
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col">
        <header className="h-16 border-b border-emerald-900/30 flex items-center justify-between px-6 bg-[#132920]/50">
          <div>
            <h1 className="text-xl font-bold">Device Registry</h1>
            <p className="text-sm text-emerald-400/60">Register, configure, and monitor devices</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500/50" />
              <input type="text" placeholder="Search devices..." className="pl-10 pr-4 py-2.5 bg-[#1a3328] border border-emerald-800/30 rounded-xl text-sm w-64 focus:outline-none focus:border-emerald-500" />
            </div>
            <button className="px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl text-sm font-medium flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Register Device
            </button>
          </div>
        </header>

        {/* Tabs */}
        <div className="border-b border-emerald-900/30 px-6 flex gap-2 py-2">
          <button 
            onClick={() => setActiveTab('devices')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'devices' ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/30' : 'text-gray-400 hover:text-emerald-300'}`}
          >
            Device Management
          </button>
          <button 
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'overview' ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/30' : 'text-gray-400 hover:text-emerald-300'}`}
          >
            System Overview
          </button>
        </div>

        <div className="flex-1 p-6 overflow-auto">
          {/* Device Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            {devices.map((device) => (
              <div key={device.id} className="p-5 rounded-2xl bg-gradient-to-br from-[#132920] to-[#0d1f17] border border-emerald-800/20 hover:border-emerald-600/30 transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600/30 to-teal-600/30 flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-bold">{device.name}</h3>
                      <p className="text-xs text-emerald-400/60">{device.imei}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                    device.status === 'online' ? 'bg-emerald-400/10 text-emerald-400 border-emerald-400/30' :
                    device.status === 'sleeping' ? 'bg-yellow-400/10 text-yellow-400 border-yellow-400/30' :
                    'bg-red-400/10 text-red-400 border-red-400/30'
                  }`}>
                    {device.status}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-emerald-400/60 mb-1">Network</p>
                    <div className="flex items-center gap-1.5">
                      {device.network === 'disconnected' ? <WifiOff className="w-4 h-4 text-red-400" /> : <Wifi className="w-4 h-4 text-emerald-400" />}
                      <span className="text-sm">{device.network}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-emerald-400/60 mb-1">Health</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-emerald-900/30 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${device.health > 70 ? 'bg-emerald-500' : device.health > 40 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{ width: `${device.health}%` }}></div>
                      </div>
                      <span className="text-sm">{device.health}%</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-emerald-400/60 mb-1">Last Seen</p>
                    <p className="text-sm">{device.lastSeen.split(',')[0]}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-emerald-800/20">
                  <div>
                    {device.assigned ? (
                      <p className="text-sm text-teal-400">{device.assigned}</p>
                    ) : (
                      <span className="text-sm text-gray-500">Unassigned</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-emerald-800/30 rounded-lg"><BarChart3 className="w-4 h-4 text-emerald-400" /></button>
                    <button className="p-2 hover:bg-emerald-800/30 rounded-lg"><Cog className="w-4 h-4 text-emerald-400" /></button>
                    <button className="p-2 hover:bg-emerald-800/30 rounded-lg"><Mail className="w-4 h-4 text-emerald-400" /></button>
                    {device.assigned ? (
                      <button className="px-3 py-1.5 bg-teal-600/20 text-teal-400 rounded-lg text-xs border border-teal-500/30">Reassign</button>
                    ) : (
                      <button className="px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-xs flex items-center gap-1"><UserPlus className="w-3 h-3" /> Assign</button>
                    )}
                    <button className="px-3 py-1.5 bg-red-600/20 text-red-400 rounded-lg text-xs border border-red-500/30">Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Design3;

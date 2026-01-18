import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Wrench, Cpu, Bell, Settings, Building2, HelpCircle, LogOut,
  Plus, Search, Moon, Wifi, WifiOff, ArrowLeft, RefreshCw, UserPlus, 
  Mail, BarChart3, Cog, Waves, Anchor, Ship
} from 'lucide-react';

// Ocean Breeze - Calm blue installer theme
const Design10 = () => {
  const devices = [
    { id: 1, name: 'Nick FMC880', imei: '861076080724964', status: 'online', network: 'sim', assigned: 'kilaris56@gmail.com', lastSeen: '18/01/2026', satFix: 55 },
    { id: 2, name: '2021 Mitsubishi Triton', imei: '865124071241444', status: 'sleeping', network: 'sleeping', assigned: 'kilaris10@hotmail.com', lastSeen: '11/01/2026', satFix: 0 },
    { id: 3, name: 'Site Security Tower 1', imei: '861076080733585', status: 'online', network: 'sim', assigned: 'kilaris10@hotmail.com', lastSeen: '18/01/2026', satFix: 55 },
    { id: 4, name: 'Caravan', imei: '865124071449005', status: 'offline', network: 'disconnected', assigned: 'kilaris10@hotmail.com', lastSeen: '14/12/2025', satFix: 17 },
    { id: 5, name: 'FMC650 TEST', imei: '865124070737665', status: 'offline', network: 'disconnected', assigned: null, lastSeen: '26/11/2025', satFix: 31 },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'online': return 'bg-teal-500/20 text-teal-300 border-teal-500/30';
      case 'sleeping': return 'bg-sky-500/20 text-sky-300 border-sky-500/30';
      case 'offline': return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
      default: return 'bg-slate-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" className="text-blue-500" fillOpacity="0.3" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="relative flex">
        {/* Sidebar */}
        <aside className="w-60 min-h-screen bg-slate-900/50 backdrop-blur-xl border-r border-blue-500/20 flex flex-col">
          <div className="p-5 border-b border-blue-500/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <Waves className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold">TRACE</span>
                <p className="text-xs text-blue-400/60">Installer Portal</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 p-3 space-y-1">
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
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all ${
                  item.active 
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30' 
                    : 'text-blue-300/70 hover:bg-blue-500/10 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
                {item.badge && <span className="ml-auto bg-cyan-500/30 text-cyan-300 text-xs px-2 py-0.5 rounded-full">{item.badge}</span>}
              </button>
            ))}
          </nav>

          <div className="p-3 border-t border-blue-500/20 space-y-1">
            <Link to="/" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-blue-400 hover:bg-blue-500/10">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Designs</span>
            </Link>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-blue-300/70 hover:bg-blue-500/10">
              <LogOut className="w-5 h-5" />
              <span>Sign Out</span>
            </button>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-1">
                Device Registry
              </h1>
              <p className="text-blue-400/60">Register, configure, and assign devices</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400/50" />
                <input type="text" placeholder="Search devices..." className="pl-11 pr-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl text-sm w-64 focus:outline-none focus:border-cyan-500/50" />
              </div>
              <button className="px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-medium shadow-lg shadow-cyan-500/30 flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Add Device
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {[
              { icon: Cpu, label: 'Total Devices', value: '24' },
              { icon: Wifi, label: 'Online', value: '18' },
              { icon: WifiOff, label: 'Offline', value: '3' },
              { icon: UserPlus, label: 'Unassigned', value: '5' },
            ].map((stat) => (
              <div key={stat.label} className="p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-blue-500/20 hover:border-cyan-500/40 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 flex items-center justify-center group-hover:from-cyan-500/50 group-hover:to-blue-500/50">
                    <stat.icon className="w-6 h-6 text-cyan-300" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-blue-400/60">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tabs + Table */}
          <div className="rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-blue-500/20 overflow-hidden">
            <div className="p-5 border-b border-blue-500/20 flex items-center justify-between">
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg text-sm font-medium border border-cyan-500/30">Device Management</button>
                <button className="px-4 py-2 text-blue-300/60 rounded-lg text-sm hover:text-white">System Overview</button>
              </div>
            </div>

            <div className="divide-y divide-blue-500/10">
              {devices.map((device) => (
                <div key={device.id} className="p-5 flex items-center gap-5 hover:bg-blue-500/5 transition-colors group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/20">
                    <Cpu className="w-7 h-7 text-cyan-400" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-medium text-white mb-1">{device.name}</h3>
                    <p className="text-sm text-blue-400/60">{device.imei}</p>
                  </div>

                  <span className={`px-4 py-1.5 rounded-full text-xs font-medium border ${getStatusStyle(device.status)}`}>
                    {device.status}
                  </span>

                  <div className="flex items-center gap-2">
                    {device.network === 'disconnected' ? <WifiOff className="w-4 h-4 text-slate-400" /> : <Wifi className="w-4 h-4 text-cyan-400" />}
                    <span className="text-sm text-blue-300/60">{device.network}</span>
                  </div>

                  <div className="w-40">
                    {device.assigned ? (
                      <span className="text-cyan-400">{device.assigned}</span>
                    ) : (
                      <span className="text-slate-500">Unassigned</span>
                    )}
                  </div>

                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 rounded-lg hover:bg-cyan-500/20"><BarChart3 className="w-4 h-4 text-cyan-400" /></button>
                    <button className="p-2 rounded-lg hover:bg-cyan-500/20"><Cog className="w-4 h-4 text-cyan-400" /></button>
                    <button className="p-2 rounded-lg hover:bg-cyan-500/20"><Mail className="w-4 h-4 text-cyan-400" /></button>
                    {device.assigned ? (
                      <button className="px-3 py-1.5 border border-cyan-500/30 text-cyan-400 rounded-lg text-xs">Reassign</button>
                    ) : (
                      <button className="px-3 py-1.5 bg-cyan-500 text-white rounded-lg text-xs">Assign</button>
                    )}
                    <button className="px-3 py-1.5 bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg text-xs">Delete</button>
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

export default Design10;

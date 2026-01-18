import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Wrench, Cpu, Bell, Settings, Building2, HelpCircle, LogOut,
  Plus, Search, Moon, Wifi, WifiOff, ArrowLeft, RefreshCw, UserPlus, 
  Mail, BarChart3, Cog, PanelLeftClose, ChevronRight
} from 'lucide-react';

// Split View - Master-detail layout
const Design14 = () => {
  const [selectedDevice, setSelectedDevice] = useState(0);

  const devices = [
    { id: 1, name: 'Nick FMC880', imei: '861076080724964', model: 'FMC880', status: 'online', network: 'sim', assigned: 'kilaris56@gmail.com', lastSeen: '18/01/2026, 14:49:18', satFix: 55, ajaxId: 'N/A' },
    { id: 2, name: '2021 Mitsubishi Triton', imei: '865124071241444', model: 'FMC003', status: 'sleeping', network: 'sleeping', assigned: 'kilaris10@hotmail.com', lastSeen: '11/01/2026, 19:26:01', satFix: 0, ajaxId: '002F41A' },
    { id: 3, name: 'Site Security Tower 1', imei: '861076080733585', model: 'FMC650', status: 'online', network: 'sim', assigned: 'kilaris10@hotmail.com', lastSeen: '18/01/2026, 14:50:18', satFix: 55, ajaxId: 'N/A' },
    { id: 4, name: 'Caravan', imei: '865124071449005', model: 'FMC003', status: 'offline', network: 'disconnected', assigned: 'kilaris10@hotmail.com', lastSeen: '14/12/2025, 23:59:09', satFix: 17, ajaxId: '002F41A' },
  ];

  const selected = devices[selectedDevice];

  return (
    <div className="min-h-screen bg-slate-900 text-white flex">
      {/* Narrow Sidebar */}
      <aside className="w-16 bg-slate-950 border-r border-slate-800 flex flex-col items-center py-4">
        <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center mb-6">
          <PanelLeftClose className="w-5 h-5" />
        </div>
        
        <nav className="flex-1 flex flex-col items-center gap-2">
          {[Home, Wrench, Cpu, Bell, Settings, Building2].map((Icon, i) => (
            <button key={i} className={`w-10 h-10 rounded-xl flex items-center justify-center ${i === 2 ? 'bg-indigo-600' : 'text-slate-500 hover:bg-slate-800'}`}>
              <Icon className="w-5 h-5" />
            </button>
          ))}
        </nav>

        <Link to="/" className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 hover:bg-slate-800">
          <ArrowLeft className="w-5 h-5" />
        </Link>
      </aside>

      {/* Device List */}
      <div className="w-80 bg-slate-900 border-r border-slate-800 flex flex-col">
        <div className="p-4 border-b border-slate-800">
          <h2 className="font-bold mb-3">Devices ({devices.length})</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input type="text" placeholder="Search..." className="w-full pl-9 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm focus:outline-none focus:border-indigo-500" />
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          {devices.map((device, i) => (
            <button
              key={device.id}
              onClick={() => setSelectedDevice(i)}
              className={`w-full p-4 text-left border-b border-slate-800 transition-colors ${selectedDevice === i ? 'bg-indigo-600/20 border-l-2 border-l-indigo-500' : 'hover:bg-slate-800'}`}
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium truncate">{device.name}</h3>
                <span className={`w-2 h-2 rounded-full ${
                  device.status === 'online' ? 'bg-emerald-500' :
                  device.status === 'sleeping' ? 'bg-amber-500' :
                  'bg-red-500'
                }`}></span>
              </div>
              <p className="text-xs text-slate-500">{device.imei}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className={`text-xs px-2 py-0.5 rounded ${
                  device.status === 'online' ? 'bg-emerald-500/20 text-emerald-400' :
                  device.status === 'sleeping' ? 'bg-amber-500/20 text-amber-400' :
                  'bg-red-500/20 text-red-400'
                }`}>{device.status}</span>
                <span className="text-xs text-slate-500">{device.model}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="p-4 border-t border-slate-800">
          <button className="w-full py-2.5 bg-indigo-600 rounded-lg text-sm font-medium flex items-center justify-center gap-2">
            <Plus className="w-4 h-4" />
            Add Device
          </button>
        </div>
      </div>

      {/* Detail Panel */}
      <main className="flex-1 flex flex-col">
        <header className="h-14 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-600/20 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <h1 className="font-bold">{selected.name}</h1>
              <p className="text-xs text-slate-500">{selected.imei}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-slate-800 rounded-lg text-sm flex items-center gap-2"><RefreshCw className="w-4 h-4" /> Refresh</button>
            <button className="px-4 py-2 bg-red-600/20 text-red-400 rounded-lg text-sm">Delete</button>
          </div>
        </header>

        <div className="flex-1 p-6 overflow-auto">
          {/* Status Section */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-slate-800 border border-slate-700">
              <p className="text-sm text-slate-500 mb-1">Status</p>
              <span className={`inline-flex items-center gap-2 text-lg font-bold ${
                selected.status === 'online' ? 'text-emerald-400' :
                selected.status === 'sleeping' ? 'text-amber-400' :
                'text-red-400'
              }`}>
                <span className={`w-2 h-2 rounded-full ${
                  selected.status === 'online' ? 'bg-emerald-400' :
                  selected.status === 'sleeping' ? 'bg-amber-400' :
                  'bg-red-400'
                }`}></span>
                {selected.status.toUpperCase()}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-slate-800 border border-slate-700">
              <p className="text-sm text-slate-500 mb-1">Network</p>
              <div className="flex items-center gap-2">
                {selected.network === 'disconnected' ? <WifiOff className="w-5 h-5 text-red-400" /> : <Wifi className="w-5 h-5 text-emerald-400" />}
                <span className="text-lg font-bold">{selected.network}</span>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-slate-800 border border-slate-700">
              <p className="text-sm text-slate-500 mb-1">Satellite Fix</p>
              <p className="text-lg font-bold">{selected.satFix}</p>
            </div>
          </div>

          {/* Details */}
          <div className="rounded-xl bg-slate-800 border border-slate-700 divide-y divide-slate-700">
            <h3 className="px-6 py-4 font-semibold">Device Details</h3>
            {[
              { label: 'IMEI', value: selected.imei },
              { label: 'Model', value: selected.model },
              { label: 'AJAX Hub ID', value: selected.ajaxId },
              { label: 'Last Seen', value: selected.lastSeen },
              { label: 'Assigned User', value: selected.assigned },
            ].map((row) => (
              <div key={row.label} className="px-6 py-3 flex items-center justify-between">
                <span className="text-slate-500">{row.label}</span>
                <span className={row.label === 'Assigned User' ? 'text-indigo-400' : ''}>{row.value}</span>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-6 grid grid-cols-4 gap-4">
            <button className="p-4 rounded-xl bg-slate-800 border border-slate-700 hover:border-indigo-500 transition-colors text-center">
              <BarChart3 className="w-6 h-6 mx-auto mb-2 text-indigo-400" />
              <span className="text-sm">Status</span>
            </button>
            <button className="p-4 rounded-xl bg-slate-800 border border-slate-700 hover:border-indigo-500 transition-colors text-center">
              <Cog className="w-6 h-6 mx-auto mb-2 text-indigo-400" />
              <span className="text-sm">Control</span>
            </button>
            <button className="p-4 rounded-xl bg-slate-800 border border-slate-700 hover:border-indigo-500 transition-colors text-center">
              <Mail className="w-6 h-6 mx-auto mb-2 text-indigo-400" />
              <span className="text-sm">Request</span>
            </button>
            <button className="p-4 rounded-xl bg-slate-800 border border-slate-700 hover:border-indigo-500 transition-colors text-center">
              <UserPlus className="w-6 h-6 mx-auto mb-2 text-indigo-400" />
              <span className="text-sm">Reassign</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Design14;

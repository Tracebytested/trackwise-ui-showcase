import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Wrench, Cpu, Bell, Settings, Building2, HelpCircle, LogOut,
  Plus, Search, MoreVertical, CheckCircle2, XCircle, Moon, Wifi, WifiOff,
  ArrowLeft, RefreshCw, UserPlus, Mail, Trash2, BarChart3, Cog, MapPin
} from 'lucide-react';

// Midnight Aurora - Dark purple/cyan installer theme
const Design1 = () => {
  const [activeTab, setActiveTab] = useState<'devices' | 'overview'>('devices');

  const devices = [
    { id: 1, name: 'Nick FMC880', imei: '861076080724964', ajaxId: 'N/A', status: 'online', statusText: 'AJAX Not Configured', network: 'sim', assigned: 'kilaris56@gmail.com', lastSeen: '18/01/2026, 14:49:18', satFix: 55 },
    { id: 2, name: '2021 Mitsubishi Triton', imei: '865124071241444', ajaxId: '002F41A', status: 'sleeping', statusText: 'Sleep Mode Active', network: 'sleeping', assigned: 'kilaris10@hotmail.com', lastSeen: '11/01/2026, 19:26:01', satFix: 0 },
    { id: 3, name: 'Site Security Tower 1', imei: '861076080733585', ajaxId: 'N/A', status: 'online', statusText: 'AJAX Not Configured', network: 'sim', assigned: 'kilaris10@hotmail.com', lastSeen: '18/01/2026, 14:50:18', satFix: 55 },
    { id: 4, name: 'Caravan', imei: '865124071449005', ajaxId: '002F41A', status: 'offline', statusText: '', network: 'disconnected', assigned: 'kilaris10@hotmail.com', lastSeen: '14/12/2025, 23:59:09', satFix: 17 },
    { id: 5, name: 'Boat', imei: '865124070993946', ajaxId: '002F41A', status: 'offline', statusText: '', network: 'sim', assigned: 'kilaris10@hotmail.com', lastSeen: '18/01/2026, 14:47:20', satFix: 14 },
    { id: 6, name: 'FMC650 TEST', imei: '865124070737665', ajaxId: '002F41A', status: 'offline', statusText: '', network: 'disconnected', assigned: null, lastSeen: '26/11/2025, 01:23:44', satFix: 31 },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'sleeping': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'offline': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getNetworkIcon = (network: string) => {
    if (network === 'disconnected') return <WifiOff className="w-4 h-4 text-red-400" />;
    if (network === 'sleeping') return <Moon className="w-4 h-4 text-yellow-400" />;
    return <Wifi className="w-4 h-4 text-green-400" />;
  };

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white flex">
      {/* Sidebar */}
      <aside className="w-56 bg-gradient-to-b from-[#12122a] to-[#0a0a1a] border-r border-purple-900/30 flex flex-col">
        <div className="p-4 border-b border-purple-900/30">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center font-bold text-sm">
              TR
            </div>
            <div>
              <span className="font-bold text-sm">TRACE</span>
              <p className="text-[10px] text-purple-400">Installer Dashboard</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {[
            { icon: Home, label: 'Home' },
            { icon: Wrench, label: 'Setup' },
            { icon: Cpu, label: 'Devices', active: true },
            { icon: Bell, label: 'Alerts' },
            { icon: Settings, label: 'Account Settings' },
            { icon: Building2, label: 'Company Settings' },
            { icon: HelpCircle, label: 'Help' },
          ].map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                item.active 
                  ? 'bg-gradient-to-r from-purple-600/20 to-cyan-600/20 text-purple-300 border-l-2 border-purple-500' 
                  : 'text-gray-400 hover:bg-purple-900/20 hover:text-white'
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-purple-900/30 space-y-1">
          <Link to="/" className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:bg-purple-900/20 hover:text-white">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Designs</span>
          </Link>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:bg-purple-900/20 hover:text-white">
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-14 border-b border-purple-900/30 flex items-center justify-between px-6 bg-[#12122a]/50">
          <div>
            <h1 className="text-lg font-bold">Device Management</h1>
            <p className="text-xs text-gray-400">Manage your devices and monitor system performance ({devices.length} devices)</p>
          </div>
          <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium flex items-center gap-2">
            <HelpCircle className="w-4 h-4" />
            Get Support
          </button>
        </header>

        {/* Tabs */}
        <div className="border-b border-purple-900/30 px-6">
          <div className="flex gap-8">
            <button 
              onClick={() => setActiveTab('devices')}
              className={`py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'devices' ? 'border-purple-500 text-purple-400' : 'border-transparent text-gray-400 hover:text-white'}`}
            >
              Device Management
            </button>
            <button 
              onClick={() => setActiveTab('overview')}
              className={`py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'overview' ? 'border-purple-500 text-purple-400' : 'border-transparent text-gray-400 hover:text-white'}`}
            >
              System Overview
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-purple-400" />
              Enhanced Device Management
            </h2>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input type="text" placeholder="Search devices..." className="pl-9 pr-4 py-2 bg-[#1a1a35] border border-purple-900/30 rounded-lg text-sm w-64 focus:outline-none focus:border-purple-500" />
              </div>
              <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg text-sm font-medium flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add Device
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="rounded-xl border border-purple-900/20 overflow-hidden bg-[#12122a]/50">
            <table className="w-full text-sm">
              <thead className="bg-purple-900/20">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-gray-400">Device Details</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-400">AJAX Hub ID</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-400">Real-time Status</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-400">Network</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-400">Assigned User</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-400">Last Seen</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-400">Sat Fix</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {devices.map((device) => (
                  <tr key={device.id} className="border-t border-purple-900/10 hover:bg-purple-900/10">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <div>
                          <p className="font-medium">{device.name}</p>
                          <p className="text-xs text-gray-500">{device.imei}</p>
                        </div>
                        <button className="text-gray-500 hover:text-purple-400"><Wrench className="w-3 h-3" /></button>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-gray-400">{device.ajaxId}</td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded text-xs border ${getStatusBadge(device.status)}`}>
                          {device.status === 'online' ? 'Online' : device.status === 'sleeping' ? 'Sleeping' : 'Offline'}
                        </span>
                        {device.status === 'online' && <RefreshCw className="w-3 h-3 text-green-400" />}
                      </div>
                      {device.statusText && <p className="text-xs text-purple-400 mt-1">{device.statusText}</p>}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        {getNetworkIcon(device.network)}
                        <span className={device.network === 'disconnected' ? 'text-red-400' : 'text-gray-300'}>
                          {device.network === 'disconnected' ? 'disconnected' : device.network}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      {device.assigned ? (
                        <div className="flex items-center gap-2">
                          <span className="text-cyan-400">{device.assigned}</span>
                          <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded">Assigned</span>
                        </div>
                      ) : (
                        <span className="text-gray-500">Unassigned</span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-gray-400 text-xs">{device.lastSeen}</td>
                    <td className="px-4 py-4">
                      <span className={device.satFix === 0 ? 'text-red-400' : 'text-cyan-400'}>{device.satFix}</span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-1">
                        <button className="p-1.5 hover:bg-purple-900/30 rounded" title="Status"><BarChart3 className="w-4 h-4 text-gray-400" /></button>
                        <button className="p-1.5 hover:bg-purple-900/30 rounded" title="Control"><Cog className="w-4 h-4 text-gray-400" /></button>
                        <button className="p-1.5 hover:bg-purple-900/30 rounded" title="Request Access"><Mail className="w-4 h-4 text-gray-400" /></button>
                        {device.assigned ? (
                          <button className="p-1.5 hover:bg-purple-900/30 rounded" title="Reassign"><RefreshCw className="w-4 h-4 text-gray-400" /></button>
                        ) : (
                          <button className="px-2 py-1 bg-green-600 hover:bg-green-700 rounded text-xs flex items-center gap-1"><UserPlus className="w-3 h-3" /> Assign</button>
                        )}
                        <button className="px-2 py-1 bg-red-600 hover:bg-red-700 rounded text-xs">Delete</button>
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

export default Design1;

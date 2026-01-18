import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Wrench, Cpu, Bell, Settings, Building2, HelpCircle, LogOut,
  Plus, Search, Moon, Wifi, WifiOff, ArrowLeft, RefreshCw, UserPlus, 
  Mail, BarChart3, Cog
} from 'lucide-react';

// Monochrome Minimal - Clean black and white installer theme
const Design7 = () => {
  const devices = [
    { id: 1, name: 'Nick FMC880', imei: '861076080724964', status: 'online', network: 'sim', assigned: 'kilaris56@gmail.com', lastSeen: '18/01/2026, 14:49:18', satFix: 55 },
    { id: 2, name: '2021 Mitsubishi Triton', imei: '865124071241444', status: 'sleeping', network: 'sleeping', assigned: 'kilaris10@hotmail.com', lastSeen: '11/01/2026, 19:26:01', satFix: 0 },
    { id: 3, name: 'Site Security Tower 1', imei: '861076080733585', status: 'online', network: 'sim', assigned: 'kilaris10@hotmail.com', lastSeen: '18/01/2026, 14:50:18', satFix: 55 },
    { id: 4, name: 'Caravan', imei: '865124071449005', status: 'offline', network: 'disconnected', assigned: 'kilaris10@hotmail.com', lastSeen: '14/12/2025, 23:59:09', satFix: 17 },
    { id: 5, name: 'FMC650 TEST', imei: '865124070737665', status: 'offline', network: 'disconnected', assigned: null, lastSeen: '26/11/2025, 01:23:44', satFix: 31 },
  ];

  const getStatusDot = (status: string) => {
    switch (status) {
      case 'online': return 'bg-black';
      case 'sleeping': return 'bg-gray-400';
      case 'offline': return 'bg-gray-200';
      default: return 'bg-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b border-black">
        <div className="flex items-center justify-between px-8 h-16">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="font-bold tracking-tight">TRACE INSTALLER</span>
            </div>
            
            <nav className="flex items-center gap-8">
              {['Dashboard', 'Setup', 'Devices', 'Alerts', 'Settings'].map((item, i) => (
                <button key={item} className={`text-sm ${i === 2 ? 'font-medium underline underline-offset-4' : 'text-gray-500 hover:text-black'}`}>
                  {item}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm text-gray-500 hover:text-black">← Back</Link>
            <button className="px-4 py-2 bg-black text-white text-sm font-medium hover:bg-gray-900">
              Add Device
            </button>
          </div>
        </div>
      </header>

      <main className="p-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Device Registry</h1>
          <p className="text-gray-500">Register, configure, and assign devices to users</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-px bg-black mb-12">
          {[
            { label: 'Total Devices', value: '24' },
            { label: 'Online', value: '18' },
            { label: 'Needs Attention', value: '3' },
            { label: 'Unassigned', value: '5' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white p-8">
              <p className="text-5xl font-bold mb-2">{stat.value}</p>
              <p className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="flex items-center justify-between mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input type="text" placeholder="Search devices by name or IMEI..." className="w-full pl-8 pr-4 py-3 border-b border-gray-200 focus:border-black focus:outline-none text-sm" />
          </div>
          <div className="flex gap-4">
            <button className="px-4 py-2 border border-black text-sm hover:bg-black hover:text-white transition-colors">Device Management</button>
            <button className="px-4 py-2 border border-gray-200 text-sm text-gray-500 hover:border-black hover:text-black transition-colors">System Overview</button>
          </div>
        </div>

        {/* Table */}
        <div className="border border-black">
          {devices.map((device, i) => (
            <div 
              key={device.id} 
              className={`flex items-center p-6 hover:bg-gray-50 transition-colors ${i !== devices.length - 1 ? 'border-b border-gray-200' : ''}`}
            >
              <div className="w-16 h-16 bg-gray-100 flex items-center justify-center mr-6">
                <Cpu className="w-8 h-8 text-gray-700" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-medium">{device.name}</h3>
                  <span className={`w-2 h-2 rounded-full ${getStatusDot(device.status)}`}></span>
                  <span className="text-xs text-gray-500 uppercase">{device.status}</span>
                </div>
                <p className="text-sm text-gray-500">{device.imei}</p>
              </div>

              <div className="flex items-center gap-2 mr-8">
                {device.network === 'disconnected' ? <WifiOff className="w-4 h-4 text-gray-300" /> : <Wifi className="w-4 h-4 text-black" />}
                <span className="text-sm text-gray-500">{device.network}</span>
              </div>

              <div className="w-48 mr-8">
                {device.assigned ? (
                  <div>
                    <p className="text-sm">{device.assigned}</p>
                    <p className="text-xs text-gray-400">Assigned</p>
                  </div>
                ) : (
                  <p className="text-sm text-gray-400">Unassigned</p>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button className="p-2 border border-gray-200 hover:border-black"><BarChart3 className="w-4 h-4" /></button>
                <button className="p-2 border border-gray-200 hover:border-black"><Cog className="w-4 h-4" /></button>
                <button className="p-2 border border-gray-200 hover:border-black"><Mail className="w-4 h-4" /></button>
                {device.assigned ? (
                  <button className="px-3 py-2 border border-gray-200 text-xs hover:border-black">Reassign</button>
                ) : (
                  <button className="px-3 py-2 bg-black text-white text-xs hover:bg-gray-800">Assign</button>
                )}
                <button className="px-3 py-2 border border-red-500 text-red-500 text-xs hover:bg-red-500 hover:text-white">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Design7;

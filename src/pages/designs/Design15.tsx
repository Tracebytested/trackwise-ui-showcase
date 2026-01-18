import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Wrench, Cpu, Bell, Settings, Building2, HelpCircle, LogOut,
  Plus, Search, Moon, Wifi, WifiOff, ArrowLeft, RefreshCw, UserPlus, 
  Mail, BarChart3, Cog, Briefcase
} from 'lucide-react';

// Corporate Clean - Professional enterprise design
const Design15 = () => {
  const devices = [
    { id: 1, name: 'Nick FMC880', imei: '861076080724964', status: 'online', network: 'sim', assigned: 'kilaris56@gmail.com', lastSeen: '18/01/2026', satFix: 55 },
    { id: 2, name: '2021 Mitsubishi Triton', imei: '865124071241444', status: 'sleeping', network: 'sleeping', assigned: 'kilaris10@hotmail.com', lastSeen: '11/01/2026', satFix: 0 },
    { id: 3, name: 'Site Security Tower 1', imei: '861076080733585', status: 'online', network: 'sim', assigned: 'kilaris10@hotmail.com', lastSeen: '18/01/2026', satFix: 55 },
    { id: 4, name: 'Caravan', imei: '865124071449005', status: 'offline', network: 'disconnected', assigned: 'kilaris10@hotmail.com', lastSeen: '14/12/2025', satFix: 17 },
    { id: 5, name: 'FMC650 TEST', imei: '865124070737665', status: 'offline', network: 'disconnected', assigned: null, lastSeen: '26/11/2025', satFix: 31 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="flex items-center justify-between px-8 h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-blue-900 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-blue-900">TRACE</span>
                <span className="text-xs text-gray-500 block">Enterprise Platform</span>
              </div>
            </div>
            
            <nav className="flex items-center gap-6">
              {['Dashboard', 'Setup', 'Devices', 'Alerts', 'Reports', 'Settings'].map((item, i) => (
                <button key={item} className={`text-sm py-5 border-b-2 ${i === 2 ? 'border-blue-900 text-blue-900 font-medium' : 'border-transparent text-gray-500 hover:text-gray-900'}`}>
                  {item}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/" className="text-gray-500 hover:text-gray-700 text-sm">← Back</Link>
            <button className="px-5 py-2.5 bg-blue-900 text-white rounded text-sm font-medium hover:bg-blue-800">
              + Add Device
            </button>
          </div>
        </div>
      </header>

      <main className="p-8 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <span>Home</span>
          <span>/</span>
          <span>Devices</span>
          <span>/</span>
          <span className="text-gray-900">Management</span>
        </div>

        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Device Management</h1>
            <p className="text-gray-500">Register, configure, and assign devices to end users</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">Export</button>
            <button className="px-4 py-2 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">Filter</button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Devices', value: '24', sublabel: 'Registered', color: 'blue' },
            { label: 'Online', value: '18', sublabel: '75% uptime', color: 'green' },
            { label: 'Offline', value: '3', sublabel: 'Needs attention', color: 'red' },
            { label: 'Unassigned', value: '5', sublabel: 'Ready to ship', color: 'amber' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <span className={`w-3 h-3 rounded-full bg-${stat.color}-500`}></span>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-xs text-gray-400 mt-1">{stat.sublabel}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-blue-900 text-white rounded text-sm font-medium">Device Management</button>
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded text-sm">System Overview</button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input type="text" placeholder="Search devices..." className="pl-10 pr-4 py-2 border border-gray-300 rounded text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-4 font-semibold text-gray-600">Device Details</th>
                <th className="text-left px-6 py-4 font-semibold text-gray-600">Status</th>
                <th className="text-left px-6 py-4 font-semibold text-gray-600">Network</th>
                <th className="text-left px-6 py-4 font-semibold text-gray-600">Assigned User</th>
                <th className="text-left px-6 py-4 font-semibold text-gray-600">Last Seen</th>
                <th className="text-left px-6 py-4 font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {devices.map((device) => (
                <tr key={device.id} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">{device.name}</p>
                    <p className="text-xs text-gray-500">{device.imei}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                      device.status === 'online' ? 'bg-green-100 text-green-800' :
                      device.status === 'sleeping' ? 'bg-amber-100 text-amber-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        device.status === 'online' ? 'bg-green-500' :
                        device.status === 'sleeping' ? 'bg-amber-500' :
                        'bg-red-500'
                      }`}></span>
                      {device.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5">
                      {device.network === 'disconnected' ? <WifiOff className="w-4 h-4 text-red-500" /> : <Wifi className="w-4 h-4 text-green-500" />}
                      <span className="text-gray-600">{device.network}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {device.assigned ? (
                      <div>
                        <p className="text-blue-900">{device.assigned}</p>
                        <span className="text-xs text-green-600">Assigned</span>
                      </div>
                    ) : (
                      <span className="text-gray-400">Unassigned</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-gray-500">{device.lastSeen}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded"><BarChart3 className="w-4 h-4 text-gray-500" /></button>
                      <button className="p-2 hover:bg-gray-100 rounded"><Cog className="w-4 h-4 text-gray-500" /></button>
                      <button className="px-3 py-1.5 bg-red-50 text-red-600 rounded text-xs font-medium hover:bg-red-100">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Design15;

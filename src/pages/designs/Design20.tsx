import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Gauge, Satellite, Signal, Battery, Navigation, AlertTriangle, CheckCircle, Radio, Wifi, Shield, Monitor, Activity, Zap, Users } from "lucide-react";

const Design20 = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Status Bar */}
      <div className="bg-slate-900 border-b border-slate-800 px-4 py-2 flex items-center justify-between text-xs">
        <div className="flex items-center gap-6">
          <span className="text-slate-500">COMMAND CENTER v4.2</span>
          <div className="flex items-center gap-2 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>ALL SYSTEMS OPERATIONAL</span>
          </div>
        </div>
        <div className="flex items-center gap-6 text-slate-500">
          <span>UTC {new Date().toISOString().slice(11, 19)}</span>
          <span>|</span>
          <span>OPERATOR: ADMIN</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-slate-900/50 border-b border-slate-800 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="p-2 border border-slate-700 rounded hover:bg-slate-800">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Monitor className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Command Center</h1>
                <p className="text-sm text-slate-500">Mission Control Dashboard</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 border border-red-500 text-red-400 rounded flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              2 Alerts
            </button>
            <button className="px-5 py-2 bg-blue-600 rounded font-medium">
              New Mission
            </button>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-0 h-[calc(100vh-110px)]">
        {/* Left Column - System Status */}
        <div className="col-span-2 bg-slate-900/30 border-r border-slate-800 p-4 space-y-4 overflow-auto">
          <h3 className="text-xs text-slate-500 uppercase tracking-wider">System Status</h3>
          {[
            { label: "Network", status: "online", icon: Wifi },
            { label: "GPS Array", status: "online", icon: Satellite },
            { label: "Comms", status: "online", icon: Radio },
            { label: "Security", status: "armed", icon: Shield },
            { label: "Power", status: "normal", icon: Zap },
          ].map((sys, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
              <sys.icon className="w-4 h-4 text-slate-400" />
              <span className="text-sm flex-1">{sys.label}</span>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-emerald-400" />
                <span className="text-xs text-emerald-400 uppercase">{sys.status}</span>
              </div>
            </div>
          ))}
          
          <h3 className="text-xs text-slate-500 uppercase tracking-wider pt-4">Active Units</h3>
          <div className="space-y-2">
            {[
              { id: "A-001", status: "tracking" },
              { id: "A-002", status: "idle" },
              { id: "A-003", status: "tracking" },
              { id: "B-001", status: "offline" },
              { id: "C-001", status: "tracking" },
            ].map((unit, i) => (
              <div key={i} className={`flex items-center justify-between p-2 rounded text-sm ${
                unit.status === 'tracking' 
                  ? 'bg-blue-500/10 border border-blue-500/30' 
                  : unit.status === 'offline'
                    ? 'bg-red-500/10 border border-red-500/30'
                    : 'bg-slate-800/50 border border-slate-700'
              }`}>
                <span className="font-mono">{unit.id}</span>
                <span className={`text-xs ${
                  unit.status === 'tracking' ? 'text-blue-400' : 
                  unit.status === 'offline' ? 'text-red-400' : 'text-slate-500'
                }`}>{unit.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Center - Main Display */}
        <div className="col-span-7 flex flex-col">
          {/* Map Area */}
          <div className="flex-1 bg-slate-900/50 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Radar circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 border border-blue-500/20 rounded-full"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 border border-blue-500/30 rounded-full"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 border border-blue-500/40 rounded-full"></div>
                </div>
                <div className="w-96 h-96 flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-blue-400" />
                </div>
              </div>
            </div>

            {/* Map Controls */}
            <div className="absolute top-4 left-4 right-4 flex justify-between">
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-blue-600 rounded text-sm font-medium">LIVE</button>
                <button className="px-4 py-2 bg-slate-800 rounded text-sm">REPLAY</button>
                <button className="px-4 py-2 bg-slate-800 rounded text-sm">GEOFENCE</button>
              </div>
              <div className="bg-slate-800/80 backdrop-blur px-4 py-2 rounded flex items-center gap-4">
                <span className="text-sm text-slate-400">Tracking: A-001</span>
                <span className="text-sm font-mono">51.5074°N, 0.1278°W</span>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 to-transparent pt-20 pb-4 px-4">
              <div className="grid grid-cols-6 gap-4">
                {[
                  { icon: Gauge, label: "VELOCITY", value: "78 KM/H" },
                  { icon: Navigation, label: "HEADING", value: "045° NE" },
                  { icon: Satellite, label: "GPS LOCK", value: "14 SATS" },
                  { icon: Signal, label: "SIGNAL", value: "4G LTE" },
                  { icon: Battery, label: "POWER", value: "94%" },
                  { icon: Activity, label: "UPTIME", value: "47:23:11" },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-800/80 backdrop-blur rounded-lg p-3 text-center">
                    <item.icon className="w-4 h-4 text-blue-400 mx-auto mb-2" />
                    <p className="text-lg font-bold">{item.value}</p>
                    <p className="text-xs text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Intel */}
        <div className="col-span-3 bg-slate-900/30 border-l border-slate-800 flex flex-col">
          <div className="p-4 border-b border-slate-800">
            <h3 className="font-semibold mb-4">Unit A-001 Intel</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Vehicle</span>
                <span>Range Rover Sport</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Registration</span>
                <span className="font-mono">AB12 CDE</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Driver</span>
                <span>J. Smith</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Mission</span>
                <span className="text-blue-400">Active Patrol</span>
              </div>
            </div>
          </div>

          <div className="p-4 border-b border-slate-800 flex-1 overflow-auto">
            <h3 className="font-semibold mb-4">Event Log</h3>
            <div className="space-y-2 text-sm">
              {[
                { time: "14:32:01", event: "Speed alert: 87 km/h", type: "warning" },
                { time: "14:28:45", event: "Entered Zone Alpha", type: "info" },
                { time: "14:15:22", event: "Engine started", type: "info" },
                { time: "13:45:00", event: "Geofence exit", type: "warning" },
                { time: "12:30:15", event: "Mission assigned", type: "info" },
              ].map((log, i) => (
                <div key={i} className={`p-2 rounded border-l-2 ${
                  log.type === 'warning' ? 'bg-yellow-500/10 border-yellow-500' : 'bg-slate-800/50 border-slate-600'
                }`}>
                  <span className="font-mono text-xs text-slate-500">{log.time}</span>
                  <p className="text-slate-300">{log.event}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="p-4 space-y-2">
            <button className="w-full py-3 bg-blue-600 rounded-lg font-medium">
              Track Live
            </button>
            <button className="w-full py-3 bg-slate-800 border border-slate-700 rounded-lg">
              Set Geofence
            </button>
            <button className="w-full py-3 bg-slate-800 border border-slate-700 rounded-lg">
              Ping Device
            </button>
          </div>

          {/* Subscription */}
          <div className="p-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border-t border-blue-500/30">
            <p className="text-sm font-medium text-blue-300 mb-2">Pro Subscription</p>
            <p className="text-xs text-slate-400 mb-3">Unlock live tracking, advanced geofencing, and priority support.</p>
            <button className="w-full py-2 bg-blue-600 rounded font-medium text-sm">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design20;

import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Gauge, Satellite, Signal, Battery, Navigation, AlertTriangle, Radio, Target, Shield, Crosshair } from "lucide-react";

const Design12 = () => {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-mono">
      {/* Tactical Header */}
      <header className="bg-stone-900 border-b-2 border-amber-600/50 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="p-2 border border-stone-700 hover:bg-stone-800">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-amber-500" />
              <div>
                <h1 className="text-amber-500 font-bold tracking-widest">TACTICAL OPS</h1>
                <p className="text-xs text-stone-500">ASSET TRACKING SYSTEM v2.4</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-emerald-900/30 border border-emerald-700/50">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs text-emerald-400">SYSTEMS NOMINAL</span>
            </div>
            <div className="text-xs text-stone-500">
              {new Date().toISOString().slice(0, 19).replace('T', ' ')} UTC
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        {/* Status Bar */}
        <div className="grid grid-cols-5 gap-4 mb-6">
          {[
            { label: "ASSETS ONLINE", value: "12/15", status: "normal" },
            { label: "ACTIVE TRACKS", value: "08", status: "normal" },
            { label: "GEOFENCES", value: "06", status: "normal" },
            { label: "ALERTS", value: "02", status: "warning" },
            { label: "COMMS STATUS", value: "NOMINAL", status: "normal" },
          ].map((item, i) => (
            <div key={i} className={`bg-stone-900 border ${item.status === 'warning' ? 'border-amber-600/50' : 'border-stone-700'} p-3`}>
              <p className="text-xs text-stone-500 mb-1">{item.label}</p>
              <p className={`text-xl font-bold ${item.status === 'warning' ? 'text-amber-500' : 'text-stone-100'}`}>{item.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Asset List */}
          <div className="col-span-3 bg-stone-900 border border-stone-700">
            <div className="bg-stone-800 border-b border-stone-700 px-4 py-2 flex items-center gap-2">
              <Radio className="w-4 h-4 text-amber-500" />
              <span className="text-sm text-amber-500 font-bold">ASSET ROSTER</span>
            </div>
            <div className="p-2 space-y-1 max-h-96 overflow-auto">
              {[
                { id: "VH-001", name: "ALPHA-1", status: "MOBILE", type: "VEHICLE" },
                { id: "VH-002", name: "BRAVO-2", status: "STATIONARY", type: "VEHICLE" },
                { id: "CR-001", name: "CHARLIE-3", status: "TOWING", type: "CARAVAN" },
                { id: "BT-001", name: "DELTA-4", status: "CRUISING", type: "VESSEL" },
                { id: "VH-003", name: "ECHO-5", status: "OFFLINE", type: "VEHICLE" },
              ].map((asset, i) => (
                <div key={i} className={`p-3 border cursor-pointer ${
                  i === 0 
                    ? 'bg-amber-900/20 border-amber-600/50' 
                    : 'border-stone-800 hover:bg-stone-800'
                }`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-stone-500">[{asset.id}]</span>
                    <span className={`text-xs px-2 py-0.5 ${
                      asset.status === 'MOBILE' || asset.status === 'CRUISING' || asset.status === 'TOWING'
                        ? 'bg-emerald-900/50 text-emerald-400'
                        : asset.status === 'OFFLINE' 
                          ? 'bg-red-900/50 text-red-400'
                          : 'bg-stone-800 text-stone-400'
                    }`}>{asset.status}</span>
                  </div>
                  <p className="font-bold">{asset.name}</p>
                  <p className="text-xs text-stone-500">{asset.type}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tactical Map */}
          <div className="col-span-6 bg-stone-900 border border-stone-700">
            <div className="bg-stone-800 border-b border-stone-700 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-amber-500" />
                <span className="text-sm text-amber-500 font-bold">TACTICAL OVERVIEW</span>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-amber-600 text-stone-900 text-xs font-bold">LIVE</button>
                <button className="px-3 py-1 bg-stone-700 text-stone-300 text-xs">HISTORY</button>
              </div>
            </div>
            <div className="h-80 bg-stone-950 relative">
              {/* Grid overlay */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }}></div>
              
              {/* Center crosshair */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Crosshair className="w-16 h-16 text-amber-600/30" />
              </div>

              {/* Asset markers */}
              <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-emerald-500 animate-pulse"></div>
              <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-amber-500"></div>
              <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-blue-500"></div>

              {/* Corner coordinates */}
              <div className="absolute top-2 left-2 text-xs text-stone-600">51.5074°N</div>
              <div className="absolute top-2 right-2 text-xs text-stone-600">0.1278°W</div>
            </div>
            <div className="p-3 border-t border-stone-700 flex items-center gap-4">
              <button className="px-4 py-2 bg-amber-600 text-stone-900 text-sm font-bold flex items-center gap-2">
                <Navigation className="w-4 h-4" />
                TRACK ASSET
              </button>
              <button className="px-4 py-2 border border-stone-600 text-stone-300 text-sm flex items-center gap-2">
                <Target className="w-4 h-4" />
                SET GEOFENCE
              </button>
              <button className="px-4 py-2 border border-stone-600 text-stone-300 text-sm flex items-center gap-2">
                <Radio className="w-4 h-4" />
                PING
              </button>
            </div>
          </div>

          {/* Telemetry Panel */}
          <div className="col-span-3 space-y-4">
            <div className="bg-stone-900 border border-stone-700">
              <div className="bg-stone-800 border-b border-stone-700 px-4 py-2">
                <span className="text-sm text-amber-500 font-bold">TELEMETRY: ALPHA-1</span>
              </div>
              <div className="p-4 space-y-3">
                {[
                  { icon: Gauge, label: "VELOCITY", value: "78 KM/H", color: "emerald" },
                  { icon: Satellite, label: "GPS LOCK", value: "14 SATS", color: "blue" },
                  { icon: Signal, label: "COMMS", value: "4G LTE", color: "emerald" },
                  { icon: Battery, label: "POWER", value: "94%", color: "emerald" },
                  { icon: Navigation, label: "HEADING", value: "045° NE", color: "amber" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-2 bg-stone-950">
                    <div className="flex items-center gap-2">
                      <item.icon className={`w-4 h-4 text-${item.color}-500`} />
                      <span className="text-xs text-stone-500">{item.label}</span>
                    </div>
                    <span className={`font-bold text-${item.color}-400`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subscription Alert */}
            <div className="bg-amber-900/20 border border-amber-600/50 p-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <span className="text-amber-500 font-bold text-sm">SUBSCRIPTION REQUIRED</span>
              </div>
              <p className="text-xs text-stone-400 mb-3">
                Live tracking requires active subscription. Upgrade to access real-time data.
              </p>
              <button className="w-full py-2 bg-amber-600 text-stone-900 font-bold text-sm">
                AUTHORIZE UPGRADE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design12;

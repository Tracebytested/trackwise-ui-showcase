import { Link } from "react-router-dom";
import { ArrowLeft, Gauge, Satellite, Signal, Battery, Navigation, Layers, ZoomIn, ZoomOut, Crosshair } from "lucide-react";

const Design8 = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      {/* Full Screen Map Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Simulated map elements */}
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-emerald-500 rounded-full animate-pulse"></div>
        <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-amber-500 rounded-full"></div>
      </div>

      {/* Top Bar */}
      <header className="absolute top-0 left-0 right-0 z-10 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-3 bg-slate-800/80 backdrop-blur rounded-xl border border-slate-700 hover:bg-slate-700 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="bg-slate-800/80 backdrop-blur rounded-xl border border-slate-700 px-4 py-2 flex items-center gap-3">
              <Navigation className="w-5 h-5 text-blue-400" />
              <div>
                <h1 className="font-semibold">MapCentric</h1>
                <p className="text-xs text-slate-400">3 devices online</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-blue-600 rounded-xl text-sm font-medium">Live Track</button>
            <button className="px-4 py-2 bg-slate-800/80 backdrop-blur rounded-xl border border-slate-700 text-sm">Geofence</button>
            <button className="px-4 py-2 bg-slate-800/80 backdrop-blur rounded-xl border border-slate-700 text-sm">History</button>
          </div>
        </div>
      </header>

      {/* Left Floating Panel - Devices */}
      <div className="absolute left-4 top-24 bottom-4 w-72 z-10">
        <div className="h-full bg-slate-800/90 backdrop-blur rounded-2xl border border-slate-700 p-4 flex flex-col">
          <h2 className="font-semibold mb-4">Active Devices</h2>
          <div className="flex-1 space-y-3 overflow-auto">
            {[
              { name: "Range Rover Sport", plate: "AB12 XYZ", status: "Moving", speed: "67 km/h", color: "blue" },
              { name: "Swift Challenger 580", plate: "Caravan", status: "Parked", speed: "0 km/h", color: "emerald" },
              { name: "Fairline Squadron 42", plate: "Marina A5", status: "Idle", speed: "0 kn", color: "amber" },
            ].map((device, i) => (
              <div key={i} className={`p-4 rounded-xl bg-slate-900/50 border border-slate-700 cursor-pointer hover:border-${device.color}-500 transition-colors`}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`w-3 h-3 rounded-full bg-${device.color}-500 ${device.status === 'Moving' ? 'animate-pulse' : ''}`}></span>
                  <span className="text-xs text-slate-400">{device.status}</span>
                </div>
                <p className="font-medium mb-1">{device.name}</p>
                <p className="text-sm text-slate-400">{device.plate}</p>
                <p className="text-lg font-semibold mt-2">{device.speed}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Floating Panel - Telemetry */}
      <div className="absolute right-4 top-24 w-64 z-10">
        <div className="bg-slate-800/90 backdrop-blur rounded-2xl border border-slate-700 p-4">
          <h2 className="font-semibold mb-4">Range Rover Sport</h2>
          <div className="space-y-4">
            {[
              { icon: Gauge, label: "Speed", value: "67 km/h" },
              { icon: Satellite, label: "GPS Satellites", value: "14" },
              { icon: Signal, label: "SIM Status", value: "4G LTE" },
              { icon: Battery, label: "Battery", value: "94%" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-900/50 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-400">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t border-slate-700">
            <button className="w-full py-3 bg-blue-600 rounded-xl font-medium">Ping Device</button>
          </div>
        </div>
      </div>

      {/* Map Controls */}
      <div className="absolute right-4 bottom-32 z-10 flex flex-col gap-2">
        <button className="w-10 h-10 bg-slate-800/90 backdrop-blur rounded-lg border border-slate-700 flex items-center justify-center hover:bg-slate-700">
          <ZoomIn className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 bg-slate-800/90 backdrop-blur rounded-lg border border-slate-700 flex items-center justify-center hover:bg-slate-700">
          <ZoomOut className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 bg-slate-800/90 backdrop-blur rounded-lg border border-slate-700 flex items-center justify-center hover:bg-slate-700">
          <Crosshair className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 bg-slate-800/90 backdrop-blur rounded-lg border border-slate-700 flex items-center justify-center hover:bg-slate-700">
          <Layers className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Subscription Banner */}
      <div className="absolute bottom-4 left-80 right-80 z-10">
        <div className="bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur rounded-2xl p-4 flex items-center justify-between">
          <div>
            <h3 className="font-semibold">Unlock Live Tracking</h3>
            <p className="text-sm text-white/70">Subscribe for real-time updates & geofencing</p>
          </div>
          <button className="px-6 py-2 bg-white text-blue-600 rounded-xl font-medium">Upgrade</button>
        </div>
      </div>
    </div>
  );
};

export default Design8;

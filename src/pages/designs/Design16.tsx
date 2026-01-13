import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Gauge, Satellite, Signal, Battery, Navigation, Crown, Gem, Star, Shield } from "lucide-react";

const Design16 = () => {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      {/* Gold accent line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      
      {/* Header */}
      <header className="px-8 py-6 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="p-2 border border-stone-700 hover:border-amber-500/50 transition-colors">
              <ArrowLeft className="w-5 h-5 text-stone-400" />
            </Link>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center">
                <Crown className="w-7 h-7 text-stone-900" />
              </div>
              <div>
                <h1 className="text-2xl font-light tracking-widest text-amber-400">PRESTIGE</h1>
                <p className="text-sm text-stone-500 tracking-wider">LUXURY FLEET MANAGEMENT</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Gem className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-stone-400">Premium Member</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-8">
        {/* Featured Vehicle */}
        <div className="mb-12 text-center">
          <p className="text-sm text-amber-400/60 uppercase tracking-widest mb-4">Currently Tracking</p>
          <h2 className="text-5xl font-extralight text-stone-100 mb-2">Rolls-Royce Phantom</h2>
          <p className="text-stone-500">Registration: RR 1 | VIN: ****7892</p>
        </div>

        {/* Luxury Stats */}
        <div className="grid grid-cols-4 gap-6 mb-12">
          {[
            { label: "Velocity", value: "87", unit: "km/h", icon: Gauge },
            { label: "Distance Today", value: "124", unit: "km", icon: Navigation },
            { label: "GPS Lock", value: "16", unit: "satellites", icon: Satellite },
            { label: "Security", value: "Armed", unit: "", icon: Shield },
          ].map((stat, i) => (
            <div key={i} className="bg-stone-900 border border-stone-800 p-6 relative group hover:border-amber-500/30 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <stat.icon className="w-5 h-5 text-amber-400/60 mb-4" />
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extralight text-stone-100">{stat.value}</span>
                <span className="text-sm text-stone-500">{stat.unit}</span>
              </div>
              <p className="text-sm text-stone-500 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Fleet Collection */}
          <div className="col-span-1">
            <h3 className="text-sm text-amber-400/60 uppercase tracking-widest mb-6">The Collection</h3>
            <div className="space-y-4">
              {[
                { name: "Rolls-Royce Phantom", status: "En Route", active: true },
                { name: "Bentley Continental", status: "Garaged", active: false },
                { name: "Aston Martin DB11", status: "Service", active: false },
                { name: "Princess V65 Yacht", status: "Marina", active: false },
              ].map((vehicle, i) => (
                <div key={i} className={`p-5 border ${
                  vehicle.active 
                    ? 'bg-stone-900/50 border-amber-500/30' 
                    : 'border-stone-800 hover:border-stone-700'
                } cursor-pointer transition-colors`}>
                  <div className="flex items-center justify-between mb-2">
                    {vehicle.active && <Star className="w-4 h-4 text-amber-400" />}
                    <span className={`text-xs ${vehicle.active ? 'text-amber-400' : 'text-stone-500'}`}>
                      {vehicle.status}
                    </span>
                  </div>
                  <h4 className="font-light text-lg">{vehicle.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Map Area */}
          <div className="col-span-2">
            <div className="bg-stone-900 border border-stone-800 h-full">
              <div className="p-6 border-b border-stone-800 flex items-center justify-between">
                <h3 className="text-sm text-amber-400/60 uppercase tracking-widest">Location</h3>
                <div className="flex gap-3">
                  <button className="px-5 py-2 bg-amber-400 text-stone-900 text-sm font-medium">Live</button>
                  <button className="px-5 py-2 border border-stone-700 text-stone-400 text-sm">Journey</button>
                </div>
              </div>
              <div className="h-72 bg-stone-950 flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)',
                  backgroundSize: '50px 50px'
                }}></div>
                <div className="text-center z-10">
                  <MapPin className="w-12 h-12 text-amber-400/50 mx-auto mb-4" />
                  <p className="text-stone-600">Mayfair, London</p>
                  <p className="text-xs text-stone-700 mt-1">51.5074° N, 0.1278° W</p>
                </div>
              </div>
              
              {/* Telemetry Bar */}
              <div className="p-6 border-t border-stone-800 grid grid-cols-4 gap-6">
                {[
                  { icon: Gauge, label: "Speed", value: "87 km/h" },
                  { icon: Signal, label: "Connection", value: "5G Premium" },
                  { icon: Battery, label: "Power", value: "98%" },
                  { icon: Navigation, label: "ETA", value: "14:32" },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <item.icon className="w-4 h-4 text-amber-400/60 mx-auto mb-2" />
                    <p className="text-lg font-light text-stone-100">{item.value}</p>
                    <p className="text-xs text-stone-600">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Concierge Banner */}
        <div className="mt-12 bg-gradient-to-r from-amber-900/20 to-yellow-900/20 border border-amber-500/20 p-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Crown className="w-12 h-12 text-amber-400" />
            <div>
              <h3 className="text-2xl font-light text-stone-100 mb-1">Concierge Services</h3>
              <p className="text-stone-500">24/7 personal assistance, priority alerts, and exclusive features</p>
            </div>
          </div>
          <button className="px-10 py-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-stone-900 font-medium tracking-wider">
            UPGRADE
          </button>
        </div>
      </main>
    </div>
  );
};

export default Design16;

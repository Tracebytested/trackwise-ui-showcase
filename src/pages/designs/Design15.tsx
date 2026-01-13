import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Gauge, Satellite, Signal, Battery, Navigation, Leaf, TreePine, Sun, Droplets, Wind } from "lucide-react";

const Design15 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-green-100">
      {/* Header */}
      <header className="px-6 py-4 bg-white/70 backdrop-blur-md border-b border-emerald-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="p-2 bg-emerald-100 rounded-xl hover:bg-emerald-200 transition-colors">
              <ArrowLeft className="w-5 h-5 text-emerald-700" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-600 rounded-2xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-emerald-800">EcoTrack</h1>
                <p className="text-sm text-emerald-600">Sustainable Fleet Management</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full">
              <Sun className="w-4 h-4 text-yellow-500" />
              <span className="text-sm text-emerald-700">Carbon Neutral Mode</span>
            </div>
            <button className="px-5 py-2 bg-emerald-600 text-white rounded-xl text-sm font-medium">
              Add Vehicle
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        {/* Eco Stats */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            { label: "CO₂ Saved", value: "234 kg", icon: Leaf, color: "emerald", sub: "This month" },
            { label: "Eco Score", value: "92/100", icon: TreePine, color: "green", sub: "+5 from last week" },
            { label: "Green Distance", value: "1,234 km", icon: Navigation, color: "teal", sub: "Electric/Hybrid" },
            { label: "Efficiency", value: "87%", icon: Droplets, color: "cyan", sub: "Fleet average" },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 shadow-sm border border-emerald-100">
              <div className={`w-12 h-12 bg-${stat.color}-100 rounded-2xl flex items-center justify-center mb-4`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
              <p className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-xs text-emerald-600 mt-2">{stat.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Vehicle List */}
          <div className="col-span-1">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <TreePine className="w-5 h-5 text-emerald-600" />
              Eco Fleet
            </h2>
            <div className="space-y-4">
              {[
                { name: "Tesla Model 3", type: "Electric", status: "Moving", eco: 98, battery: 67 },
                { name: "Hyundai Ioniq", type: "Hybrid", status: "Charging", eco: 85, battery: 45 },
                { name: "BMW i3", type: "Electric", status: "Parked", eco: 94, battery: 100 },
                { name: "Prius Caravan", type: "Hybrid Tow", status: "Moving", eco: 72, battery: 78 },
              ].map((vehicle, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-emerald-100 hover:border-emerald-300 cursor-pointer transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      vehicle.type === 'Electric' 
                        ? 'bg-emerald-100 text-emerald-700' 
                        : 'bg-teal-100 text-teal-700'
                    }`}>{vehicle.type}</span>
                    <span className={`text-sm ${
                      vehicle.status === 'Moving' ? 'text-emerald-600' : 'text-gray-500'
                    }`}>{vehicle.status}</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-3">{vehicle.name}</h3>
                  
                  {/* Eco Score Bar */}
                  <div className="mb-3">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-500">Eco Score</span>
                      <span className="text-emerald-600 font-medium">{vehicle.eco}/100</span>
                    </div>
                    <div className="h-2 bg-emerald-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-400 to-green-500 rounded-full"
                        style={{ width: `${vehicle.eco}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Battery */}
                  <div className="flex items-center gap-2">
                    <Battery className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{vehicle.battery}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map and Details */}
          <div className="col-span-2 space-y-6">
            {/* Map */}
            <div className="bg-white rounded-3xl shadow-sm border border-emerald-100 overflow-hidden">
              <div className="p-5 border-b border-emerald-100 flex items-center justify-between">
                <h2 className="font-semibold text-gray-800">Live Tracking</h2>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-sm">Live</button>
                  <button className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-xl text-sm">Routes</button>
                </div>
              </div>
              <div className="h-64 bg-gradient-to-br from-emerald-50 to-green-100 flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: 'radial-gradient(circle at 3px 3px, #10b981 1px, transparent 0)',
                  backgroundSize: '40px 40px'
                }}></div>
                <div className="text-center z-10">
                  <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-emerald-600">Eco Route Map</p>
                </div>
              </div>
            </div>

            {/* Telemetry */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-emerald-100">
              <h3 className="font-semibold text-gray-800 mb-4">Tesla Model 3 - Telemetry</h3>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { icon: Gauge, label: "Speed", value: "54 km/h", color: "emerald" },
                  { icon: Satellite, label: "GPS", value: "14 Sats", color: "teal" },
                  { icon: Battery, label: "Range", value: "234 km", color: "green" },
                  { icon: Leaf, label: "Efficiency", value: "94 Wh/km", color: "lime" },
                ].map((item, i) => (
                  <div key={i} className={`bg-${item.color}-50 rounded-2xl p-4`}>
                    <item.icon className={`w-5 h-5 text-${item.color}-600 mb-2`} />
                    <p className="text-xl font-bold text-gray-800">{item.value}</p>
                    <p className="text-sm text-gray-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl p-6 flex items-center justify-between text-white">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Leaf className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Go Premium Eco</h3>
                  <p className="text-emerald-100">Unlock live tracking & carbon reports</p>
                </div>
              </div>
              <button className="px-8 py-3 bg-white text-emerald-600 rounded-xl font-bold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Design15;

import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Gauge, Satellite, Signal, Battery, Car, Navigation, Bell, Settings } from "lucide-react";

const Design1 = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-xl font-semibold">TrackPro</h1>
          <span className="text-xs px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded">Live</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-zinc-800 p-4 min-h-[calc(100vh-65px)]">
          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 bg-zinc-800 rounded-lg text-left">
              <Car className="w-5 h-5 text-blue-400" />
              <span>All Vehicles</span>
              <span className="ml-auto text-xs bg-zinc-700 px-2 py-1 rounded">12</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-zinc-800/50 rounded-lg text-left text-zinc-400">
              <MapPin className="w-5 h-5" />
              <span>Geofences</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-zinc-800/50 rounded-lg text-left text-zinc-400">
              <Navigation className="w-5 h-5" />
              <span>Routes</span>
            </button>
          </div>

          <div className="mt-8">
            <h3 className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Active Devices</h3>
            <div className="space-y-2">
              {["BMW X5 - AB12 CDE", "Mercedes Sprinter", "Yacht Serenity"].map((vehicle, i) => (
                <div key={i} className="px-3 py-2 bg-zinc-900 rounded-lg border border-zinc-800 cursor-pointer hover:border-zinc-700">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{vehicle}</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  </div>
                  <p className="text-xs text-zinc-500 mt-1">Moving • 65 km/h</p>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Map Placeholder */}
          <div className="h-96 bg-zinc-900 rounded-2xl border border-zinc-800 mb-6 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23555' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
            <div className="text-center z-10">
              <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-2" />
              <p className="text-zinc-400">Live Map View</p>
            </div>
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button className="px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium">Live Track</button>
              <button className="px-4 py-2 bg-zinc-800 rounded-lg text-sm">History</button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { icon: Gauge, label: "Speed", value: "65 km/h", color: "text-blue-400" },
              { icon: Satellite, label: "Satellites", value: "12 GPS", color: "text-emerald-400" },
              { icon: Signal, label: "SIM Signal", value: "Strong", color: "text-yellow-400" },
              { icon: Battery, label: "Battery", value: "98%", color: "text-purple-400" },
            ].map((stat, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                <stat.icon className={`w-5 h-5 ${stat.color} mb-2`} />
                <p className="text-2xl font-semibold">{stat.value}</p>
                <p className="text-xs text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Subscription Banner */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6 flex items-center justify-between">
            <div>
              <h3 className="font-semibold mb-1">Upgrade to Pro</h3>
              <p className="text-sm text-zinc-400">Unlock live tracking, geofencing, and more</p>
            </div>
            <button className="px-6 py-2 bg-blue-600 rounded-lg font-medium">Subscribe</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Design1;

import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Gauge, Satellite, Signal, Battery, Car, Ship, Caravan, Bell, User, Search, ChevronDown } from "lucide-react";

const Design4 = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Corporate Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-slate-500 hover:text-slate-700">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-slate-800">FleetCommand</span>
            </div>
            <nav className="flex items-center gap-6 ml-8">
              <a href="#" className="text-blue-600 font-medium text-sm border-b-2 border-blue-600 pb-3 -mb-3">Dashboard</a>
              <a href="#" className="text-slate-500 text-sm hover:text-slate-700">Vehicles</a>
              <a href="#" className="text-slate-500 text-sm hover:text-slate-700">Geofences</a>
              <a href="#" className="text-slate-500 text-sm hover:text-slate-700">Reports</a>
              <a href="#" className="text-slate-500 text-sm hover:text-slate-700">Settings</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search vehicles..." 
                className="pl-9 pr-4 py-2 bg-slate-100 border border-slate-200 rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-lg">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-2 pl-4 border-l border-slate-200">
              <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-slate-600" />
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          {[
            { label: "Total Vehicles", value: "24", change: "+2 this week", icon: Car, color: "blue" },
            { label: "Active Now", value: "18", change: "75% of fleet", icon: Signal, color: "emerald" },
            { label: "Avg Speed", value: "54 km/h", change: "Within limits", icon: Gauge, color: "amber" },
            { label: "Alerts Today", value: "3", change: "2 resolved", icon: Bell, color: "red" },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-slate-500 mb-1">{stat.label}</p>
                  <p className="text-2xl font-semibold text-slate-800">{stat.value}</p>
                  <p className="text-xs text-slate-400 mt-1">{stat.change}</p>
                </div>
                <div className={`p-2 rounded-lg bg-${stat.color}-50`}>
                  <stat.icon className={`w-5 h-5 text-${stat.color}-600`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Map Section */}
          <div className="col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
              <h2 className="font-semibold text-slate-800">Live Fleet Map</h2>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg">Live View</button>
                <button className="px-3 py-1.5 bg-slate-100 text-slate-600 text-sm rounded-lg">History</button>
              </div>
            </div>
            <div className="h-80 bg-slate-100 flex items-center justify-center relative">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                <p className="text-slate-500">Interactive Map View</p>
              </div>
              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow px-4 py-3 flex items-center gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  <span className="text-slate-600">Moving</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                  <span className="text-slate-600">Idle</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-slate-400"></span>
                  <span className="text-slate-600">Offline</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vehicle List */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="px-5 py-4 border-b border-slate-200">
              <h2 className="font-semibold text-slate-800">Fleet Vehicles</h2>
            </div>
            <div className="divide-y divide-slate-100">
              {[
                { name: "Ford Transit", plate: "AB12 CDE", status: "Moving", speed: "67 km/h", icon: Car },
                { name: "Mercedes Sprinter", plate: "XY34 ZAB", status: "Idle", speed: "0 km/h", icon: Car },
                { name: "Bailey Unicorn", plate: "CD56 EFG", status: "Parked", speed: "0 km/h", icon: Caravan },
                { name: "Sunseeker 55", plate: "Marina B4", status: "Moving", speed: "12 kn", icon: Ship },
              ].map((vehicle, i) => (
                <div key={i} className="px-5 py-4 hover:bg-slate-50 cursor-pointer flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                    <vehicle.icon className="w-5 h-5 text-slate-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-slate-800 text-sm">{vehicle.name}</p>
                    <p className="text-xs text-slate-400">{vehicle.plate}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-xs font-medium ${vehicle.status === 'Moving' ? 'text-emerald-600' : 'text-amber-600'}`}>
                      {vehicle.status}
                    </p>
                    <p className="text-xs text-slate-500">{vehicle.speed}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-5 py-3 border-t border-slate-200">
              <button className="text-blue-600 text-sm font-medium">View All Vehicles →</button>
            </div>
          </div>
        </div>

        {/* Telematics Panel */}
        <div className="mt-6 bg-white rounded-xl border border-slate-200 shadow-sm p-5">
          <h3 className="font-semibold text-slate-800 mb-4">Selected Vehicle: Ford Transit - AB12 CDE</h3>
          <div className="grid grid-cols-6 gap-4">
            {[
              { label: "Speed", value: "67 km/h", icon: Gauge },
              { label: "GPS Satellites", value: "14", icon: Satellite },
              { label: "SIM Signal", value: "Excellent", icon: Signal },
              { label: "Battery", value: "96%", icon: Battery },
              { label: "Heading", value: "NE 45°", icon: MapPin },
              { label: "Last Update", value: "2s ago", icon: Signal },
            ].map((item, i) => (
              <div key={i} className="text-center p-3 bg-slate-50 rounded-lg">
                <item.icon className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <p className="text-lg font-semibold text-slate-800">{item.value}</p>
                <p className="text-xs text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Subscription CTA */}
        <div className="mt-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 flex items-center justify-between text-white">
          <div>
            <h3 className="text-lg font-semibold mb-1">Upgrade to Enterprise</h3>
            <p className="text-blue-100 text-sm">Get live tracking, advanced geofencing, and priority support</p>
          </div>
          <button className="px-6 py-2.5 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
            View Plans
          </button>
        </div>
      </div>
    </div>
  );
};

export default Design4;

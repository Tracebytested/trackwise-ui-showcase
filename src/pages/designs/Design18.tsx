import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Gauge, Satellite, Signal, Battery, Navigation, TrendingUp, TrendingDown, Activity, BarChart3, PieChart, Calendar } from "lucide-react";

const Design18 = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-950 border-b border-slate-800 px-6 py-3">
        <div className="max-w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 hover:bg-slate-800 rounded">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-blue-400" />
              <span className="font-semibold">DataDense Analytics</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span>Last sync: 2 sec ago</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Mini Sidebar */}
        <aside className="w-14 bg-slate-950 border-r border-slate-800 py-4 flex flex-col items-center gap-3">
          <button className="p-3 bg-blue-600 rounded-lg">
            <Navigation className="w-5 h-5" />
          </button>
          <button className="p-3 hover:bg-slate-800 rounded-lg text-slate-400">
            <BarChart3 className="w-5 h-5" />
          </button>
          <button className="p-3 hover:bg-slate-800 rounded-lg text-slate-400">
            <PieChart className="w-5 h-5" />
          </button>
          <button className="p-3 hover:bg-slate-800 rounded-lg text-slate-400">
            <Calendar className="w-5 h-5" />
          </button>
        </aside>

        <main className="flex-1 p-4 overflow-auto">
          {/* Top Stats Row */}
          <div className="grid grid-cols-8 gap-3 mb-4">
            {[
              { label: "Devices", value: "24", trend: "+2", up: true },
              { label: "Online", value: "21", trend: "87%", up: true },
              { label: "Moving", value: "14", trend: "+3", up: true },
              { label: "Idle", value: "7", trend: "-2", up: false },
              { label: "Avg Speed", value: "54", trend: "km/h", up: null },
              { label: "Distance", value: "1.2k", trend: "km today", up: null },
              { label: "Alerts", value: "3", trend: "active", up: null },
              { label: "Fuel", value: "78%", trend: "avg", up: null },
            ].map((stat, i) => (
              <div key={i} className="bg-slate-800 rounded-lg p-3">
                <p className="text-xs text-slate-500 mb-1">{stat.label}</p>
                <div className="flex items-baseline justify-between">
                  <span className="text-xl font-bold">{stat.value}</span>
                  <span className={`text-xs flex items-center gap-0.5 ${
                    stat.up === true ? 'text-green-400' : stat.up === false ? 'text-red-400' : 'text-slate-500'
                  }`}>
                    {stat.up !== null && (stat.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />)}
                    {stat.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-12 gap-4">
            {/* Device Table */}
            <div className="col-span-5 bg-slate-800 rounded-lg overflow-hidden">
              <div className="px-4 py-3 border-b border-slate-700 flex items-center justify-between">
                <span className="font-medium text-sm">Active Fleet</span>
                <span className="text-xs text-slate-500">24 devices</span>
              </div>
              <div className="max-h-72 overflow-auto">
                <table className="w-full text-sm">
                  <thead className="bg-slate-900/50 text-xs text-slate-500 sticky top-0">
                    <tr>
                      <th className="text-left px-4 py-2">Device</th>
                      <th className="text-right px-4 py-2">Speed</th>
                      <th className="text-right px-4 py-2">GPS</th>
                      <th className="text-right px-4 py-2">Batt</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "BMW-001", speed: "87", gps: 14, batt: 94 },
                      { name: "MERC-002", speed: "0", gps: 12, batt: 67 },
                      { name: "AUDI-003", speed: "54", gps: 16, batt: 88 },
                      { name: "VAN-004", speed: "72", gps: 11, batt: 45 },
                      { name: "YACHT-005", speed: "12", gps: 18, batt: 91 },
                      { name: "CARAVAN-006", speed: "45", gps: 13, batt: 76 },
                      { name: "BOAT-007", speed: "0", gps: 15, batt: 100 },
                      { name: "SUV-008", speed: "65", gps: 14, batt: 82 },
                    ].map((device, i) => (
                      <tr key={i} className="border-t border-slate-700/50 hover:bg-slate-700/50 cursor-pointer">
                        <td className="px-4 py-2 font-medium">{device.name}</td>
                        <td className="px-4 py-2 text-right">
                          <span className={device.speed !== "0" ? "text-green-400" : "text-slate-500"}>{device.speed}</span>
                        </td>
                        <td className="px-4 py-2 text-right text-slate-400">{device.gps}</td>
                        <td className="px-4 py-2 text-right">
                          <span className={`${device.batt > 50 ? 'text-green-400' : 'text-yellow-400'}`}>{device.batt}%</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Map */}
            <div className="col-span-4 bg-slate-800 rounded-lg overflow-hidden">
              <div className="px-4 py-3 border-b border-slate-700 flex items-center justify-between">
                <span className="font-medium text-sm">Live Map</span>
                <button className="px-3 py-1 bg-blue-600 rounded text-xs">Track</button>
              </div>
              <div className="h-64 bg-slate-900 flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, #555 1px, transparent 0)',
                  backgroundSize: '20px 20px'
                }}></div>
                <MapPin className="w-8 h-8 text-blue-400" />
              </div>
            </div>

            {/* Telemetry Panel */}
            <div className="col-span-3 space-y-3">
              <div className="bg-slate-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-sm">BMW-001</span>
                  <Activity className="w-4 h-4 text-green-400" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Gauge, label: "Speed", value: "87 km/h" },
                    { icon: Satellite, label: "GPS", value: "14 sats" },
                    { icon: Signal, label: "SIM", value: "4G" },
                    { icon: Battery, label: "Power", value: "94%" },
                  ].map((item, i) => (
                    <div key={i} className="bg-slate-900 rounded p-2">
                      <div className="flex items-center gap-2 mb-1">
                        <item.icon className="w-3 h-3 text-blue-400" />
                        <span className="text-xs text-slate-500">{item.label}</span>
                      </div>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg p-4">
                <h3 className="text-sm font-medium mb-3">Quick Stats</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Trip Distance</span>
                    <span>234.5 km</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Trip Time</span>
                    <span>3h 24m</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Max Speed</span>
                    <span className="text-yellow-400">142 km/h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Stops</span>
                    <span>4</span>
                  </div>
                </div>
              </div>

              {/* Mini CTA */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-4">
                <p className="text-sm font-medium mb-2">Upgrade for Live Data</p>
                <button className="w-full py-2 bg-white text-blue-600 rounded text-sm font-bold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Design18;

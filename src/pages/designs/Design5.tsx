import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Design5 = () => {
  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-0 overflow-hidden">
      {/* CRT Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-10" style={{
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.03) 2px, rgba(0,255,0,0.03) 4px)'
      }}></div>

      {/* Header */}
      <div className="border-b border-green-500/30 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-green-500 hover:text-green-400">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <pre className="text-xs">
{`╔══════════════════════════════════════╗
║  TRACK-OS v3.2.1  |  TERMINAL ACTIVE ║
╚══════════════════════════════════════╝`}
            </pre>
          </div>
          <div className="text-xs">
            <span className="animate-pulse">█</span> SYSTEM ONLINE | {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>

      <div className="p-4 grid grid-cols-12 gap-4 h-[calc(100vh-80px)]">
        {/* Left Panel - Units */}
        <div className="col-span-3 border border-green-500/50 rounded p-3 overflow-auto">
          <div className="text-xs mb-3 border-b border-green-500/30 pb-2">
            {'>'} ACTIVE UNITS [3/5]
          </div>
          {[
            { id: "VH-001", name: "TRANSPORT_ALPHA", status: "MOVING", speed: 78 },
            { id: "VH-002", name: "CARGO_BETA", status: "IDLE", speed: 0 },
            { id: "CR-001", name: "CARAVAN_DELTA", status: "PARKED", speed: 0 },
            { id: "BT-001", name: "VESSEL_GAMMA", status: "MOVING", speed: 15 },
          ].map((unit, i) => (
            <div key={i} className={`mb-2 p-2 border ${unit.status === 'MOVING' ? 'border-green-500' : 'border-green-500/30'} rounded cursor-pointer hover:bg-green-500/10`}>
              <div className="flex justify-between text-xs">
                <span>[{unit.id}]</span>
                <span className={unit.status === 'MOVING' ? 'text-green-400' : 'text-yellow-500'}>{unit.status}</span>
              </div>
              <div className="text-sm">{unit.name}</div>
              <div className="text-xs text-green-500/60">SPD: {unit.speed} KM/H</div>
            </div>
          ))}
        </div>

        {/* Main Terminal */}
        <div className="col-span-6 border border-green-500/50 rounded p-3 flex flex-col">
          <div className="text-xs mb-2 border-b border-green-500/30 pb-2">
            {'>'} TRACKING DISPLAY | UNIT: VH-001
          </div>
          
          {/* ASCII Map */}
          <div className="flex-1 bg-black font-mono text-xs leading-tight overflow-hidden">
            <pre className="text-green-500/70">
{`
     ╔════════════════════════════════════════════════════════════╗
     ║                                                            ║
     ║      ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   ║
     ║      ░░░░░░░░░░░▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   ║
     ║      ░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   ║
     ║      ░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   ║
     ║      ░░░░▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░   ║
     ║      ░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   ║
     ║      ░░░░░░░▒▒▒▒▒▒▒▒▒▒▒░░░░────────────░░░░░░░░░░░░░░░░   ║
     ║      ░░░░░░░░░░▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   ║
     ║      ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   ║
     ║                                                            ║
     ║   [█] = CURRENT POSITION    [─] = ROUTE PATH              ║
     ╚════════════════════════════════════════════════════════════╝

     LAT: 51.5074°N  |  LON: 0.1278°W  |  HEAD: 045°
`}
            </pre>
          </div>

          {/* Command Input */}
          <div className="mt-3 border-t border-green-500/30 pt-3">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-green-400">root@track-os:~$</span>
              <input 
                type="text" 
                className="flex-1 bg-transparent outline-none text-green-500"
                placeholder="type 'help' for commands..."
              />
              <span className="animate-pulse">█</span>
            </div>
          </div>
        </div>

        {/* Right Panel - Telemetry */}
        <div className="col-span-3 space-y-4">
          {/* Telemetry Data */}
          <div className="border border-green-500/50 rounded p-3">
            <div className="text-xs mb-3 border-b border-green-500/30 pb-2">
              {'>'} TELEMETRY DATA
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-green-500/60">SPEED:</span>
                <span>78 KM/H</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-500/60">GPS_SATS:</span>
                <span>12 LOCKED</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-500/60">SIM_STAT:</span>
                <span className="text-green-400">CONNECTED</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-500/60">CARRIER:</span>
                <span>VODAFONE_UK</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-500/60">SIGNAL:</span>
                <span>████████░░ 80%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-500/60">BATTERY:</span>
                <span>█████████░ 92%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-500/60">TEMP:</span>
                <span>42°C</span>
              </div>
            </div>
          </div>

          {/* Commands */}
          <div className="border border-green-500/50 rounded p-3">
            <div className="text-xs mb-3 border-b border-green-500/30 pb-2">
              {'>'} QUICK COMMANDS
            </div>
            <div className="space-y-2">
              <button className="w-full text-left px-2 py-1 border border-green-500/50 rounded hover:bg-green-500/20 text-sm">
                [1] PING_DEVICE
              </button>
              <button className="w-full text-left px-2 py-1 border border-green-500/50 rounded hover:bg-green-500/20 text-sm">
                [2] SET_GEOFENCE
              </button>
              <button className="w-full text-left px-2 py-1 border border-green-500/50 rounded hover:bg-green-500/20 text-sm">
                [3] VIEW_HISTORY
              </button>
              <button className="w-full text-left px-2 py-1 border border-yellow-500/50 text-yellow-500 rounded hover:bg-yellow-500/20 text-sm">
                [4] LIVE_TRACK*
              </button>
            </div>
          </div>

          {/* Subscription Notice */}
          <div className="border border-yellow-500/50 rounded p-3 text-yellow-500">
            <div className="text-xs mb-2">
              ⚠ SUBSCRIPTION REQUIRED
            </div>
            <div className="text-xs text-yellow-500/70 mb-3">
              Live tracking requires active subscription. Upgrade now for real-time data.
            </div>
            <button className="w-full py-2 border border-yellow-500 rounded hover:bg-yellow-500/20 text-sm">
              UPGRADE_PLAN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design5;

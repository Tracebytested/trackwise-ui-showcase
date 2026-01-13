import { Link } from "react-router-dom";

const designs = [
  { id: 1, name: "Minimal Dark", description: "Clean dark theme with minimal elements" },
  { id: 4, name: "Corporate Blue", description: "Professional traditional dashboard" },
  { id: 10, name: "Sidebar Heavy", description: "Prominent sidebar navigation" },
  { id: 19, name: "Split View", description: "Dual panel interface" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">TrackPro UI Gallery</h1>
          <p className="text-xl text-slate-400">20 unique dashboard designs for vehicle & asset tracking</p>
          <div className="flex justify-center gap-4 mt-6 text-sm text-slate-500">
            <span className="px-3 py-1 bg-slate-800 rounded-full">Cars</span>
            <span className="px-3 py-1 bg-slate-800 rounded-full">Caravans</span>
            <span className="px-3 py-1 bg-slate-800 rounded-full">Boats</span>
            <span className="px-3 py-1 bg-slate-800 rounded-full">Telematics</span>
          </div>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {designs.map((design) => (
            <Link
              key={design.id}
              to={`/design/${design.id}`}
              className="group relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700 p-6 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
            >
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm font-bold">
                {design.id}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {design.name}
              </h3>
              <p className="text-sm text-slate-400">{design.description}</p>
              <div className="mt-4 text-blue-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                View Design →
              </div>
            </Link>
          ))}
        </div>
        
        <footer className="mt-16 text-center text-slate-500 text-sm">
          <p>Each design includes: Live Tracking • Geofencing • Device Ping • Telematics Data</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;

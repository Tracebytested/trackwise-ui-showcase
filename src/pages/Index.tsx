import { Link } from 'react-router-dom';
import { MapPin, Compass, Car } from 'lucide-react';

const Index = () => {
  const designs = [
    {
      id: 5,
      name: 'Blue Sidebar Pro',
      description: 'Professional fleet dashboard with blue accent sidebar, tabbed device info, and comprehensive telemetry display.',
      gradient: 'from-blue-600 to-blue-800',
      icon: Compass,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold">TracePortal</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Select Dashboard Design</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose your preferred dashboard interface for fleet tracking and management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designs.map((design) => {
            const Icon = design.icon;
            return (
              <Link
                key={design.id}
                to={`/design/${design.id}`}
                className="group relative p-6 rounded-2xl border border-gray-800 bg-gray-900 hover:border-gray-700 transition-all hover:scale-[1.02]"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${design.gradient} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-bold mb-2">{design.name}</h2>
                <p className="text-gray-400 text-sm">{design.description}</p>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Car className="w-5 h-5 text-gray-500" />
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Index;

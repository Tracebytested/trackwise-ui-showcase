import { Link } from 'react-router-dom';
import { MapPin, Compass, Car, Moon, Sparkles, Zap, Waves, Terminal, Sun, Leaf } from 'lucide-react';

const Index = () => {
  const designs = [
    { id: 1, name: 'Midnight Aurora', description: 'Dark theme with purple/cyan gradients and fixed sidebar', gradient: 'from-purple-600 to-cyan-500', icon: Sparkles },
    { id: 2, name: 'Arctic Frost', description: 'Light theme with blue accents and collapsible sidebar', gradient: 'from-sky-400 to-blue-600', icon: Compass },
    { id: 3, name: 'Emerald Forest', description: 'Dark green theme with nature vibes and expanded sidebar', gradient: 'from-emerald-500 to-teal-600', icon: Leaf },
    { id: 4, name: 'Sunset Blaze', description: 'Warm orange/red theme with top navigation bar', gradient: 'from-orange-500 to-red-500', icon: Sun },
    { id: 5, name: 'Blue Sidebar Pro', description: 'Professional fleet dashboard with blue accent sidebar (Protected)', gradient: 'from-blue-600 to-blue-800', icon: Compass },
    { id: 6, name: 'Neon Cyber', description: 'Cyberpunk theme with neon pink/cyan accents', gradient: 'from-pink-500 to-cyan-400', icon: Zap },
    { id: 7, name: 'Monochrome Minimal', description: 'Clean black and white minimal design', gradient: 'from-gray-800 to-black', icon: Moon },
    { id: 8, name: 'Rose Gold Luxury', description: 'Premium rose gold/pink theme with elegant styling', gradient: 'from-rose-400 to-pink-500', icon: Sparkles },
    { id: 9, name: 'Terminal Tech', description: 'Developer/Hacker inspired green terminal theme', gradient: 'from-green-500 to-green-700', icon: Terminal },
    { id: 10, name: 'Ocean Breeze', description: 'Calm blue ocean-inspired theme with waves', gradient: 'from-cyan-400 to-blue-600', icon: Waves },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold">TracePortal</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Select Dashboard Design</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose from 10 unique dashboard designs. More coming soon!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                <h2 className="text-lg font-bold mb-2">{design.name}</h2>
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

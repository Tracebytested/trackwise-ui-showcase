import { Link } from 'react-router-dom';
import { MapPin, Compass, Car, Moon, Sparkles, Zap, Waves, Terminal, Sun, Leaf, Cpu } from 'lucide-react';

const Index = () => {
  const designs = [
    { id: 1, name: 'Midnight Aurora', description: 'Dark purple/cyan theme with device registry table and sidebar navigation', gradient: 'from-purple-600 to-cyan-500', icon: Sparkles },
    { id: 2, name: 'Arctic Frost', description: 'Clean light theme with collapsible sidebar and stats cards', gradient: 'from-sky-400 to-blue-600', icon: Compass },
    { id: 3, name: 'Emerald Forest', description: 'Dark green theme with device cards grid layout', gradient: 'from-emerald-500 to-teal-600', icon: Leaf },
    { id: 4, name: 'Sunset Blaze', description: 'Warm orange theme with top navigation and grid/list toggle', gradient: 'from-orange-500 to-red-500', icon: Sun },
    { id: 5, name: 'Blue Sidebar Pro', description: 'User tracking dashboard (Protected - requires login)', gradient: 'from-blue-600 to-blue-800', icon: Compass },
    { id: 6, name: 'Neon Cyber', description: 'Cyberpunk theme with neon accents and minimal sidebar', gradient: 'from-pink-500 to-cyan-400', icon: Zap },
    { id: 7, name: 'Monochrome Minimal', description: 'Clean black and white brutalist design', gradient: 'from-gray-800 to-black', icon: Moon },
    { id: 8, name: 'Rose Gold Luxury', description: 'Premium rose gold theme with elegant styling', gradient: 'from-rose-400 to-pink-500', icon: Sparkles },
    { id: 9, name: 'Terminal Tech', description: 'Hacker-inspired green terminal interface', gradient: 'from-green-500 to-green-700', icon: Terminal },
    { id: 10, name: 'Ocean Breeze', description: 'Calm blue ocean theme with wave effects', gradient: 'from-cyan-400 to-blue-600', icon: Waves },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
            <Cpu className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-xl font-bold">TRACE</span>
            <span className="text-red-400 text-sm ml-2">Installer Platform</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Installer Dashboard Designs</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose from 10 unique installer platform designs. Device registration, configuration, and user assignment interfaces.
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
                {design.id === 5 && (
                  <span className="absolute top-4 right-4 px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded">User</span>
                )}
              </Link>
            );
          })}
        </div>

        <p className="text-center text-gray-500 mt-8">10 more designs coming soon...</p>
      </main>
    </div>
  );
};

export default Index;

import { Link } from 'react-router-dom';
import { Cpu, Compass, Moon, Sparkles, Zap, Waves, Terminal, Sun, Leaf, Layers, Palette, LayoutDashboard, PanelLeftClose, Briefcase, Flame, Radio, Diamond, Square, Hexagon } from 'lucide-react';

const Index = () => {
  const designs = [
    { id: 1, name: 'Midnight Aurora', description: 'Dark purple/cyan theme with sidebar navigation', gradient: 'from-purple-600 to-cyan-500', icon: Sparkles },
    { id: 2, name: 'Arctic Frost', description: 'Clean light theme with collapsible sidebar', gradient: 'from-sky-400 to-blue-600', icon: Compass },
    { id: 3, name: 'Emerald Forest', description: 'Dark green theme with device cards grid', gradient: 'from-emerald-500 to-teal-600', icon: Leaf },
    { id: 4, name: 'Sunset Blaze', description: 'Warm orange theme with top navigation', gradient: 'from-orange-500 to-red-500', icon: Sun },
    { id: 5, name: 'Blue Sidebar Pro', description: 'User tracking dashboard (Protected)', gradient: 'from-blue-600 to-blue-800', icon: Compass, user: true },
    { id: 6, name: 'Neon Cyber', description: 'Cyberpunk pink/cyan with minimal sidebar', gradient: 'from-pink-500 to-cyan-400', icon: Zap },
    { id: 7, name: 'Monochrome Minimal', description: 'Clean black and white brutalist', gradient: 'from-gray-800 to-black', icon: Moon },
    { id: 8, name: 'Rose Gold Luxury', description: 'Premium rose gold elegant styling', gradient: 'from-rose-400 to-pink-500', icon: Sparkles },
    { id: 9, name: 'Terminal Tech', description: 'Hacker-inspired green terminal', gradient: 'from-green-500 to-green-700', icon: Terminal },
    { id: 10, name: 'Ocean Breeze', description: 'Calm blue ocean theme with waves', gradient: 'from-cyan-400 to-blue-600', icon: Waves },
    { id: 11, name: 'Glassmorphism', description: 'Frosted glass effect with blur', gradient: 'from-indigo-500 to-purple-600', icon: Layers },
    { id: 12, name: 'Gradient Cards', description: 'Colorful gradient card-based layout', gradient: 'from-violet-500 to-purple-600', icon: Palette },
    { id: 13, name: 'Dashboard Tabs', description: 'Multi-tab interface with detailed views', gradient: 'from-indigo-500 to-blue-600', icon: LayoutDashboard },
    { id: 14, name: 'Split View', description: 'Master-detail layout with device panel', gradient: 'from-slate-600 to-indigo-600', icon: PanelLeftClose },
    { id: 15, name: 'Corporate Clean', description: 'Professional enterprise design', gradient: 'from-blue-800 to-blue-900', icon: Briefcase },
    { id: 16, name: 'Dark Gradient', description: 'Rich dark theme with colorful gradients', gradient: 'from-orange-500 to-pink-600', icon: Flame },
    { id: 17, name: 'Retro 80s', description: 'Neon synthwave retro theme', gradient: 'from-pink-500 to-purple-600', icon: Radio },
    { id: 18, name: 'Art Deco', description: 'Elegant gold and black styling', gradient: 'from-yellow-600 to-amber-700', icon: Diamond },
    { id: 19, name: 'Neo Brutalist', description: 'Bold brutalist with harsh shadows', gradient: 'from-yellow-400 to-yellow-500', icon: Square },
    { id: 20, name: 'Soft Pastel', description: 'Gentle pastel colors with soft shadows', gradient: 'from-purple-400 to-pink-400', icon: Hexagon },
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
          <h1 className="text-4xl font-bold mb-4">20 Installer Dashboard Designs</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Device registration, configuration, user assignment, and system monitoring interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {designs.map((design) => {
            const Icon = design.icon;
            return (
              <Link
                key={design.id}
                to={`/design/${design.id}`}
                className="group relative p-5 rounded-2xl border border-gray-800 bg-gray-900 hover:border-gray-700 transition-all hover:scale-[1.02]"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${design.gradient} flex items-center justify-center mb-3`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-sm font-bold mb-1">{design.name}</h2>
                <p className="text-gray-500 text-xs">{design.description}</p>
                {design.user && (
                  <span className="absolute top-3 right-3 px-2 py-0.5 bg-blue-600/20 text-blue-400 text-[10px] rounded">User</span>
                )}
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Index;

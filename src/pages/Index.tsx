import { Link } from 'react-router-dom';
import { Cpu, Compass, Sparkles, Zap, Terminal, Sun, Layers, LayoutDashboard, PanelLeft, Flame, Crown, Diamond, Hexagon } from 'lucide-react';

const Index = () => {
  const designs = [
    { id: 1, name: 'Ocean Blue', description: 'Top nav with cool blue tones', gradient: 'from-blue-500 to-cyan-500', icon: Cpu },
    { id: 2, name: 'Emerald Dashboard', description: 'Left sidebar with green accent', gradient: 'from-emerald-500 to-green-600', icon: Cpu },
    { id: 3, name: 'Violet Fusion', description: 'Top nav with purple gradient', gradient: 'from-violet-500 to-purple-600', icon: Layers },
    { id: 4, name: 'Sunset Blaze', description: 'Warm orange top nav theme', gradient: 'from-orange-500 to-red-500', icon: Sun },
    { id: 5, name: 'Blue Sidebar Pro', description: 'User tracking dashboard (Protected)', gradient: 'from-blue-600 to-blue-800', icon: Compass, user: true },
    { id: 6, name: 'Teal Professional', description: 'Left sidebar with teal accents', gradient: 'from-teal-500 to-teal-600', icon: PanelLeft },
    { id: 7, name: 'Rose Glow', description: 'Top nav with pink/rose gradient', gradient: 'from-rose-500 to-pink-600', icon: Zap },
    { id: 8, name: 'Slate Minimal', description: 'Clean sidebar with slate tones', gradient: 'from-slate-600 to-slate-800', icon: Hexagon },
    { id: 9, name: 'Amber Fire', description: 'Top nav with warm amber tones', gradient: 'from-amber-500 to-orange-600', icon: Flame },
    { id: 10, name: 'Royal Purple', description: 'Left sidebar with deep purple', gradient: 'from-purple-500 to-purple-700', icon: Crown },
    { id: 11, name: 'Matrix Green', description: 'Dark terminal with neon green', gradient: 'from-green-400 to-green-600', icon: Terminal },
    { id: 12, name: 'Sky Blue', description: 'Light sidebar with sky blue', gradient: 'from-sky-400 to-sky-600', icon: Diamond },
    { id: 13, name: 'Split View', description: 'Multi-tab dashboard interface', gradient: 'from-indigo-500 to-indigo-700', icon: LayoutDashboard },
    { id: 14, name: 'Midnight Blue', description: 'Deep navy with electric blue', gradient: 'from-blue-400 to-indigo-500', icon: Sparkles },
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
          <h1 className="text-4xl font-bold mb-4">14 Installer Dashboard Designs</h1>
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

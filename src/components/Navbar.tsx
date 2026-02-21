
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useDarkMode } from '@/App';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { dark, toggle } = useDarkMode();

  const menuItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed w-full max-w-[100vw] z-50 top-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-gray-200 dark:border-slate-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full min-w-0">
        <div className="flex items-center justify-between min-h-14 sm:h-16 gap-2">
          {/* Terminal prompt style brand with dark mode toggle */}
          <div className="flex items-center gap-2 sm:gap-4 min-w-0">
            <span className="text-base sm:text-xl font-mono font-bold text-green-600 dark:text-green-400 flex items-center gap-1 sm:gap-2 select-none truncate">
              <span className="text-green-500 shrink-0">$</span>
              <span className="truncate">Aman Sharma</span>
            </span>
            <button
              onClick={toggle}
              className="flex items-center gap-1 px-2 py-1 rounded-md font-mono text-xs shadow border border-green-400 bg-black text-green-400 hover:bg-slate-900 hover:text-green-300 transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              <span className="text-green-500">$</span>
              <span>{dark ? '🌙' : '☀️'}</span>
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center flex-shrink-0 gap-2 lg:space-x-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-1 px-2 py-1 lg:px-3 bg-slate-900 dark:bg-slate-800 text-blue-200 dark:text-blue-300 font-mono rounded shadow hover:bg-slate-800 dark:hover:bg-slate-700 hover:text-green-400 dark:hover:text-green-300 transition-all cursor-pointer text-xs lg:text-sm border border-slate-700 dark:border-slate-600 whitespace-nowrap"
              >
                <span className="text-green-400">{'>'}</span> {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 dark:text-slate-300 hover:text-green-500 dark:hover:text-green-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 dark:bg-slate-900/95 border-t border-gray-200 dark:border-slate-700 shadow-sm">
            <div className="px-2 pt-2 pb-3 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 font-mono text-slate-800 dark:text-slate-200 hover:text-green-500 dark:hover:text-green-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-all border border-slate-200 dark:border-slate-700"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-green-400">{'>'}</span> {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

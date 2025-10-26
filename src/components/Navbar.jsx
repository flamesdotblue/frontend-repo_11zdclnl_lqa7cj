import React from 'react';
import { Bell, Search, Menu, Sun, Moon, ChevronDown } from 'lucide-react';

export default function Navbar({ onToggleSidebar, theme, onToggleTheme, user }) {
  return (
    <header className="sticky top-0 z-20 bg-white/70 dark:bg-zinc-900/70 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
      <div className="px-4 sm:px-6 py-3 flex items-center gap-3">
        <button onClick={onToggleSidebar} className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
          <Menu className="h-5 w-5" />
        </button>

        <div className="flex-1">
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <input
              className="w-full pl-10 pr-3 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-transparent focus:border-indigo-500 outline-none text-sm"
              placeholder="Search tasks, people, docs..."
            />
          </div>
        </div>

        <button onClick={onToggleTheme} className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
          {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>

        <button className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
          <Bell className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500" />
          <div className="hidden sm:block">
            <div className="text-sm font-medium">{user?.name || 'Guest'}</div>
            <div className="text-xs text-zinc-500">{user?.role || 'Visitor'}</div>
          </div>
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
    </header>
  );
}

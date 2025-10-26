import React from 'react';
import { LayoutDashboard, ListTodo, Users, BarChart3, Settings, LogOut, Activity as ActivityIcon } from 'lucide-react';

const navItems = [
  { key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { key: 'tasks', label: 'Tasks', icon: ListTodo },
  { key: 'teams', label: 'Teams', icon: Users },
  { key: 'activity', label: 'Activity', icon: ActivityIcon },
  { key: 'reports', label: 'Reports', icon: BarChart3 },
  { key: 'settings', label: 'Settings', icon: Settings },
];

export default function Sidebar({ current, onNavigate, collapsed, role }) {
  return (
    <aside
      className={`${collapsed ? 'w-16' : 'w-64'} transition-all duration-300 border-r border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur sticky top-0 h-screen`}
    >
      <div className="p-4 flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800">
        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500" />
        {!collapsed && (
          <div>
            <div className="text-lg font-semibold tracking-tight">TaskFlow Pro</div>
            <div className="text-xs text-zinc-500">{role ? role : 'Guest'}</div>
          </div>
        )}
      </div>
      <nav className="p-2 space-y-1">
        {navItems.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => onNavigate(key)}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition ${
              current === key ? 'bg-zinc-100 dark:bg-zinc-800 font-medium' : ''
            } ${key === 'teams' && role !== 'Admin' ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={key === 'teams' && role !== 'Admin'}
          >
            <Icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            {!collapsed && <span>{label}</span>}
          </button>
        ))}
      </nav>
      <div className="absolute bottom-0 left-0 right-0 p-2 border-t border-zinc-200 dark:border-zinc-800">
        <button
          onClick={() => onNavigate('logout')}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400"
        >
          <LogOut className="h-5 w-5" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}

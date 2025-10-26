import React from 'react';

export default function Settings({ user, onUpdateProfile, onChangePassword, theme, onToggleTheme }) {
  return (
    <div className="p-4 sm:p-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <div className="text-sm text-zinc-500 mb-3">Profile</div>
          <form onSubmit={(e) => { e.preventDefault(); const f=e.currentTarget; onUpdateProfile({ name: f.name.value }); }} className="space-y-2">
            <input name="name" defaultValue={user?.name} className="w-full px-3 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-sm outline-none border border-transparent focus:border-indigo-500" />
            <button className="px-3 py-2 rounded-lg bg-indigo-600 text-white text-sm">Save</button>
          </form>
        </div>

        <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <div className="text-sm text-zinc-500 mb-3">Password</div>
          <form onSubmit={(e) => { e.preventDefault(); const f=e.currentTarget; onChangePassword(f.password.value); f.reset(); }} className="space-y-2">
            <input name="password" type="password" placeholder="New password" className="w-full px-3 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-sm outline-none border border-transparent focus:border-indigo-500" />
            <button className="px-3 py-2 rounded-lg bg-indigo-600 text-white text-sm">Update</button>
          </form>
        </div>

        <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <div className="text-sm text-zinc-500 mb-3">Appearance</div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Theme</div>
              <div className="text-xs text-zinc-500">Current: {theme}</div>
            </div>
            <button onClick={onToggleTheme} className="px-3 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-sm">Toggle</button>
          </div>
        </div>
      </div>
    </div>
  );
}

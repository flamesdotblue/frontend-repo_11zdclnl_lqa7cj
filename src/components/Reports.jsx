import React from 'react';

function Bar({ label, value, max }) {
  const percent = max ? Math.round((value / max) * 100) : 0;
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs text-zinc-500">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="h-2 rounded-full bg-zinc-200 dark:bg-zinc-800">
        <div className="h-2 rounded-full bg-indigo-500" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

export default function Reports({ tasks, users }) {
  const completed = tasks.filter(t => t.status === 'Completed').length;
  const pending = tasks.filter(t => t.status !== 'Completed').length;

  const byUser = users.map(u => ({
    name: u.name,
    completed: tasks.filter(t => t.assignee === u.name && t.status === 'Completed').length,
  }));
  const maxVal = Math.max(1, ...byUser.map(b => b.completed));

  return (
    <div className="p-4 sm:p-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <div className="text-sm text-zinc-500 mb-2">Completion Breakdown</div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800">
              <div className="text-2xl font-semibold text-emerald-600">{completed}</div>
              <div className="text-xs text-zinc-500">Completed</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800">
              <div className="text-2xl font-semibold text-amber-600">{pending}</div>
              <div className="text-xs text-zinc-500">Pending</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <div className="text-sm text-zinc-500 mb-4">Productivity by User</div>
          <div className="space-y-3">
            {byUser.map(b => (
              <Bar key={b.name} label={b.name} value={b.completed} max={maxVal} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

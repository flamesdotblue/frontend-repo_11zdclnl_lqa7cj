import React from 'react';
import { CheckCircle2, AlertTriangle, Clock3, ClipboardList } from 'lucide-react';

function StatCard({ title, value, icon: Icon, color }) {
  return (
    <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-zinc-500">{title}</div>
          <div className="text-2xl font-semibold mt-1">{value}</div>
        </div>
        <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${color}`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
      </div>
    </div>
  );
}

function ProgressRing({ percent }) {
  const angle = Math.min(100, Math.max(0, percent)) * 3.6;
  return (
    <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
      <div className="text-sm text-zinc-500 mb-3">Overall Progress</div>
      <div className="flex items-center gap-6">
        <div
          className="h-28 w-28 rounded-full grid place-items-center"
          style={{
            background: `conic-gradient(#6366f1 ${angle}deg, #e5e7eb 0)`,
          }}
        >
          <div className="h-20 w-20 rounded-full bg-white dark:bg-zinc-900 grid place-items-center text-xl font-semibold">
            {percent}%
          </div>
        </div>
        <div className="text-sm text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-indigo-500" /> Completed</div>
          <div className="flex items-center gap-2 mt-1"><span className="h-2 w-2 rounded-full bg-zinc-300" /> Remaining</div>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard({ tasks, activity }) {
  const total = tasks.length;
  const completed = tasks.filter(t => t.status === 'Completed').length;
  const pending = tasks.filter(t => t.status === 'In Progress' || t.status === 'Pending').length;
  const overdue = tasks.filter(t => t.status !== 'Completed' && new Date(t.deadline) < new Date()).length;
  const percent = total ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="p-4 sm:p-6 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Tasks" value={total} icon={ClipboardList} color="bg-indigo-500" />
        <StatCard title="Completed" value={completed} icon={CheckCircle2} color="bg-emerald-500" />
        <StatCard title="Pending" value={pending} icon={Clock3} color="bg-amber-500" />
        <StatCard title="Overdue" value={overdue} icon={AlertTriangle} color="bg-rose-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <ProgressRing percent={percent} />
        </div>
        <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <div className="text-sm text-zinc-500 mb-3">Recent Activity</div>
          <div className="space-y-3 max-h-64 overflow-auto pr-1">
            {activity.map((a, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-indigo-500 mt-1.5" />
                <div>
                  <div className="text-sm">{a.text}</div>
                  <div className="text-xs text-zinc-500">{a.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

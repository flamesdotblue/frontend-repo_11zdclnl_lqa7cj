import React from 'react';
import { Pencil, Eye, Trash, PlusCircle, ArrowUpDown } from 'lucide-react';

export default function Tasks({ tasks, onCreate, onView, onEdit, onDelete, onSort }) {
  return (
    <div className="p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold">Tasks</h2>
          <p className="text-sm text-zinc-500">Manage and track all tasks in one place.</p>
        </div>
        <button onClick={onCreate} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-500">
          <PlusCircle className="h-4 w-4" /> New Task
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-zinc-500">
              <th className="py-2 pr-4">Title</th>
              <th className="py-2 pr-4">Assignee</th>
              <th className="py-2 pr-4">Priority</th>
              <th className="py-2 pr-4">Status</th>
              <th className="py-2 pr-4 cursor-pointer select-none" onClick={() => onSort && onSort('deadline')}>
                <div className="inline-flex items-center gap-1">Deadline <ArrowUpDown className="h-3.5 w-3.5" /></div>
              </th>
              <th className="py-2 pr-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((t) => (
              <tr key={t.id} className="border-t border-zinc-200 dark:border-zinc-800">
                <td className="py-3 pr-4">
                  <div className="font-medium">{t.title}</div>
                  <div className="text-xs text-zinc-500">#{t.id}</div>
                </td>
                <td className="py-3 pr-4">{t.assignee}</td>
                <td className="py-3 pr-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    t.priority === 'High' ? 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300' :
                    t.priority === 'Medium' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300' :
                    'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
                  }`}>
                    {t.priority}
                  </span>
                </td>
                <td className="py-3 pr-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    t.status === 'Completed' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300' :
                    t.status === 'In Progress' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300' :
                    t.status === 'Pending' ? 'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300' :
                    'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300'
                  }`}>
                    {t.status}
                  </span>
                </td>
                <td className="py-3 pr-4">{new Date(t.deadline).toLocaleDateString()}</td>
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800" onClick={() => onView(t)}>
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800" onClick={() => onEdit(t)}>
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800" onClick={() => onDelete(t)}>
                      <Trash className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

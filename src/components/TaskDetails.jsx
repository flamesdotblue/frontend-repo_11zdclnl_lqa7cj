import React from 'react';

export default function TaskDetails({ task, onBack, onAddComment }) {
  if (!task) return null;
  return (
    <div className="p-4 sm:p-6 space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">{task.title}</h2>
          <p className="text-sm text-zinc-500">Assigned to {task.assignee} • Due {new Date(task.deadline).toLocaleDateString()}</p>
        </div>
        <button onClick={onBack} className="px-3 py-2 rounded-lg text-sm border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800">Back</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <div className="text-sm text-zinc-500 mb-2">Description</div>
            <p className="text-sm leading-6">{task.description || 'No description provided.'}</p>
          </div>

          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <div className="text-sm text-zinc-500 mb-3">Comments</div>
            <div className="space-y-3">
              {task.comments?.map((c, i) => (
                <div key={i} className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-800">
                  <div className="text-sm">{c.text}</div>
                  <div className="text-xs text-zinc-500 mt-1">{c.author} • {c.time}</div>
                </div>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const text = e.currentTarget.comment.value.trim();
                if (text) onAddComment(task.id, text);
                e.currentTarget.reset();
              }}
              className="mt-3 flex gap-2"
            >
              <input name="comment" className="flex-1 px-3 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-sm outline-none border border-transparent focus:border-indigo-500" placeholder="Add a comment" />
              <button className="px-3 py-2 rounded-lg bg-indigo-600 text-white text-sm">Post</button>
            </form>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <div className="text-sm text-zinc-500 mb-2">Details</div>
            <div className="text-sm space-y-2">
              <div><span className="text-zinc-500">Priority:</span> {task.priority}</div>
              <div><span className="text-zinc-500">Status:</span> {task.status}</div>
              <div><span className="text-zinc-500">Assignee:</span> {task.assignee}</div>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <div className="text-sm text-zinc-500 mb-2">Activity Log</div>
            <div className="space-y-3">
              {task.activity?.map((a, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <div className="h-2 w-2 rounded-full bg-indigo-500 mt-1.5" />
                  <div>
                    <div>{a.text}</div>
                    <div className="text-xs text-zinc-500">{a.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

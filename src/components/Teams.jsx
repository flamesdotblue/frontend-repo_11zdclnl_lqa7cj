import React, { useState } from 'react';
import { PlusCircle, Pencil, Trash } from 'lucide-react';

export default function Teams({ users, role, onCreateUser, onEditUser, onDeleteUser }) {
  const [name, setName] = useState('');
  const [userRole, setUserRole] = useState('Employee');

  const canManage = role === 'Admin';

  return (
    <div className="p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold">Teams</h2>
          <p className="text-sm text-zinc-500">Manage users and roles.</p>
        </div>
      </div>

      {!canManage && (
        <div className="mb-4 p-3 rounded-lg border border-amber-200 bg-amber-50 text-amber-800 dark:bg-amber-900/20 dark:border-amber-900/40 dark:text-amber-300">
          Only Admins can add or edit users.
        </div>
      )}

      {canManage && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!name.trim()) return;
            onCreateUser({ name: name.trim(), role: userRole });
            setName('');
            setUserRole('Employee');
          }}
          className="mb-4 flex flex-wrap gap-2 items-center"
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-3 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-sm outline-none border border-transparent focus:border-indigo-500"
            placeholder="Full name"
          />
          <select
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
            className="px-3 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-sm outline-none border border-transparent focus:border-indigo-500"
          >
            <option>Admin</option>
            <option>Manager</option>
            <option>Employee</option>
          </select>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-500">
            <PlusCircle className="h-4 w-4" /> Add User
          </button>
        </form>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-zinc-500">
              <th className="py-2 pr-4">Name</th>
              <th className="py-2 pr-4">Role</th>
              <th className="py-2 pr-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-t border-zinc-200 dark:border-zinc-800">
                <td className="py-3 pr-4">{u.name}</td>
                <td className="py-3 pr-4">{u.role}</td>
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-2">
                    <button disabled={!canManage} className={`p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 ${!canManage ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={() => onEditUser(u)}>
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button disabled={!canManage} className={`p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 ${!canManage ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={() => onDeleteUser(u)}>
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

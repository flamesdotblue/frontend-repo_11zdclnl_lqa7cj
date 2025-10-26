import React, { useState } from 'react';

export default function Auth({ onLogin }) {
  const [isSignup, setIsSignup] = useState(false);
  const [role, setRole] = useState('Employee');

  return (
    <div className="min-h-[80vh] grid place-items-center p-4">
      <div className="w-full max-w-md p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500" />
            <h1 className="text-xl font-semibold">TaskFlow Pro</h1>
          </div>
          <p className="text-sm text-zinc-500 mt-1">{isSignup ? 'Create your account' : 'Welcome back'}</p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const f = e.currentTarget;
            const name = f.name?.value || 'User';
            const email = f.email.value;
            const password = f.password.value;
            onLogin({ name, email, role }, password);
          }}
          className="space-y-3"
        >
          {isSignup && (
            <input name="name" placeholder="Full name" className="w-full px-3 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-sm outline-none border border-transparent focus:border-indigo-500" />
          )}
          <input name="email" type="email" placeholder="Email" className="w-full px-3 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-sm outline-none border border-transparent focus:border-indigo-500" />
          <input name="password" type="password" placeholder="Password" className="w-full px-3 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-sm outline-none border border-transparent focus:border-indigo-500" />

          <div className="flex items-center gap-2">
            <label className="text-sm text-zinc-600 dark:text-zinc-300">Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} className="px-3 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-sm outline-none border border-transparent focus:border-indigo-500">
              <option>Admin</option>
              <option>Manager</option>
              <option>Employee</option>
            </select>
          </div>

          <button className="w-full px-3 py-2 rounded-lg bg-indigo-600 text-white text-sm">{isSignup ? 'Create Account' : 'Sign In'}</button>
        </form>

        <div className="text-center text-sm text-zinc-500 mt-4">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button onClick={() => setIsSignup(!isSignup)} className="text-indigo-600 dark:text-indigo-400">
            {isSignup ? 'Sign in' : 'Create one'}
          </button>
        </div>
      </div>
    </div>
  );
}

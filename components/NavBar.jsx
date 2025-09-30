import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const t = localStorage.getItem('theme') || 'light';
    setTheme(t);
    document.documentElement.setAttribute('data-theme', t);
  }, []);
  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };
  return (
    <div className="navbar bg-base-100 border-b">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">Liên Quân Hub</Link>
        <div className="hidden md:flex">
          <Link href="/" className="btn btn-ghost btn-sm">Video</Link>
          <Link href="/news" className="btn btn-ghost btn-sm">Tin tức</Link>
        </div>
      </div>
      <div className="flex-none gap-2">
        <select
          className="select select-sm select-bordered"
          value={theme}
          onChange={(e) => {
            const val = e.target.value;
            setTheme(val);
            document.documentElement.setAttribute('data-theme', val);
            localStorage.setItem('theme', val);
          }}
        >
          <option value="lqhub">LQ Hub</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="retro">Retro</option>
          <option value="dracula">Dracula</option>
        </select>
        <button className="btn btn-sm" onClick={toggleTheme}>{theme === 'light' ? 'Dark' : 'Light'}</button>
      </div>
    </div>
  );
}



import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    const t = localStorage.getItem('theme') || 'dark';
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
    <div className="sticky top-0 z-50 backdrop-blur-lg bg-slate-950/85 border-b border-white/10 transition-all duration-300">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-1 flex items-center gap-6">
          {/* Logo with Shield SVG */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <svg className="w-9 h-9 transform group-hover:scale-105 transition-transform duration-300" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="navShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
              </defs>
              <path d="M 50,15 L 85,30 L 85,55 C 85,75 50,90 50,90 C 50,90 15,75 15,55 L 15,30 Z" fill="url(#navShieldGrad)" />
              <path d="M 50,22 L 78,34 L 78,54 C 78,70 50,82 50,82 C 50,82 22,70 22,54 L 22,34 Z" fill="#0b1020" />
              <text x="50" y="60" fontFamily="'Segoe UI', Roboto, sans-serif" fontWeight="900" fontSize="26" fill="#f97316" textAnchor="middle">LQ</text>
            </svg>
            <div className="text-lg sm:text-xl font-black tracking-tight text-white">
              <span>Liên Quân </span>
              <span className="text-red-500">Hub</span>
            </div>
          </Link>

          {/* Premium Nav Links */}
          <div className="hidden md:flex items-center gap-6 ml-4">
            <Link href="/" className="nav-link-premium font-semibold text-sm py-1.5">Video</Link>
            <Link href="/news" className="nav-link-premium font-semibold text-sm py-1.5">Tin tức</Link>
            <Link href="/blog" className="nav-link-premium font-semibold text-sm py-1.5">Blog</Link>
            <Link href="/tuong" className="nav-link-premium font-semibold text-sm py-1.5">Tướng</Link>
            <Link href="/tier-list" className="nav-link-premium font-semibold text-sm py-1.5">Tier List</Link>
          </div>
        </div>
        
        {/* Mobile quick link & Theme switcher */}
        <div className="flex-none gap-2">
          {/* Mobile quick links */}
          <div className="flex md:hidden items-center gap-3 mr-2">
            <Link href="/tuong" className="text-xs font-bold text-slate-400 hover:text-white">Tướng</Link>
            <Link href="/tier-list" className="text-xs font-bold text-slate-400 hover:text-white">Tiers</Link>
          </div>
          
          <select
            className="select select-xs sm:select-sm select-bordered bg-slate-900 border-slate-800 text-slate-300"
            value={theme}
            onChange={(e) => {
              const val = e.target.value;
              setTheme(val);
              document.documentElement.setAttribute('data-theme', val);
              localStorage.setItem('theme', val);
            }}
          >
            <option value="light">☀️ Light</option>
            <option value="dark">🌙 Dark</option>
          </select>
        </div>
      </div>
    </div>
  );
}

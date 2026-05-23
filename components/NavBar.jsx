import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import LanguageSwitcher from './LanguageSwitcher';
import { useLocale } from '../contexts/LocaleContext';

export default function NavBar() {
  const router = useRouter();
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(path);
  };

  const navLinks = [
    { labelKey: 'nav.video', path: '/' },
    { labelKey: 'nav.news', path: '/news' },
    { labelKey: 'nav.blog', path: '/blog' },
    { labelKey: 'nav.heroes', path: '/tuong' },
    { labelKey: 'nav.tierList', path: '/tier-list' },
  ];

  return (
    <div
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(11, 16, 32, 0.95)' : 'rgba(11, 16, 32, 0.8)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: scrolled ? '1px solid rgba(239, 68, 68, 0.35)' : '1px solid rgba(239, 68, 68, 0.15)',
      }}
    >
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex-1 flex items-center gap-4 lg:gap-8 min-w-0">
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <svg
              className="w-9 h-9 transform group-hover:scale-105 transition-transform duration-300"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="navShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
              </defs>
              <path
                d="M 50,15 L 85,30 L 85,55 C 85,75 50,90 50,90 C 50,90 15,75 15,55 L 15,30 Z"
                fill="url(#navShieldGrad)"
              />
              <path
                d="M 50,22 L 78,34 L 78,54 C 78,70 50,82 50,82 C 50,82 22,70 22,54 L 22,34 Z"
                fill="#0b1020"
              />
              <text
                x="50"
                y="60"
                fontFamily="'Segoe UI', Roboto, sans-serif"
                fontWeight="900"
                fontSize="26"
                fill="#f97316"
                textAnchor="middle"
              >
                LQ
              </text>
            </svg>
            <div className="text-lg sm:text-xl font-black tracking-tight text-white hidden sm:block">
              <span>Liên Quân </span>
              <span className="text-red-500 font-black">Hub</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6 ml-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`relative py-1.5 text-sm font-black tracking-wide transition-colors duration-300 ${
                  isActive(link.path) ? 'text-red-400' : 'text-slate-300 hover:text-white'
                } group/link`}
              >
                {t(link.labelKey)}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-red-500 origin-left transition-transform duration-300 ${
                    isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover/link:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex-none flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <div className="flex md:hidden items-center gap-3 mr-1">
            <Link
              href="/tuong"
              className={`text-xs font-black tracking-wide ${isActive('/tuong') ? 'text-red-400' : 'text-slate-400 hover:text-white'}`}
            >
              {t('nav.heroes')}
            </Link>
            <Link
              href="/tier-list"
              className={`text-xs font-black tracking-wide ${isActive('/tier-list') ? 'text-red-400' : 'text-slate-400 hover:text-white'}`}
            >
              {t('nav.tierList')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

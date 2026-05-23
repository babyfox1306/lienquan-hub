import { useEffect, useRef, useState } from 'react';
import { LOCALES } from '../lib/i18n/locales';
import { useLocale } from '../contexts/LocaleContext';

export default function LanguageSwitcher({ className = '' }) {
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = LOCALES.find((l) => l.code === locale) || LOCALES[0];

  useEffect(() => {
    const onDocClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  return (
    <div className={`relative ${className}`} ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-slate-700/80 bg-slate-900/80 text-slate-200 hover:border-red-500/50 hover:text-white transition-all text-xs sm:text-sm font-bold"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t('lang.label')}
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="hidden sm:inline max-w-[5rem] truncate">{current.label}</span>
        <svg
          className={`w-3.5 h-3.5 opacity-70 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-2 w-56 max-h-[70vh] overflow-y-auto rounded-2xl border border-slate-700/90 bg-slate-950/98 shadow-2xl shadow-black/50 backdrop-blur-xl z-[60] py-1"
          role="listbox"
        >
          <div className="px-3 py-2 text-[10px] font-black uppercase tracking-widest text-slate-500 border-b border-slate-800">
            {t('lang.asia')}
          </div>
          {LOCALES.map((loc) => (
            <button
              key={loc.code}
              type="button"
              role="option"
              aria-selected={locale === loc.code}
              onClick={() => {
                setLocale(loc.code);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-left text-sm transition-colors ${
                locale === loc.code
                  ? 'bg-red-500/15 text-red-400'
                  : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
              }`}
            >
              <span className="text-lg">{loc.flag}</span>
              <div className="flex flex-col min-w-0">
                <span className="font-bold truncate">{loc.label}</span>
                <span className="text-[10px] text-slate-500 truncate">{loc.region}</span>
              </div>
              {locale === loc.code && (
                <span className="ml-auto text-red-500 text-xs">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

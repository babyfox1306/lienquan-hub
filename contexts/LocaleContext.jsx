import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { DEFAULT_LOCALE, getLocaleConfig } from '../lib/i18n/locales';
import { getTranslation, t as translate } from '../lib/i18n/translations';

const STORAGE_KEY = 'lienquanhub-locale';

const LocaleContext = createContext(null);

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(DEFAULT_LOCALE);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && getTranslation(saved)) {
        setLocaleState(saved);
      }
    } catch (_) {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const config = getLocaleConfig(locale);
    document.documentElement.lang = config.lang;
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch (_) {}
  }, [locale, ready]);

  const setLocale = useCallback((code) => {
    if (getTranslation(code)) setLocaleState(code);
  }, []);

  const messages = useMemo(() => getTranslation(locale), [locale]);
  const config = useMemo(() => getLocaleConfig(locale), [locale]);

  const t = useCallback((key) => translate(messages, key), [messages]);

  const value = useMemo(
    () => ({ locale, setLocale, t, messages, config, ready }),
    [locale, setLocale, t, messages, config, ready]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
}

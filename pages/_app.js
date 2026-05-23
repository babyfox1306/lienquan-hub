import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { LocaleProvider } from '../contexts/LocaleContext';

// Include Vietnamese glyphs to prevent missing accents on production
const inter = Inter({ subsets: ['latin', 'latin-ext', 'vietnamese'], weight: ['400','600','700'] });

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const progressBarRef = useRef(null);

  useEffect(() => {
    try {
      const t = localStorage.getItem('theme') || 'dark'; // Dark mode default looks amazing
      document.documentElement.setAttribute('data-theme', t);
    } catch {}

    let progressInterval = null;
    let progress = 0;

    const startProgress = () => {
      if (progressBarRef.current) {
        progressBarRef.current.style.opacity = '1';
        progressBarRef.current.style.transform = 'translateX(-100%)';
      }
      progress = 0;
      clearInterval(progressInterval);
      
      progressInterval = setInterval(() => {
        if (progress < 90) {
          // decaying increments
          const step = (100 - progress) * 0.15;
          progress += step;
          if (progressBarRef.current) {
            progressBarRef.current.style.transform = `translateX(-${100 - progress}%)`;
          }
        }
      }, 100);
    };

    const stopProgress = () => {
      clearInterval(progressInterval);
      progress = 100;
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = 'translateX(0%)';
        setTimeout(() => {
          if (progressBarRef.current) {
            progressBarRef.current.style.opacity = '0';
          }
        }, 200);
        setTimeout(() => {
          if (progressBarRef.current) {
            progressBarRef.current.style.transform = 'translateX(-100%)';
          }
        }, 500);
      }
    };

    router.events.on('routeChangeStart', startProgress);
    router.events.on('routeChangeComplete', stopProgress);
    router.events.on('routeChangeError', stopProgress);

    return () => {
      router.events.off('routeChangeStart', startProgress);
      router.events.off('routeChangeComplete', stopProgress);
      router.events.off('routeChangeError', stopProgress);
      clearInterval(progressInterval);
    };
  }, [router.events]);

  return (
    <LocaleProvider>
      <div className={inter.className}>
        <div id="nprogress-bar" ref={progressBarRef} />
        <Component {...pageProps} />
        <Analytics />
        <SpeedInsights />
      </div>
    </LocaleProvider>
  );
}

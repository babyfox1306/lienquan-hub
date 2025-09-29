import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'], weight: ['400','600','700'] });

export default function App({ Component, pageProps }) {
  useEffect(() => {
    try {
      const t = localStorage.getItem('theme') || 'light';
      document.documentElement.setAttribute('data-theme', t);
    } catch {}
  }, []);
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}



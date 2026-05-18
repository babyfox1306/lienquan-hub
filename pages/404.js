import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Custom404() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random falling bush/grass particles
    const items = [];
    const emojis = ['🌿', '🌱', '🍃', '⚔️'];
    for (let i = 0; i < 25; i++) {
      items.push({
        id: i,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        left: Math.random() * 100, // random percentage
        delay: Math.random() * 8, // delay in seconds
        duration: 4 + Math.random() * 6, // fall speed in seconds
        size: 14 + Math.random() * 16, // font size
      });
    }
    setParticles(items);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <Head>
        <title>404 - Bạn Đã Đi Lạc! | Liên Quân Hub</title>
        <meta name="description" content="Bạn đã đi lạc vào bụi cỏ của địch rồi! Tướng của bạn đã bị gank. Về tế đàn thôi..." />
      </Head>

      <NavBar />

      {/* Falling particles container */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {particles.map((p) => (
          <span
            key={p.id}
            className="particle select-none"
            style={{
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              fontSize: `${p.size}px`,
            }}
          >
            {p.emoji}
          </span>
        ))}
      </div>

      <main className="flex-grow flex items-center justify-center px-4 py-16 relative z-10">
        <div className="text-center max-w-xl mx-auto space-y-8 bg-slate-900/40 border border-slate-800/80 backdrop-blur-md p-8 sm:p-12 rounded-3xl shadow-2xl">
          {/* Main big graphic */}
          <div className="relative inline-block select-none">
            <span className="text-[100px] sm:text-[140px] font-black tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-orange-500 to-red-600 animate-flicker">
              404
            </span>
            <span className="absolute -top-4 -right-4 text-5xl sm:text-6xl animate-bounce">
              🌿
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Bạn đã đi lạc vào bụi cỏ của địch rồi! ⚔️
            </h1>
            <p className="text-sm sm:text-base text-slate-400 font-medium">
              Tướng của bạn đã bị gank bất ngờ. Hãy hồi sinh tại tế đàn và tiếp tục chiến đấu thôi!
            </p>
          </div>

          {/* Glowing CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="/"
              className="btn btn-error text-white font-extrabold w-full sm:w-auto px-8 rounded-xl shadow-lg shadow-red-500/20 hover:scale-105 transition-all duration-300"
            >
              🏠 Về Trang Chủ
            </Link>
            
            <Link
              href="/tuong"
              className="btn btn-outline border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 font-extrabold w-full sm:w-auto px-8 rounded-xl hover:scale-105 transition-all duration-300"
            >
              ⚔️ Xem Bảng Tướng
            </Link>

            <Link
              href="/tier-list"
              className="btn btn-outline border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 font-extrabold w-full sm:w-auto px-8 rounded-xl hover:scale-105 transition-all duration-300"
            >
              📊 Tier List
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

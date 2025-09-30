import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="vi">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Liên Quân Hub - Tổng hợp video highlight, hướng dẫn, giải đấu Liên Quân Mobile mới nhất"
        />
        <meta property="og:title" content="Liên Quân Hub" />
        <meta
          property="og:description"
          content="Kho video Liên Quân Mobile: highlight, hướng dẫn, giải đấu, drama tuyển thủ."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0b1020" />
        
        {/* AdSense Verification */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1296883156065618" crossOrigin="anonymous"></script>
        <meta name="google-adsense-account" content="ca-pub-1296883156065618" />
        
        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  // Register main Service Worker
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('Main ServiceWorker registration successful');
                    })
                    .catch(function(err) {
                      console.log('Main ServiceWorker registration failed');
                    });
                  
                  // Register Push Notifications Service Worker
                  navigator.serviceWorker.register('/sw-push.js')
                    .then(function(registration) {
                      console.log('Push ServiceWorker registration successful');
                    })
                    .catch(function(err) {
                      console.log('Push ServiceWorker registration failed');
                    });
                });
              }
            `,
          }}
        />
      </Head>
      <body className="bg-base-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}



import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="vi">
      <Head>
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
      </Head>
      <body className="bg-base-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}



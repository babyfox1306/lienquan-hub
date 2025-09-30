import Head from 'next/head';

export default function AdSenseVerify() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <Head>
        <title>Liên Quân Hub - AdSense Verification</title>
        <meta name="description" content="Liên Quân Hub - Tổng hợp video Liên Quân Mobile" />
        <meta name="google-adsense-account" content="ca-pub-1296883156065618" />
      </Head>
      
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Liên Quân Hub</h1>
        <p className="text-lg mb-8">Tổng hợp video highlight, hướng dẫn, giải đấu Liên Quân Mobile</p>
        
        <div className="bg-base-100 p-8 rounded-lg shadow-lg max-w-2xl">
          <h2 className="text-2xl font-semibold mb-4">Nội dung chính:</h2>
          <ul className="text-left space-y-2">
            <li>• Video highlight Liên Quân Mobile mới nhất</li>
            <li>• Hướng dẫn chơi tướng và meta game</li>
            <li>• Tin tức esports và giải đấu</li>
            <li>• Review skin và cập nhật game</li>
            <li>• Phân tích meta và build đồ</li>
          </ul>
          
          <div className="mt-6">
            <a 
              href="/" 
              className="btn btn-primary"
            >
              Về trang chủ
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-sm text-base-content/70">
          <p>Website: https://www.lienquanhub.xyz</p>
          <p>AdSense Publisher ID: ca-pub-1296883156065618</p>
        </div>
      </div>
    </div>
  );
}

# 🚀 QUICK START TEMPLATE - TẠO WEBSITE MỚI

## 📋 CHECKLIST NHANH

### **1. 🎯 Thay đổi nội dung chính (5 phút)**

#### **A. Branding & Title**
```javascript
// pages/index.js - Dòng 86
<h1 className="text-3xl font-bold">TÊN GAME HUB</h1>

// pages/index.js - Dòng 87  
<p className="py-2 text-base-content/70">Mô tả chủ đề — cập nhật tự động từ YouTube/RSS</p>

// pages/index.js - Dòng 89
<input className="input input-bordered join-item w-full" placeholder="Tìm video..." />

// pages/index.js - Dòng 93-97
<a className="tab tab-active">All</a>
<a className="tab">Highlight</a>
<a className="tab">Guide</a>
<a className="tab">News</a>
```

#### **B. News Page**
```javascript
// pages/news.js - Dòng 67
<h1 className="text-3xl font-bold">Tin tức TÊN GAME</h1>

// pages/news.js - Dòng 68
<p className="text-base-content/70">Cập nhật tin tức mới nhất về tướng, skin, esports và meta game</p>

// pages/news.js - Dòng 70
<input className="input input-bordered join-item w-full" placeholder="Tìm tin tức..." />
```

#### **C. Navigation**
```javascript
// components/NavBar.jsx - Dòng 8
<Link href="/" className="btn btn-ghost text-xl">TÊN GAME HUB</Link>

// components/NavBar.jsx - Dòng 12-13
<Link href="/" className="btn btn-ghost">Video</Link>
<Link href="/news" className="btn btn-ghost">Tin tức</Link>
```

### **2. 🎥 Cấu hình YouTube Channels (10 phút)**

#### **A. Tìm YouTube Channels**
1. Vào YouTube → Tìm channels về chủ đề
2. Copy Channel ID từ URL
3. Format: `https://www.youtube.com/feeds/videos.xml?channel_id=CHANNEL_ID`

#### **B. Cập nhật feeds.json**
```json
// public/feeds.json
{
  "channels": [
    {
      "name": "Channel Name 1",
      "url": "https://www.youtube.com/feeds/videos.xml?channel_id=UCxxxxxxxxxxxxxxxxxxxxxx",
      "priority": 1
    },
    {
      "name": "Channel Name 2", 
      "url": "https://www.youtube.com/feeds/videos.xml?channel_id=UCyyyyyyyyyyyyyyyyyyyyyy",
      "priority": 2
    }
  ]
}
```

#### **C. Cập nhật keywords trong crawler**
```python
# crawler/youtube_rss_fetcher.py - Dòng 45-55
def is_gaming_related(self, title, description):
    text = f"{title} {description}".lower()
    
    # Thay đổi keywords theo chủ đề
    gaming_keywords = [
        'tên_game', 'keyword1', 'keyword2', 'keyword3',
        'esports', 'tournament', 'meta', 'build'
    ]
    
    return any(keyword in text for keyword in gaming_keywords)
```

### **3. 📰 Cấu hình News Sources (10 phút)**

#### **A. Tìm RSS Feeds**
1. Tìm websites có RSS về chủ đề
2. Thường có format: `website.com/rss` hoặc `website.com/feed`

#### **B. Cập nhật news_feeds.json**
```json
// public/news_feeds.json
{
  "news_sources": [
    {
      "name": "Source Name 1",
      "url": "https://source1.com/rss",
      "type": "rss",
      "priority": 1,
      "enabled": true
    },
    {
      "name": "Source Name 2",
      "url": "https://source2.com/feed", 
      "type": "rss",
      "priority": 2,
      "enabled": true
    }
  ],
  "categories": {
    "tướng": {
      "keywords": ["tướng mới", "hero mới", "champion"],
      "color": "#ff6b6b"
    },
    "skin": {
      "keywords": ["skin", "trang phục", "cosmetic"],
      "color": "#4ecdc4"
    }
  }
}
```

#### **C. Cập nhật keywords trong news crawler**
```python
# crawler/news_crawler.py - Dòng 121-127
lienquan_keywords = [
    'tên_game', 'keyword1', 'keyword2', 'keyword3',
    'esports', 'tournament', 'meta', 'build'
]
```

### **4. 💰 Cấu hình Ads (5 phút)**

#### **A. AdSense Setup**
```javascript
// lib/dualAdConfig.js - Dòng 3
clientId: 'ca-pub-YOUR_CLIENT_ID',

// lib/dualAdConfig.js - Dòng 8-15
adUnits: {
  banner: { slot: 'YOUR_BANNER_SLOT' },
  sidebar: { slot: 'YOUR_SIDEBAR_SLOT' },
  inContent: { slot: 'YOUR_INCONTENT_SLOT' },
  mobile: { slot: 'YOUR_MOBILE_SLOT' }
}
```

#### **B. Global Scripts**
```javascript
// pages/_document.js - Dòng 8
<meta name="google-adsense-account" content="ca-pub-YOUR_CLIENT_ID" />

// pages/_document.js - Dòng 11
script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_CLIENT_ID'
```

#### **C. ads.txt**
```
// public/ads.txt
google.com, pub-YOUR_CLIENT_ID, DIRECT, f08c47fec0942fa0
```

### **5. 🔧 SEO & Meta (5 phút)**

#### **A. Global Meta Tags**
```javascript
// pages/_document.js - Dòng 4-6
<title>TÊN GAME HUB - Video Mới Nhất</title>
<meta name="description" content="Tổng hợp video, tin tức TÊN GAME - cập nhật tự động" />
<meta name="keywords" content="tên game, video, tin tức, esports" />
```

#### **B. Page-specific Meta**
```javascript
// pages/index.js - Dòng 3-5
<title>TÊN GAME HUB - Video Mới Nhất</title>
<meta name="description" content="Tổng hợp video TÊN GAME mới nhất" />

// pages/news.js - Dòng 3-5
<title>Tin tức TÊN GAME - TÊN GAME HUB</title>
<meta name="description" content="Tin tức TÊN GAME mới nhất" />
```

### **6. 🚀 Deploy (5 phút)**

#### **A. GitHub Setup**
1. Fork repository
2. Rename repository
3. Push changes

#### **B. Vercel Setup**
1. Connect GitHub repository
2. Deploy automatically
3. Set custom domain (optional)

#### **C. GitHub Actions**
1. Set secrets in GitHub repository
2. Enable Actions
3. Wait for first run

---

## 🎯 TEMPLATE FILES CẦN THAY ĐỔI

### **Files cần edit:**
- [ ] `pages/index.js` - Homepage content
- [ ] `pages/news.js` - News page content  
- [ ] `components/NavBar.jsx` - Navigation
- [ ] `public/feeds.json` - YouTube channels
- [ ] `public/news_feeds.json` - News sources
- [ ] `crawler/youtube_rss_fetcher.py` - Video keywords
- [ ] `crawler/news_crawler.py` - News keywords
- [ ] `lib/dualAdConfig.js` - Ad configuration
- [ ] `pages/_document.js` - Global meta + ads
- [ ] `public/ads.txt` - AdSense verification

### **Files giữ nguyên:**
- [ ] `components/DualAds.jsx` - Ad system
- [ ] `components/AdSense.jsx` - AdSense component
- [ ] `components/Affiliate.jsx` - Affiliate system
- [ ] `components/Pagination.jsx` - Pagination
- [ ] `.github/workflows/update-feeds.yml` - Automation
- [ ] `requirements.txt` - Python dependencies
- [ ] `package.json` - Node dependencies

---

## ⚡ QUICK COMMANDS

### **Test locally:**
```bash
# Install dependencies
npm install
pip install -r requirements.txt

# Test crawlers
python crawler/youtube_rss_fetcher.py
python crawler/news_crawler.py

# Run development server
npm run dev
```

### **Deploy:**
```bash
# Commit changes
git add .
git commit -m "Setup new game hub"
git push

# Vercel will auto-deploy
```

---

## 🎯 KẾT QUẢ

Sau khi hoàn thành, bạn sẽ có:
- ✅ **Website tự động** cập nhật mỗi giờ
- ✅ **Video grid** với pagination
- ✅ **News page** với hình ảnh
- ✅ **Ad system** sẵn sàng kiếm tiền
- ✅ **SEO tối ưu** với sitemap
- ✅ **Mobile responsive** design
- ✅ **GitHub Actions** automation

**Tổng thời gian: ~45 phút để tạo website mới!** 🚀

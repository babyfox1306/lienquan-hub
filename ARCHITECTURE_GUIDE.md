# 🏗️ LIÊN QUÂN HUB - KIẾN TRÚC & MODULE GUIDE

## 📋 TỔNG QUAN HỆ THỐNG

### 🎯 Mục tiêu
Tạo template website tự động cập nhật nội dung với:
- **Crawler tự động** từ YouTube RSS + News RSS
- **Monetization** với AdSense + Affiliate
- **SEO tối ưu** với sitemap tự động
- **GitHub Actions** deploy tự động
- **Responsive design** với DaisyUI

---

## 🗂️ CẤU TRÚC THƯ MỤC

```
lienquan-hub/
├── .github/workflows/          # GitHub Actions
│   └── update-feeds.yml        # Auto crawler mỗi giờ
├── components/                 # React Components
│   ├── NavBar.jsx             # Navigation bar
│   ├── DualAds.jsx            # Ad system (AdSense)
│   ├── AdSense.jsx            # Google AdSense
│   ├── Affiliate.jsx          # Affiliate marketing
│   ├── Pagination.jsx         # Video pagination
│   └── Monetag*.jsx           # Monetag ads (disabled)
├── crawler/                   # Python Crawlers
│   ├── youtube_rss_fetcher.py # YouTube video crawler
│   ├── news_crawler.py        # News RSS crawler
│   └── discover_channels.py   # YouTube channel discovery
├── lib/                       # Configuration
│   └── dualAdConfig.js        # Ad configuration
├── pages/                     # Next.js Pages
│   ├── index.js               # Homepage (videos)
│   ├── news.js                # News page
│   ├── _document.js           # Global HTML + scripts
│   └── adsense-verify.js      # AdSense verification
├── public/                    # Static files
│   ├── videos.json            # Crawled videos
│   ├── news.json              # Crawled news
│   ├── news_feeds.json        # News sources config
│   ├── feeds.json             # YouTube channels
│   ├── sitemap.xml            # Auto-generated sitemap
│   ├── robots.txt             # SEO robots
│   ├── ads.txt                # AdSense verification
│   ├── sw.js                  # Service Worker
│   └── sw-push.js             # Push notifications
├── styles/                    # CSS
└── requirements.txt           # Python dependencies
```

---

## 🔧 CÁC MODULE CHÍNH

### 1. 🎥 VIDEO MODULE

#### **File:** `crawler/youtube_rss_fetcher.py`
```python
# Chức năng:
- Crawl videos từ YouTube RSS feeds
- Lọc nội dung theo chủ đề
- Lưu vào videos.json
- Tự động cập nhật mỗi giờ

# Cấu hình:
- public/feeds.json: Danh sách YouTube channels
- Lọc theo keywords trong title/description
- Giới hạn 50 videos mới nhất
```

#### **File:** `pages/index.js`
```javascript
// Chức năng:
- Hiển thị video grid với pagination
- Sắp xếp theo ngày mới nhất
- 20 videos per page
- Search và filter
- Ad integration

// Props cần thay đổi:
- Title, description
- Search placeholder
- Category filters
```

### 2. 📰 NEWS MODULE

#### **File:** `crawler/news_crawler.py`
```python
# Chức năng:
- Crawl tin tức từ RSS feeds
- Lọc nội dung theo chủ đề
- Trích xuất hình ảnh
- Lưu vào news.json

# Cấu hình:
- public/news_feeds.json: Danh sách RSS sources
- 8 nguồn tin chính
- 5 phương pháp trích xuất hình ảnh
```

#### **File:** `pages/news.js`
```javascript
// Chức năng:
- Hiển thị news grid với hình ảnh
- Category filtering
- Search functionality
- Ad integration

// Props cần thay đổi:
- Title, description
- Category names
- Search placeholder
```

### 3. 💰 MONETIZATION MODULE

#### **File:** `lib/dualAdConfig.js`
```javascript
// Cấu hình:
- Google AdSense: client ID, ad slots
- Monetag: disabled (too intrusive)
- Affiliate: links và buttons
- Ad placement: banner, sidebar, in-content

// Thay đổi cần thiết:
- AdSense client ID
- Ad unit slots
- Affiliate links
```

#### **File:** `components/DualAds.jsx`
```javascript
// Chức năng:
- AdSense integration
- Fallback system
- Responsive ads
- No placeholder when no ads

// Ad types:
- BannerAd: Top of page
- SidebarAd: Right sidebar
- InContentAd: Between content
- MobileAd: Mobile only
```

### 4. 🤖 AUTOMATION MODULE

#### **File:** `.github/workflows/update-feeds.yml`
```yaml
# Chức năng:
- Chạy mỗi giờ (cron: '0 * * * *')
- Crawl videos + news
- Generate sitemap
- Auto commit + push
- Trigger Vercel deploy

# Dependencies:
- Python 3.10
- Node.js 20
- requirements.txt
```

### 5. 🎨 UI/UX MODULE

#### **File:** `components/NavBar.jsx`
```javascript
// Chức năng:
- Responsive navigation
- Theme switcher
- Logo + menu items
- Mobile hamburger menu

// Thay đổi cần thiết:
- Logo text
- Menu items
- Theme colors
```

#### **File:** `pages/_document.js`
```javascript
// Chức năng:
- Global HTML structure
- AdSense script injection
- Service Worker registration
- Meta tags

// Thay đổi cần thiết:
- AdSense client ID
- Meta description
- Service Worker paths
```

---

## 🔄 QUY TRÌNH TỰ ĐỘNG

### 1. **Crawling Process**
```
GitHub Actions (mỗi giờ)
    ↓
1. Install dependencies
    ↓
2. Run youtube_rss_fetcher.py
    ↓
3. Run news_crawler.py
    ↓
4. Generate sitemap
    ↓
5. Commit + push changes
    ↓
6. Trigger Vercel deploy
```

### 2. **Data Flow**
```
RSS Feeds → Python Crawlers → JSON Files → Next.js Pages → Website
```

### 3. **Ad System**
```
AdSense Config → DualAds Component → Ad Placement → Revenue
```

---

## 🎯 TEMPLATE CHO CHỦ ĐỀ MỚI

### **Bước 1: Thay đổi nội dung**
```javascript
// 1. pages/index.js
- Title: "Tên Game Hub"
- Description: "Mô tả chủ đề"
- Search placeholder: "Tìm video..."
- Category filters: ["All", "Highlight", "Guide", "News"]

// 2. pages/news.js  
- Title: "Tin tức Tên Game"
- Description: "Cập nhật tin tức mới nhất"
- Categories: ["tướng", "skin", "cập nhật", "esports", "meta"]

// 3. components/NavBar.jsx
- Logo: "Tên Game Hub"
- Menu: ["Video", "Tin tức"]
```

### **Bước 2: Cấu hình crawler**
```python
# 1. public/feeds.json
- Thay đổi YouTube channels theo chủ đề
- Lọc keywords trong youtube_rss_fetcher.py

# 2. public/news_feeds.json
- Thay đổi RSS sources
- Cập nhật categories và keywords
- Lọc nội dung trong news_crawler.py
```

### **Bước 3: Cấu hình ads**
```javascript
// lib/dualAdConfig.js
- Thay đổi AdSense client ID
- Cập nhật ad unit slots
- Thay đổi affiliate links

// pages/_document.js
- Cập nhật AdSense client ID
- Thay đổi meta description
```

### **Bước 4: SEO & Branding**
```javascript
// pages/_document.js
- Title, description, keywords
- Open Graph tags
- Twitter cards

// public/robots.txt
- Sitemap URL
- Crawl rules

// public/ads.txt
- AdSense verification
```

---

## 📊 CONFIGURATION FILES

### **1. YouTube Channels** (`public/feeds.json`)
```json
{
  "channels": [
    {
      "name": "Channel Name",
      "url": "https://www.youtube.com/feeds/videos.xml?channel_id=CHANNEL_ID",
      "priority": 1
    }
  ]
}
```

### **2. News Sources** (`public/news_feeds.json`)
```json
{
  "news_sources": [
    {
      "name": "Source Name",
      "url": "https://source.com/rss",
      "type": "rss",
      "priority": 1,
      "enabled": true
    }
  ],
  "categories": {
    "category_name": {
      "keywords": ["keyword1", "keyword2"],
      "color": "#color_code"
    }
  }
}
```

### **3. Ad Configuration** (`lib/dualAdConfig.js`)
```javascript
const dualAdConfig = {
  adsense: {
    clientId: 'ca-pub-XXXXXXXXXX',
    enabled: true,
    testMode: false,
    adUnits: {
      banner: { slot: 'XXXXXXXXXX' },
      sidebar: { slot: 'XXXXXXXXXX' },
      inContent: { slot: 'XXXXXXXXXX' },
      mobile: { slot: 'XXXXXXXXXX' }
    }
  }
};
```

---

## 🚀 DEPLOYMENT CHECKLIST

### **1. GitHub Setup**
- [ ] Fork/clone repository
- [ ] Cấu hình GitHub Actions secrets
- [ ] Enable GitHub Pages (optional)

### **2. Vercel Setup**
- [ ] Connect GitHub repository
- [ ] Set environment variables
- [ ] Configure custom domain

### **3. AdSense Setup**
- [ ] Apply for AdSense
- [ ] Get client ID và ad slots
- [ ] Update dualAdConfig.js
- [ ] Add ads.txt file

### **4. Content Setup**
- [ ] Cấu hình YouTube channels
- [ ] Cấu hình news sources
- [ ] Test crawlers locally
- [ ] Verify content filtering

---

## 🔧 TECHNICAL SPECIFICATIONS

### **Frontend**
- **Framework:** Next.js 14
- **Styling:** Tailwind CSS + DaisyUI
- **Components:** React 18
- **Deployment:** Vercel

### **Backend**
- **Language:** Python 3.10
- **Libraries:** feedparser, requests, beautifulsoup4
- **Automation:** GitHub Actions
- **Storage:** JSON files

### **Monetization**
- **Primary:** Google AdSense
- **Secondary:** Affiliate marketing
- **Fallback:** Disabled (clean UX)

### **SEO**
- **Sitemap:** Auto-generated
- **Meta tags:** Dynamic
- **Structured data:** JSON-LD
- **Performance:** Optimized

---

## 📈 SCALING STRATEGY

### **1. Multiple Sites**
- Sử dụng cùng codebase
- Thay đổi config files
- Separate GitHub repositories
- Individual Vercel deployments

### **2. Content Expansion**
- Thêm nhiều RSS sources
- Implement web scraping
- Add user-generated content
- Social media integration

### **3. Monetization Growth**
- A/B test ad placements
- Implement premium features
- Add subscription model
- Expand affiliate programs

---

## 🎯 KẾT LUẬN

Template này cung cấp:
- ✅ **Complete automation** - Tự động 100%
- ✅ **Scalable architecture** - Dễ mở rộng
- ✅ **Monetization ready** - Sẵn sàng kiếm tiền
- ✅ **SEO optimized** - Tối ưu tìm kiếm
- ✅ **Mobile responsive** - Tương thích mobile
- ✅ **Fast deployment** - Deploy nhanh

**Chỉ cần thay đổi config files và nội dung để tạo website mới!** 🚀

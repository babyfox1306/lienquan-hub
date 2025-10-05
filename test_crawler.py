#!/usr/bin/env python3
"""
Test script to run crawlers and check for new content
"""
import os
import sys
import json
from datetime import datetime

# Add crawler directory to path
sys.path.append(os.path.join(os.path.dirname(__file__), 'crawler'))

def test_video_crawler():
    """Test video crawler"""
    print("=== Testing Video Crawler ===")
    
    # Import and run video crawler
    from youtube_rss_fetcher import fetch
    
    # Get initial count
    videos_path = os.path.join('public', 'videos.json')
    initial_count = 0
    if os.path.exists(videos_path):
        with open(videos_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            initial_count = len(data.get('videos', []))
    
    print(f"Initial video count: {initial_count}")
    
    # Run crawler
    try:
        fetch()
        
        # Get new count
        with open(videos_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            new_count = len(data.get('videos', []))
        
        print(f"New video count: {new_count}")
        print(f"Videos added: {new_count - initial_count}")
        
        return new_count - initial_count
    except Exception as e:
        print(f"Error running video crawler: {e}")
        return 0

def test_news_crawler():
    """Test news crawler"""
    print("\n=== Testing News Crawler ===")
    
    # Import and run news crawler
    from news_crawler import NewsCrawler
    
    # Get initial count
    news_path = os.path.join('public', 'news.json')
    initial_count = 0
    if os.path.exists(news_path):
        with open(news_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            initial_count = len(data.get('news', []))
    
    print(f"Initial news count: {initial_count}")
    
    # Run crawler
    try:
        crawler = NewsCrawler()
        crawler.run()
        
        # Get new count
        with open(news_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            new_count = len(data.get('news', []))
        
        print(f"New news count: {new_count}")
        print(f"News added: {new_count - initial_count}")
        
        return new_count - initial_count
    except Exception as e:
        print(f"Error running news crawler: {e}")
        return 0

def main():
    """Main test function"""
    print(f"Crawler Test - {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("=" * 50)
    
    # Test video crawler
    videos_added = test_video_crawler()
    
    # Test news crawler
    news_added = test_news_crawler()
    
    # Summary
    print("\n=== Summary ===")
    print(f"Videos added: {videos_added}")
    print(f"News added: {news_added}")
    print(f"Total new content: {videos_added + news_added}")
    
    if videos_added > 0 or news_added > 0:
        print("\n✅ New content found! Consider committing changes.")
    else:
        print("\n⚠️  No new content found.")

if __name__ == '__main__':
    main()


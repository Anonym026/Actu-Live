import requests
import json
import os
from datetime import datetime

# Configuration des variables
REDDIT_API_URL = 'https://www.reddit.com/r/gaming/top.json?limit=10'
HEADERS = {
    'User-Agent': 'Live-Gaming/0.1'
}

def fetch_gaming_news():
    response = requests.get(REDDIT_API_URL, headers=HEADERS)
    response.raise_for_status()
    data = response.json()
    articles = data['data']['children']
    
    news = []
    for article in articles:
        item = article['data']
        news.append({
            'title': item['title'],
            'url': 'https://www.reddit.com' + item['permalink'],
            'score': item['score'],
            'created': item['created_utc']
        })
    
    return news

def save_news_to_file(news):
    with open('actualites.json', 'w') as file:
        json.dump(news, file, indent=4)

if __name__ == '__main__':
    news = fetch_gaming_news()
    save_news_to_file(news)
    print('Actualités gaming mises à jour avec succès !')

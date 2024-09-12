import praw
import json
from dotenv import load_dotenv
import os

# Charger les variables d'environnement
load_dotenv()

# Configuration de l'API Reddit
reddit = praw.Reddit(
    client_id=os.getenv('CLIENT_ID'),
    client_secret=os.getenv('CLIENT_SECRET'),
    user_agent=os.getenv('USER_AGENT')
)

def fetch_news():
    subreddit = reddit.subreddit('news')
    top_posts = subreddit.top(limit=5)
    news_list = []

    for post in top_posts:
        news_item = {
            'title': post.title,
            'url': post.url,
            'score': post.score,
            'created': post.created_utc
        }
        news_list.append(news_item)

    with open('actualites.json', 'w') as f:
        json.dump(news_list, f, indent=4)

if __name__ == '__main__':
    fetch_news()

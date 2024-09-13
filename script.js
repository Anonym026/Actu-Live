const API_URL = 'https://www.reddit.com/r/';
const SUBREDDITS = {
    clashRoyale: 'ClashRoyale/top.json',
    roblox: 'roblox/top.json',
    fortnite: 'FortniteBR/top.json'
};

async function fetchNews(subreddit, elementId) {
    try {
        const response = await fetch(`${API_URL}${subreddit}`);
        const data = await response.json();
        const posts = data.data.children;

        const container = document.getElementById(elementId);
        container.innerHTML = '';

        posts.forEach(post => {
            const title = post.data.title;
            const url = `https://reddit.com${post.data.permalink}`;
            const score = post.data.score;

            container.innerHTML += `
                <article>
                    <h3><a href="${url}" target="_blank">${title}</a></h3>
                    <p>Score: ${score}</p>
                </article>
            `;
        });
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchNews(SUBREDDITS.clashRoyale, 'clash-royale-news');
    fetchNews(SUBREDDITS.roblox, 'roblox-news');
    fetchNews(SUBREDDITS.fortnite, 'fortnite-news');
});

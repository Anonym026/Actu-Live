document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const subreddit = urlParams.get('subreddit') || 'ClashRoyale'; // Définir la valeur par défaut

    const apiUrl = `https://www.reddit.com/r/${subreddit}.json`; // URL de l'API Reddit
    const actualitesSection = document.getElementById('actualites');

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const posts = data.data.children;
            actualitesSection.innerHTML = ''; // Effacer les anciennes actualités
            posts.forEach(post => {
                const article = document.createElement('article');
                article.innerHTML = `
                    <img src="${post.data.thumbnail}" alt="${post.data.title}" onerror="this.style.display='none'">
                    <div>
                        <h2><a href="${post.data.url}" target="_blank">${post.data.title}</a></h2>
                        <p>Score: ${post.data.score}</p>
                        <p>Date de publication: ${new Date(post.data.created_utc * 1000).toLocaleDateString()}</p>
                    </div>
                `;
                actualitesSection.appendChild(article);
            });
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des actualités:', error);
            actualitesSection.innerHTML = '<p>Impossible de charger les actualités. Veuillez réessayer plus tard.</p>';
        });
});

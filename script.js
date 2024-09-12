document.addEventListener("DOMContentLoaded", () => {
    fetch('actualites.json')
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('news-container');
            data.forEach(news => {
                const newsElement = document.createElement('div');
                newsElement.className = 'news-item';
                newsElement.innerHTML = `
                    <h2>${news.title}</h2>
                    <p><a href="${news.url}" target="_blank">Lire plus</a></p>
                    <p>Score: ${news.score} | Créé le: ${new Date(news.created * 1000).toLocaleDateString()}</p>
                `;
                newsContainer.appendChild(newsElement);
            });
        })
        .catch(error => console.error('Erreur:', error));
});

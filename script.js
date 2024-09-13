document.addEventListener('DOMContentLoaded', () => {
    fetch('actualites.json')
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('news-container');
            newsContainer.innerHTML = data.map(article => `
                <article>
                    <h2><a href="${article.url}" target="_blank">${article.title}</a></h2>
                    <p><strong>Score:</strong> ${article.score}</p>
                    <p><strong>Publié le:</strong> ${new Date(article.created * 1000).toLocaleDateString()}</p>
                </article>
            `).join('');
        })
        .catch(error => console.error('Erreur:', error));
});

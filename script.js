// Fonction pour charger les actualités depuis le fichier JSON
function loadNews() {
    fetch('actualites.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const container = document.getElementById('news-container');
            data.forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.className = 'article';
                articleElement.innerHTML = `
                    <h2>${article.title}</h2>
                    <p>Score: ${article.score}</p>
                    <a href="${article.url}" target="_blank">Lire plus</a>
                `;
                container.appendChild(articleElement);
            });
        })
        .catch(error => {
            console.error('Erreur lors du chargement des données:', error);
        });
}

// Charger les actualités lorsque la page est chargée
window.onload = loadNews;

// Fetch des actualités depuis le fichier actualites.json et affichage dans la page
fetch('actualites.json')
    .then(response => response.json())
    .then(data => {
        const newsContainer = document.getElementById('news-container');
        data.forEach(actu => {
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item');
            newsItem.innerHTML = `
                <h3>${actu.title}</h3>
                <p>Score: ${actu.score}</p>
                <a href="${actu.url}" target="_blank">Lire la suite</a>
            `;
            newsContainer.appendChild(newsItem);
        });
    })
    .catch(error => console.error('Erreur lors de la récupération des actualités:', error));

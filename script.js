document.addEventListener("DOMContentLoaded", function() {
    fetch('actualites.json')
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('news-container');
            newsContainer.innerHTML = ''; // Clear existing content

            data.forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.classList.add('news-article');
                articleElement.innerHTML = `
                    <h2><a href="${article.url}" target="_blank">${article.title}</a></h2>
                    <p>Score: ${article.score}</p>
                    <p>Created: ${new Date(article.created * 1000).toLocaleDateString()}</p>
                `;
                newsContainer.appendChild(articleElement);
            });
        })
        .catch(error => console.error('Error fetching the news:', error));
});


document.addEventListener('DOMContentLoaded', function() {
    // Afficher l'animation de chargement
    const loadingElement = document.getElementById('loading');
    const actuListElement = document.getElementById('actu-list');

    fetch('actualites.json')
        .then(response => response.json())
        .then(data => {
            // Masquer l'animation de chargement
            loadingElement.style.display = 'none';

            // Afficher les actualités
            data.forEach(actu => {
                const listItem = document.createElement('li');
                listItem.textContent = actu;
                actuListElement.appendChild(listItem);
            });
        })
        .catch(error => {
            // En cas d'erreur
            loadingElement.textContent = 'Erreur lors du chargement des actualités.';
            console.error('Erreur:', error);
        });
});

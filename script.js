// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Exemple d'animation
    document.querySelectorAll('article').forEach(article => {
        article.style.opacity = 0;
        setTimeout(() => {
            article.style.transition = 'opacity 1s';
            article.style.opacity = 1;
        }, 100);
    });
});

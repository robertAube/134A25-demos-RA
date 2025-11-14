/* Inclure le div suivant le body du html */
/* <div id="affichageLargeurEcran"></div> */

function updateScreenWidth() {
    const width = window.innerWidth;
    document.getElementById('affichageLargeurEcran').textContent = `Largeur: ${width}px`;
}

// Initialisation
window.addEventListener('DOMContentLoaded', () => {
    updateScreenWidth();
    window.addEventListener('resize', updateScreenWidth);
});


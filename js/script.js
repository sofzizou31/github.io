// Messages de félicitations
const wishes = [
    "كل عام وأنتم بخير",
    "تقبل الله منا ومنكم صالح الأعمال",
    "أعاده الله علينا وعليكم باليمن والبركات",
    "كل عام وأنتم إلى الله أقرب"
];

// Afficher un message aléatoire
function showRandomWish() {
    const wishElement = document.getElementById('wishes');
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    wishElement.innerHTML = `<p class="wish-text">${randomWish}</p>`;
}

// Exécuter au chargement
window.onload = showRandomWish;
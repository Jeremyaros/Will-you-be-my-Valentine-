document.addEventListener("DOMContentLoaded", function () {
    const container = document.body;

    function createHeart() {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");

        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;

        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
        container.appendChild(heart);

        // Supprime le cœur après l'animation
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }

    // Générer plusieurs cœurs en continu
    setInterval(createHeart, 100);
});

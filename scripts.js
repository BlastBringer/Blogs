// Number of stars to generate
const numberOfStars = 500;

// Function to create a star element
function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');

    // Random position within the viewport
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    star.style.left = `${x}px`;
    star.style.top = `${y}px`;

    return star;
}

// Add stars to the body
for (let i = 0; i < numberOfStars; i++) {
    document.body.appendChild(createStar());
}

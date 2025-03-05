document.addEventListener("DOMContentLoaded", function () {
    let textContainer = document.getElementById("text-container");
    let textContent = textContainer.innerHTML;

    // Find all occurrences of "Love" and "love" and wrap them properly
    textContent = textContent.replace(/\b(L|l)ove\b/g, function(match) {
        return `<strong class="hover-love" data-text="${match}">${match}</strong>`;
    });

    // Replace the modified content inside the text container
    textContainer.innerHTML = textContent;

    // Create Floating Stars
    createStars();

    // Attach hover effect to ALL instances of "Love" and "love"
    addLoveHoverEffect();
});

// Function to Add Hover Effect to Every "Love" and "love"
function addLoveHoverEffect() {
    const loveElements = document.querySelectorAll(".hover-love");
    const loveImage = document.getElementById("love-img");
    const loveImages = ["Assets/love.jpg", "Assets/love1.jpg", "Assets/love2.jpg", "Assets/love3.jpg"];

    loveElements.forEach((love) => {
        love.addEventListener("mouseenter", function () {
            let loveIndex = Math.floor(Math.random() * loveImages.length); // Pick a random image
            loveImage.src = loveImages[loveIndex]; // Change the image source
            loveImage.style.opacity = "1"; // Make the image visible
        });

        love.addEventListener("mouseleave", function () {
            loveImage.style.opacity = "0"; // Hide the image when not hovering
        });
    });
}

// Create Floating Stars
function createStars() {
    const container = document.getElementById("stars-container");
    for (let i = 0; i < 20; i++) {
        let star = document.createElement("div");
        star.classList.add("star");

        let size = Math.random() * 120 + 50; // Random star size
        let duration = Math.random() * 10 + 5; // Random float speed

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDuration = `${duration}s`;

        container.appendChild(star);
    }
}

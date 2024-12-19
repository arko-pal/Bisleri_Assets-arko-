// Select elements
const leftArrow = document.querySelector('#arrow > div:first-child img');
const rightArrow = document.querySelector('#arrow > div:last-child img');
const imagesContainer = document.querySelector('#img');
const images = imagesContainer.querySelectorAll('img');
const mainImage = document.querySelector('#hw > div > div:first-child > img');

// Variables to track the current slide
let currentIndex = 0;

// Update slider function
function updateSlider() {
    // Update the main image
    mainImage.src = images[currentIndex].src;

    // Update the slide indicator
    const slideIndicator = document.querySelector('#arrow > div:nth-child(2) p');
    slideIndicator.textContent = `${currentIndex + 1} / ${images.length}`;

    // Update visibility and placement of images in #img
    images.forEach((img, index) => {
        if (index === currentIndex) {
            img.style.display = 'inline-block';
            img.style.order = 1; // Main image on the left
            img.style.border = '3px solid #333';
        } else {
            img.style.display = 'inline-block';
            img.style.order = 2; // Other image on the right
            img.style.border = 'none';
        }

        // Hide the third image depending on the current selection
        if (currentIndex === 0 && index === 2) {
            img.style.display = 'none';
        } else if (currentIndex === 1 && index === 0) {
            img.style.display = 'none';
        } else if (currentIndex === 2 && index === 1) {
            img.style.display = 'none';
        }
    });
}

// Event listeners for arrows
leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
});

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
});

// Initialize the slider
updateSlider();

// Get the cursor image element
const cursor = document.getElementById('cursor');

// Get all the work link elements
const links = document.querySelectorAll('.work-link');

// Define the images for each link
const linkImages = {
    '1–BIP': 'assets/images/broschuere-scan-small.jpg',  // Image for "Print" link
    '2–Reflexionswerkstatt': 'assets/images/reflexionsw-plakat.jpg',  // Image for "Digital" link
    '3–Resonating Selves': 'assets/images/resonating03.jpg',  // Image for "Example 1" link
    '4–Epic Escxpe': 'assets/images/epic04.jpg', // Image for "Example 2" link
};

// Show the cursor image when hovering over links
links.forEach(link => {
    link.addEventListener('mouseenter', (event) => {
        cursor.style.opacity = 1;  // Fade in the cursor image when hovering over a link

        // Check if the hovered link has a corresponding image
        const linkText = event.target.innerText.trim();
        if (linkImages[linkText]) {
            cursor.src = linkImages[linkText];  // Change the cursor image based on the link hovered
        }
    });

    link.addEventListener('mouseleave', () => {
        cursor.style.opacity = 0;  // Fade out the cursor image when not hovering over the link
    });
});
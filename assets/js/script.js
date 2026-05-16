// Select all important HTML elements
const generateForm = document.querySelector(".generate-form");
const imageGallery = document.querySelector(".image-gallery");

// When form is submitted
generateForm.addEventListener("submit", (e) => {
    
    // Prevent page reload
    e.preventDefault();

    // Get user text input
    const userPrompt = document.querySelector(".prompt-input").value;

    // Get selected image quantity
    const imageQuantity = document.querySelector(".image-quantity").value;

    console.log("Prompt:", userPrompt);
    console.log("Images:", imageQuantity);

    // Clear old images
    imageGallery.innerHTML = "";

    // Loop according to selected quantity
    for(let i = 0; i < imageQuantity; i++){

        // Create image card
        const imgCard = document.createElement("div");
        imgCard.classList.add("img-card");

        // Random demo image
        imgCard.innerHTML = `
            <img src="https://picsum.photos/300?random=${i}" alt="Generated Image">

            <a href="https://picsum.photos/300?random=${i}" 
               class="download-btn" 
               download>
                <img src="assets/images/download.svg" alt="Download">
            </a>
        `;

        // Add card into gallery
        imageGallery.appendChild(imgCard);
    }

    // Show alert message
    alert(`${imageQuantity} image generated for: ${userPrompt}`);
});

// JavaScript for changing the text content with smooth transition

// Select the elements
const firstElement = document.getElementById("1st");
const secondElement = document.getElementById("2nd");

// Define the text to cycle through
const textOptions = [
    { first: "Digital", second: "Marketing" },
    { first: "Graphics", second: "Designing" },
    { first: "Academic", second: "Apprentice" }
];

let currentIndex = 0;

// Function to update the text with a smooth transition
function updateText() {
    // Apply a class for the transition effect
    firstElement.style.transition = "transform 0.5s, opacity 0.5s";
    secondElement.style.transition = "transform 0.5s, opacity 0.5s";

    // Move text upwards and fade out
    firstElement.style.transform = "translateY(-100%)";
    firstElement.style.opacity = "0";
    secondElement.style.transform = "translateY(-100%)";
    secondElement.style.opacity = "0";

    setTimeout(() => {
        // Update the text content
        currentIndex = (currentIndex + 1) % textOptions.length;
        firstElement.textContent = textOptions[currentIndex].first;
        secondElement.textContent = textOptions[currentIndex].second;

        // Reset the position for the transition to move back down
        firstElement.style.transform = "translateY(100%)";
        secondElement.style.transform = "translateY(100%)";

        setTimeout(() => {
            // Bring text back to the normal position and fade in
            firstElement.style.transform = "translateY(0)";
            firstElement.style.opacity = "1";
            secondElement.style.transform = "translateY(0)";
            secondElement.style.opacity = "1";
        }, 50);
    }, 500); // Wait for the upward transition to complete
}

// Start the interval to change text every 3 seconds
setInterval(updateText, 3000);

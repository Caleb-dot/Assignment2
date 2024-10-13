// script.js

// Select DOM elements
const inputField = document.getElementById('username');
const saveButton = document.getElementById('save-btn');
const clearButton = document.getElementById('clear-btn');
const displayName = document.getElementById('display-name');

// Function to display the saved name
function displaySavedName() {
    const savedName = localStorage.getItem('name'); // Get name from localStorage
    if (savedName) {
        displayName.textContent = `Hello, ${savedName}!`; // Display if found
    } else {
        displayName.textContent = ''; // Clear display if not found
    }
}

// Event listener for "Save Name" button
saveButton.addEventListener('click', () => {
    const userName = inputField.value.trim(); // Get and trim input value
    if (userName) {
        localStorage.setItem('name', userName); // Save to localStorage
        displaySavedName(); // Update display
        inputField.value = ''; // Clear input field
    } else {
        alert('Please enter a valid name.'); // Handle empty input
    }
});

// Event listener for "Clear Name" button
clearButton.addEventListener('click', () => {
    localStorage.removeItem('name'); // Remove name from localStorage
    displaySavedName(); // Clear display
});

// Check for saved name when the page loads
window.addEventListener('load', displaySavedName);
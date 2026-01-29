// This file contains JavaScript code for interactivity and dynamic behavior on the webpage.
// It may include functions for handling events and manipulating the DOM.

// Example function to handle a button click event
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('exampleButton');
    if (button) {
        button.addEventListener('click', function() {
            alert('Button clicked!');
        });
    }
});

// Function to change the theme of the webpage
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

// Example of a function to manipulate the DOM
function updateContent() {
    const content = document.getElementById('content');
    if (content) {
        content.innerHTML = '<p>New content has been added!</p>';
    }
}
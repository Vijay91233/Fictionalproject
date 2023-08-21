// Get form elements
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Add event listener to form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    
    // Validate form inputs
    if (validateForm()) {
        submitForm();
    }
});

// Form validation function
function validateForm() {
    let isValid = true;

    if (nameInput.value.trim() === '') {
        isValid = false;
        alert('Please enter your name.');
    }

    if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
        isValid = false;
        alert('Please enter a valid email.');
    }

    if (messageInput.value.trim() === '') {
        isValid = false;
        alert('Please enter a message.');
    }

    return isValid;
}

// Email validation helper function
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Form submission function
function submitForm() {
    // Simulate sending data to the server
    // You can use AJAX or fetch to send data to a real backend
    
    // Display confirmation message
    const confirmationMessage = document.createElement('p');
    confirmationMessage.textContent = 'Thank you for contacting us!';
    confirmationMessage.style.color = 'green';
    
    form.parentElement.appendChild(confirmationMessage);
    
    // Clear form inputs
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
}

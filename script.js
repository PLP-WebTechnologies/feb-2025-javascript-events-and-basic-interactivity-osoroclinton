// 1. Event Handling - Button click changes text
const changeTextBtn = document.getElementById('changeTextBtn');
changeTextBtn.addEventListener('click', () => {
    changeTextBtn.textContent = "Text has been changed! 🎉";
    changeTextBtn.style.backgroundColor = "#f44336"; // Changing the button color after click
});

// 2. Hover effect
const hoverBtn = document.getElementById('hoverBtn');
hoverBtn.addEventListener('mouseover', () => {
    hoverBtn.textContent = "You're hovering over me!";
});
hoverBtn.addEventListener('mouseout', () => {
    hoverBtn.textContent = "Hover over me!";
});

// 3. Keypress detection (bonus)
document.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        alert("You pressed Enter! 🖊");
    }
});

// 4. Double-click or long press (bonus action)
let pressTimer;
const doubleClickElement = document.getElementById('changeTextBtn');
doubleClickElement.addEventListener('mousedown', () => {
    pressTimer = setTimeout(() => {
        alert("Long press detected! 🔑");
    }, 1000); // Detecting long press after 1 second
});

doubleClickElement.addEventListener('mouseup', () => {
    clearTimeout(pressTimer); // Cancels the long press if mouse is released before 1 second
});

// 5. Image Gallery (Interactive Element)
const images = document.querySelectorAll("#imageGallery img");
images.forEach(image => {
    image.addEventListener('click', () => {
        alert(`You clicked on ${image.alt}!`);
    });
});

// 6. Tabs / Accordion Content (Interactive Element)
const tabBtns = document.querySelectorAll('.tabBtn');
const tabContents = document.querySelectorAll('.tabContent');

// Initially, hide all tab contents
tabContents.forEach(content => {
    content.style.display = "none";
});

// Set the first tab to be visible by default
document.getElementById('tab1').style.display = "block";

// Adding event listeners to tabs
tabBtns.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');

        // Hide all tab contents
        tabContents.forEach(content => {
            content.style.display = "none";
        });

        // Show the selected tab content
        document.getElementById(`tab${tabId}`).style.display = "block";

        // Remove active class from all tabs
        tabBtns.forEach(tab => {
            tab.classList.remove('active');
        });

        // Add active class to the clicked tab
        button.classList.add('active');
    });
});

// 7. Form Validation
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', (event) => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address!");
        event.preventDefault(); // Prevent form submission if email is invalid
        return;
    }

    // Password validation (minimum 8 characters)
    if (password.length < 8) {
        alert("Password must be at least 8 characters long!");
        event.preventDefault(); // Prevent form submission if password is too short
        return;
    }

    alert("Form submitted successfully! 🎉");
});

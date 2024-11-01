const toggle = document.getElementById('darkModeToggle');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

// Dark Mode Toggle
toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
});

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Form validation
    let isValid = true;

    // Name validation
    const nameField = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    if (nameField.value.trim() === "") {
        nameError.classList.remove("hidden");
        isValid = false;
    } else {
        nameError.classList.add("hidden");
    }

    // Email validation
    const emailField = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailField.value.trim())) {
        emailError.classList.remove("hidden");
        isValid = false;
    } else {
        emailError.classList.add("hidden");
    }

    // Message validation
    const messageField = document.getElementById("message");
    const messageError = document.getElementById("messageError");
    if (messageField.value.trim() === "") {
        messageError.classList.remove("hidden");
        isValid = false;
    } else {
        messageError.classList.add("hidden");
    }

    // If valid, display success message
    if (isValid) {
        document.getElementById("successMessage").classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("successMessage").classList.add("hidden");
            document.getElementById("contactForm").reset();
        }, 3000);
    }
});
// Smooth scrolling to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight the current section in the navbar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.classList.contains(current)) {
            link.classList.add('active');
        }
    });
});

// Animation on load
window.onload = () => {
    const cvSection = document.getElementById('cv');
    cvSection.style.opacity = 0;
    cvSection.style.transform = 'translateY(50px)';

    setTimeout(() => {
        cvSection.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        cvSection.style.opacity = 1;
        cvSection.style.transform = 'translateY(0)';
    }, 100);
};
// Open Modal with fade-in effect
function openModal() {
    document.getElementById("modal").classList.remove("hidden");
}

// Close Modal
function closeModal() {
    document.getElementById("modal").classList.add("hidden");
}
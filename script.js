document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-theme'); // Toggle light-theme class on body

        if (body.classList.contains('light-theme')) {
            themeIcon.setAttribute('data-lucide', 'moon'); // Change icon to moon for dark mode
            localStorage.setItem('theme', 'light-theme'); // Store light theme preference
             document.querySelector('meta[name="theme-color"]').setAttribute('content', '#f9f9f9'); // Update theme-color meta tag for light theme

        } else {
            themeIcon.setAttribute('data-lucide', 'sun'); // Change icon to sun for light mode
            localStorage.removeItem('theme'); // Remove theme preference for dark mode (default)
            document.querySelector('meta[name="theme-color"]').setAttribute('content', '#0a0a0a'); // Update theme-color meta tag for dark theme
        }
        lucide.createIcons(); // Re-render icons to update the icon
    });

    // Check for saved theme preference on page load
    if (localStorage.getItem('theme') === 'light-theme') {
        body.classList.add('light-theme');
        themeIcon.setAttribute('data-lucide', 'moon');
        lucide.createIcons(); // Render moon icon on load if light theme is preferred
         document.querySelector('meta[name="theme-color"]').setAttribute('content', '#f9f9f9'); // Set theme-color meta tag for light theme on load
    }

     // Back to top button functionality (you likely have this already, but including for completeness)
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
// Initialize Lucide icons
lucide.createIcons();

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Navigation handling
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    // Hide/show navbar on scroll
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            navbar.classList.remove('scroll-up');
            return;
        }

        if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
            // Scroll down
            navbar.classList.remove('scroll-up');
            navbar.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
            // Scroll up
            navbar.classList.remove('scroll-down');
            navbar.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });

    // Back to Top Button functionality
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        // Smooth scroll to top when clicked
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Typing effect function
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Initialize typing effect for quote
    const quoteElement = document.querySelector('.quote');
    if (quoteElement) {
        typeWriter(quoteElement, quoteElement.textContent);
    }
});

// Project card hover effects
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.project-image')?.classList.add('hover');
    });
    card.addEventListener('mouseleave', () => {
        card.querySelector('.project-image')?.classList.remove('hover');
    });
});


function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


// JavaScript to type the text in sequence

const multipleText = document.querySelector(".multiple-text");
const words = ["Data Analyst","Data Engineer","Data Scientist", "AI Enthusiast", "ML Expert"]; // Add more words as needed
let wordIndex = 0;
let charIndex = 0;
let typingSpeed = 100;
let erasingSpeed = 50;
let isErasing = false;

function type() {
    if (wordIndex < words.length) {
        if (!isErasing) {
            if (charIndex < words[wordIndex].length) {
                multipleText.textContent += words[wordIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingSpeed);
            } else {
                isErasing = true;
                setTimeout(type, 1000);
            }
        } else {
            if (charIndex > 0) {
                multipleText.textContent = words[wordIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(type, erasingSpeed);
            } else {
                isErasing = false;
                wordIndex = (wordIndex + 1) % words.length; // Loop back to first word
                setTimeout(type, 200);
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    type(); // Start typing when the page loads
});

// Mobile menu functionality - Fixed
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Initialize Lucide icons
    if (window.lucide) {
        lucide.createIcons();
    }
    
    // Toggle menu when hamburger icon is clicked
    if (menuToggle) {
        menuToggle.addEventListener('click', function(event) {
            event.stopPropagation(); // Stop event from bubbling up
            navLinks.classList.toggle('show');
        });
    }
    
    // Handle navigation button clicks
    const navButtons = document.querySelectorAll('.nav-links .nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                setTimeout(() => {
                    navLinks.classList.remove('show');
                }, 300); // Slight delay to ensure the click registers
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768 && 
            !event.target.closest('.nav-links') && 
            !event.target.closest('.menu-toggle') &&
            navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
        }
    });
    
    // Prevent clicks inside the menu from closing it
    navLinks.addEventListener('click', function(event) {
        event.stopPropagation();
    });
    
    // Ensure theme toggle is outside the collapsible menu
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle && window.innerWidth <= 768) {
        themeToggle.parentNode.insertBefore(themeToggle, navLinks);
    }
});

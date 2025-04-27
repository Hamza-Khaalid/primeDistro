   // Mobile menu toggle
   document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Inquiry form tabs
const tabButtons = document.querySelectorAll('.inquiry-tab-btn');
const forms = document.querySelectorAll('.inquiry-form');

tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons and forms
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.classList.add('bg-blue-600');
            btn.classList.remove('bg-blue-800');
        });
        
        forms.forEach(form => {
            form.classList.remove('active');
            form.classList.add('hidden');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        this.classList.remove('bg-blue-600');
        this.classList.add('bg-blue-800');
        
        // Show corresponding form
        const formId = this.getAttribute('data-inquiry-type') + '-form';
        document.getElementById(formId).classList.add('active');
        document.getElementById(formId).classList.remove('hidden');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});



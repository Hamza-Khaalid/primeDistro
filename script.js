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

// Form submission handling

  const inquiryForm = document.querySelectorAll("inquiry-form");

  inquiryForm.forEach(form => {
    form.addEventListener("submit", async function(event) {
      event.preventDefault();
      const status = form.querySelector(".status"); // 👈 find the status inside this form
      const data = new FormData(form);

      fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset();
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form.";
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form.";
      });
    });
  });


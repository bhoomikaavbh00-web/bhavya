document.addEventListener('DOMContentLoaded', () => {
    // Add active class to current nav link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section, .card, .hero-content, .hero-image').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Resume Logic
    const downloadResumeBtn = document.getElementById('downloadResume');
    const viewResumeBtn = document.getElementById('viewResume');

    if (downloadResumeBtn) {
        downloadResumeBtn.addEventListener('click', (e) => {
            // Since it's a jpeg, we can just point to it
            // In a real scenario, we might want to force download
            const link = document.createElement('a');
            link.href = 'bhavya,resume.jpeg';
            link.download = 'Bhavyashree_SK_Resume.jpeg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    if (viewResumeBtn) {
        viewResumeBtn.addEventListener('click', () => {
            window.open('bhavya,resume.jpeg', '_blank');
        });
    }
});

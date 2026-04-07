// ========================================
//  LAGURU FITNESS CENTRE - SCRIPTS
// ========================================

document.addEventListener('DOMContentLoaded', () => {

    // --- Preloader ---
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.getElementById('preloader').classList.add('hidden');
        }, 800);
    });

    // --- Navbar scroll effect ---
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        navbar.classList.toggle('scrolled', scrollY > 50);
        backToTop.classList.toggle('visible', scrollY > 500);
    });

    // --- Mobile menu ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // --- Active nav link on scroll ---
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY + 200;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = document.querySelector(`.nav-links a[href="#${id}"]`);
            if (link) {
                link.classList.toggle('active', scrollY >= top && scrollY < top + height);
            }
        });
    });

    // --- Back to top ---
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- Counter animation ---
    const counters = document.querySelectorAll('.stat-number');
    let counterStarted = false;

    function animateCounters() {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 2000;
            const start = 0;
            const startTime = performance.now();

            function update(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                counter.textContent = Math.floor(eased * target);
                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    counter.textContent = target;
                }
            }
            requestAnimationFrame(update);
        });
    }

    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !counterStarted) {
                counterStarted = true;
                animateCounters();
            }
        });
    }, { threshold: 0.3 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) heroObserver.observe(heroStats);

    // --- Scroll reveal animation ---
    const fadeElements = document.querySelectorAll(
        '.about-grid, .class-card, .trainer-card, .pricing-card, .testimonial-card, .contact-card, .booking-wrapper, .section-header'
    );

    fadeElements.forEach(el => el.classList.add('fade-in'));

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    fadeElements.forEach(el => fadeObserver.observe(el));

    // --- Hero particles ---
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 8) + 's';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.width = (Math.random() * 4 + 2) + 'px';
        particle.style.height = particle.style.width;
        particlesContainer.appendChild(particle);
    }

    // --- Schedule data ---
    const scheduleData = {
        monday: [
            { time: '6:00 AM', class: 'HIIT Training', trainer: 'Marcus Johnson' },
            { time: '8:00 AM', class: 'Power Yoga', trainer: 'Sarah Mitchell' },
            { time: '10:00 AM', class: 'Spin Class', trainer: 'Lisa Chen' },
            { time: '12:00 PM', class: 'Strength & Conditioning', trainer: 'David Okafor' },
            { time: '5:00 PM', class: 'Kickboxing', trainer: 'David Okafor' },
            { time: '7:00 PM', class: 'Power Cardio', trainer: 'Marcus Johnson' },
        ],
        tuesday: [
            { time: '6:00 AM', class: 'Power Cardio', trainer: 'Lisa Chen' },
            { time: '8:00 AM', class: 'Strength & Conditioning', trainer: 'Marcus Johnson' },
            { time: '10:00 AM', class: 'Power Yoga', trainer: 'Sarah Mitchell' },
            { time: '3:00 PM', class: 'HIIT Training', trainer: 'Marcus Johnson' },
            { time: '5:00 PM', class: 'Spin Class', trainer: 'Lisa Chen' },
            { time: '7:00 PM', class: 'Kickboxing', trainer: 'David Okafor' },
        ],
        wednesday: [
            { time: '6:00 AM', class: 'HIIT Training', trainer: 'Marcus Johnson' },
            { time: '8:00 AM', class: 'Power Yoga', trainer: 'Sarah Mitchell' },
            { time: '11:00 AM', class: 'Spin Class', trainer: 'Lisa Chen' },
            { time: '2:00 PM', class: 'Power Cardio', trainer: 'Lisa Chen' },
            { time: '5:00 PM', class: 'Strength & Conditioning', trainer: 'David Okafor' },
            { time: '7:00 PM', class: 'Kickboxing', trainer: 'David Okafor' },
        ],
        thursday: [
            { time: '6:00 AM', class: 'Power Cardio', trainer: 'Marcus Johnson' },
            { time: '8:00 AM', class: 'Kickboxing', trainer: 'David Okafor' },
            { time: '10:00 AM', class: 'Power Yoga', trainer: 'Sarah Mitchell' },
            { time: '12:00 PM', class: 'HIIT Training', trainer: 'Marcus Johnson' },
            { time: '5:00 PM', class: 'Spin Class', trainer: 'Lisa Chen' },
            { time: '7:00 PM', class: 'Strength & Conditioning', trainer: 'David Okafor' },
        ],
        friday: [
            { time: '6:00 AM', class: 'HIIT Training', trainer: 'Marcus Johnson' },
            { time: '8:00 AM', class: 'Strength & Conditioning', trainer: 'David Okafor' },
            { time: '10:00 AM', class: 'Power Yoga', trainer: 'Sarah Mitchell' },
            { time: '3:00 PM', class: 'Kickboxing', trainer: 'David Okafor' },
            { time: '5:00 PM', class: 'Power Cardio', trainer: 'Lisa Chen' },
            { time: '7:00 PM', class: 'Spin Class', trainer: 'Lisa Chen' },
        ],
        saturday: [
            { time: '7:00 AM', class: 'HIIT Training', trainer: 'Marcus Johnson' },
            { time: '9:00 AM', class: 'Power Yoga', trainer: 'Sarah Mitchell' },
            { time: '11:00 AM', class: 'Kickboxing', trainer: 'David Okafor' },
            { time: '2:00 PM', class: 'Spin Class', trainer: 'Lisa Chen' },
            { time: '4:00 PM', class: 'Strength & Conditioning', trainer: 'Marcus Johnson' },
        ],
        sunday: [
            { time: '8:00 AM', class: 'Power Yoga', trainer: 'Sarah Mitchell' },
            { time: '10:00 AM', class: 'Power Cardio', trainer: 'Lisa Chen' },
            { time: '12:00 PM', class: 'HIIT Training', trainer: 'Marcus Johnson' },
            { time: '3:00 PM', class: 'Spin Class', trainer: 'Lisa Chen' },
        ],
    };

    function renderSchedule(day) {
        const content = document.getElementById('scheduleContent');
        const items = scheduleData[day] || [];
        content.innerHTML = items.map(item => `
            <div class="schedule-item fade-in visible">
                <span class="schedule-time">${item.time}</span>
                <span class="schedule-class">${item.class}</span>
                <span class="schedule-trainer"><i class="fas fa-user" style="margin-right:6px;font-size:0.75rem;color:var(--primary)"></i>${item.trainer}</span>
                <span class="schedule-book"><a href="#booking">Book &rarr;</a></span>
            </div>
        `).join('');
    }

    document.querySelectorAll('.schedule-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.schedule-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderSchedule(tab.dataset.day);
        });
    });

    renderSchedule('monday');

    // --- Testimonials slider ---
    const track = document.getElementById('testimonialTrack');
    const cards = track.querySelectorAll('.testimonial-card');
    const dotsContainer = document.getElementById('sliderDots');
    let currentSlide = 0;
    let slidesVisible = 3;

    function updateSlidesVisible() {
        if (window.innerWidth < 768) slidesVisible = 1;
        else if (window.innerWidth < 1024) slidesVisible = 2;
        else slidesVisible = 3;
    }

    function getTotalSlides() {
        return Math.max(cards.length - slidesVisible + 1, 1);
    }

    function renderDots() {
        const total = getTotalSlides();
        dotsContainer.innerHTML = '';
        for (let i = 0; i < total; i++) {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            if (i === currentSlide) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }

    function goToSlide(index) {
        const total = getTotalSlides();
        currentSlide = Math.max(0, Math.min(index, total - 1));
        const percentage = (currentSlide * 100) / cards.length;
        track.style.transform = `translateX(-${percentage}%)`;
        renderDots();
    }

    document.getElementById('prevBtn').addEventListener('click', () => goToSlide(currentSlide - 1));
    document.getElementById('nextBtn').addEventListener('click', () => goToSlide(currentSlide + 1));

    window.addEventListener('resize', () => {
        updateSlidesVisible();
        goToSlide(Math.min(currentSlide, getTotalSlides() - 1));
    });

    updateSlidesVisible();
    renderDots();

    // Auto-slide
    setInterval(() => {
        const total = getTotalSlides();
        goToSlide((currentSlide + 1) % total);
    }, 5000);

    // --- Booking form ---
    const bookingForm = document.getElementById('bookingForm');
    const dateInput = document.getElementById('date');

    // Set min date to today
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Collect form data
        const formData = new FormData(bookingForm);
        const data = Object.fromEntries(formData);

        // Basic validation
        if (!data.firstName || !data.lastName || !data.email || !data.phone || !data.sessionType || !data.date || !data.time) {
            alert('Please fill in all required fields.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Show success modal
        document.getElementById('successModal').classList.add('active');

        // Reset form
        bookingForm.reset();

        // Log booking (in production, send to server)
        console.log('Booking submitted:', data);
    });

    // --- Newsletter form ---
    document.getElementById('newsletterForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input').value;
        if (email) {
            alert('Thank you for subscribing! You\'ll receive our latest updates.');
            e.target.reset();
        }
    });

    // --- Smooth scroll for all anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

});

// --- Close modal ---
function closeModal() {
    document.getElementById('successModal').classList.remove('active');
}

// Close modal on overlay click
document.getElementById('successModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
});

// ================================
// NAVBAR SCROLL EFFECT
// ================================
const navbar = document.querySelector('#navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// ================================
// FADE IN ON SCROLL
// ================================
const fadeElements = document.querySelectorAll(
    'section, .card, .value-item, .faq-item, blockquote'
);

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.05,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(el => {
    el.classList.add('hidden');
    fadeObserver.observe(el);
});

window.addEventListener('load', () => {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add('visible');
            fadeObserver.unobserve(el);
        }
    });
});

// ================================
// COUNT UP ANIMATION
// ================================
const countUpElements = document.querySelectorAll('.stat-number');

const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const text = target.textContent;
            const number = parseInt(text);
            
            if (isNaN(number)) return;
            
            const suffix = text.replace(/[0-9]/g, '');
            let start = 0;
            const duration = 2000;
            const increment = number / (duration / 16);

            const counter = setInterval(() => {
                start += increment;
                if (start >= number) {
                    target.textContent = number + suffix;
                    clearInterval(counter);
                } else {
                    target.textContent = Math.floor(start) + suffix;
                }
            }, 16);

            countObserver.unobserve(target);
        }
    });
}, { threshold: 0.5 });

countUpElements.forEach(el => countObserver.observe(el));

// ================================
// FAQ ACCORDION
// ================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('h3');
    const answer = item.querySelector('p');

    answer.style.display = 'none';

    question.style.cursor = 'pointer';

    question.addEventListener('click', () => {
        const isOpen = answer.style.display === 'block';
        
        faqItems.forEach(i => {
            i.querySelector('p').style.display = 'none';
            i.classList.remove('faq-open');
        });

        if (!isOpen) {
            answer.style.display = 'block';
            item.classList.add('faq-open');
        }
    });
});


// ================================
// ACTIVE NAV LINK
// ================================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});


// ================================
// HAMBURGER MENU
// ================================
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
});

mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
    });
});
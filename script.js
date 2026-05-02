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
    threshold: 0.1
});

fadeElements.forEach(el => {
    el.classList.add('hidden');
    fadeObserver.observe(el);
});


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
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
// SERVICES SPOTLIGHT
// ================================
const services = [
    {
        title: 'Financial Performance',
        desc: 'P&L reviews, budget oversight, EBITDA improvement, weekly reporting on operational costs, and cost controls that actually stick. We dig into your numbers so you always know exactly where you stand.',
        visual: `<svg width="180" height="140" viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="80" width="24" height="50" rx="3" fill="#8B3A2A" opacity="0.2"/>
            <rect x="44" y="60" width="24" height="70" rx="3" fill="#8B3A2A" opacity="0.4"/>
            <rect x="78" y="40" width="24" height="90" rx="3" fill="#8B3A2A" opacity="0.6"/>
            <rect x="112" y="20" width="24" height="110" rx="3" fill="#8B3A2A" opacity="0.8"/>
            <rect x="146" y="8" width="24" height="122" rx="3" fill="#8B3A2A"/>
            <path d="M10 85 Q55 65 90 45 Q125 25 170 10" stroke="#C9A84C" stroke-width="2" stroke-linecap="round" fill="none"/>
            <circle cx="170" cy="10" r="4" fill="#C9A84C"/>
        </svg>`
    },
    {
        title: 'Operations',
        desc: 'We get your locations running like the owner never left. Accountability systems, process improvements, and performance standards that hold without you needing to be in the room.',
        visual: `<svg width="180" height="140" viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="90" cy="70" r="28" stroke="#8B3A2A" stroke-width="2" fill="none"/>
            <circle cx="90" cy="70" r="8" fill="#8B3A2A"/>
            <circle cx="40" cy="40" r="18" stroke="#8B3A2A" stroke-width="1.5" fill="none" opacity="0.5"/>
            <circle cx="40" cy="40" r="5" fill="#8B3A2A" opacity="0.5"/>
            <circle cx="140" cy="40" r="18" stroke="#8B3A2A" stroke-width="1.5" fill="none" opacity="0.5"/>
            <circle cx="140" cy="40" r="5" fill="#8B3A2A" opacity="0.5"/>
            <circle cx="40" cy="100" r="18" stroke="#8B3A2A" stroke-width="1.5" fill="none" opacity="0.3"/>
            <circle cx="40" cy="100" r="5" fill="#8B3A2A" opacity="0.3"/>
            <circle cx="140" cy="100" r="18" stroke="#8B3A2A" stroke-width="1.5" fill="none" opacity="0.3"/>
            <circle cx="140" cy="100" r="5" fill="#8B3A2A" opacity="0.3"/>
            <line x1="62" y1="56" x2="55" y2="50" stroke="#C9A84C" stroke-width="1.5" opacity="0.6"/>
            <line x1="118" y1="56" x2="125" y2="50" stroke="#C9A84C" stroke-width="1.5" opacity="0.6"/>
            <line x1="62" y1="84" x2="55" y2="90" stroke="#C9A84C" stroke-width="1.5" opacity="0.6"/>
            <line x1="118" y1="84" x2="125" y2="90" stroke="#C9A84C" stroke-width="1.5" opacity="0.6"/>
        </svg>`
    },
    {
        title: 'Staffing & People',
        desc: 'The right people in the right seats changes everything. We review your team structure, identify gaps, and help build a culture of ownership and performance that lasts.',
        visual: `<svg width="180" height="140" viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="90" cy="35" r="18" stroke="#8B3A2A" stroke-width="2" fill="none"/>
            <path d="M58 110 Q58 80 90 80 Q122 80 122 110" stroke="#8B3A2A" stroke-width="2" fill="none" stroke-linecap="round"/>
            <circle cx="40" cy="60" r="13" stroke="#8B3A2A" stroke-width="1.5" fill="none" opacity="0.5"/>
            <path d="M18 105 Q18 83 40 83 Q62 83 62 105" stroke="#8B3A2A" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.5"/>
            <circle cx="140" cy="60" r="13" stroke="#8B3A2A" stroke-width="1.5" fill="none" opacity="0.5"/>
            <path d="M118 105 Q118 83 140 83 Q162 83 162 105" stroke="#8B3A2A" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.5"/>
            <line x1="90" y1="53" x2="90" y2="80" stroke="#C9A84C" stroke-width="1.5" opacity="0.6"/>
            <line x1="90" y1="80" x2="40" y2="83" stroke="#C9A84C" stroke-width="1" opacity="0.4"/>
            <line x1="90" y1="80" x2="140" y2="83" stroke="#C9A84C" stroke-width="1" opacity="0.4"/>
        </svg>`
    },
    {
        title: 'Vendor & Cost Management',
        desc: '31 years of relationships with vendors and distributors means better programs, stronger negotiations, and lower costs for your business. We bring our network directly to your table.',
        visual: `<svg width="180" height="140" viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="50" width="60" height="40" rx="6" stroke="#8B3A2A" stroke-width="2" fill="none"/>
            <rect x="110" y="50" width="60" height="40" rx="6" stroke="#8B3A2A" stroke-width="2" fill="none"/>
            <path d="M70 70 L110 70" stroke="#C9A84C" stroke-width="2" stroke-linecap="round"/>
            <path d="M98 62 L110 70 L98 78" stroke="#C9A84C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M82 62 L70 70 L82 78" stroke="#C9A84C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <text x="40" y="75" text-anchor="middle" font-size="11" fill="#8B3A2A" font-family="Georgia">YOU</text>
            <text x="140" y="75" text-anchor="middle" font-size="11" fill="#8B3A2A" font-family="Georgia">VENDOR</text>
            <path d="M20 90 Q20 120 40 120 Q60 120 60 100" stroke="#8B3A2A" stroke-width="1" stroke-dasharray="4 3" fill="none" opacity="0.3"/>
            <path d="M120 90 Q120 120 140 120 Q160 120 160 100" stroke="#8B3A2A" stroke-width="1" stroke-dasharray="4 3" fill="none" opacity="0.3"/>
            <circle cx="40" cy="30" r="10" stroke="#8B3A2A" stroke-width="1.5" fill="none" opacity="0.4"/>
            <circle cx="90" cy="20" r="10" stroke="#8B3A2A" stroke-width="1.5" fill="none" opacity="0.6"/>
            <circle cx="140" cy="30" r="10" stroke="#8B3A2A" stroke-width="1.5" fill="none" opacity="0.4"/>
        </svg>`
    }
];

const navItems = document.querySelectorAll('.services-nav-item');
const panel = document.getElementById('servicesPanel');
const serviceTitle = document.getElementById('serviceTitle');
const serviceDesc = document.getElementById('serviceDesc');
const serviceVisual = document.getElementById('serviceVisual');

function setService(index) {
    panel.classList.add('transitioning');

    setTimeout(() => {
        serviceTitle.textContent = services[index].title;
        serviceDesc.textContent = services[index].desc;
        serviceVisual.innerHTML = services[index].visual;
        panel.classList.remove('transitioning');
    }, 300);

    navItems.forEach(item => item.classList.remove('active'));
    navItems[index].classList.add('active');
}

if (serviceVisual) {
    serviceVisual.innerHTML = services[0].visual;
}

navItems.forEach(item => {
    item.addEventListener('click', () => {
        const index = parseInt(item.getAttribute('data-service'));
        setService(index);
    });
});

// ================================
// HERO FADE IN SEQUENCE
// ================================
window.addEventListener('load', () => {
    const heroH1 = document.querySelector('#hero h1');
    const heroP = document.querySelector('#hero p');
    const heroBtn = document.querySelector('#hero .btn-primary');
    const heroStats = document.querySelector('.hero-stats');

    const elements = [heroH1, heroP, heroBtn, heroStats];
    const delays = [300, 500, 900, 1200];

    elements.forEach((el, i) => {
        if (el) {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, delays[i]);
        }
    });
});

// ================================
// VALUES MORTAR LINE ANIMATION
// ================================
function runValuesAnimation() {
    const dots = [0,1,2,3].map(i => document.getElementById('dot'+i));
    const lines = [0,1,2].map(i => document.getElementById('line'+i));
    const vals = [0,1,2,3].map(i => document.getElementById('val'+i));

    if (!dots[0]) return;

    const delay = (ms) => new Promise(r => setTimeout(r, ms));

    async function animate() {
        await delay(200);
        dots[0].style.opacity = 1;
        vals[0].classList.add('visible');
        await delay(400);
        lines[0].style.transform = 'scaleY(1)';
        await delay(600);
        dots[1].style.opacity = 1;
        vals[1].classList.add('visible');
        await delay(400);
        lines[1].style.transform = 'scaleY(1)';
        await delay(600);
        dots[2].style.opacity = 1;
        vals[2].classList.add('visible');
        await delay(400);
        lines[2].style.transform = 'scaleY(1)';
        await delay(600);
        dots[3].style.opacity = 1;
        vals[3].classList.add('visible');
    }

    animate();
}

const valuesObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            runValuesAnimation();
            valuesObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

const valuesSection = document.getElementById('values');
if (valuesSection) valuesObserver.observe(valuesSection);

// ================================
// FAQ ACCORDION
// ================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('h3');
    const answer = item.querySelector('p');

    question.style.cursor = 'pointer';

    faqItems.forEach(i => {
        const a = i.querySelector('p');
        a.style.display = 'block';
    });

    question.addEventListener('click', () => {
        const isOpen = item.classList.contains('faq-open');

        faqItems.forEach(i => {
            i.classList.remove('faq-open');
        });

        if (!isOpen) {
            item.classList.add('faq-open');
        }
    });
});

// ================================
// QUOTE WORD BY WORD FADE IN
// ================================
const quoteEl = document.querySelector('#quote blockquote');

if (quoteEl) {
    const originalText = quoteEl.textContent.trim();
    const words = originalText.split(' ');

    quoteEl.innerHTML = words.map(word => 
        `<span class="quote-word">${word}</span>`
    ).join(' ');

    const quoteObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const spans = quoteEl.querySelectorAll('.quote-word');
                spans.forEach((span, i) => {
                    setTimeout(() => {
                        span.classList.add('quote-word-visible');
                    }, i * 70);
                });
                quoteObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    quoteObserver.observe(quoteEl);
}


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
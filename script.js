// ===========================
// MOBILE MENU
// ===========================
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMobile() {
  mobileMenu.classList.remove('open');
}

// Close mobile menu on outside click
document.addEventListener('click', (e) => {
  if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove('open');
  }
});

// ===========================
// SCROLL REVEAL
// ===========================
const revealElements = document.querySelectorAll(
  '.about-grid, .skills-container, .project-card, .timeline-item, .contact-card, .section-title, .section-label'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = `fadeUp 0.65s ease forwards`;
      entry.target.style.animationDelay = `${i * 0.07}s`;
      entry.target.style.opacity = '0';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealElements.forEach(el => {
  el.style.opacity = '0';
  revealObserver.observe(el);
});

// ===========================
// ACTIVE NAV HIGHLIGHT
// ===========================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${entry.target.id}`) {
          link.style.color = 'var(--cyan)';
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// ===========================
// NAV SCROLL SHADOW
// ===========================
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.borderBottomColor = 'rgba(0,194,255,0.1)';
  } else {
    nav.style.borderBottomColor = 'rgba(255,255,255,0.06)';
  }
});

// ===========================
// HERO GRID PARALLAX (subtle)
// ===========================
const heroGrid = document.querySelector('.hero-bg-grid');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (heroGrid && scrollY < window.innerHeight) {
    heroGrid.style.transform = `translateY(${scrollY * 0.15}px)`;
  }
});


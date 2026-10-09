/* =========================================================
   NATHAN KIPKEMBOI PORTFOLIO
   Main JavaScript
========================================================= */


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');


if (menuToggle && mobileMenu) {

  menuToggle.addEventListener('click', () => {

    const isOpen = mobileMenu.classList.toggle('open');

    menuToggle.setAttribute(
      'aria-expanded',
      String(isOpen)
    );

    menuToggle.textContent = isOpen ? '✕' : '☰';

  });


  // Close menu after clicking a link

  mobileMenu.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', () => {

      mobileMenu.classList.remove('open');

      menuToggle.setAttribute(
        'aria-expanded',
        'false'
      );

      menuToggle.textContent = '☰';

    });

  });


  // Close menu when clicking outside

  document.addEventListener('click', event => {

    if (
      mobileMenu.classList.contains('open') &&
      !mobileMenu.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {

      mobileMenu.classList.remove('open');

      menuToggle.setAttribute(
        'aria-expanded',
        'false'
      );

      menuToggle.textContent = '☰';

    }

  });

}


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar = document.getElementById('navbar');


function updateNavbar() {

  if (!navbar) return;

  if (window.scrollY > 50) {

    navbar.classList.add('scrolled');

  } else {

    navbar.classList.remove('scrolled');

  }

}


window.addEventListener(
  'scroll',
  updateNavbar,
  { passive: true }
);


updateNavbar();


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll(
  'main section[id]'
);

const navLinks = document.querySelectorAll(
  '.nav-links a'
);


const sectionObserver = new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if (!entry.isIntersecting) return;

      const id = entry.target.getAttribute('id');

      navLinks.forEach(link => {

        link.classList.toggle(
          'active',
          link.getAttribute('href') === `#${id}`
        );

      });

    });

  },

  {
    rootMargin: '-30% 0px -60% 0px'
  }

);


sections.forEach(section => {

  sectionObserver.observe(section);

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
  '.about-grid, .skills-container, .project-card, .timeline-item, .contact-card, .section-title, .section-label'
);


revealElements.forEach(element => {

  element.classList.add('scroll-reveal');

});


const revealObserver = new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if (!entry.isIntersecting) return;

      entry.target.classList.add('visible');

      revealObserver.unobserve(entry.target);

    });

  },

  {
    threshold: 0.08
  }

);


revealElements.forEach(element => {

  revealObserver.observe(element);

});


/* =========================================================
   HERO GRID PARALLAX
========================================================= */

const heroGrid = document.querySelector(
  '.hero-bg-grid'
);


if (heroGrid) {

  window.addEventListener(

    'scroll',

    () => {

      const offset =
        Math.min(window.scrollY * 0.12, 100);

      heroGrid.style.transform =
        `translateY(${offset}px)`;

    },

    { passive: true }

  );

}


/* =========================================================
   SMOOTH INTERNAL NAVIGATION
========================================================= */

document.querySelectorAll(
  'a[href^="#"]'
).forEach(link => {

  link.addEventListener('click', event => {

    const targetId =
      link.getAttribute('href');

    if (
      !targetId ||
      targetId === '#'
    ) {

      return;

    }


    const target =
      document.querySelector(targetId);


    if (!target) return;


    event.preventDefault();


    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

  });

});


/* =========================================================
   YEAR
========================================================= */

const footerYear =
  document.querySelector('footer span:first-child');


if (footerYear) {

  footerYear.textContent =
    `© ${new Date().getFullYear()} Nathan Kipkemboi`;

}


/* =========================================================
   IMAGE FALLBACK
========================================================= */

const heroPhoto =
  document.querySelector('.hero-photo');


if (heroPhoto) {

  heroPhoto.addEventListener('error', () => {

    heroPhoto.style.display = 'none';

    const portrait =
      document.querySelector('.hero-portrait');

    if (portrait) {

      portrait.classList.add(
        'photo-unavailable'
      );

    }

  });

}


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
  'Nathan Kipkemboi Portfolio — loaded successfully.'
);
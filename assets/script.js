/* ═══════════════════════════════════════════
   PORTFOLIO — Mukhammad Rizki Romadlon
   script.js
═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─────────────────────────────────────────
     1. AOS — Animate On Scroll
  ───────────────────────────────────────── */
  AOS.init({
    duration: 700,
    once: true,
    easing: 'ease-out-cubic',
    offset: 60,
  });


  /* ─────────────────────────────────────────
     2. Typed.js — Hero typing effect
  ───────────────────────────────────────── */
  new Typed('#typed-text', {
    strings: [
      'Junior Software Engineer',
      'Frontend Developer',
      'Backend Developer',
      'Problem Solver',
      'Code Enthusiast',
    ],
    typeSpeed: 60,
    backSpeed: 38,
    loop: true,
    backDelay: 1800,
    smartBackspace: true,
  });


  /* ─────────────────────────────────────────
     3. Particles.js — Background particles
  ───────────────────────────────────────── */
  // Reduce particle count on mobile for performance
  const isMobile = window.innerWidth < 768;

  particlesJS('particles-js', {
    particles: {
      number: {
        value: isMobile ? 28 : 55,
        density: { enable: true, value_area: 900 },
      },
      color: { value: '#6ee7b7' },
      shape: { type: 'circle' },
      opacity: {
        value: 0.18,
        random: true,
        anim: { enable: false },
      },
      size: {
        value: isMobile ? 1.5 : 2,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 140,
        color: '#6ee7b7',
        opacity: 0.07,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.75,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
      },
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover: { enable: !isMobile, mode: 'grab' },
        onclick: { enable: true, mode: 'push' },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: { opacity: 0.25 },
        },
        push: { particles_nb: isMobile ? 1 : 3 },
      },
    },
    retina_detect: true,
  });


  /* ─────────────────────────────────────────
     4. Cursor Glow (desktop only)
  ───────────────────────────────────────── */
  const glow = document.getElementById('cursorGlow');

  if (window.matchMedia('(hover: hover)').matches && glow) {
    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Smooth cursor following
    const animateGlow = () => {
      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;
      glow.style.left = glowX + 'px';
      glow.style.top  = glowY + 'px';
      requestAnimationFrame(animateGlow);
    };
    animateGlow();
  }


  /* ─────────────────────────────────────────
     5. Navbar — scroll effect & active link
  ───────────────────────────────────────── */
  const navbar   = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const updateNav = () => {
    // Scrolled class for background
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active link highlight
    let current = '';
    sections.forEach((sec) => {
      const sectionTop = sec.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav(); // run once on load


  /* ─────────────────────────────────────────
     6. Hamburger Menu (mobile)
  ───────────────────────────────────────── */
  const hamburger  = document.getElementById('hamburger');
  const navMenu    = document.getElementById('navLinks');
  const navOverlay = document.getElementById('navOverlay');

  const openMenu = () => {
    hamburger.classList.add('open');
    navMenu.classList.add('open');
    navOverlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
    navOverlay.classList.remove('visible');
    document.body.style.overflow = '';
  };

  hamburger.addEventListener('click', () => {
    if (hamburger.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close on overlay click
  navOverlay.addEventListener('click', closeMenu);

  // Close on nav link click
  navLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });


  /* ─────────────────────────────────────────
     7. Smooth scroll offset (fixed nav)
  ───────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navHeight = navbar.offsetHeight;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    });
  });


  /* ─────────────────────────────────────────
     8. Skill card — tilt on hover (desktop)
  ───────────────────────────────────────── */
  if (window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.skill-card').forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 10;
        const y = ((e.clientY - rect.top)  / rect.height - 0.5) * -10;
        card.style.transform = `translateY(-4px) perspective(400px) rotateX(${y}deg) rotateY(${x}deg)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }


  /* ─────────────────────────────────────────
     9. Back to top on logo click
  ───────────────────────────────────────── */
  document.querySelector('.nav-logo').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

});

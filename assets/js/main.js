/* ============================================================
   main.js — interactividad del portafolio (dark theme)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. Scroll suave con offset ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const id = anchor.getAttribute('href');
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();

      // En mobile el offset es la topbar (56px), en desktop 0
      const isMobile = window.innerWidth <= 900;
      const offset   = isMobile ? 56 : 0;

      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      closeMobileDrawer();
    });
  });

  /* ── 2. Menú mobile (drawer) ── */
  const drawer   = document.getElementById('mobile-drawer');
  const backdrop = drawer?.querySelector('.drawer-backdrop');
  const toggle   = document.querySelector('.topbar-toggle');

  toggle?.addEventListener('click', () => {
    drawer?.classList.toggle('open');
  });

  backdrop?.addEventListener('click', closeMobileDrawer);

  function closeMobileDrawer() {
    drawer?.classList.remove('open');
  }

  /* ── 3. Resaltar nav activa al hacer scroll ── */
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.sidebar-nav a');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          const matches = link.getAttribute('href') === `#${id}`;
          link.classList.toggle('active', matches);
        });
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  sections.forEach(s => sectionObserver.observe(s));

  /* ── 4. Aparición escalonada de tarjetas ── */
  const fadeTargets = document.querySelectorAll(
    '.project-item, .exp-item, .edu-item, .skill-pill, .contact-link'
  );

  fadeTargets.forEach(el => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
  });

  const fadeObserver = new IntersectionObserver((entries) => {
    let delay = 0;
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity   = '1';
          entry.target.style.transform = 'translateY(0)';
        }, delay);
        delay += 60;
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  fadeTargets.forEach(el => fadeObserver.observe(el));

  /* ── 5. Año dinámico en el footer ── */
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});

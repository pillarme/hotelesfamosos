/* nav.js — Hoteles Famosos / La Bitácora */
(function () {
  'use strict';

  var header  = document.getElementById('site-header');
  /* Support both BEM template (id="nav-toggle") and legacy template (.nav-toggle) */
  var toggle  = document.getElementById('nav-toggle') || document.querySelector('.nav-toggle');
  var menu    = document.getElementById('nav-menu')   || document.querySelector('.nav-menu');

  /* Sticky header shadow */
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /* Mobile menu toggle */
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    /* Close on Escape */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        toggle.focus();
      }
    });

    /* Close when a nav link is clicked (mobile) */
    menu.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* Scroll-to-top on logo click (already a link, just ensure smooth) */
  var logo = document.querySelector('.nav__logo');
  if (logo && logo.getAttribute('href') === '/') {
    logo.addEventListener('click', function (e) {
      if (window.location.pathname === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
}());

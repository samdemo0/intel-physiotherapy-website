
const toggle = document.querySelector('.menu-toggle');
const mobile = document.querySelector('.mobile-nav');
if (toggle && mobile) {
  toggle.addEventListener('click', () => {
    const open = mobile.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.08 });
revealEls.forEach(el => io.observe(el));
const back = document.querySelector('.back-top');
window.addEventListener('scroll', () => { if (back) back.classList.toggle('show', window.scrollY > 400); });
if (back) back.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

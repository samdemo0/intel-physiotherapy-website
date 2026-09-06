
const toggle = document.querySelector('.menu-toggle');
const mobile = document.querySelector('.mobile-nav');
if (toggle && mobile) {
  toggle.addEventListener('click', () => {
    const open = mobile.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Keep the Product menu item consistent across desktop and mobile navigation.
const addProductMenuItem = (container) => {
  if (!container || container.querySelector('a[href="product.html"]')) return;

  const servicesLink = container.querySelector('a[href="services.html"]');
  if (!servicesLink) return;

  const productLink = document.createElement('a');
  productLink.href = 'product.html';
  productLink.textContent = 'Product';

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  if (currentPage === 'product.html' && container.classList.contains('main-nav')) {
    productLink.classList.add('active');
  }

  servicesLink.insertAdjacentElement('afterend', productLink);
};

addProductMenuItem(document.querySelector('.main-nav'));
addProductMenuItem(document.querySelector('.mobile-nav'));

const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.08 });
revealEls.forEach(el => io.observe(el));
const back = document.querySelector('.back-top');
window.addEventListener('scroll', () => { if (back) back.classList.toggle('show', window.scrollY > 400); });
if (back) back.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

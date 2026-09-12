
// Compact desktop header across the site without changing the mobile layout.
const compactHeaderStyle = document.createElement('style');
compactHeaderStyle.textContent = `
@media (min-width: 1201px) {
  .header-inner {
    height: 92px !important;
    gap: 14px !important;
  }
  .logo img {
    width: 220px !important;
  }
  .main-nav {
    gap: 14px !important;
  }
  .main-nav a {
    padding: 30px 0 24px !important;
    font-size: 13px !important;
  }
  .main-nav a.active::after,
  .main-nav a:hover::after {
    bottom: 16px !important;
    height: 3px !important;
  }
  .header-contact {
    gap: 9px !important;
  }
  .phone-top strong {
    font-size: 17px !important;
  }
  .social-top a {
    width: 32px !important;
    height: 32px !important;
  }
}
`;
document.head.appendChild(compactHeaderStyle);

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

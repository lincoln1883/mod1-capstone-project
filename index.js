const mobileMenu = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');
const openMenu = document.querySelector('#menu-open');
const closeMenu = document.querySelector('#menu-close');

openMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile-menu');
  document.body.style.position = 'fixed';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile-menu');
  document.body.style.position = '';
});

navLinks.forEach((element) => {
  element.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu');
    document.body.style.position = '';
  });
});
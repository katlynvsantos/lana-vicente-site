// ========================================
// MENU MOBILE
// ========================================

const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

if (menuToggle && mobileNav) {

  menuToggle.addEventListener('click', () => {

    const isOpen = mobileNav.classList.toggle('active');

    menuToggle.setAttribute(
      'aria-expanded',
      isOpen
    );

    menuToggle.setAttribute(
      'aria-label',
      isOpen ? 'Fechar menu' : 'Abrir menu'
    );

    menuToggle.textContent = isOpen ? '✕' : '☰';

  });


  // Fecha o menu quando clicar em uma opção

  const mobileLinks = mobileNav.querySelectorAll('a');

  mobileLinks.forEach(link => {

    link.addEventListener('click', () => {

      mobileNav.classList.remove('active');

      menuToggle.setAttribute(
        'aria-expanded',
        'false'
      );

      menuToggle.setAttribute(
        'aria-label',
        'Abrir menu'
      );

      menuToggle.textContent = '☰';

    });

  });

}
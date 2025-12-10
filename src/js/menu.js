const menuBtn = document.querySelector('.header__menu-btn');
const menu = document.querySelector('.header__menu');
const menuClose = document.createElement('img');
menuClose.src = '/assets/icons/icon-close.svg'; // крестик
menuClose.classList.add('header__menu-close');
menu.prepend(menuClose);

// открыть меню
menuBtn.addEventListener('click', () => {
  menu.hidden = false;
  menuBtn.setAttribute('aria-expanded', true);
});

// закрыть меню
menuClose.addEventListener('click', () => {
  menu.hidden = true;
  menuBtn.setAttribute('aria-expanded', false);
});

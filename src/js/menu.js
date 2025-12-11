const menuBtn = document.querySelector(".header__menu-btn");
const closeBtn = document.querySelector(".menu__close-btn");
const nav = document.getElementById("mainNav");

menuBtn.addEventListener("click", () => {
  nav.hidden = false;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      nav.classList.add("menu--open");
    });
  });

  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("menu--open");
  document.body.style.overflow = "";

  setTimeout(() => {
    nav.hidden = true;
  }, 400);
});

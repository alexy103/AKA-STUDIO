const menuLinks = document.querySelectorAll(".menu .menu__link");

const mainLogo = document.querySelector(".identity__logo");

const homeAkaRed = document.querySelector(".home .aka__red");
const homeAkaCream = document.querySelector(".home .aka__cream");
const workAkas = document.querySelectorAll(".work .aka");
const aboutAkaRed = document.querySelector(".about .aka__red");
const aboutAkaCream = document.querySelector(".about .aka__cream");
const contactAkas = document.querySelectorAll(".contact .aka");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    updateSlide(link.textContent.toLowerCase().trim());
    closeMenu();
  });
});

mainLogo.addEventListener("click", () => {
  updateSlide("about", "up");
});

homeAkaRed.addEventListener("click", () => {
  updateSlide("work", "right");
});

homeAkaCream.addEventListener("click", () => {
  updateSlide("contact", "left");
});

aboutAkaRed.addEventListener("click", () => {
  document.querySelector("main").style.transform = "";

  setTimeout(() => {
    updateSlide("work", "down");
  }, 750);
});
aboutAkaCream.addEventListener("click", () => {
  document.querySelector("main").style.transform = "";

  setTimeout(() => {
    updateSlide("contact", "down");
  }, 750);
});

workAkas.forEach((aka) => {
  aka.addEventListener("click", () => {
    updateSlide("home", "left");
  });
});

contactAkas.forEach((aka) => {
  aka.addEventListener("click", () => {
    updateSlide("home", "right");
  });
});

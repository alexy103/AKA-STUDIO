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
  updateSlide("about");
});

homeAkaRed.addEventListener("click", () => {
  updateSlide("work");
});

homeAkaCream.addEventListener("click", () => {
  updateSlide("contact");
});

aboutAkaRed.addEventListener("click", () => {
  updateSlide("work");
});
aboutAkaCream.addEventListener("click", () => {
  updateSlide("contact");
});

workAkas.forEach((aka) => {
  aka.addEventListener("click", () => {
    updateSlide("home");
  });
});

contactAkas.forEach((aka) => {
  aka.addEventListener("click", () => {
    updateSlide("home");
  });
});

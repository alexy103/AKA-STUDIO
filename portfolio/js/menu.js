function openMenu() {
  document.querySelector(".menu").style.left = 0;
}

function closeMenu() {
  document.querySelector(".menu").style.left = "100%";
}

let activeLink = document.querySelector(".activeLink");
let activeSlide = document.querySelector(".home");

function updateSlide(slideName) {
  //update menu link
  activeLink.classList.remove("activeLink");
  activeLink = document.querySelector(
    ".menu__" + slideName.toLowerCase().trim()
  );
  activeLink.classList.add("activeLink");

  //update view
  activeSlide.classList.add("hidden");
  newSlide = document.querySelector("." + slideName);
  newSlide.classList.remove("hidden");
  activeSlide = newSlide;
}

document.querySelector(".navigation__burger").addEventListener("click", () => {
  openMenu();
});

document.querySelector(".menu__close").addEventListener("click", () => {
  closeMenu();
});

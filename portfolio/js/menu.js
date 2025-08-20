function openMenu() {
  document.querySelector("main").style.transition = "none";
  document.querySelector(".menu").style.left = 0;
}

function closeMenu() {
  document.querySelector(".menu").style.left = "100%";

  // make sure burger menu changes slide instantly
  setTimeout(() => {
    document.querySelector("main").style.transition = "transform 0.75s";
  }, 10);
}

document.querySelector(".navigation__burger").addEventListener("click", () => {
  openMenu();
});

document.querySelector(".menu__close").addEventListener("click", () => {
  closeMenu();
});

let activeLink = document.querySelector(".activeLink");

function updateMenuLink(slideName) {
  activeLink.classList.remove("activeLink");
  activeLink = document.querySelector(
    ".menu__" + slideName.toLowerCase().trim()
  );
  activeLink.classList.add("activeLink");
}

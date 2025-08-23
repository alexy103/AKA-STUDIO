function openMenu() {
  document.querySelector(".menu").classList.remove("hidden");

  // On attend que la classe s'applique
  setTimeout(() => {
    document.querySelector(".menu").style.left = 0;
  }, 1);
}

function closeMenu() {
  document.querySelector(".menu").style.left = "100%";

  // On attend que l'animation se fasse puis on cache le menu
  setTimeout(() => {
    document.querySelector(".menu").classList.add("hidden");
  }, 1000);
}

document.querySelector(".navigation__burger").addEventListener("click", () => {
  openMenu();
});

document.querySelector(".menu__close").addEventListener("click", () => {
  closeMenu();
});

// Gestion du lien actif du menu
let activeLink = document.querySelector(".activeLink");

function updateMenuLink(slideName) {
  activeLink.classList.remove("activeLink");
  activeLink = document.querySelector(
    ".menu__" + slideName.toLowerCase().trim()
  );
  activeLink.classList.add("activeLink");
}

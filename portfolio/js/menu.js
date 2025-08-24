const menu = document.querySelector(".menu");

function openMenu() {
  // On enlève front de toutes les slides
  document
    .querySelectorAll(".slide")
    .forEach((slide) => slide.classList.remove("front"));

  // Nettoyage de la navbar
  const nav = document.querySelector(".navigation");
  nav.classList.remove(
    "front",
    "navigation--enter--right",
    "navigation--enter--left",
    "navigation--enter--up"
  );

  // Nettoyage du menu et ajout de front
  menu.classList.remove("behind", "unclickable");
  menu.classList.add("front");

  // Enter des cases et de la partie droite du menu
  menu.querySelector(".firstcol").classList.add("firstcol--enter");
  menu.querySelector(".secondcol").classList.add("secondcol--enter");
  menu.querySelector(".menu__text").classList.add("text--enter");
  menu.querySelector(".menu__img").classList.add("logo--enter");

  // Enter des liens du menu
  menu.querySelectorAll("h2").forEach((e) => e.classList.add("link--enter"));
}

function closeMenu() {
  // On cache le menu
  menu.classList.add("unclickable");

  // On attend la fin de l'animation et on nettoie les éléments dedans
  setTimeout(() => {
    document
      .querySelector(".menu .firstcol")
      .classList.remove("firstcol--enter");
    document
      .querySelector(".menu .secondcol")
      .classList.remove("secondcol--enter");
    document.querySelectorAll(".menu h2").forEach((e) => {
      e.classList.remove("link--enter");
    });
    document.querySelector(".menu .menu__text").classList.remove("text--enter");
    document.querySelector(".menu .menu__img").classList.remove("logo--enter");
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

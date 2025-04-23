function openMenu() {
  document.querySelector(".menu").style.left = 0;
}

function closeMenu() {
  document.querySelector(".menu").style.left = "100%";
}

document.querySelector(".navigation__burger").addEventListener("click", () => {
  openMenu();
});

document.querySelector(".menu__close").addEventListener("click", () => {
  closeMenu();
});

let activeLink = document.querySelector(".activeLink");
let activeSlide = document.querySelector(".home");

function updateMenuLink(slideName) {
  activeLink.classList.remove("activeLink");
  activeLink = document.querySelector(
    ".menu__" + slideName.toLowerCase().trim()
  );
  activeLink.classList.add("activeLink");
}

function updateSlide(slideName) {
  updateMenuLink(slideName);

  switch (slideName) {
    case "home":
      document.querySelector("main").style.transform = "";
      break;

    //swap les commentaires et ça change l'animation
    case "work":
      document.querySelector(".home").style.opacity = "0";
      document.querySelector(".work").style.left = "0";
      document.querySelector("main").style.transform = "";

      // document.querySelector("main").style.transform = "translateX(-150%)";
      break;
    case "about":
      document.querySelector("main").style.transform = "translateY(150%)";
      break;
    case "contact":
      // document.querySelector("main").style.transform = "";
      // setTimeout(() => {
      document.querySelector("main").style.transform = "translateX(150%)";
      // }, 1000);
      break;
    default:
      break;
  }

  newSlide = document.querySelector("." + slideName);
  activeSlide = newSlide;
}

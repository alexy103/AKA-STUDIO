const menuLinks = document.querySelectorAll(".menu .menu__link");

const mainLogo = document.querySelector(".identity__logo");

const navigationLogo = document.querySelector(".navigation__logo");

const homeAkaRed = document.querySelector(".home .aka__red");
const homeAkaCream = document.querySelector(".home .aka__cream");
const workAkaRed = document.querySelector(".work .aka__red");
const workAkaCream = document.querySelector(".work .aka__cream");
const aboutAkaRed = document.querySelector(".about .aka__red");
const aboutAkaCream = document.querySelector(".about .aka__cream");
const contactAkaRed = document.querySelector(".contact .aka__red");
const contactAkaCream = document.querySelector(".contact .aka__cream");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    updateSlide(link.textContent.toLowerCase().trim());
    closeMenu();
  });
});

mainLogo.addEventListener("click", () => {
  updateSlide("about");
});

navigationLogo.addEventListener("click", () => {
  updateSlide("home");
});

homeAkaRed.addEventListener("click", () => {
  homeAkaRed.classList.add("right");

  // Cache le rouge après 1s
  setTimeout(() => {
    homeAkaRed.classList.add("hidden");
  }, 1000);

  // Le remet à sa place après 2s
  setTimeout(() => {
    homeAkaRed.classList.remove("right");
    homeAkaRed.classList.remove("hidden");
  }, 2000);
  updateSlide("work");
});

homeAkaCream.addEventListener("click", () => {
  homeAkaCream.classList.add("left");

  // Cache le blanc après 1s
  setTimeout(() => {
    homeAkaCream.classList.add("hidden");
  }, 1000);

  // Le remet à sa place après 2s
  setTimeout(() => {
    homeAkaCream.classList.remove("left");
    homeAkaCream.classList.remove("hidden");
  }, 2000);
  updateSlide("contact");
});

aboutAkaRed.addEventListener("click", () => {
  document.querySelector("main").style.transform = "";

  setTimeout(() => {
    updateSlide("work");
  }, 750);
});
aboutAkaCream.addEventListener("click", () => {
  document.querySelector("main").style.transform = "";

  setTimeout(() => {
    updateSlide("contact");
  }, 750);
});

workAkaRed.addEventListener("click", () => {
  workAkaRed.classList.add("left");

  // Cache le rouge après 1s
  setTimeout(() => {
    workAkaRed.classList.add("hidden");
  }, 1000);

  // Le remet à sa place après 2s
  setTimeout(() => {
    workAkaRed.classList.remove("left");
    workAkaRed.classList.remove("hidden");
  }, 2000);
  updateSlide("home");
});

workAkaCream.addEventListener("click", () => {
  updateSlide("contact");
});

contactAkaRed.addEventListener("click", () => {
  updateSlide("work");
});

contactAkaCream.addEventListener("click", () => {
  contactAkaCream.classList.add("right");

  // Cache le rouge après 1s
  setTimeout(() => {
    contactAkaCream.classList.add("hidden");
  }, 1000);

  // Le remet à sa place après 2s
  setTimeout(() => {
    contactAkaCream.classList.remove("right");
    contactAkaCream.classList.remove("hidden");
  }, 2000);
  updateSlide("home");
});

const slides = document.querySelectorAll(".slide");
let displayedSlideName = "home";

function exitDisplayedSlide() {
  let displayedSlide = document.querySelector("." + displayedSlideName);
  displayedSlide.classList.add(displayedSlideName + "--exit");
  // On attend 2s pour que l'animation de sortie se termine
  setTimeout(() => {
    displayedSlide.classList.remove(displayedSlideName + "--enter");
    displayedSlide.classList.remove(displayedSlideName + "--exit");
  }, 2000);
}

function updateSlide(slideName) {
  updateMenuLink(slideName);

  switch (slideName) {
    case "home":
      // On attend 1s pour que le aka disparaisse
      setTimeout(() => {
        exitDisplayedSlide();

        document.querySelector(".home").classList.remove("left");
        document.querySelector(".home").classList.remove("right");
      }, 1000);

      break;

    case "work":
      displayedSlideName = "work";
      // On attend 1s pour que le aka disparaisse
      document.querySelector(".work").classList.remove("work--exit");
      setTimeout(() => {
        document.querySelector(".work").classList.add("work--enter");
        setTimeout(() => {
          document.querySelector(".home").classList.add("left");
        }, 100);
      }, 1000);

      break;
    case "about":
      document.querySelector("main").style.transform = "translateY(150%)";
      break;
    case "contact":
      // On attend 1s pour que le aka disparaisse
      setTimeout(() => {
        document.querySelector(".contact").classList.add("contact--enter");
        setTimeout(() => {
          document.querySelector(".home").classList.add("right");
        }, 100);
      }, 1000);
      break;
    default:
      break;
  }
}

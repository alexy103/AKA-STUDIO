// MENU ----------------------------------------------------------
const menuLinks = document.querySelectorAll(".menu .menu__link");
const navigationLogo = document.querySelector(".navigation__logo");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    updateSlide(link.textContent.toLowerCase().trim());
    closeMenu();
  });
});

navigationLogo.addEventListener("click", () => {
  updateSlide("home");
});

// HOME ----------------------------------------------------------
const mainLogo = document.querySelector(".identity__logo");
const homeAkaRed = document.querySelector(".home .aka__red");
const homeAkaCream = document.querySelector(".home .aka__cream");

mainLogo.addEventListener("click", () => {
  updateSlide("about");
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

// ABOUT ----------------------------------------------------------
const aboutAkaRed = document.querySelector(".about .aka__red");
const aboutAkaCream = document.querySelector(".about .aka__cream");

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

// WORK ----------------------------------------------------------
const workAkaRed = document.querySelector(".work .aka__red");
const workAkaCream = document.querySelector(".work .aka__cream");

function handleWorkAkas() {
  workAkaRed.classList.add("left");
  workAkaCream.classList.add("left");

  // Cache le rouge après 1s
  setTimeout(() => {
    workAkaRed.classList.add("hidden");
    workAkaCream.classList.add("hidden");
  }, 1000);

  // Le remet à sa place après 2s
  setTimeout(() => {
    workAkaRed.classList.remove("left");
    workAkaRed.classList.remove("hidden");

    workAkaCream.classList.remove("left");
    workAkaCream.classList.remove("hidden");
  }, 2000);
}

workAkaRed.addEventListener("click", () => {
  handleWorkAkas();
  updateSlide("home");
});

workAkaCream.addEventListener("click", () => {
  handleWorkAkas();
  updateSlide("contact");
});

// CONTACT ----------------------------------------------------------
const contactAkaRed = document.querySelector(".contact .aka__red");
const contactAkaCream = document.querySelector(".contact .aka__cream");
const contactSlide = document.querySelector(".contact");

function handleContactAkas() {
  contactAkaRed.classList.add("right");
  contactAkaCream.classList.add("right");

  // Cache le rouge après 1s
  setTimeout(() => {
    contactAkaRed.classList.add("hidden");
    contactAkaCream.classList.add("hidden");
  }, 1000);

  // Le remet à sa place après 2s
  setTimeout(() => {
    contactAkaRed.classList.remove("right");
    contactAkaRed.classList.remove("hidden");

    contactAkaCream.classList.remove("right");
    contactAkaCream.classList.remove("hidden");
  }, 2000);
}

contactAkaRed.addEventListener("click", () => {
  handleContactAkas();
  updateSlide("work");
});

contactAkaCream.addEventListener("click", () => {
  handleContactAkas();
  updateSlide("home");
});

// SLIDES ----------------------------------------------------------
const slides = document.querySelectorAll(".slide");
let displayedSlideName = "home";

function exitDisplayedSlide() {
  let displayedSlide = document.querySelector("." + displayedSlideName);
  displayedSlide.classList.add(displayedSlideName + "--exit");

  contactSlide.classList.remove("contact--inside");

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
      displayedSlideName = "contact";
      // On attend 1s pour que le aka disparaisse
      document.querySelector(".contact").classList.remove("contact--exit");
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

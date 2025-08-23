// HANDLE FUNCTIONS ----------------------------------------------
function handleHomeAkas(
  nextSlide,
  clickedAka,
  otherAka,
  direction,
  otherDirection
) {
  // On lance l'animation
  clickedAka.classList.add(direction);

  // On cache le aka cliqué après son animation (1s)
  setTimeout(() => {
    clickedAka.classList.add("hidden");
  }, 1000);

  // On cache l'autre aka après les animations (3s)
  setTimeout(() => {
    otherAka.classList.add("hidden");
    otherAka.classList.add(otherDirection);
  }, 3000);

  updateSlide(nextSlide);
}

function handleAkas(akas, direction) {
  // On lance l'exit des akas
  akas.forEach((aka) => {
    aka.classList.add(direction);
  });

  // On cache les akas après leur exit
  setTimeout(() => {
    akas.forEach((aka) => {
      aka.classList.add("hidden");
    });
  }, 1000);

  // On remet les aka dès que l'animation est terminée
  setTimeout(() => {
    akas.forEach((aka) => {
      aka.classList.remove(direction);
      aka.classList.remove("hidden");
    });
  }, 2000);
}

// MENU ----------------------------------------------------------
const menuLinks = document.querySelectorAll(".menu .menu__link");
const navbar = document.querySelector(".navigation");
const navigationLogo = document.querySelector(".navigation__logo");

// Mettre à jour la slide en cliquant sur un lien du menu
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    let nextSlideName = link.textContent.toLowerCase().trim();

    menu.classList.remove("front");
    menu.classList.add("behind");
    document.querySelector("." + nextSlideName).classList.add("front");
    updateSlideFromMenu(nextSlideName);

    // On cache les akas de HOME
    document.querySelectorAll(".home .aka").forEach((aka) => {
      aka.classList.add("hidden");
    });

    setTimeout(() => {
      closeMenu();
    }, 2000);
  });
});

// Afficher HOME en cliquant sur le logo de la navbar
navigationLogo.addEventListener("click", () => {
  updateSlide("home");
});

// HOME ----------------------------------------------------------
const mainLogo = document.querySelector(".identity__logo");
const homeAkaRed = document.querySelector(".home .aka__red");
const homeAkaCream = document.querySelector(".home .aka__cream");
const homeAkas = document.querySelectorAll(".home .aka");
// Afficher ABOUT en cliquant sur le logo de home
mainLogo.addEventListener("click", () => {
  updateSlide("about");
});

homeAkaRed.addEventListener("click", () => {
  handleHomeAkas("work", homeAkaRed, homeAkaCream, "right", "left");
});

// Afficher CONTACT en cliquant sur le aka de droite
homeAkaCream.addEventListener("click", () => {
  handleHomeAkas("contact", homeAkaCream, homeAkaRed, "left", "right");
});

// ABOUT ----------------------------------------------------------
// TODO: revoir une fois que la page about est faite
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
const workSlide = document.querySelector(".work");

const workAkaRed = document.querySelector(".work .aka__red");
const workAkaCream = document.querySelector(".work .aka__cream");
const workAkas = document.querySelectorAll(".work .aka");

workAkaRed.addEventListener("click", () => {
  handleAkas(workAkas, "left");
  updateSlide("home");
});

workAkaCream.addEventListener("click", () => {
  handleAkas(workAkas, "left");
  updateSlide("contact");
});

// CONTACT ----------------------------------------------------------
const contactSlide = document.querySelector(".contact");

const contactAkaRed = document.querySelector(".contact .aka__red");
const contactAkaCream = document.querySelector(".contact .aka__cream");
const contactAkas = document.querySelectorAll(".contact .aka");

contactAkaRed.addEventListener("click", () => {
  handleAkas(contactAkas, "right");
  updateSlide("work");
});

contactAkaCream.addEventListener("click", () => {
  handleAkas(contactAkas, "right");
  updateSlide("home");
});

// SLIDES ----------------------------------------------------------
const slides = document.querySelectorAll(".slide");
let displayedSlideName = "home";

// Ajouter exit à la slide affichée
function exitDisplayedSlide() {
  let displayedSlide = document.querySelector("." + displayedSlideName);
  displayedSlide.classList.add(displayedSlideName + "--exit");

  // On attend 2s pour que l'animation de sortie se termine puis on nettoie les classes
  setTimeout(() => {
    displayedSlide.classList.remove(displayedSlideName + "--inside");
    displayedSlide.classList.remove(displayedSlideName + "--enter");
    displayedSlide.classList.remove(displayedSlideName + "--exit");
  }, 2000);
}

function updateSlideFromMenu(slideName) {
  updateMenuLink(slideName);
  switch (slideName) {
    case "home":
      // On fait l'enter de HOME
      navbar.classList.add("front", "navigation--enter--left");
      document.querySelector(".home").classList.add("front");
      document.querySelector(".home").classList.remove("left");
      document.querySelector(".home").classList.remove("right");
      exitDisplayedSlide();

      // On enlève hidden des akas de HOME
      setTimeout(() => {
        homeAkas.forEach((aka) => {
          aka.classList.remove("hidden");
        });
      }, 1000);

      // On fait le enter des akas de HOME après l'animation de l'ancienne slide
      setTimeout(() => {
        homeAkaRed.classList.remove("right");
        homeAkaCream.classList.remove("left");
      }, 1500);

      break;

    case "work":
      displayedSlideName = "work";

      // On nettoie la classe et on cache les akas pour préparer l'animation d'enter
      workSlide.classList.remove("work--exit");
      workAkas.forEach((aka) => {
        aka.classList.remove("hidden");
      });

      navbar.classList.add("front", "navigation--enter--right");
      workSlide.classList.add("work--enter");

      // On prépare HOME pour son enter
      homeAkaRed.classList.add("right");
      homeAkaCream.classList.add("left");
      document.querySelector(".home").classList.add("left");

      // On attend la fin de l'enter puis on prépare les classes pour les animations de submenu dans WORK
      setTimeout(() => {
        workSlide.classList.remove("work--enter");
        workSlide.classList.remove("front");
        workSlide.classList.add("work--inside");
      }, 5000);
      break;

    default:
      break;
  }
}

function updateSlide(slideName) {
  updateMenuLink(slideName);
  switch (slideName) {
    // Afficher HOME
    case "home":
      // On attend 1s pour que le aka de l'ancienne slide disparaisse puis on centre HOME
      setTimeout(() => {
        document.querySelector(".home").classList.add("front");
        document.querySelector(".home").classList.remove("left");
        document.querySelector(".home").classList.remove("right");
        exitDisplayedSlide();
      }, 1000);

      // On fait enlève hidden des akas de HOME
      setTimeout(() => {
        homeAkas.forEach((aka) => {
          aka.classList.remove("hidden");
        });
      }, 2200);

      // On fait le enter des akas de HOME après l'animation de l'ancienne slide
      setTimeout(() => {
        homeAkaRed.classList.remove("right");
        homeAkaCream.classList.remove("left");
      }, 2500);
      break;

    // Afficher WORK
    case "work":
      displayedSlideName = "work";

      document.querySelector(".home").classList.remove("front"); //TODO: revoir ici aussi

      // On nettoie la classe et on cache les akas pour préparer l'animation d'enter
      document.querySelector(".work").classList.remove("work--exit");
      workAkas.forEach((aka) => {
        aka.classList.remove("hidden");
      });

      // On attend 1s pour que le aka disparaisse puis on lance l'animation d'enter
      setTimeout(() => {
        document.querySelector(".work").classList.add("work--enter");
      }, 1000);

      // On fait slide HOME après l'enter pour préparer l'animation d'exit
      setTimeout(() => {
        document.querySelector(".home").classList.add("left");
      }, 2900);

      // On attend la fin de l'enter puis on prépare les classes pour les animations de submenu dans WORK
      setTimeout(() => {
        document.querySelector(".work").classList.remove("work--enter");
        document.querySelector(".work").classList.add("work--inside");
      }, 5000);
      break;
    case "about":
      document.querySelector("main").style.transform = "translateY(150%)";
      break;

    // Afficher CONTACT
    case "contact":
      displayedSlideName = "contact";

      document.querySelector(".home").classList.remove("front"); //TODO: revoir ici aussi

      // On nettoie la classe et on cache les akas pour préparer l'animation d'enter
      document.querySelector(".contact").classList.remove("contact--exit");
      contactAkas.forEach((aka) => {
        aka.classList.remove("hidden");
      });
      // On attend 1s pour que le aka disparaisse puis on lance l'animation d'enter
      setTimeout(() => {
        document.querySelector(".contact").classList.add("contact--enter");
      }, 1000);

      // On fait slide HOME après l'enter pour préparer l'animation d'exit
      setTimeout(() => {
        document.querySelector(".home").classList.add("right");
      }, 2900);

      // On attend la fin de l'enter puis on prépare les classes pour les animations de submenu dans CONTACT
      setTimeout(() => {
        document.querySelector(".contact").classList.remove("contact--enter");
        document.querySelector(".contact").classList.add("contact--inside");
      }, 5000);
      break;
    default:
      break;
  }
}

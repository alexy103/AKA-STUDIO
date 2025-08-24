// HANDLE FUNCTIONS ----------------------------------------------
function handleHomeAkas(
  nextSlide,
  clickedAka,
  otherAka,
  direction,
  otherDirection,
  about
) {
  // On lance l'animation
  clickedAka.classList.add(direction);

  // On cache le aka cliqué après son animation (1s)
  setTimeout(() => {
    clickedAka.classList.add("hidden");
  }, 1000);

  // Pas de timeout si on va vers ABOUT
  if (about) {
    otherAka.classList.add("hidden");
    otherAka.classList.add(otherDirection);
    updateSlide(nextSlide);
    return;
  }

  // On cache l'autre aka après les animations (3s)
  setTimeout(() => {
    otherAka.classList.add("hidden");
    otherAka.classList.add(otherDirection);
  }, 3000);

  updateSlide(nextSlide);
}

function handleAkas(akas, direction) {
  workSlide.classList.remove("front");
  contactSlide.classList.remove("front");
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
  }, 4000);
}

// MENU ----------------------------------------------------------
const menuLinks = document.querySelectorAll(".menu .menu__link");
const navbar = document.querySelector(".navigation");
const navigationLogo = document.querySelector(".navigation__logo");

// Mettre à jour la slide en cliquant sur un lien du menu
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // On nettoie les classes pour la double navigation
    contactSlide.classList.remove("contact--inside");
    contactSlide.classList.remove("work--inside");

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
  if (displayedSlideName != "home") {
    navbar.classList.add("front");
    navbar.classList.remove(
      "navigation--enter--right",
      "navigation--enter--left",
      "navigation--enter--down",
      "navigation--enter--up"
    );
    handleAkas(workAkas, "left");
    handleAkas(contactAkas, "right");
    handleAkas(aboutAkas, "down");
    updateSlide("home");
  }
});

// HOME ----------------------------------------------------------
const homeSlide = document.querySelector(".home");

const mainLogo = document.querySelector(".identity__logo");
const homeAkaRed = document.querySelector(".home .aka__red");
const homeAkaCream = document.querySelector(".home .aka__cream");
const homeAkas = document.querySelectorAll(".home .aka");
// Afficher ABOUT en cliquant sur le logo de home
mainLogo.addEventListener("click", () => {
  handleHomeAkas("about", homeAkaRed, homeAkaCream, "right", "left", true);
});

homeAkaRed.addEventListener("click", () => {
  handleHomeAkas("work", homeAkaRed, homeAkaCream, "right", "left");
});

// Afficher CONTACT en cliquant sur le aka de droite
homeAkaCream.addEventListener("click", () => {
  handleHomeAkas("contact", homeAkaCream, homeAkaRed, "left", "right");
});

// ABOUT ----------------------------------------------------------
const aboutSlide = document.querySelector(".about");

const aboutAkaRed = document.querySelector(".about .aka__red");
const aboutAkaCream = document.querySelector(".about .aka__cream");
const aboutAkas = document.querySelectorAll(".about .aka");

aboutAkaRed.addEventListener("click", () => {
  setTimeout(() => {
    updateSlide("work");
  }, 750);
});
aboutAkaCream.addEventListener("click", () => {
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
  contactSlide.classList.add("front");
  updateSlide("contact");
  setTimeout(() => {
    workSlide.classList.remove("work--inside");
    homeSlide.classList.remove("left");
  }, 3500);
});

// CONTACT ----------------------------------------------------------
const contactSlide = document.querySelector(".contact");

const contactAkaRed = document.querySelector(".contact .aka__red");
const contactAkaCream = document.querySelector(".contact .aka__cream");
const contactAkas = document.querySelectorAll(".contact .aka");

contactAkaRed.addEventListener("click", () => {
  handleAkas(contactAkas, "right");
  workSlide.classList.add("front");
  updateSlide("work");
  setTimeout(() => {
    contactSlide.classList.remove("contact--inside");
  }, 3500);
});

contactAkaCream.addEventListener("click", () => {
  handleAkas(contactAkas, "right");
  updateSlide("home");
  setTimeout(() => {
    contactSlide.classList.remove("contact--inside");
  }, 3500);
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

    displayedSlideName = "home";
  }, 2000);
}

function updateSlideFromMenu(slideName) {
  updateMenuLink(slideName);
  switch (slideName) {
    case "home":
      // On fait l'enter de HOME
      if (displayedSlideName === "work") {
        navbar.classList.add("front", "navigation--enter--left");
      } else if (displayedSlideName === "contact") {
        navbar.classList.add("front", "navigation--enter--right");
      } else if (displayedSlideName === "about") {
        navbar.classList.add("front", "navigation--enter--down");
      }
      homeSlide.classList.add("front");
      homeSlide.classList.remove("left");
      homeSlide.classList.remove("right");
      homeSlide.classList.remove("down");
      console.log(displayedSlideName);

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
      homeSlide.classList.add("left");

      // On attend la fin de l'enter puis on prépare les classes pour les animations de submenu dans WORK
      setTimeout(() => {
        workSlide.classList.remove("work--enter");
        workSlide.classList.remove("front");
        workSlide.classList.add("work--inside");

        homeSlide.classList.remove("right");
        homeSlide.classList.remove("down");
        cleanOtherClasses(displayedSlideName);
      }, 4000);
      break;

    case "about":
      displayedSlideName = "about";

      // On nettoie la classe et on cache les akas pour préparer l'animation d'enter
      aboutAkas.forEach((aka) => {
        aka.classList.remove("hidden");
      });

      navbar.classList.add("front", "navigation--enter--up");
      aboutSlide.classList.add("about--enter");

      // On prépare HOME pour son enter
      homeAkaRed.classList.add("right");
      homeAkaCream.classList.add("left");
      homeSlide.classList.add("down");

      // On attend la fin de l'enter puis on prépare les classes pour les animations de submenu dans WORK
      setTimeout(() => {
        aboutSlide.classList.remove("about--enter");
        aboutSlide.classList.remove("front");
        aboutSlide.classList.add("about--inside");

        // On nettoie toutes les autres classes pour la double navigation
        homeSlide.classList.remove("left");
        homeSlide.classList.remove("right");
        cleanOtherClasses(displayedSlideName);
      }, 4000);
      break;

    case "contact":
      displayedSlideName = "contact";

      // On nettoie la classe et on cache les akas pour préparer l'animation d'enter
      contactSlide.classList.remove("contact--exit");
      contactAkas.forEach((aka) => {
        aka.classList.remove("hidden");
      });

      navbar.classList.add("front", "navigation--enter--left");
      contactSlide.classList.add("contact--enter");

      homeAkaRed.classList.add("right");
      homeAkaCream.classList.add("left");
      homeSlide.classList.add("right");

      // On attend la fin de l'enter puis on prépare les classes pour les animations de submenu dans CONTACT
      setTimeout(() => {
        contactSlide.classList.remove("contact--enter");
        contactSlide.classList.remove("front");
        contactSlide.classList.add("contact--inside");

        homeSlide.classList.remove("left");
        homeSlide.classList.remove("down");
        cleanOtherClasses(displayedSlideName);
      }, 4000);
      break;

    default:
      break;
  }
}

// Nettoyer toutes les autres classes
function cleanOtherClasses(slideName) {
  // On récupère toutes les slides
  document.querySelectorAll(".slide").forEach((slide) => {
    // Si cette slide n'est pas celle en paramètre
    if (!slide.classList.contains(slideName)) {
      // On enlève toutes les classes d'animation
      slide.classList.forEach((className) => {
        if (className.includes("--")) {
          slide.classList.remove(className);
        }
      });
    }
  });
}

function updateSlide(slideName) {
  updateMenuLink(slideName);
  switch (slideName) {
    // Afficher HOME
    case "home":
      aboutSlide.classList.remove("front");
      // On attend 1s pour que le aka de l'ancienne slide disparaisse puis on centre HOME
      setTimeout(() => {
        homeSlide.classList.add("front");
        homeSlide.classList.remove("left");
        homeSlide.classList.remove("right");
        homeSlide.classList.remove("down");
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

      homeSlide.classList.remove("front");
      // On nettoie la classe et on cache les akas pour préparer l'animation d'enter
      workSlide.classList.remove("work--exit");
      workAkas.forEach((aka) => {
        aka.classList.remove("hidden");
      });

      // On attend 1s pour que le aka disparaisse puis on lance l'animation d'enter
      setTimeout(() => {
        workSlide.classList.add("work--enter");
      }, 1000);

      // On fait slide HOME après l'enter pour préparer l'animation d'exit
      setTimeout(() => {
        homeSlide.classList.add("left");
        homeSlide.classList.remove("right");
      }, 2900);

      // On attend la fin de l'enter puis on prépare les classes pour les animations de submenu dans WORK
      setTimeout(() => {
        workSlide.classList.remove("work--enter");
        workSlide.classList.add("work--inside");
      }, 5000);
      break;
    case "about":
      displayedSlideName = "about";
      homeSlide.classList.remove("front");

      // On nettoie la classe et on cache les akas pour préparer l'animation d'enter
      aboutAkas.forEach((aka) => {
        aka.classList.remove("hidden");
      });

      // On attend 1s pour que le aka disparaisse puis on lance l'animation d'enter
      setTimeout(() => {
        navbar.classList.add("front", "navigation--enter--up");
        aboutSlide.classList.add("about--enter");
      }, 1000);

      // On fait slide HOME après l'enter pour préparer l'animation d'exit
      setTimeout(() => {
        homeSlide.classList.add("down");
      }, 2900);

      // On attend la fin de l'enter puis on prépare les classes pour les animations de submenu dans WORK
      setTimeout(() => {
        aboutSlide.classList.remove("about--enter");
        aboutSlide.classList.add("about--inside");
      }, 5000);
      break;

    // Afficher CONTACT
    case "contact":
      displayedSlideName = "contact";

      homeSlide.classList.remove("front");

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
        homeSlide.classList.add("right");
        homeSlide.classList.remove("left");
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

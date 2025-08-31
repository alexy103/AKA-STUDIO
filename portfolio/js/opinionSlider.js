const opinionSliderLeftArrows = document.querySelectorAll(
  ".content--second .slider .fa-chevron-left"
);
const opinionSliderRightArrows = document.querySelectorAll(
  ".content--second .slider .fa-chevron-right"
);

const allOpinions = document.querySelectorAll(
  ".opinions .opinion :is(img, .opinion__title, .opinion__text)"
);
let activeOpinionElements = document.querySelectorAll(
  ".about .opinions:not(.hidden) .opinion"
);

let activeOpinion = document.querySelector(".about .opinion:not(.hidden)");
let opinionSliderIndex = 0;

function showOpinion(index, direction) {
  allOpinions.forEach((e) => {
    e.classList.remove("friendlist--exit", "friendlist--enter");
  });

  // Ancien avis
  activeOpinion
    .querySelectorAll("img, .opinion__title, .opinion__text")
    .forEach((e) => {
      e.classList.remove(
        "slider--exit--right",
        "slider--exit--left",
        "slider--enter--right",
        "slider--enter--left"
      );
      e.classList.add(
        direction === "right" ? "slider--exit--left" : "slider--exit--right"
      );
    });

  setTimeout(() => {
    activeOpinionElements.forEach((friend) => {
      friend.classList.add("hidden");
    });

    // Boucle infinie
    if (index >= activeOpinionElements.length) {
      opinionSliderIndex = 0;
    } else if (index < 0) {
      opinionSliderIndex = activeOpinionElements.length - 1;
    } else {
      opinionSliderIndex = index;
    }

    activeOpinionElements[opinionSliderIndex].classList.remove("hidden");
    activeOpinion = activeOpinionElements[opinionSliderIndex];

    // Nouveau avis
    activeOpinion
      .querySelectorAll("img, .opinion__title, .opinion__text")
      .forEach((e) => {
        e.classList.remove("slider--exit--right", "slider--exit--left");
        e.classList.add(
          direction === "right" ? "slider--enter--right" : "slider--enter--left"
        );
      });
  }, 500);
}

// Flèche droite
opinionSliderRightArrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    showOpinion(opinionSliderIndex + 1, "right");
  });
});

// Flèche gauche
opinionSliderLeftArrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    showOpinion(opinionSliderIndex - 1, "left");
  });
});

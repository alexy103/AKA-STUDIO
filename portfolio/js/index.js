const animationBaseDelay = 200;

function updateContent(state, contentArray, menuLinks, index) {
  const isWork = state.name === "work";

  const activeProjects = isWork
    ? document.querySelectorAll(".work .projects:not(.hidden) .project")
    : [];
  const nextActiveProjects = isWork
    ? contentArray[index].querySelectorAll(".project")
    : [];

  activeWorkContent.style.overflow = "hidden";

  if (isWork) {
    // Applique un effet d’escalier en sortie, du dernier au premier
    animateExit(activeProjects, () => {
      // Changement de contenu après que l’ancienne animation soit finie
      loadContent(state, contentArray, menuLinks, index, nextActiveProjects);
      // Applique un effet d’escalier en entrée, du premier au dernier
      animateEnter(nextActiveProjects);
    });

    // Nettoyage des classes après toutes les animations
    const totalDelay =
      (activeProjects.length - 1) * animationBaseDelay + 1200 + 1200;
    setTimeout(() => {
      resetAnimations(activeProjects, nextActiveProjects);
      activeWorkContent.style.overflow = "scroll hidden";
    }, totalDelay);
  } else {
    loadContent(state, contentArray, menuLinks, index);
  }
}

function animateExit(elements, callback) {
  // Applique un effet d’escalier en sortie, du dernier au premier
  elements.forEach((el, i, arr) => {
    const delay = (arr.length - 1 - i) * animationBaseDelay;
    setTimeout(() => el.classList.add("anim"), delay);
  });

  const maxDelay = (elements.length - 1) * animationBaseDelay + 1200; // temps entre le départ et l'arrivée de la prochaine animation
  setTimeout(callback, maxDelay);
}

function animateEnter(elements) {
  // Prépare les éléments pour l’animation d’entrée
  elements.forEach((el) => el.classList.add("hidden-temp"));

  // Applique un effet d’escalier en entrée, du premier au dernier
  elements.forEach((el, i) => {
    const delay = i * animationBaseDelay;
    setTimeout(() => {
      el.classList.remove("hidden-temp");
      el.classList.add("anim__reverse");
    }, delay);
  });
}

// Nettoyage des classes après toutes les animations
function resetAnimations(outElements, inElements) {
  outElements.forEach((el) => el.classList.remove("anim"));
  inElements.forEach((el) => el.classList.remove("anim__reverse"));
}

function loadContent(
  state,
  contentArray,
  menuLinks,
  index,
  nextActiveProjects = []
) {
  state.activeContent.classList.add("hidden");
  contentArray[index].classList.remove("hidden");

  state.activeContent = contentArray[index];

  state.activeMenuLink.classList.remove("submenu__active");
  menuLinks[index].classList.add("submenu__active");
  state.activeMenuLink = menuLinks[index];

  if (state.titles) {
    state.activeTitle.classList.add("hidden");
    workTitles[index].classList.remove("hidden");
    state.activeTitle = workTitles[index];
  }

  const jobsMenu = document.querySelector(".about .menus .jobs");
  const menus = document.querySelector(".menus");

  if ((state.name === "about" && index === 2) || state.name === "friends") {
    jobsMenu.classList.remove("hidden");
    menus.classList.remove("menus--flex");
    menus.classList.add("menus--grid");
    activeFriendListFriends = document.querySelectorAll(
      ".about .friendlist:not(.hidden) .friend"
    );
  } else {
    jobsMenu.classList.add("hidden");
    menus.classList.remove("menus--grid");
    menus.classList.add("menus--flex");
  }
}

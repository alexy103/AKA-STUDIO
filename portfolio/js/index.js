let animationBaseDelay = 200;

function updateContent(state, contentArray, menuLinks, index) {
  let activeProjects = document.querySelectorAll(
    ".work .projects:not(.hidden) .project"
  );
  let nextActiveProjects = contentArray[index].querySelectorAll(".project");

  activeWorkContent.style.overflow = "hidden";

  // Applique un effet d’escalier en sortie, du dernier au premier
  activeProjects.forEach((e, i, array) => {
    const delay = (array.length - 1 - i) * animationBaseDelay;
    setTimeout(() => {
      e.classList.add("anim");
    }, delay);
  });

  const maxDelay = (activeProjects.length - 1) * animationBaseDelay;
  const transitionDelay = maxDelay + 1200; // temps entre le départ et l'arrivée de la prochaine animation

  // Changement de contenu après que l’ancienne animation soit finie
  setTimeout(() => {
    state.activeContent.classList.add("hidden");
    contentArray[index].classList.remove("hidden");

    nextActiveProjects.forEach((e) => {
      e.classList.add("hidden-temp");
    });

    nextActiveProjects.forEach((e, i) => {
      const delay = i * animationBaseDelay;
      setTimeout(() => {
        e.classList.remove("hidden-temp");
        e.classList.add("anim__reverse");
      }, delay);
    });

    state.activeContent = contentArray[index];

    state.activeMenuLink.classList.remove("submenu__active");
    menuLinks[index].classList.add("submenu__active");
    state.activeMenuLink = menuLinks[index];

    if (state.titles) {
      state.activeTitle.classList.add("hidden");
      workTitles[index].classList.remove("hidden");
      state.activeTitle = workTitles[index];
    }

    if (state.name == "friends") {
      activeFriendListFriends = document.querySelectorAll(
        ".about .friendlist:not(.hidden) .friend"
      );
    }
  }, transitionDelay);

  // Nettoyage des classes après toutes les animations
  const cleanupDelay = transitionDelay + 1200;
  setTimeout(() => {
    activeProjects.forEach((e) => {
      e.classList.remove("anim");
    });
    nextActiveProjects.forEach((e) => {
      e.classList.remove("anim__reverse");
    });
    activeWorkContent.style.overflow = "scroll hidden";
  }, cleanupDelay);
}

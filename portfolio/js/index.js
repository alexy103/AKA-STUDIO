function updateContent(state, contentArray, menuLinks, index) {
  if (state.name === "work") {
    // Délai de l'animation d'exit du slider de WORK
    const delay = 1000;

    // Gestion du slider de la page work
    const activeProjects = document.querySelectorAll(
      ".work .projects:not(.hidden) .project"
    );
    const nextActiveProjects = contentArray[index].querySelectorAll(".project");

    // On lance l'animation d'exit
    activeProjects.forEach((e) => e.classList.add("anim"));

    // On attend 1s pour que l'exit se fasse puis on ajoute la classe d'enter
    setTimeout(() => {
      loadContent(state, contentArray, menuLinks, index);
      nextActiveProjects.forEach((e) => e.classList.add("anim__reverse"));
    }, delay);

    // On attend 2s pour que l'exit puis l'enter se fassent puis on nettoie les classes
    setTimeout(() => {
      activeProjects.forEach((el) => el.classList.remove("anim"));
      nextActiveProjects.forEach((el) => el.classList.remove("anim__reverse"));
    }, delay * 2);
  } else if (state.name === "contact") {
    // Gestion des animations de la page contact
    const contactSlide = document.querySelector(".contact");
    const activeContent = document.querySelector(
      ".contact .content:not(.hidden)"
    );
    const activeContentTitle = activeContent.children[0];
    const activeContentText = activeContent.children[1];

    contactSlide.classList.remove("contact--enter");

    // On fait l'exit
    activeContentTitle.classList.remove("content__title--enter");
    activeContentText?.classList.remove("content__text--enter");
    activeContentTitle.classList.add("content__title--exit");
    activeContentText?.classList.add("content__text--exit");

    const nextActiveContent = contentArray[index];

    // On attend que l'exit se fasse puis on fait l'enter
    setTimeout(() => {
      loadContent(state, contentArray, menuLinks, index);
      nextActiveContent.children[0].classList.remove("content__title--exit");
      nextActiveContent.children[0].classList.add("content__title--enter");
      nextActiveContent.children[1]?.classList.remove("content__text--exit");
      nextActiveContent.children[1]?.classList.add("content__text--enter");
    }, 500);
  } else {
    loadContent(state, contentArray, menuLinks, index);
  }
}

function loadContent(state, contentArray, menuLinks, index) {
  // Actualisation du contenu
  state.activeContent.classList.add("hidden");
  contentArray[index].classList.remove("hidden");
  state.activeContent = contentArray[index];

  // Actualisation du lien du sous-menu
  state.activeMenuLink.classList.remove("submenu__active");
  menuLinks[index].classList.add("submenu__active");
  state.activeMenuLink = menuLinks[index];

  // Changement du nom de la catégorie de la page work
  if (state.titles) {
    state.activeTitle.classList.add("hidden");
    workTitles[index].classList.remove("hidden");
    state.activeTitle = workTitles[index];
  }

  // TODO: revoir une fois que la page about est faite
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

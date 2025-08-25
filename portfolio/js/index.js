// TODO: passer le HTML au W3C
// TODO: ajouter le slider sur home
// TODO: faire les animations de friends
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
  } else if (state.name === "about") {
    // Gestion des animations de la page about
    const aboutSlide = document.querySelector(".about");
    const aboutMenu = document.querySelector(".about .menus .aboutMenu");
    const activeContent = document.querySelector(
      ".about .content:not(.hidden)"
    );
    const activeContentImg = activeContent.children[0];
    const activeContentTitle = activeContent.children[1];
    const activeContentText = activeContent.children[2];

    aboutSlide.classList.remove("about--enter");

    // On fait l'exit
    activeContentImg.classList.remove("content__img--enter");
    activeContentTitle?.classList.remove("content__title--enter");
    activeContentText?.classList.remove("content__text--enter");
    activeContentImg.classList.add("content__img--exit");
    activeContentTitle?.classList.add("content__title--exit");
    activeContentText?.classList.add("content__text--exit");

    const nextActiveContent = contentArray[index];

    if (index === 2 || state.name === "friends") {
      aboutMenu.classList.remove("aboutMenu--up");
      aboutMenu.classList.add("aboutMenu--down");
    } else {
      aboutMenu.classList.remove("aboutMenu--down");
    }

    // On attend que l'exit se fasse puis on fait l'enter
    loadContent(state, contentArray, menuLinks, index, 1000); // modifier ici pour le submenu d'ABOUT
    setTimeout(() => {
      nextActiveContent.children[0].classList.remove("content__img--exit");
      nextActiveContent.children[0].classList.add("content__img--enter");
      nextActiveContent.children[1]?.classList.remove("content__title--exit");
      nextActiveContent.children[1]?.classList.add("content__title--enter");
      nextActiveContent.children[2]?.classList.remove("content__text--exit");
      nextActiveContent.children[2]?.classList.add("content__text--enter");
    }, 700);
  } else {
    loadContent(state, contentArray, menuLinks, index);
  }
}

let inFriends = false;

function loadContent(state, contentArray, menuLinks, index, delay) {
  if (delay) {
    state.activeMenuLink.classList.remove("submenu__active");
    menuLinks[index].classList.add("submenu__active");
    state.activeMenuLink = menuLinks[index];

    // Décaler la suite de 500ms
    setTimeout(() => {
      executeContentUpdate(state, contentArray, menuLinks, index);
    }, delay);
  } else {
    executeContentUpdate(state, contentArray, menuLinks, index);
  }
}

function executeContentUpdate(state, contentArray, menuLinks, index) {
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

  const jobsMenu = document.querySelector(".about .menus .jobs");
  const aboutMenu = document.querySelector(".about .menus .aboutMenu");
  const menus = document.querySelector(".menus");

  // Gestion du submenu avec slider
  if ((state.name === "about" && index === 2) || state.name === "friends") {
    aboutMenu.classList.remove("aboutMenu--down");
    jobsMenu.classList.remove("hidden");
    jobsMenu.classList.add("jobsMenu--enter");
    menus.classList.remove("menus--single");
    menus.classList.add("menus--double");
    activeFriendListFriends = document.querySelectorAll(
      ".about .friendlist:not(.hidden) .friend"
    );
    inFriends = true;

    setTimeout(() => {
      jobsMenu.classList.remove("jobsMenu--enter");
    }, 1000);
  } else if (state.activeMenuLink !== menuLinks[2] && inFriends) {
    jobsMenu.classList.remove("jobsMenu--exit");
    aboutMenu.classList.add("aboutMenu--up");
    jobsMenu.classList.add("hidden");

    setTimeout(() => {
      aboutMenu.classList.remove("aboutMenu--up");
      inFriends = false;
      menus.classList.remove("menus--double");
      menus.classList.add("menus--single");
    }, 1000);
  }
}

const delay = 1000;

function updateContent(state, contentArray, menuLinks, index) {
  const isWork = state.name === "work";
  const isContact = state.name === "contact";

  // Gestion du slider de work
  if (isWork) {
    const workSlide = document.querySelector(".work");
    const activeProjects = document.querySelectorAll(
      ".work .projects:not(.hidden) .project"
    );
    const nextActiveProjects = contentArray[index].querySelectorAll(".project");

    activeWorkContent.style.overflow = "hidden";

    workSlide.classList.add("work--inside");

    activeProjects.forEach((e) => e.classList.add("anim"));

    // On attend 1s pour que l'exit se fasse
    setTimeout(() => {
      loadContent(state, contentArray, menuLinks, index);
      nextActiveProjects.forEach((e) => e.classList.add("anim__reverse"));
    }, delay);

    // On attend 1s pour que l'enter se fasse
    setTimeout(() => {
      activeWorkContent.style.overflow = "scroll hidden";
      activeProjects.forEach((el) => el.classList.remove("anim"));
      nextActiveProjects.forEach((el) => el.classList.remove("anim__reverse"));
    }, delay);
  } else if (isContact) {
    const contactSlide = document.querySelector(".contact");
    const activeContent = document.querySelector(
      ".contact .content:not(.hidden)"
    );
    const activeContentTitle = activeContent.children[0];
    const activeContentText = activeContent.children[1];

    const nextActiveContent = contentArray[index];

    contactSlide.classList.remove("contact--enter");
    contactSlide.classList.add("contact--inside");

    activeContentTitle.classList.remove("content__title--enter");
    activeContentText?.classList.remove("content__text--enter");
    activeContentTitle.classList.add("content__title--exit");
    activeContentText?.classList.add("content__text--exit");

    loadContent(state, contentArray, menuLinks, index);

    nextActiveContent.children[0].classList.remove("content__title--exit");
    nextActiveContent.children[1]?.classList.remove("content__text--exit");
    nextActiveContent.children[0].classList.add("content__title--enter");
    nextActiveContent.children[1]?.classList.add("content__text--enter");
  } else {
    loadContent(state, contentArray, menuLinks, index);
  }
}

function loadContent(state, contentArray, menuLinks, index) {
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

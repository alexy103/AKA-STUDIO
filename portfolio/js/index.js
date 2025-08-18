const delay = 1000;

function updateContent(state, contentArray, menuLinks, index) {
  const isWork = state.name === "work";

  const activeProjects = isWork
    ? document.querySelectorAll(".work .projects:not(.hidden) .project")
    : [];
  const nextActiveProjects = isWork
    ? contentArray[index].querySelectorAll(".project")
    : [];

  if (isWork) {
    activeWorkContent.style.overflow = "hidden";

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
  } else {
    loadContent(state, contentArray, menuLinks, index);
  }
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

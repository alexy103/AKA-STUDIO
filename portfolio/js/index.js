// TODO: passer le HTML au W3C
function cleanUpClasses(cls) {
  cls.classList.remove("content__img--enter--left");
  cls.classList.remove("content__img--enter--right");
  cls.classList.remove("content__img--exit--left");
  cls.classList.remove("content__img--exit--right");
}

function handleWorkContent(state, contentArray, menuLinks, index) {
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
}

function handleContactContent(state, contentArray, menuLinks, index) {
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
}

function handleAboutContent(state, contentArray, menuLinks, index) {
  // Gestion des animations de la page about
  const aboutSlide = document.querySelector(".about");
  const aboutMenu = document.querySelector(".about .menus .aboutMenu");
  const activeContent = document.querySelector(".about .content:not(.hidden)");
  const activeContentImg = activeContent.children[0];
  const activeContentTitle = activeContent.children[1];
  const activeContentText = activeContent.children[2];
  const nextActiveContent = contentArray[index];
  const contentFriends = document.querySelector(".content--friends");

  aboutSlide.classList.remove("about--enter");

  if (index === 0) {
    contentFriends.classList.remove("content--friends--enter");
    contentFriends.classList.add("content--friends--exit");

    // Si on vient de l'index 1
    if (activeContent.classList.contains("content--second")) {
      // On nettoie les classes
      cleanUpClasses(activeContentImg);
      activeContentText?.classList.remove("content__text--enter");

      // On fait l'exit
      activeContentImg.classList.add("content__img--exit--right");
      activeContentText?.classList.add("content__text--exit");
    }

    setTimeout(() => {
      nextActiveContent.children[0].classList.remove(
        "content__img--exit--left"
      );

      nextActiveContent.children[0].classList.remove(
        "content__img--exit--right"
      );
      nextActiveContent.children[0].classList.add("content__img--enter--left");
      nextActiveContent.children[2]?.classList.remove("content__text--exit");
      nextActiveContent.children[2]?.classList.add("content__text--enter");
    }, 700);
    aboutMenu.classList.remove("aboutMenu--down");
  } else if (index === 1) {
    contentFriends.classList.remove("content--friends--enter");
    contentFriends.classList.add("content--friends--exit");

    // Si on vient de l'index 0
    if (!activeContent.classList.contains("content--friends")) {
      // On nettoie les classes
      cleanUpClasses(activeContentImg);
      activeContentText?.classList.remove("content__text--enter");

      // On fait l'exit
      activeContentImg.classList.add("content__img--exit--left");
      activeContentText?.classList.add("content__text--exit");
    }
    setTimeout(() => {
      nextActiveContent.children[0].classList.remove(
        "content__img--exit--left"
      );
      nextActiveContent.children[0].classList.remove(
        "content__img--exit--right"
      );
      if (!activeContent.classList.contains("content--friends")) {
        nextActiveContent.children[0].classList.add(
          "content__img--enter--right"
        );
      } else {
        nextActiveContent.children[0].classList.add(
          "content__img--enter--left"
        );
      }
      nextActiveContent.children[2]?.classList.remove("content__text--exit");
      nextActiveContent.children[2]?.classList.add("content__text--enter");
    }, 700);
    aboutMenu.classList.remove("aboutMenu--down");
  } else if (index === 2 || state.name === "friends") {
    // Si on va ou si on est dans friends

    // On met le submenu en bas
    aboutMenu.classList.remove("aboutMenu--up");
    aboutMenu.classList.add("aboutMenu--down");

    // On nettoie les classes avant l'animation
    cleanUpClasses(activeContentImg);
    activeContentText?.classList.remove("content__text--enter");
    nextActiveContent.classList.remove("content--friends--exit");

    // On lance l'animation d'exit
    activeContentImg.classList.add("content__img--exit--left");
    activeContentText?.classList.add("content__text--exit");
    nextActiveContent.classList.add("content--friends--enter");

    setTimeout(() => {
      nextActiveContent.children[0].classList.remove(
        "content__img--exit--left"
      );
      nextActiveContent.children[0].classList.remove(
        "content__img--exit--right"
      );
      nextActiveContent.children[2]?.classList.remove("content__text--exit");
    }, 700);
  }

  // On attend que l'exit se fasse puis on fait l'enter
  loadContent(state, contentArray, menuLinks, index, 1000); // modifier ici pour le submenu d'ABOUT
}

function handleFriendsContent(state, contentArray, menuLinks, index) {
  const delay = 500;
  handleFriendsMenuChange(state, contentArray, menuLinks, index, delay);
  setTimeout(() => {
    loadContent(state, contentArray, menuLinks, index);
  }, delay);
}

function handleFriendsMenuChange(state, contentArray, menuLinks, index, delay) {
  const allActiveContent = document.querySelectorAll(
    ".friendlist:not(.hidden) .friend img, .name, .text"
  );

  const allFriendlistFriends = document.querySelectorAll(
    ".friendlist:not(.hidden) .friend :is(img, .name, .text)"
  );

  const nextActiveContent =
    contentArray[index].querySelectorAll("img, .name, .text");

  const nextActiveContentFirstFriend = Array.from(nextActiveContent).slice(
    0,
    3
  );

  // On nettoie les classes
  allFriendlistFriends.forEach((e) => {
    e.classList.remove("friendlist--enter");
    e.classList.remove("friendlist--exit");
  });

  // Si on n'a qu'un seul ami, on rend les flèches non cliquables
  // On compte le nombre d'img dans le prochain friendlist
  // S'il n'y en a qu'un, on cache la flèche de droite
  const imgCount = Array.from(nextActiveContent).filter(
    (el) => el.tagName.toLowerCase() === "img"
  ).length;

  if (imgCount <= 1) {
    sliderArrows.forEach((arrow) => {
      arrow.classList.add("unclickable");
    });
  } else {
    // Si on a plusieurs amis, on rend la flèche de droite cliquable
    sliderRightArrows.forEach((arrow) => {
      arrow.classList.remove("unclickable");
    });
  }

  // On fait l'exit
  setTimeout(() => {
    allFriendlistFriends.forEach((e) => {
      e.classList.add("friendlist--exit");
    });
  }, 1);

  // On fait fait l'enter du prochain
  setTimeout(() => {
    allFriendlistFriends.forEach((e) => {
      e.classList.remove("friendlist--exit");
      e.classList.remove("friendlist--enter");
    });

    nextActiveContentFirstFriend.forEach((e) => {
      e.classList.add("friendlist--enter");
    });
  }, delay);
}

function updateContent(state, contentArray, menuLinks, index) {
  switch (state.name) {
    case "work":
      handleWorkContent(state, contentArray, menuLinks, index);
      break;

    case "contact":
      handleContactContent(state, contentArray, menuLinks, index);
      break;

    case "about":
      handleAboutContent(state, contentArray, menuLinks, index);
      break;

    case "friends":
      handleFriendsContent(state, contentArray, menuLinks, index);
      break;

    default:
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
  // Si on va vers friends ou qu'on est dedans
  if ((state.name === "about" && index === 2) || state.name === "friends") {
    // Si on va vers friends mais qu'on est pas dedans
    if (state.name === "about" && index === 2) {
      jobsMenu.classList.add("jobsMenu--enter");
    }
    aboutMenu.classList.remove("aboutMenu--down");
    jobsMenu.classList.remove("hidden");
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
    // Si on quitte friends
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

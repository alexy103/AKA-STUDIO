const aboutMenuLinks = document.querySelectorAll(".aboutMenu__link");
const aboutContent = document.querySelectorAll(".about .content");

const aboutState = {
  name: "about",
  activeContent: aboutContent[0],
  activeMenuLink: aboutMenuLinks[0],
};

// Gestion du submenu
aboutMenuLinks.forEach((link, i) => {
  link.addEventListener("click", () => {
    let active = document.querySelector(".about .aboutMenu .submenu__active");
    active.classList.remove("underline--enter");
    link.classList.add("underline--enter");

    // Si on vient de friends
    if (link !== aboutMenuLinks[2] && inFriends) {
      document
        .querySelector(".about .menus .jobs")
        .classList.add("jobsMenu--exit");
    }

    // animations
    setTimeout(() => {
      if (active) active.classList.add("underline--exit");
      updateContent(aboutState, aboutContent, aboutMenuLinks, i);
    }, 1);

    setTimeout(() => {
      aboutMenuLinks.forEach((link) => {
        link.classList.remove("underline--exit");
      });
    }, 1000); // modifier ici pour le submenu d'ABOUT
  });
});

const jobsMenu = document.querySelectorAll(".about .jobs__link");
const friendLists = document.querySelectorAll(".about .friendlist");
let activeFriendList = document.querySelectorAll(
  ".about .friendlist:not(.hidden)"
);

const friendsState = {
  name: "friends",
  activeContent: friendLists[0],
  activeMenuLink: jobsMenu[0],
};

const sliderLeftArrows = document.querySelectorAll(".slider .fa-chevron-left");
const sliderRightArrows = document.querySelectorAll(
  ".slider .fa-chevron-right"
);
const sliderArrows = document.querySelectorAll(
  ".slider .fa-chevron-left, .slider .fa-chevron-right"
);

activeFriendListFriends = document.querySelectorAll(
  ".about .friendlist:not(.hidden) .friend"
);

// Gestion du submenu avec slider
jobsMenu.forEach((link, i) => {
  link.addEventListener("click", () => {
    activeFriendListFriends.forEach((friend) => {
      friend.querySelectorAll("img, .name, .text").forEach((e) => {
        e.classList.remove("slider--exit--right");
        e.classList.remove("slider--exit--left");
        e.classList.remove("slider--enter--right");
        e.classList.remove("slider--enter--left");
      });
    });

    updateContent(friendsState, friendLists, jobsMenu, i);

    setTimeout(() => {
      activeFriendListFriends.forEach((friend) => {
        friend.classList.add("hidden");
      });
      activeFriendListFriends[0].classList.remove("hidden");

      // Actualiser le premier élément du nouveau friends pour préparer l'exit du slider
      activeFriend = activeFriendListFriends[0];
      currentIndex = 0;
    }, 500);
    // On rend la flèche gauche non cliquable au début
    sliderLeftArrows.forEach((arrow) => {
      arrow.classList.add("unclickable");
    });
  });
});

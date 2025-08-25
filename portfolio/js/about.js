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

// Gestion du submenu avec slider
jobsMenu.forEach((link, i) => {
  link.addEventListener("click", () => {
    updateContent(friendsState, friendLists, jobsMenu, i);
    activeFriendListFriends.forEach((friend) => {
      friend.classList.add("hidden");
    });
    activeFriendListFriends[0].classList.remove("hidden");
    currentIndex = 0;

    // On rend la flèche gauche non cliquable au début
    sliderLeftArrows.forEach((arrow) => {
      arrow.classList.add("unclickable");
    });

    // Si on n'a qu'un seul ami, on rend les flèches non cliquables
    if (activeFriendListFriends.length <= 1) {
      sliderArrows.forEach((arrow) => {
        arrow.classList.add("unclickable");
      });
    } else {
      // Si on a plusieurs amis, on rend les flèches cliquables
      sliderRightArrows.forEach((arrow) => {
        arrow.classList.remove("unclickable");
      });
    }
  });
});

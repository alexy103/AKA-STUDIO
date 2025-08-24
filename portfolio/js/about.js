// TODO: revoir ce js une fois que about sera fait

const aboutMenuLinks = document.querySelectorAll(".aboutMenu__link");
const aboutContent = document.querySelectorAll(".about .content");

const aboutState = {
  name: "about",
  activeContent: aboutContent[0],
  activeMenuLink: aboutMenuLinks[0],
};

aboutMenuLinks.forEach((link, i) => {
  link.addEventListener("click", () => {
    updateContent(aboutState, aboutContent, aboutMenuLinks, i);
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

    if (activeFriendListFriends.length <= 1) {
      // Si on n'a qu'un seul ami, on rend les flèches non cliquables
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

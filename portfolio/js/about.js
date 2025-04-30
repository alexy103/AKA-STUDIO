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

jobsMenu.forEach((link, i) => {
  link.addEventListener("click", () => {
    updateContent(friendsState, friendLists, jobsMenu, i);
    activeFriendListFriends.forEach((friend) => {
      friend.classList.add("hidden");
    });
    activeFriendListFriends[0].classList.remove("hidden");
    currentIndex = 0;
  });
});

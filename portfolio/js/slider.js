const sliderRightArrows = document.querySelectorAll(".slider .right");
const sliderLeftArrows = document.querySelectorAll(".slider .left");

let activeFriendListFriends = document.querySelectorAll(
  ".about .friendlist:not(.hidden) .friend"
);

let activeFriend = document.querySelector(".about .friend:not(.hidden)");
let currentIndex = 0;

sliderRightArrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    activeFriendListFriends.forEach((friend) => {
      friend.classList.add("hidden");
    });

    currentIndex = (currentIndex + 1) % activeFriendListFriends.length;

    activeFriendListFriends[currentIndex].classList.remove("hidden");
    activeFriend = activeFriendListFriends[currentIndex];
  });
});

sliderLeftArrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    activeFriendListFriends.forEach((friend) => {
      friend.classList.add("hidden");
    });

    currentIndex =
      (currentIndex - 1 + activeFriendListFriends.length) %
      activeFriendListFriends.length;

    activeFriendListFriends[currentIndex].classList.remove("hidden");
    activeFriend = activeFriendListFriends[currentIndex];
  });
});

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

    currentIndex = currentIndex + 1;

    activeFriendListFriends[currentIndex].classList.remove("hidden");
    activeFriend = activeFriendListFriends[currentIndex];

    // On rend la flèche gauche cliquable dès qu'on avance
    sliderLeftArrows.forEach((arrow) => {
      arrow.classList.remove("unclickable");
    });

    if (currentIndex === activeFriendListFriends.length - 1) {
      // Si c'est le dernier élément, on rend la flèche droite non cliquable
      sliderRightArrows.forEach((arrow) => {
        arrow.classList.add("unclickable");
      });
    }
  });
});

sliderLeftArrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    activeFriendListFriends.forEach((friend) => {
      friend.classList.add("hidden");
    });

    currentIndex =
      currentIndex -
      1 +
      (activeFriendListFriends.length % activeFriendListFriends.length);

    activeFriendListFriends[currentIndex].classList.remove("hidden");
    activeFriend = activeFriendListFriends[currentIndex];

    // Gestion des flèches
    sliderRightArrows.forEach((arrow) => {
      arrow.classList.remove("unclickable");
    });

    if (currentIndex === 0) {
      sliderLeftArrows.forEach((arrow) => {
        arrow.classList.add("unclickable");
      });
    }
  });
});

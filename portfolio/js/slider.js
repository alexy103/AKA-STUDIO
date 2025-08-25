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

    // Si c'est le dernier élément, on rend la flèche droite non cliquable
    if (currentIndex === activeFriendListFriends.length - 1) {
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

    // Si c'est le premier élément, on rend la flèche gauche non cliquable
    if (currentIndex === 0) {
      sliderLeftArrows.forEach((arrow) => {
        arrow.classList.add("unclickable");
      });
    }
  });
});

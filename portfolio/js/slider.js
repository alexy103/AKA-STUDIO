const allFriends = document.querySelectorAll(
  ".friendlist .friend :is(img, .name, .text)"
);
let activeFriendListFriends = document.querySelectorAll(
  ".about .friendlist:not(.hidden) .friend"
);

let activeFriend = document.querySelector(".about .friend:not(.hidden)");
let currentIndex = 0;

sliderRightArrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    allFriends.forEach((e) => {
      e.classList.remove("friendlist--exit");
      e.classList.remove("friendlist--enter");
    });

    // Ancien friend
    activeFriend.querySelectorAll("img, .name, .text").forEach((e) => {
      e.classList.remove("slider--exit--right");
      e.classList.remove("slider--exit--left");
      e.classList.remove("slider--enter--right");
      e.classList.remove("slider--enter--left");

      e.classList.add("slider--exit--left");
    });

    setTimeout(() => {
      activeFriendListFriends.forEach((friend) => {
        friend.classList.add("hidden");
      });

      currentIndex = currentIndex + 1;

      activeFriendListFriends[currentIndex].classList.remove("hidden");
      activeFriend = activeFriendListFriends[currentIndex];

      // Nouveau friend
      activeFriend.querySelectorAll("img, .name, .text").forEach((e) => {
        e.classList.remove("slider--exit--left");
        e.classList.add("slider--enter--right");
      });

      // Si c'est le dernier élément, on rend la flèche droite non cliquable
      if (currentIndex === activeFriendListFriends.length - 1) {
        sliderRightArrows.forEach((arrow) => {
          setTimeout(() => {
            arrow.classList.add("unclickable");
          }, 1);
        });
      }
    }, 500);

    // On rend la flèche gauche cliquable dès qu'on avance
    setTimeout(() => {
      sliderLeftArrows.forEach((arrow) => {
        arrow.classList.remove("unclickable");
      });
    }, 1);
  });
});

sliderLeftArrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    // Ancien friend
    activeFriend.querySelectorAll("img, .name, .text").forEach((e) => {
      e.classList.remove("slider--exit--right");
      e.classList.remove("slider--exit--left");
      e.classList.remove("slider--enter--right");
      e.classList.remove("slider--enter--left");
      e.classList.add("slider--exit--right");
    });

    setTimeout(() => {
      activeFriendListFriends.forEach((friend) => {
        friend.classList.add("hidden");
      });

      currentIndex =
        currentIndex -
        1 +
        (activeFriendListFriends.length % activeFriendListFriends.length);

      activeFriendListFriends[currentIndex].classList.remove("hidden");
      activeFriend = activeFriendListFriends[currentIndex];

      // Nouveau friend
      activeFriend.querySelectorAll("img, .name, .text").forEach((e) => {
        e.classList.remove("slider--exit--right");
        e.classList.add("slider--enter--left");
      });

      // Si c'est le premier élément, on rend la flèche gauche non cliquable
      if (currentIndex === 0) {
        sliderLeftArrows.forEach((arrow) => {
          arrow.classList.add("unclickable");
        });
      }
    }, 500);

    // Gestion des flèches
    sliderRightArrows.forEach((arrow) => {
      arrow.classList.remove("unclickable");
    });
  });
});

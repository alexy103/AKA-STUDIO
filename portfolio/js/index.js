function openMenu() {
  document.querySelector(".menu").style.left = 0;
}

function closeMenu() {
  document.querySelector(".menu").style.left = "100%";
}

function updateSlide(slideName) {
  //update menu link
  activeLink.classList.remove("activeLink");
  activeLink = document.querySelector(
    ".menu__" + slideName.toLowerCase().trim()
  );
  activeLink.classList.add("activeLink");

  //update view
  activeSlide.classList.add("hidden");
  newSlide = document.querySelector("." + slideName);
  newSlide.classList.remove("hidden");
  activeSlide = newSlide;
}

document.querySelector(".navigation__burger").addEventListener("click", () => {
  openMenu();
});

document.querySelector(".menu__close").addEventListener("click", () => {
  closeMenu();
});

let activeLink = document.querySelector(".activeLink");
let activeSlide = document.querySelector(".home");

const menuLinks = document.querySelectorAll(".menu .menu__link");

const mainLogo = document.querySelector(".identity__logo");

const homeAkaRed = document.querySelector(".home .aka__red");
const homeAkaCream = document.querySelector(".home .aka__cream");
const workAkas = document.querySelectorAll(".work .aka");
const aboutAkaRed = document.querySelector(".about .aka__red");
const aboutAkaCream = document.querySelector(".about .aka__cream");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    updateSlide(link.textContent.toLowerCase().trim());
    closeMenu();
  });
});

mainLogo.addEventListener("click", () => {
  updateSlide("about");
});

homeAkaRed.addEventListener("click", () => {
  updateSlide("work");
});

homeAkaCream.addEventListener("click", () => {
  updateSlide("contact");
});

aboutAkaRed.addEventListener("click", () => {
  updateSlide("work");
});
aboutAkaCream.addEventListener("click", () => {
  updateSlide("contact");
});

workAkas.forEach((aka) => {
  aka.addEventListener("click", () => {
    updateSlide("home");
  });
});

const aboutMenuLinks = document.querySelectorAll(".aboutMenu__link");
let activeAboutMenuLink = document.querySelector(".about .submenu__active");

const aboutContent = document.querySelectorAll(".about .content");
let activeAboutContent = document.querySelector(".about .content:not(.hidden)");

aboutMenuLinks.forEach((link, i) => {
  link.addEventListener("click", () => {
    updateAboutContent(i);
  });
});

function updateAboutContent(index) {
  activeAboutContent.classList.add("hidden");
  aboutContent[index].classList.remove("hidden");
  activeAboutContent = aboutContent[index];

  activeAboutMenuLink.classList.remove("submenu__active");
  aboutMenuLinks[index].classList.add("submenu__active");
  activeAboutMenuLink = aboutMenuLinks[index];

  if (index == 2)
    document
      .querySelector(".content--friends .content__title")
      .classList.remove("hidden");
}

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

let activeFriendlist = document.querySelector(
  ".about .friendlist:not(.hidden)"
);

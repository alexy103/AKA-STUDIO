const workMenuLinks = document.querySelectorAll(".workMenu__link");

let activeWorkMenuLink = document.querySelector(".work .submenu__active");

const workContent = document.querySelectorAll(".work .projects");

let activeWorkContent = document.querySelector(".work .projects:not(.hidden)");

const workTitles = document.querySelectorAll(".work .category");
let activeWorkTitle = document.querySelector(".work .category:not(.hidden)");

const workState = {
  name: "work",
  activeContent: workContent[0],
  activeMenuLink: workMenuLinks[0],
  activeTitle: activeWorkTitle,
  titles: workTitles,
};

workMenuLinks.forEach((link, i) => {
  link.addEventListener("click", () => {
    updateContent(workState, workContent, workMenuLinks, i);
  });
});

const black = document.querySelector(".black");
const thumbnails = document.querySelectorAll(".thumbnail");

const title = black.querySelector(".title");
const iframe = black.querySelector("iframe");
const description = black.querySelector(".video__description");
const client = black.querySelectorAll(".info__text")[0];
const fonction = black.querySelectorAll(".info__text")[1];
const date = black.querySelectorAll(".info__text")[2];
const closeBlack = black.querySelector(".black__close");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    title.textContent = thumbnail.dataset.title;
    iframe.src = thumbnail.dataset.src;
    description.textContent = thumbnail.dataset.description;
    client.textContent = thumbnail.dataset.client;
    fonction.textContent = thumbnail.dataset.fonction;
    date.textContent = thumbnail.dataset.date;

    black.classList.remove("hidden");
  });
});

closeBlack.addEventListener("click", () => {
  black.classList.add("hidden");
  iframe.src = "";
});

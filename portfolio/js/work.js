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
    let active = document.querySelector(".work .submenu__active");

    active.classList.remove("underline--enter");

    // Attendre que la classe s'enlève pour commencer l'animation
    setTimeout(() => {
      active.classList.add("underline--exit");
      link.classList.add("underline--enter");
    }, 1);

    updateContent(workState, workContent, workMenuLinks, i);

    setTimeout(() => {
      workMenuLinks.forEach((link) => {
        link.classList.remove("underline--exit");
      });
    }, 1000);
  });
});

const black = document.querySelector(".black");
const thumbnails = document.querySelectorAll(".thumbnail");

const title = black.querySelector(".title");
const iframe = black.querySelector("iframe");
const description = black.querySelector(".video__description");
const client = black.querySelectorAll(".info__text")[0];
const date = black.querySelectorAll(".info__text")[1];
const fonction = black.querySelectorAll(".info__text")[2];
const closeBlack = black.querySelector(".black__close");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    title.textContent = thumbnail.dataset.title;
    iframe.src = thumbnail.dataset.src;
    iframe.title = thumbnail.dataset.title;
    description.textContent = thumbnail.dataset.description;
    client.textContent = thumbnail.dataset.client;
    // Pour faire un retour à la ligne après chaque virgule
    fonction.innerHTML = thumbnail.dataset.fonction
      .split(",")
      .map((item) => item.trim())
      .join(",<br>");
    date.textContent = thumbnail.dataset.date;
    black.classList.remove("hidden");
  });
});

closeBlack.addEventListener("click", () => {
  black.classList.add("hidden");
  iframe.src = "";
});

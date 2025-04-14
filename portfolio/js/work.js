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

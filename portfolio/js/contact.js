const contactMenuLinks = document.querySelectorAll(".contactMenu__link");

let activeContactMenuLink = document.querySelector(".contact .submenu__active");

const contactContent = document.querySelectorAll(".contact .content");

let activeContactContent = document.querySelector(
  ".contact .content:not(.hidden)"
);

// const contactTitles = document.querySelectorAll(".contact .category");
// let activeContactTitle = document.querySelector(
//   ".contact .category:not(.hidden)"
// );

const contactState = {
  name: "contact",
  activeContent: contactContent[0],
  activeMenuLink: contactMenuLinks[0],
  //   activeTitle: activeContactTitle,
  //   titles: contactTitles,
};

contactMenuLinks.forEach((link, i) => {
  link.addEventListener("click", () => {
    updateContent(contactState, contactContent, contactMenuLinks, i);
  });
});

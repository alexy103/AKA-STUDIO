function updateContent(state, contentArray, menuLinks, index) {
  state.activeContent.classList.add("hidden");
  contentArray[index].classList.remove("hidden");
  state.activeContent = contentArray[index];

  state.activeMenuLink.classList.remove("submenu__active");
  menuLinks[index].classList.add("submenu__active");
  state.activeMenuLink = menuLinks[index];

  if (state.titles) {
    state.activeTitle.classList.add("hidden");
    workTitles[index].classList.remove("hidden");
    state.activeTitle = workTitles[index];
  }

  if (state.name == "friends") {
    activeFriendListFriends = document.querySelectorAll(
      ".about .friendlist:not(.hidden) .friend"
    );
  }
}

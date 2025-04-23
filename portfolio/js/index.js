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
    // currentIndex = 0;
    // contentArray.forEach((e) => {
    //   e.classList.add("hidden");
    // });
    // contentArray[0].classList.remove("hidden");
    // friendsState.activeContent = friendLists[0];
    // friendsState.activeMenuLink = jobsMenu[0];
    activeFriendListFriends = document.querySelectorAll(
      ".about .friendlist:not(.hidden) .friend"
    );

    //revoir
  }
}

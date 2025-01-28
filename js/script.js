function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const menuContent = document.getElementById("menuContent");
  const isHidden = menu.classList.contains("hidden");

  if (isHidden) {
    menu.classList.remove("hidden");
    setTimeout(() => {
      menuContent.classList.remove("translate-x-full");
    }, 10);
  } else {
    menuContent.classList.add("translate-x-full");
    menuContent.addEventListener(
      "transitionend",
      () => {
        menu.classList.add("hidden");
      },
      { once: true }
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("content");

  if (!localStorage.getItem("preloaderShown")) {
    setTimeout(() => {
      preloader.style.display = "none";
      content.style.display = "block";
      localStorage.setItem("preloaderShown", "true");
    }, 5000);
  } else {
    preloader.style.display = "none";
    content.style.display = "block";
  }
});

document.querySelectorAll(".person").forEach((person) => {
  const toggleButton = person.querySelector(".toggleButton");
  const hiddenItemsWrapper = person.querySelector(".hidden-items");
  const hiddenItems = hiddenItemsWrapper.querySelectorAll("li");

  toggleButton.addEventListener("click", () => {
    const isHidden = hiddenItemsWrapper.classList.contains("hidden");

    if (isHidden) {
      hiddenItemsWrapper.classList.remove("hidden");
      hiddenItemsWrapper.style.maxHeight = `${hiddenItemsWrapper.scrollHeight}px`;
      toggleButton.innerHTML = `
        <span>View less</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path fill-rule="evenodd" d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clip-rule="evenodd" />
        </svg>
      `;
    } else {
      hiddenItemsWrapper.style.maxHeight = "0";
      hiddenItemsWrapper.addEventListener(
        "transitionend",
        () => hiddenItemsWrapper.classList.add("hidden"),
        { once: true }
      );
      toggleButton.innerHTML = `
        <span>View all</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
        </svg>
      `;
    }
  });
});

(() => {
  const container = document.querySelector(".theme-container");
  const menuButton = document.querySelector(".sidebar-button");
  const mask = document.querySelector(".sidebar-mask");
  const sidebarLinks = document.querySelectorAll(".sidebar a");

  const setMenu = (open) => {
    if (!container || !menuButton) return;
    container.classList.toggle("sidebar-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
  };

  const toggleMenu = () => {
    setMenu(!container?.classList.contains("sidebar-open"));
  };

  menuButton?.addEventListener("click", toggleMenu);
  menuButton?.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleMenu();
    }
  });

  mask?.addEventListener("click", () => setMenu(false));
  sidebarLinks.forEach((link) => link.addEventListener("click", () => setMenu(false)));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 720) setMenu(false);
  });
})();

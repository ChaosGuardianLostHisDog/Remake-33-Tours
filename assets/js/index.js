const menuToggle = document.querySelector("#menu-toggle");

menuToggle.addEventListener("change", () => {
  document
    .querySelector(".site-header")
    .classList.toggle("menu-active", menuToggle.checked);

  if (!menuToggle.checked) {
    document.querySelectorAll(".submenu-checkbox").forEach((submenu) => {
      submenu.checked = false;
    });
  }
});

document.querySelectorAll(".submenu-checkbox").forEach((cb) => {
  cb.addEventListener("change", () => {
    if (cb.checked) {
      document.querySelectorAll(".submenu-checkbox").forEach((other) => {
        if (other !== cb) other.checked = false;
      });
    }
  });
});

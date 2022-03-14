const menuIcon = document.getElementById("menu-icon");
const mobileNav = document.querySelector(".mobile-nav");

menuIcon.addEventListener("click", () => {
  mobileNav.classList.toggle("show-mobile-nav");
});

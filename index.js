const menuIcon = document.getElementById("menu-icon");
const mobileNav = document.querySelector(".mobile-nav");
const input = document.querySelector("input");
const header = document.getElementById("inputHeader");
const newHeader = document.createElement("h1");
let newText;

menuIcon.addEventListener("click", () => {
  mobileNav.classList.toggle("show-mobile-nav");
});

input.addEventListener("change", (e) => {
  newText = e.target.value;
  newHeader.innerHTML = newText;
  header.parentNode.replaceChild(newHeader, header);
});

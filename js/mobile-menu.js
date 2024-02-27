const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");
const menuTraditions = document.getElementById("traditions");
const menuChefs = document.getElementById("chefs");
const menuFormats = document.getElementById("formats");
const menuContact = document.getElementById("contact");

const toggleMenu = () => mobileMenu.classList.toggle("is-open");

menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnClose.addEventListener("click", toggleMenu);
menuTraditions.addEventListener("click", toggleMenu);
menuChefs.addEventListener("click", toggleMenu);
menuFormats.addEventListener("click", toggleMenu);
menuContact.addEventListener("click", toggleMenu);

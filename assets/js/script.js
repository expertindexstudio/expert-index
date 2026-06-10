'use strict';

/**
 * Element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }


/**
 * Navbar variables
 */

const navbar = document.querySelector("[data-navbar]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const navLinks = document.querySelectorAll(".navbar-link");

const navElemArr = [navCloseBtn, navOpenBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i]?.addEventListener("click", function () {
    if (!navbar || !overlay) return;
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    if (!navbar || !overlay) return;
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
}



/**
 * header scroll sticky
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (!header) return;

  if (window.scrollY >= 10) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

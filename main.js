AOS.init();

// animate on scrool
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scrool", window.scrollY > 0);
});

function scrollToSmoothly(pos, time) {
  var currentPos = window.pageYOffset;
  var start = null;
  if (time == null) time = 500;
  (pos = +pos), (time = +time);
  window.requestAnimationFrame(function step(currentTime) {
    start = !start ? currentTime : start;
    var progress = currentTime - start;
    if (currentPos < pos) {
      window.scrollTo(0, ((pos - currentPos) * progress) / time + currentPos);
    } else {
      window.scrollTo(0, currentPos - ((currentPos - pos) * progress) / time);
    }
    if (progress < time) {
      window.requestAnimationFrame(step);
    } else {
      window.scrollTo(0, pos);
    }
  });
}
// end of animate on scrool

// toogle navbar
const navItems = document.querySelector("#nav__items");
const openNavBtn = document.querySelector("#open__nav-btn");
const closeNavBtn = document.querySelector("#close__nav-btn");

openNavBtn.addEventListener("click", () => {
  navItems.style.display = "flex";
  openNavBtn.style.display = "none";
  closeNavBtn.style.display = "inline-block";
});

closeNavBtn.addEventListener("click", () => {
  navItems.style.display = "none";
  openNavBtn.style.display = "inline-block";
  closeNavBtn.style.display = "none";
});
closeNavBtn.addEventListener("click", closeNavBtn);
// end toogle navbar

// swiper testimonials
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  //   responsive breakpoint
  breakpoints: {
    600: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
    },
  },
});

// footer
document.addEventListener("DOMContentLoaded", function () {
  var footerElement = document.querySelector(".copyright");
  var currentYear = new Date().getFullYear();
  footerElement.innerHTML =
    "© " + currentYear + " RENDEV. All rights reserved.";
});

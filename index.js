const swiper = new Swiper(".banner", {
  loop: true,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var imgsrc = document.querySelector(".box-X img");
var listimgSrc = document.querySelectorAll(".arc-src img");
listimgSrc.forEach((element) => {
  element.addEventListener("click", () => {
    let tempsrc;
    tempsrc = element.getAttribute("Src");
    element.src = imgsrc.getAttribute("Src");
    imgsrc.src = tempsrc;
  });
});
/* Show menu*/
var together = document.getElementById("nav-toggle");
var navMenu = document.getElementById("nav-menu");
var closeMenu = document.querySelector(".close-nav");
together.addEventListener("click", () => {
  navMenu.classList.add("show");
});
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

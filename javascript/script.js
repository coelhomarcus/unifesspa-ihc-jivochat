document.addEventListener("DOMContentLoaded", function () {
  window.onload = function () {
    document.querySelector(".menu-opener").addEventListener("click", function () {
      if (document.querySelector("nav").style.display == 'flex') {
        document.querySelector("nav").style.display = 'none';
        document.querySelector(".menu-opener").style.animation = 'back90 1s ease forwards';
      } else {
        document.querySelector("nav").style.display = 'flex';
        document.querySelector(".menu-opener").style.animation = 'rotate90 1s ease forwards';
      }
    });
  };
});
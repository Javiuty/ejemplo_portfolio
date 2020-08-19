let lower = document.querySelector(".projects__container-lower");
let title = document.querySelectorAll(".title-decorative");

lower.addEventListener("mouseenter", function () {
  title[0].style.opacity = "1";
  title[1].style.opacity = "1";
  title[0].style.transition = "all .3s";
  title[1].style.transition = "all .3s";
});

lower.addEventListener("mouseleave", function () {
  title[0].style.opacity = "0";
  title[1].style.opacity = "0";
});

console.log(lower);
console.log(title);

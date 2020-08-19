let container = document.getElementById("container1");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");
let container4 = document.getElementById("container4");
let container5 = document.getElementById("container5");
let container6 = document.getElementById("container6");
let title = document.querySelectorAll(".title-decorative1");
let title2 = document.querySelectorAll(".title-decorative2");
let title3 = document.querySelectorAll(".title-decorative3");
let title4 = document.querySelectorAll(".title-decorative4");
let title5 = document.querySelectorAll(".title-decorative5");
let title6 = document.querySelectorAll(".title-decorative6");

container.addEventListener("mouseenter", function () {
  title[0].style.opacity = "1";
  title[1].style.opacity = "1";
  title[0].style.transition = "all .4s";
  title[1].style.transition = "all .4s";
});

container.addEventListener("mouseleave", function () {
  title[0].style.opacity = "0";
  title[1].style.opacity = "0";
});

container2.addEventListener("mouseenter", function () {
  title2[0].style.opacity = "1";
  title2[1].style.opacity = "1";
  title2[0].style.transition = "all .4s";
  title2[1].style.transition = "all .4s";
});

container2.addEventListener("mouseleave", function () {
  title2[0].style.opacity = "0";
  title2[1].style.opacity = "0";
});

container3.addEventListener("mouseenter", function () {
  title3[0].style.opacity = "1";
  title3[1].style.opacity = "1";
  title3[0].style.transition = "all .4s";
  title3[1].style.transition = "all .4s";
});

container3.addEventListener("mouseleave", function () {
  title3[0].style.opacity = "0";
  title3[1].style.opacity = "0";
});

container4.addEventListener("mouseenter", function () {
  title4[0].style.opacity = "1";
  title4[1].style.opacity = "1";
  title4[0].style.transition = "all .4s";
  title4[1].style.transition = "all .4s";
});

container4.addEventListener("mouseleave", function () {
  title4[0].style.opacity = "0";
  title4[1].style.opacity = "0";
});

container5.addEventListener("mouseenter", function () {
  title5[0].style.opacity = "1";
  title5[1].style.opacity = "1";
  title5[0].style.transition = "all .4s";
  title5[1].style.transition = "all .4s";
});

container5.addEventListener("mouseleave", function () {
  title5[0].style.opacity = "0";
  title5[1].style.opacity = "0";
});

container6.addEventListener("mouseenter", function () {
  title6[0].style.opacity = "1";
  title6[1].style.opacity = "1";
  title6[0].style.transition = "all .4s";
  title6[1].style.transition = "all .4s";
});

container6.addEventListener("mouseleave", function () {
  title6[0].style.opacity = "0";
  title6[1].style.opacity = "0";
});

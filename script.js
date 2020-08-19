let container = document.querySelector(".projects__container");
let title = document.querySelectorAll(".title-decorative");

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

console.log(lower);
console.log(title);

// CAMBIAR QUE AL PASAR EL RATÓN SEA EN CUALQUIER PARTE DEL
// CONTENEDOR, NO SOLO DEL LOWER-CONTAINER

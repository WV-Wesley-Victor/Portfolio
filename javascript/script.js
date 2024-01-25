document.addEventListener("DOMContentLoaded", function () {
  var checkbox = document.getElementById("check");

  checkbox.addEventListener("change", function () {
    var headerMenu = document.querySelector(".header-menu");
    headerMenu.classList.toggle("show-menu", checkbox.checked);
  });
});

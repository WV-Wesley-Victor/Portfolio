document.addEventListener("DOMContentLoaded", function () {
  var checkbox = document.getElementById("check");

  checkbox.addEventListener("change", function () {
    var headerMenu = document.querySelector(".header-menu");
    headerMenu.classList.toggle("show-menu", checkbox.checked);
  });
});

function voltarAoTopo() {
  window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
}

function toggleButtonDisplay() {
  const btnTopo = document.getElementById("btnTopo");
  const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollTop > 20) {
      btnTopo.style.display = "block";
      btnTopo.style.opacity = "1";
  } else {
      btnTopo.style.opacity = "0";
      setTimeout(() => {
          if (btnTopo.style.opacity === "0") {
              btnTopo.style.display = "none";
          }
      }, 300);
  }
}

window.addEventListener("scroll", toggleButtonDisplay);
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

function redirectToGitHub() {
  window.open(
    "https://github.com/WV-Wesley-Victor/Projeto-Click-Producoes",
    "_blank"
  );
}

function redirectToRepository() {
  window.open(
    "https://github.com/WV-Wesley-Victor/The-Complete-2024-Web-Development-Bootcamp",
    "_blank"
  );
}

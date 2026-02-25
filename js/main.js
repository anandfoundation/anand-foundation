document.addEventListener("DOMContentLoaded", function () {

  const menuToggle = document.getElementById("menuToggle");
  const navbar = document.getElementById("navbar");

  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", function () {

      navbar.classList.toggle("active");

      if (navbar.classList.contains("active")) {
        menuToggle.textContent = "बंद करा";
      } else {
        menuToggle.textContent = "मुख्य सूची";
      }

    });
  }

});

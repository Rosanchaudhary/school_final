let groupId = 7;

function toggleDropdown() {
  const dropdownMenu = document.querySelector("#myDropdown");
  dropdownMenu.classList.toggle("show");
}

function selectOption(option) {
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  dropdownToggle.innerText = option;
  const dropdownMenu = document.querySelector("#myDropdown");
  dropdownMenu.classList.remove("show");

  if (!isNaN(option)) {
    groupId = option;
  }
}

window.onclick = function (event) {
  const dropdown = document.querySelector(".dropdown");
  if (
    !event.target.matches(".dropdown-toggle") &&
    !event.target.closest(".dropdown-menu") &&
    dropdown.querySelector(".dropdown-menu.show")
  ) {
    dropdown.querySelector(".dropdown-menu.show").classList.remove("show");
  }
};

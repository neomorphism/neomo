/* Alert function start */
document.addEventListener("DOMContentLoaded", function () {
  console.log("df");
  var alt = document.querySelector("alt-close");

  if (alt !== null) {
    alt.addEventListener("click", function () {
      alt.parentElement.style.display = "none";
    });
  }
});
/* Alert function end */

/* Dropdown function start */
function DropdownToggle() {
  var dropdown = document.getElementsByClassName("dropdown-toggle--button");

  var i;
  for (i = 0; i < dropdown.length; i++) {
    if (
      event.target === dropdown[i] ||
      event.target === dropdown[i].childNodes[1]
    ) {
      dropdown_content[i].style.display = "block";
    }
  }
}
/* Dropdown function end */

/* File function start */
document.addEventListener("DOMContentLoaded", function () {
  var file = document.querySelectorAll(".file .file-hidden");

  file.forEach(function (element) {
    element.addEventListener("change", function () {
      var filename;
      if (window.FileReader) {
        filename = this.files[0].name;
      }
      this.parentNode.getElementsByClassName("file-name")[0].value = filename;
    });
  });
});
/* File function end */

/* Modal function start */
function ModalOpen() {
  var modal = document.getElementById("Modal");
  var btn = document.getElementById("ModalBtn");
  var span = document.getElementsByClassName("modal-close")[0];

  btn.onclick = function () {
    modal.style.display = "block";
  };
  span.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
/* Modal function end */

/* Tab function start */
$(".tab").each(function (i) {
  console.log("df");
  var oTab = $(this);
  var tabIndex = $(this).find(".current").attr("id").match(/\d+$/);

  $(this)
    .find(".tab-content")
    .find("#content-" + tabIndex[0])
    .show();

  $(this)
    .find(".tab-list li a")
    .click(function () {
      var tabIndex = $(this).attr("id").match(/\d+$/);

      oTab.find(".tab-list li a").removeClass("current");
      $(this).addClass("current");

      oTab.find(".tab-content li").hide();
      oTab
        .find(".tab-content")
        .find("#content-" + tabIndex[0])
        .show();

      return false;
    });
});
/* Tab function end */

/* navbarToggle end */
function NavbarToggle() {
  var toggle = document.getElementsByClassName("toggle-button");
  var i;
  console.log(event.target);
  for (i = 0; i < toggle.length; i++) {
    if (toggle[i] === event.target) {
      toggle[i].classList.toggle("active");
      var toggleContent = toggle[i].nextElementSibling;
      if (toggleContent.style.display === "block") {
        toggleContent.style.display = "none";
      } else {
        toggleContent.style.display = "block";
      }
    }
  }
}
/* navbarToggle end */

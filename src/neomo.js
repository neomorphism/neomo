/* Alert function start */
document.addEventListener("DOMContentLoaded", function () {
  var alt = document.querySelector(".alt-close");

  alt.addEventListener("click", function () {
    alt.parentElement.style.display = "none";
  });
});
/* Alert function end */

/* Dropdown function start */
function DropdownToggle() {
  var dropdown = document.getElementsByClassName("dropdown-toggle--button");
  var dropdown_content = document.getElementsByClassName(
    "dropdown-toggle--content"
  );
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
$(document).ready(function () {
  var fileTarget = $(".file .file-hidden");
  fileTarget.on("change", function () {
    if (window.FileReader) {
      var filename = $(this)[0].files[0].name;
    } else {
      var filename = $(this).val().split("/").pop().split("\\").pop();
    }
    $(this).siblings(".file-name").val(filename);
  });
});
/* File function end */

/* Modal function start */
var modals = document.getElementsByClassName("modal");
var modal_btns = document.getElementsByClassName("modal-button");
var modal_close = document.getElementsByClassName("modal-close");
var funcs = [];

function Modal(num) {
  return function () {
    modal_btns[num].onclick = function () {
      modals[num].style.display = "block";
    };
    modal_close[num].onclick = function () {
      modals[num].style.display = "none";
    };
  };
}
for (var i = 0; i < modal_btns.length; i++) {
  funcs[i] = Modal(i);
}
for (var j = 0; j < modal_btns.length; j++) {
  funcs[j]();
}
/* Modal function end */

/* Tab function start */
$(".tab").each(function (i) {
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

/* Toast function start */
function toast_button(obj) {
  obj.closest(".toast").classList.remove("show");
}
/* Toast function end */

window.onclick = function (event) {
  /* Dropdown window */
  if (!event.target.matches(".dropdown-toggle--button")) {
    var dropdowns = document.getElementsByClassName("dropdown-toggle--content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      openDropdown.style.display = "none";
    }
  }

  /* Modal window */
  if (event.target.className == "modal") {
    event.target.style.display = "none";
  }
};

/* Range */
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};

/* Navigation */
function sideNav() {
  var menu = document.getElementsByClassName("side-menu");
  var content = document.getElementsByClassName("nav-content");

  for (var i = 0; i < menu.length; i++) {
    if (menu[i] === event.target) {
      console.log("click");
      if (content[i].style.display == "block") {
        content[i].style.display = "none";
      } else {
        content[i].style.display = "block";
      }
    }
  }
}

/* Alert function start */
document.addEventListener("DOMContentLoaded", function () {
  var alt = document.getElementsByClassName("alert");
  var alt_close = document.getElementsByClassName("alt-close");
  var funcs = [];

  function Alt(num) {
    return function () {
      alt_close[num].onclick = function () {
        alt[num].style.display = "none";
      };
    };
  }
  for (var i = 0; i < alt_close.length; i++) {
    funcs[i] = Alt(i);
  }
  for (var j = 0; j < alt_close.length; j++) {
    funcs[j]();
  }

  /* Alert function end */

  /* File function start */
  var file = document.querySelectorAll(".file .file-hidden");

  file.forEach(function (element) {
    element.addEventListener("change", function () {
      if (window.FileReader) {
        var filename = this.files[0].name;
      }
      this.parentNode.getElementsByClassName("file-name")[0].value = filename;
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
      var dropdowns = document.getElementsByClassName(
        "dropdown-toggle--content"
      );
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        openDropdown.style.display = "none";
      }
    }

    /* Modal window */
    if (event.target.className === "modal") {
      event.target.style.display = "none";
    }
  };
});

/* Dropdown function start */
function DropdownToggle() {
  var dropdown = document.getElementsByClassName("dropdown-toggle--button");
  var i;
  for (i = 0; i < dropdown.length; i++) {
    if (
      event.target === dropdown[i] ||
      event.target === dropdown[i].childNodes[1]
    ) {
      dropdown[i].nextElementSibling.style.display = "block";
    }
  }
}
/* Dropdown function end */

/* Navbar function start */
function NavbarToggle() {
  var toggle = document.getElementsByClassName("toggle-button");
  var i;

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
/* Navbar function end */

/* Range start */
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};
/* Range end */

/* Navigation function start */
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
/* Navigation function end */

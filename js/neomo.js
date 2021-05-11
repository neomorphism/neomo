/* eslint-disable */
/* Alert function start */
document.addEventListener("DOMContentLoaded", function () {
  var alt = document.getElementsByClassName("alt-close");
  var alt_close = document.getElementsByClassName("alt-close");
  var altArray = [];
  var i, j, k;

  function Alt(num) {
    return function () {
      alt_close[num].onclick = function () {
        alt[num].parentElement.style.display = "none";
      };
    };
  }
  for (i = 0; i < alt_close.length; i++) {
    altArray[i] = Alt(i);
  }
  for (j = 0; j < alt_close.length; j++) {
    altArray[j]();
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
  var modalArray = [];

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

  if (modals) {
    for (i = 0; i < modal_btns.length; i++) {
      modalArray[i] = Modal(i);
    }
    for (j = 0; j < modal_btns.length; j++) {
      modalArray[j]();
    }
  }
  /* Modal function end */

  /* Range start */
  var slider = document.getElementsByClassName("myRange");
  var output = document.getElementsByClassName("demo");
  for (i = 0; i < slider.length; i++) {
    console.log("1");
    (function (m) {
      output[m].innerHTML = slider[m].value;
      slider[m].addEventListener("input", function () {
        output[m].innerHTML = slider[m].value;
      });
    })(i);
  }

  /* Range end */

  /* Tab function start */
  var tab = document.getElementsByClassName("tab");
  var tab_list = [];

  for (i = 0; i < tab.length; i++) {
    tab_list[i] = tab[i]
      .getElementsByClassName("tab-list")[0]
      .getElementsByTagName("a");
    var tab_index = tab[i]
      .getElementsByClassName("current")[0]
      .id.split("-")[1];
    var tab_content = tab[i].querySelector("#content-" + tab_index);
    tab_content.style.display = "block";
  }

  for (i = 0; i < tab_list.length; i++) {
    for (j = 0; j < tab_list[i].length; j++) {
      tab_list[i][j].onclick = function () {
        var tab = this.closest(".tab");
        var tab_list = this.closest(".tab-list").getElementsByTagName("a");
        var tab_index;
        var tab_content;

        for (k = 0; k < tab_list.length; k++) {
          tab_index = tab_list[k].id.split("-")[1];
          tab_content = tab_content = tab.querySelector(
            "#content-" + tab_index
          );
          tab_content.style.display = "none";
          tab_list[k].classList.remove("current");
        }

        this.classList.add("current");
        tab_index = this.id.split("-")[1];
        tab_content = tab.querySelector("#content-" + tab_index);
        tab_content.style.display = "block";
      };
    }
  }
  /* Tab function end */

  /* Toast function start */
  function toast_button(obj) {
    obj.closest(".toast").classList.remove("show");
  }
  /* Toast function end */

  /* label function start */
  var input = document.getElementsByClassName("floatinglabel-input");
  var field = document.getElementsByClassName("floatinglabel-field");

  for (k = 0; k < input.length; k++) {
    (function (m) {
      if (
        !field[m].classList.contains("inset") &&
        !field[m].classList.contains("inset-neomo") &&
        !field[m].classList.contains("inset-gray") &&
        !field[m].classList.contains("inset-dark")
      ) {
        console.log(input[m].classList);
        input[m].addEventListener("click", function (event) {
          // field[m].style["boxShadow"] = "inset -3px -3px 7px #ffffffe5, inset 3px 3px 5px rgba(88, 100, 121, 0.288) ";
          if (field[m].classList.contains("outset-neomo")) {
            field[m].setAttribute(
              "style",
              "box-shadow : inset -3px -3px 7px #ffffffe5, inset 3px 3px 5px rgba(55, 114, 216, 0.288) !important"
            );
          } else if (field[m].classList.contains("outset-gray")) {
            field[m].setAttribute(
              "style",
              " box-shadow: inset -3px -3px 7px #ffffff80, inset 3px 3px 5px rgba(46, 46, 46, 0.288) !important"
            );
          } else if (field[m].classList.contains("outset-dark")) {
            field[m].setAttribute(
              "style",
              "  box-shadow: inset 5px 5px 9px #303030, inset -5px -5px 9px #535353 !important"
            );
          } else {
            field[m].setAttribute(
              "style",
              "box-shadow: inset 3px 3px 5px #c0c0c0, inset -3px -3px 5px #fff !important"
            );
          }
        });
      }
    })(k);
  }
  /* label function end */

  window.onclick = function (event) {
    /* Dropdown window */
    if (!event.target.matches(".dropdown-toggle--button")) {
      var dropdowns = document.getElementsByClassName(
        "dropdown-toggle--content"
      );
      var button = document.getElementsByClassName("dropdown-toggle--button");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (!(event.target === button[i].childNodes[1])) {
          openDropdown.style.display = "none";
        }
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
      if (dropdown[i].nextElementSibling.style.display === "block") {
        dropdown[i].nextElementSibling.style.display = "none";
      } else {
        dropdown[i].nextElementSibling.style.display = "block";
      }
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

      if (toggleContent.style.visibility === "visible") {
        toggleContent.style.visibility = "hidden";
        toggleContent.style.maxHeight = "0";
        toggleContent.style.opacity = "0";
      } else {
        toggleContent.style.visibility = "visible";
        toggleContent.style.maxHeight = "100vh";
        toggleContent.style.opacity = "1";
      }
    }
  }
}
/* Navbar function end */

/* Navigation function start */
function sideNav() {
  var menu = document.getElementsByClassName("side-menu");
  var content = document.getElementsByClassName("nav-content");
  var i;

  for (i = 0; i < menu.length; i++) {
    if (menu[i] === event.target) {
      if (content[i].style.display == "block") {
        content[i].style.display = "none";
      } else {
        content[i].style.display = "block";
      }
    }
  }
}
/* Navigation function end */

/* Collapsible function start */
function ContentToggle() {
  var collapse = document.getElementsByClassName("collapse");
  var expanded = document.getElementsByClassName("expanded");
  var i;

  for (i = 0; i < collapse.length; i++) {
    if (event.target === collapse[i]) {
      if (expanded[i].style.visibility === "visible") {
        expanded[i].style.visibility = "hidden";
        expanded[i].style.maxHeight = "0";
        expanded[i].style.opacity = "0";
      } else {
        expanded[i].style.visibility = "visible";
        expanded[i].style.maxHeight = "100vh";
        expanded[i].style.opacity = "1";
      }
    }
  }
}
/* collapsible function end */

/* Change Text Color animation start */
function ChangeTxtColor(button) {
  const colors = [
    "var(--success)",
    "var(--info)",
    "var(--warning)",
    "var(--danger)",
  ];

  var click_cnt = Number(button.dataset.current);
  click_cnt = (click_cnt + 1) % colors.length;
  button.dataset.current = click_cnt;
  button.style.color = colors[click_cnt];
}
/* Change Text Color animation end */

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

  /* Collapsible function start */
  var collapse = document.getElementsByClassName("collapse");

  for (i = 0; i < collapse.length; i++) {
    collapse[i].onclick = function () {
      var collapse = document.getElementsByClassName("collapse");
      var expanded = document.getElementsByClassName("expanded");

      for (j = 0; j < collapse.length; j++) {
        if (event.target === collapse[j]) {
          if (expanded[j].style.visibility === "visible") {
            expanded[j].style.visibility = "hidden";
            expanded[j].style.maxHeight = "0";
            expanded[j].style.opacity = "0";
          } else {
            expanded[j].style.visibility = "visible";
            expanded[j].style.maxHeight = "100vh";
            expanded[j].style.opacity = "1";
          }
        }
      }
    };
  }
  /* collapsible function end */

  /* Dropdown function start */
  var dropdown = document.getElementsByClassName("dropdown-toggle--button");

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].onclick = function () {
      var dropdown = document.getElementsByClassName("dropdown-toggle--button");
      for (j = 0; j < dropdown.length; j++) {
        if (
          event.target === dropdown[j] ||
          event.target === dropdown[j].childNodes[1]
        ) {
          if (dropdown[j].nextElementSibling.style.display === "block") {
            dropdown[j].nextElementSibling.style.display = "none";
          } else {
            dropdown[j].nextElementSibling.style.display = "block";
          }
        }
      }
    };
  }
  /* Dropdown function end */

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
        input[m].addEventListener("click", function (event) {
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

  /* Navbar function start */
  var navbar = document.getElementsByClassName("toggle-button");

  for (i = 0; i < navbar.length; i++) {
    navbar[i].onclick = function () {
      var navbar = document.getElementsByClassName("toggle-button");

      for (j = 0; j < navbar.length; j++) {
        if (navbar[j] === event.target) {
          navbar[j].classList.toggle("active");
          var toggleContent = navbar[j].nextElementSibling;

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
    };
  }
  /* Navbar function end */

  /* Range start */
  var slider = document.getElementsByClassName("myRange");
  var output = document.getElementsByClassName("demo");
  for (i = 0; i < slider.length; i++) {
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

  window.onclick = function (event) {
    /* Dropdown window start */
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
    /* Dropdown window end */

    /* Modal window start */
    if (event.target.className === "modal") {
      event.target.style.display = "none";
    }
    /* Modal window end */
  };
});

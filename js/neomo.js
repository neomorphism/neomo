document.addEventListener("DOMContentLoaded", function () {
  /* Alert function start */
  const alerts = document.querySelectorAll(".alert");

  if (alerts) {
    alerts.forEach((element) => {
      element.getElementsByClassName("alt-close")[0].onclick = function () {
        element.style.display = "none";
      };
    });
  }
  /* Alert function end */

  /* Collapsible function start */
  const collapses = document.querySelectorAll("[data-collapse-id]");
  function addCollapseEvent(collapse) {
    collapses.forEach((expanded) => {
      if (
        expanded.tagName === "DIV" &&
        expanded.getAttribute("data-collapse-id") === collapse
      ) {
        if (expanded.style.visibility === "visible") {
          expanded.style.visibility = "hidden";
          expanded.style.maxHeight = "0";
          expanded.style.opacity = "0";
        } else {
          expanded.style.visibility = "visible";
          expanded.style.maxHeight = "100vh";
          expanded.style.opacity = "1";
        }
        return;
      }
    });
  }

  if (collapses) {
    collapses.forEach((element) => {
      const collapse = element.getAttribute("data-collapse-id");
      const tag = element.tagName;

      // collapse content
      if (tag === "BUTTON") {
        element.onclick = function () {
          addCollapseEvent(collapse);
        };
      }
    });
  }
  /* collapsible function end */

  /* Dropdown function start */
  const dropdowns = document.querySelectorAll("[data-dropdown-id]");
  function addDropdownEvent(dropdown) {
    dropdowns.forEach((tag) => {
      // tag
      if (
        tag.tagName === "DIV" &&
        tag.getAttribute("data-dropdown-id") === dropdown
      ) {
        if (tag.style.display === "block") tag.style.display = "none";
        else tag.style.display = "block";
        return;
      }
    });
  }

  if (dropdowns) {
    dropdowns.forEach((element) => {
      const dropdown = element.getAttribute("data-dropdown-id");
      const tag = element.tagName;
      // dropdown content
      if (tag === "BUTTON") {
        element.onclick = function () {
          addDropdownEvent(dropdown);
        };
      }
    });
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
  const modals = document.querySelectorAll("[data-modal-id]");
  function addModalEvent(modal, element) {
    modals.forEach((btn) => {
      // button
      if (
        btn.tagName === "BUTTON" &&
        btn.getAttribute("data-modal-id") === modal
      ) {
        btn.onclick = function () {
          element.style.display = "block";
        };
        return;
      }
    });
  }

  if (modals) {
    modals.forEach((element) => {
      const modal = element.getAttribute("data-modal-id");
      const tag = element.tagName;
      // modal content
      if (tag === "DIV") {
        element.getElementsByClassName("modal-close")[0].onclick = function () {
          element.style.display = "none";
        };
        addModalEvent(modal, element);
      }
    });
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
  const ranges = document.querySelectorAll("[data-range-id]");
  function addRangeEvent(range, element) {
    ranges.forEach((tag) => {
      if (
        tag.tagName === "SPAN" &&
        tag.getAttribute("data-range-id") === range
      ) {
        tag.innerHTML = element.value;
        return;
      }
    });
  }

  if (ranges) {
    ranges.forEach((element) => {
      const range = element.getAttribute("data-range-id");
      const tag = element.tagName;
      // range content
      if (tag === "INPUT") {
        addRangeEvent(range, element);
        element.addEventListener("input", function () {
          addRangeEvent(range, element);
        });
      }
    });
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
  const toasts = document.querySelectorAll(".toast");

  if (toasts) {
    toasts.forEach((element) => {
      element.getElementsByClassName("toast-close")[0].onclick = function () {
        element.style.display = "none";
      };
    });
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

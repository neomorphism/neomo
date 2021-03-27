/* Alert function start */
var alt = document.querySelector(".alt-close");

alt.addEventListener("click", function () {
  alt.parentElement.style.display = "none";
});
/* Alert function end */

/* File function start */
function FileUpload() {
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
}
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
function TabToggle() {
  $(function () {
    $("ul.tab-list li").click(function () {
      var activeTab = $(this).attr("data-tab");
      $("ul.tab-list li").removeClass("current");
      $(".tab-content").removeClass("current");
      $(this).addClass("current");
      $("#" + activeTab).addClass("current");
    });
  });
}
/* Tab function end */

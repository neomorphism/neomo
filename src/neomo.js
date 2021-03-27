/* Alert function start */
var alt = document.querySelector(".alt-close");

alt.addEventListener("click", function () {
  alt.parentElement.style.display = "none";
});
/* Alert function end */

/* File function start */
function FileUpload() {
  $(document).ready(function () {
    let fileTarget = $(".file .file-hidden");
    fileTarget.on("change", function () {
      if (window.FileReader) {
        let filename = $(this)[0].files[0].name;
      } else {
        let filename = $(this).val().split("/").pop().split("\\").pop();
      }
      $(this).siblings(".file-name").val(filename);
    });
  });
}
/* File function end */

/* Modal function start */
function ModalOpen() {
  let modal = document.getElementById("Modal");
  let btn = document.getElementById("ModalBtn");
  let span = document.getElementsByClassName("modal-close")[0];

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

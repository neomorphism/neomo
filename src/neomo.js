/* Modal function start */
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
/* Modal function end */

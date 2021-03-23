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

var modal2 = document.getElementById("Modal2");
var btn2 = document.getElementById("ModalBtn2");
var span2 = document.getElementsByClassName("modal-close")[1];
btn2.onclick = function () {
  modal2.style.display = "block";
};
span2.onclick = function () {
  modal2.style.display = "none";
};

var modal3 = document.getElementById("Modal3");
var btn3 = document.getElementById("ModalBtn3");
var span3 = document.getElementsByClassName("modal-close")[2];
btn3.onclick = function () {
  modal3.style.display = "block";
};
span3.onclick = function () {
  modal3.style.display = "none";
};

var modal4 = document.getElementById("Modal4");
var btn4 = document.getElementById("ModalBtn4");
var span4 = document.getElementsByClassName("modal-close")[3];
btn4.onclick = function () {
  modal4.style.display = "block";
};
span4.onclick = function () {
  modal4.style.display = "none";
};

window.onclick = function (event) {
  if (
    event.target == modal ||
    event.target == modal2 ||
    event.target == modal3 ||
    event.target == modal4
  ) {
    modal.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
  }
};
/* Modal function end */

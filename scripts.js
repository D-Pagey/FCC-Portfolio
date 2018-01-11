const modalBtn = document.getElementsByClassName('modal-btn');
const modal = document.getElementsByClassName('modal-about');
const button = document.getElementsByClassName('modal-cancel');

modalBtn[0].addEventListener("click", function() {
  modal[0].showModal();
});

button[0].addEventListener("click", function() {
  modal[0].close();
})

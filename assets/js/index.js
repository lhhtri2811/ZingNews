function handleSearchButton(btn) {
  var searchForm = btn.parentElement;
  searchForm.classList.toggle("active");
}

function showPopup(btn, id) {
  var popup = document.getElementById(id);
  console.log(popup);
  popup.classList.toggle("active");
  btn.parentElement.classList.toggle("active");
}

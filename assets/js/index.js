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

function handleShowWeatherFilter(btn) {
  var icon = btn.querySelector("i");
  btn.classList.toggle("active");
}

function handlePreButton(listId) {
  var list = document.getElementById(listId);
  var listWidth = list.offsetWidth;
  list.scrollLeft -= listWidth;
}

function handleNextButton(listId) {
  var list = document.getElementById(listId);
  var listWidth = list.offsetWidth;
  list.scrollLeft += listWidth;
}

function handleCloseAds(btn) {
  var ads = btn.parentElement.nextElementSibling;
  ads.classList.toggle("active");

  var btnWrapper = btn.parentElement;
  btnWrapper.classList.toggle("active");
}

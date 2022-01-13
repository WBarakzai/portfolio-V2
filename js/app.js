const navBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const addMargin1 = document.querySelector("#flip-img1");
const addMargin2 = document.querySelector("#flip-img2");
// const date = document.querySelector("#date");

// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
  navBtn.classList.add("hide-open-btn");
  addMargin1.classList.add("add-margin");
  addMargin2.classList.add("add-margin");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
  navBtn.classList.remove("hide-open-btn");
  addMargin1.classList.remove("add-margin");
  addMargin2.classList.remove("add-margin");
});
// set year
// date.innerHTML = new Date().getFullYear();

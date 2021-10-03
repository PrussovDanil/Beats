const burger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const closeBtn = document.querySelector(".menu__mob--close");



burger.addEventListener("click", (e) => {
  e.preventDefault();

  menu.classList.add("active");

  

}) 


closeBtn.addEventListener("click", (e) => {
  e.preventDefault();

  menu.classList.remove("active");
  
  

}) 

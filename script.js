 
const box = document.querySelector('.box');
const icon = document.querySelector('.fa-moon');
const navbar = document.querySelector('.navbar');
const menu = document.querySelector('.menu');


box.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  icon.classList.toggle('fa-sun');
  icon.classList.toggle('fa-moon');

});
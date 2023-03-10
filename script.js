let search = document.querySelector('#search');
let searchbox = document.querySelector('.search-box');
let menu = document.querySelector('#menu-bars');
let mynav = document.querySelector('.navbar');


search.onclick = () =>{
    searchbox.classList.toggle('active');
}
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    mynav.classList.toggle('active');
}
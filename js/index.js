const button = document.querySelector('.header__button');
const nav    = document.querySelector('.header__nav');
const header = document.querySelector('.header');
const arrow  = document.querySelector('.main__arrow');

window.addEventListener("scroll", function(){
    header.classList.toggle('header__menudown', window.scrollY>0);
})

button.addEventListener('click',()=>{
    nav.classList.toggle('header__nav--activo')
});

window.addEventListener("scroll", function(){
    arrow.classList.toggle('main__arrowup', window.scrollY>0);
})
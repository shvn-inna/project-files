const menu = document.querySelector('#mobile-menu')
const links_menu = document.querySelector('.navbar_menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    links_menu.classList.toggle('active');
})
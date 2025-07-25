let menu_cover = document.querySelector('.cover-menu')
let menu_m = document.querySelector('.menu-m')
let menu_btn = document.querySelector('.btn-menu')
let menu_btn_close = document.querySelector('.btn-menu-close')

function menu_open(){
               menu_cover.classList.toggle('active') 
               menu_m.classList.toggle('active') 
               menu_btn.classList.toggle('active') 
               menu_btn_close.classList.toggle('close') 
}
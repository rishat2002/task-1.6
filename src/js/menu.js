const menu = document.querySelector('.menu');
const containerBlock = document.querySelector('.container');
const closeMenuBtn = document.querySelector('.menu__close-btn');
const openMenuBtn =document.querySelector('.header__button-burger');
const overlay=document.querySelector('.overlay--menu');
const modal = document.querySelectorAll('.modal');

function openMenu () {
       menu.classList.add('menu--active');
       overlay.classList.add('overlay--active');
       overlay.addEventListener('click',closeOverlayClickHandler);
       closeMenuBtn.addEventListener('click',closeMenuBtnClickHandler);
       document.addEventListener('keydown',escapeKeydownMenuHandler);
       openMenuBtn.removeEventListener('click',openMenuBtnClickHandler);
}
function closeMenu() {
       menu.classList.remove('menu--active');
       overlay.classList.remove('overlay--active');
       openMenuBtn.addEventListener('click',openMenuBtnClickHandler);
       overlay.removeEventListener('click',closeOverlayClickHandler);
       closeMenuBtn.removeEventListener('click',closeMenuBtnClickHandler);
       document.removeEventListener('keydown', escapeKeydownMenuHandler)
}


function openMenuBtnClickHandler(){
    openMenu();
}

function closeMenuBtnClickHandler(){
    closeMenu();
}

function closeOverlayClickHandler(){
    closeMenu();
}

function escapeKeydownMenuHandler(evt){
  
 if (modal.some(classList.contains("modal--active"))){
     return;
  }
     
 if (evt.keyCode === 27) {
        closeMenu();
      }
}

openMenuBtn.addEventListener('click',openMenuBtnClickHandler);




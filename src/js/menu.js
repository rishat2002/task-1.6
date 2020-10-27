const menu = document.querySelector('.menu');
const containerBlock = document.querySelector('.container');
const closeMenuBtn = document.querySelector('.menu__close-btn');
const openMenuBtn =document.querySelector('.header__button-burger');
const closeOverlay=document.querySelector('.overlay--menu');
const modal = document.querySelectorAll('.modal');

function openMenu () {
       menu.classList.add('menu--active');
       closeOverlay.addEventListener('click',closeOverlayClickHandler);
       closeOverlay.classList.add('overlay--active');
       closeMenuBtn.addEventListener('click',closeMenuBtnClickHandler);
       document.addEventListener('keydown',escapeKeydownMenuHandler);
}
function closeMenu() {
       menu.classList.remove('menu--active');
       closeOverlay.classList.remove('overlay--active');
       closeOverlay.removeEventListener('click',closeOverlayClickHandler);
       closeMenuBtn.removeEventListener('click',closeMenuBtnClickHandler);
       document.removeEventListener('keydown', escapeKeydownMenuHandler
) }


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
for(let i=0;i<modal.length;i++){    
 if (modal[i].classList.contains("modal--active")){
     return;
  }
 }    
 if (evt.keyCode === 27) {
        closeMenu();
      }
}

openMenuBtn.addEventListener('click',openMenuBtnClickHandler);




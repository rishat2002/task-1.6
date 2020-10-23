const menu = document.querySelector('.menu');
const containerBlock = document.querySelector('.container');
const closeMenuBtn = document.querySelector('.menu__close-btn');
const openMenuBtn =document.querySelector('.header__button-burger');
const closeOverlay=document.querySelector('.overlay--menu');


function openMenu () {
       menu.classList.add('menu--active');
       containerBlock.classList.add('container--opacity');
       closeOverlay.addEventListener('click',
                                     closeOverlayClickHandler);
       closeOverlay.classList.add('overlay--active');
       closeMenuBtn.addEventListener('click',
                                     closeMenuBtnClickHandler);
       document.addEventListener('keydown',escapeKeydownMenuHandler);
}
function closeMenu() {
       menu.classList.remove('menu--active');
       closeOverlay.classList.remove('overlay--active');
       containerBlock.classList.remove('container--opacity');
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
 if (evt.keyCode === 27) {
        closeMenu();
      }
}

openMenuBtn.addEventListener('click',openMenuBtnClickHandler);




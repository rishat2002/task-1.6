const menu = document.querySelector('.menu');
const container = document.querySelector('.container');
const menuButtonClose = document.querySelector('.menu__close-btn');
const menuButtonOpen =document.querySelector('.header__button-burger');
const menuOpacityClose=document.querySelector('.opacity-container--menu');

const callbackFromMenuInfo={
 popUp :document.querySelector('.callback--info'),
 buttonOpen :document.querySelector('.ui-button--message'),
 buttonClose :document.querySelector('.callback-form__back')}

const callbackFromMenuCall={
 popUp :document.querySelector('.callback--call'),
 buttonOpen :document.querySelector('.menu .ui-button--call'),
 buttonClose :document.querySelector('.callback--call .callback-form__back')}

function openMenu () {
       menu.classList.remove('window-hidden');
       container.classList.add('container--opacity');
       menuButtonOpen.removeEventListener('click',openMenu);
       menuButtonClose.addEventListener('click',closeMenu);
       document.addEventListener('keydown', function(evt) {
       if (evt.keyCode === 27) {
        closeMenu();
      }
     })
}
function closeMenu() {
       menu.classList.add('window-hidden');
       container.classList.remove('container--opacity');
       menuButtonOpen.addEventListener('click',openMenu);
       menuButtonClose.removeEventListener('click',closeMenu);
       document.removeEventListener('keydown', function(evt) {
       if (evt.keyCode === 27) {
        closeMenu();
      }
}) }

menuButtonOpen.addEventListener('click',openMenu);



function callBackPopupFromMenu(callback){
 callback.buttonOpen.addEventListener('click',openFromMenu);
function openFromMenu () {
       callback.popUp.classList.remove('window-hidden');
       closeMenu();
       container.classList.add('container--opacity');
       callback.buttonClose.addEventListener('click',closeFromMenu);
}
function closeFromMenu() {
       callback.popUp.classList.add('window-hidden');
       container.classList.remove('container--opacity');
       callback.buttonClose.removeEventListener('click',closeFromMenu);
       menuButtonOpen.addEventListener('click',openMenu);
}
}

callBackPopupFromMenu(callbackFromMenuInfo);
callBackPopupFromMenu(callbackFromMenuCall);


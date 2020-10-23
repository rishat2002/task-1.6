const menu = document.querySelector('.menu');
const containerBlock = document.querySelector('.container');
const closeOverlayMenu=document.querySelector('.overlay--menu');

const callbackFromHeaderFeedback={
 popUp :document.querySelector('.modal--feedback'),
 openModalBtn :document.querySelector('.ui-button--chat'),
 closeModalBtn :document.querySelector('.modal--feedback .callback-form__back'),
 closeModalOverlay: document.querySelector('.overlay--modal')     
}

const callbackFromHeaderCall={
 popUp :document.querySelector('.modal--call'),
 openModalBtn :document.querySelector('.container .ui-button--call'),
 closeModalBtn :document.querySelector('.modal--call .callback-form__back'),
 closeModalOverlay: document.querySelector('.overlay--modal')
}


const callbackFromMenuFeedback={
 popUp :document.querySelector('.modal--feedback'),
 openModalBtn :document.querySelector('.ui-button--message'),
 closeModalBtn :document.querySelector('.callback-form__back'),
 closeModalOverlay: document.querySelector('.overlay--modal'),    
}

const callbackFromMenuCall={
 popUp :document.querySelector('.modal--call'),
 openModalBtn :document.querySelector('.menu .ui-button--call'),
 closeModalBtn:document.querySelector('.modal--call .callback-form__back'),
 closeModalOverlay: document.querySelector('.overlay--modal')
}

function callBackPopup(callback) {
 
function openModal () {
       menu.classList.remove('menu--active');
       callback.closeModalOverlay.classList.add('overlay--active');
       callback.popUp.classList.add('modal--active');
       containerBlock.classList.add('container--opacity');
       callback.closeModalBtn.addEventListener('click',btnCloseClickHandler);
       callback.closeModalOverlay.addEventListener('click',
                                     closeOverlayClickHandler);
      document.addEventListener('keydown',escapeKeydownHandler);
      closeOverlayMenu.classList.remove('overlay--active');
}
function closeModal () {
       callback.popUp.classList.remove('modal--active');
       containerBlock.classList.remove('container--opacity');
       callback.closeModalOverlay.classList.remove('overlay--active');
       callback.closeModalBtn.removeEventListener('click',btnCloseClickHandler);
       callback.closeModalOverlay.removeEventListener('click',closeOverlayClickHandler);
       document.removeEventListener('keydown', escapeKeydownHandler);
}
    function btnOpenClickHandler(){
    openModal();
    }
    function btnCloseClickHandler(){
    closeModal();
    }
    
   function closeOverlayClickHandler(){
    closeModal();
    }

   function escapeKeydownHandler(evt){
    if (evt.keyCode === 27) {
        closeModal();
    }
   }
    
    
    callback.openModalBtn.addEventListener('click',openModal);
    
}



callBackPopup(callbackFromMenuFeedback);
callBackPopup(callbackFromMenuCall);

callBackPopup(callbackFromHeaderFeedback);
callBackPopup(callbackFromHeaderCall);




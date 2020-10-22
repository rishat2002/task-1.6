
const container = document.querySelector('.container');

const callbackFromHeaderInfo={
 popUp :document.querySelector('.callback--info'),
 buttonOpen :document.querySelector('.ui-button--chat'),
 buttonClose :document.querySelector('.callback-form__back')}

const callbackFromHeaderCall={
 popUp :document.querySelector('.callback--call'),
 buttonOpen :document.querySelector('.container .ui-button--call'),
 buttonClose :document.querySelector('.callback--call .callback-form__back')}



function callBackPopupFromHeader(callback){
 callback.buttonOpen.addEventListener('click',openFromHeader);
function openFromHeader () {
       callback.popUp.classList.remove('callback--close');
       container.classList.add('container--opacity');
       callback.buttonOpen.removeEventListener('click',openFromHeader);
       callback.buttonClose.addEventListener('click',closeFromHeader);
}
function closeFromHeader() {
       callback.popUp.classList.add('callback--close');
       container.classList.remove('container--opacity');
       callback.buttonOpen.addEventListener('click',openFromHeader);
       callback.buttonClose.removeEventListener('click',closeFromHeader);
}
}

callBackPopupFromHeader(callbackFromHeaderInfo);
callBackPopupFromHeader(callbackFromHeaderCall);




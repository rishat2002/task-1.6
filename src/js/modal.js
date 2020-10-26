
const overlayForModal = document.querySelector('.overlay--modal');
const openCallModalBtn = document.querySelectorAll('.ui-button--call');
const closeCallModalBtn = document.querySelector('.callback-form__back--call');
const closeFeedbackModalBtn = document.querySelector('.callback-form__back--feedback');
const openFeedbackModalBtn = document.querySelectorAll('.ui-button--chat');
const feedbackModal = document.querySelector('.modal--feedback');
const  callbackModal = document.querySelector('.modal--call');
const containerBlock = document.querySelector('.container');


function openCallModal() {
	overlayForModal.classList.add('overlay--active');
	callbackModal.classList.add('modal--active');
    containerBlock.classList.add('container--opacity');
	overlayForModal.addEventListener('click', calModalOverlayClickHandler);
	closeCallModalBtn.addEventListener('click', closeCallModalBtnClickHandler);
	document.addEventListener('keydown', escapeKeydownModalHandler);
}

function closeCallModal() {
	overlayForModal.classList.remove('overlay--active');
	callbackModal.classList.remove('modal--active');
    containerBlock.classList.remove('container--opacity');
	overlayForModal.removeEventListener('click', calModalOverlayClickHandler);
	closeCallModalBtn.removeEventListener('click', closeCallModalBtnClickHandler);
	document.removeEventListener('keydown', escapeKeydownModalHandler);
}

function openFeedbackModal() {
	overlayForModal.classList.add('overlay--active');
	feedbackModal.classList.add('modal--active');
    containerBlock.classList.add('container--opacity');
	overlayForModal.addEventListener('click', feedbackModalOverlayClickHandler);
	closeFeedbackModalBtn.addEventListener('click', closeFeedbackModalBtnClickHandler);
	document.addEventListener('keydown', escapeKeydownModalHandler);
}

function closeFeedbackModal() {
	feedbackModal.classList.remove('modal--active');
	overlayForModal.classList.remove('overlay--active');
    containerBlock.classList.remove('container--opacity');
	overlayForModal.removeEventListener('click', feedbackModalOverlayClickHandler);
	closeFeedbackModalBtn.removeEventListener('click', closeFeedbackModalBtnClickHandler);
	document.removeEventListener('keydown', escapeKeydownModalHandler);
}

function openCallModalBtnClickHandler() {
	openCallModal();
}

function closeCallModalBtnClickHandler() {
	closeCallModal();
}

function calModalOverlayClickHandler() {
	closeCallModal();
}

function openFeedbackModalBtnClickHandler() {
	openFeedbackModal();
}

function closeFeedbackModalBtnClickHandler() {
	closeFeedbackModal();
}

function escapeKeydownModalHandler(event) {
	if (event.keyCode !== 27) return;

	if (feedbackModal.classList.contains('modal--active')) {
		closeFeedbackModal();
	} else if (callbackModal.classList.contains('modal--active')) {
		closeCallModal();
	}
}

function feedbackModalOverlayClickHandler() {
	closeFeedbackModal();
}



for(let i=0;i<openCallModalBtn.length;i++){
    openCallModalBtn[i].addEventListener('click', openCallModalBtnClickHandler);
}

for(let i=0;i<openFeedbackModalBtn.length;i++){
    openFeedbackModalBtn[i].addEventListener('click', openFeedbackModalBtnClickHandler);
}




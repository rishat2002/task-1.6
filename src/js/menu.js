const menu = document.querySelector('.menu');
const closeMenuBtn = document.querySelector('.menu .ui-button--close');
const openMenuBtn = document.querySelector('.header__button-burger');
const overlay = document.querySelector('.overlay--menu');
let modals = [];
modals = [document.querySelector('.modal--feedback'),
        document.querySelector('.modal--call')]

function openMenu() {
    menu.classList.add('menu--active');
    overlay.classList.add('overlay--active');
    overlay.addEventListener('click', closeOverlayClickHandler);
    closeMenuBtn.addEventListener('click', closeMenuBtnClickHandler);
    document.addEventListener('keydown', escapeKeydownMenuHandler);
    openMenuBtn.removeEventListener('click', openMenuBtnClickHandler);
}

function closeMenu() {
    menu.classList.remove('menu--active');
    overlay.classList.remove('overlay--active');
    openMenuBtn.addEventListener('click', openMenuBtnClickHandler);
    overlay.removeEventListener('click', closeOverlayClickHandler);
    closeMenuBtn.removeEventListener('click', closeMenuBtnClickHandler);
    document.removeEventListener('keydown', escapeKeydownMenuHandler)
}
console.log("hello");

function openMenuBtnClickHandler() {
    openMenu();
}

function closeMenuBtnClickHandler() {
    closeMenu();
}

function closeOverlayClickHandler() {
    closeMenu();
}

function isActive(modal) {
    return modal.classList.contains('modal--active');
}

function escapeKeydownMenuHandler(evt) {
    if (modals.some(isActive)) {
        return;
    }

    if (evt.keyCode === 27) {
        closeMenu();
    }
}

openMenuBtn.addEventListener('click', openMenuBtnClickHandler);

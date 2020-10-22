
var mySwiper;
const mediaQuery = window.matchMedia('(max-width: 767px)')

function handleTabletChange(e) {
    if (e.matches) {
        mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    } 
}
mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);
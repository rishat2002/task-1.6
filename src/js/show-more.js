
function showMore(a) {
a.button__name.addEventListener('click', function () {

    if (a.container.classList.contains('container--all') && a.container.classList.contains('article__text-container')){
        a.container.classList.remove('container--all');
        a.button__name.textContent = "Читать далее";
        a.button__name.classList.remove("show-more--rotate");
    }
    else if (a.container.classList.contains('container--all')) {
        a.container.classList.remove('container--all');
        a.button__name.textContent = "Показать все";
        a.button__name.classList.remove("show-more--rotate");
    }
    else {
        a.container.classList.add('container--all');
        a.button__name.textContent = "Скрыть";
        a.button__name.classList.add("show-more--rotate");
    }
});
}
 let arrShowMore = [];
 arrShowMore =[
 {
 container: document.querySelector('.brands'),
 button__name:document.querySelector('.show-more--brands')},
 {
 container: document.querySelector('.devices'),
 button__name:document.querySelector('.show-more--devices')},
 {
 container: document.querySelector('.article__text-container'),
 button__name:document.querySelector('.article__show-more')
 }
 ]
for(let i=0;i<arrShowMore.length;i++) {
    showMore(arrShowMore[i]);
}


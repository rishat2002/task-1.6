const showMoreButtons = document.querySelectorAll('.show-more');
let containers = [];
containers = [
    {
        section: document.querySelector('.article__text-container')
     },
    {
        section: document.querySelector('.brands')
     },
    {
        section: document.querySelector('.devices')
     }
 ]

function showMore(container, button) {
    button.addEventListener('click', function () {
        if (container.section.classList.contains('container--all') && container.section.classList.contains('article__text-container')) {
            container.section.classList.remove('container--all');
            button.textContent = "Читать далее";
            button.classList.remove("show-more--rotate");
        } else if (container.section.classList.contains('container--all')) {
            container.section.classList.remove('container--all');
            button.textContent = "Показать все";
            button.classList.remove("show-more--rotate");
        } else {
            container.section.classList.add('container--all');
            button.textContent = "Скрыть";
            button.classList.add("show-more--rotate");
        }
    });
}

for (let i = 0; i < containers.length; i++) {
    showMore(containers[i], showMoreButtons[i]);
}

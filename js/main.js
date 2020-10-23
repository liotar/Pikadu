let menuToggle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.sidebar');
menuToggle.addEventListener('click', function (event) {
    event.preventDefault(); /* отменяется обычный клик по ссылке */
    menu.classList.toggle('visible'); // вешаем класс на сайдбар
})
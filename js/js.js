$(document).ready(function() {
 $('.header__burger').click(function(event) {
    //  При гажатии на иконку добавляется класс active,  пр повторном убирается
     $('.header__burger, .header__menu').toggleClass('active');
    //  Убираем скрул при открытом меню
    $('body').toggleClass('lock');
 });
});
const header__btn = document.querySelector('.header__btn');
const rightside_menu = document.querySelector('.rightside-menu');
const rightside_menu_close = document.querySelector('.rightside-menu__close');


header__btn.addEventListener('click', () => {
    rightside_menu.classList.remove('rightside-menu--close');
});

rightside_menu_close.addEventListener('click', () => {
    rightside_menu.classList.add('rightside-menu--close');
});

$('.top__slider').slick ({
    dots: true,
    arrows: false,
});

let mixer = mixitup('.gallery__inner', {
    load: {
        filter: '.bedroom'
    }
});
//burger

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.header__link');

burger.addEventListener('click',

    function () {
        burger.classList.toggle('burger--active');

        menu.classList.toggle('header__nav--active');

        document.body.classList.toggle('stop-scroll');

    })

menuLinks.forEach(function(el) {
    el.addEventListener('click', function() {
        burger.classList.remove('burger--active');
        menu.classList.remove('header__nav--active');
        document.body.classList.remove('stop-scroll');
    })
});

//search

let search = document.querySelector('.search');
let searchBox = document.querySelector('.header__input');

search.addEventListener('click',

function () {
    search.classList.toggle('search--active');

    searchBox.classList.toggle('header__input--active');

    document.body.classList.toggle('stop-scroll');

});

// slider
let swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    /*slidesPerGroup: 3,*/
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        loop: true,
    },
});


// accordion 
document.querySelectorAll('.work__link').forEach(function (tabsLink) {
    tabsLink.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;
        document.querySelectorAll('.work__link').forEach(function (link) {
            link.classList.remove('work__link--active')
        });
        e.currentTarget.classList.add('work__link--active');

        document.querySelectorAll('.tabs-item').forEach( function(tabsLink) {
            tabsLink.classList.remove('tabs-item--active')
        });
        document.querySelector(`[data-target=${path}]`).classList.add('tabs-item--active');
    });
});






$(function() {

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
    });

    $('.shop__filter-btn').on('click', function(){
        $('.shop__filters').slideToggle();
    });

    $('.footer-top__title').on('click', function (){
        if (window.matchMedia("(max-width: 450px)").matches){
            $(this).siblings('.footer-top__list').slideToggle();
            $(this).toggleClass('active');
        }
    });

    $('.blog-page__slider').slick({
        prevArrow: '<button type = "button"class="slick-prev"><?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="9px" height="14px" viewBox="0 0 9 18" version="1.1"><g><path d="M 6.75 15.75 C 6.460938 15.75 6.175781 15.640625 5.953125 15.421875 L 0.328125 9.796875 C -0.109375 9.355469 -0.109375 8.644531 0.328125 8.203125 L 5.953125 2.578125 C 6.394531 2.140625 7.105469 2.140625 7.546875 2.578125 C 7.984375 3.019531 7.984375 3.730469 7.546875 4.171875 L 2.714844 9 L 7.546875 13.832031 C 7.984375 14.269531 7.984375 14.980469 7.546875 15.421875 C 7.328125 15.640625 7.039062 15.75 6.75 15.75 Z M 6.75 15.75 "/></g></svg></button>',
        nextArrow: '<button type = "button"class="slick-next"><?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="9px" height="14px" viewBox="0 0 9 18" version="1.1"><g><path d="M 2.25 15.75 C 1.960938 15.75 1.675781 15.640625 1.453125 15.421875 C 1.015625 14.980469 1.015625 14.269531 1.453125 13.828125 L 6.285156 9 L 1.453125 4.167969 C 1.015625 3.730469 1.015625 3.019531 1.453125 2.578125 C 1.894531 2.140625 2.605469 2.140625 3.046875 2.578125 L 8.671875 8.203125 C 9.109375 8.644531 9.109375 9.355469 8.671875 9.792969 L 3.046875 15.417969 C 2.824219 15.640625 2.539062 15.75 2.25 15.75 Z M 2.25 15.75 "/></g></svg></button>',
        infinite:false
    });

    $('.product-tabs__top-item').on('click', function(e) {
        e.preventDefault();
        $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
        $(this).addClass('product-tabs__top-item--active');

        $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
        $($(this).attr('href')).addClass('product-tabs__content-item--active');
    });


    $('.product-slide__thumb').slick({
        asNavFor: '.product-slide__big',
        focusOnSelect: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        draggable: false
    });
    $('.product-slide__big').slick({
        asNavFor: '.product-slide__thumb',
        draggable: false,
        arrows: false,
        fade: true,
        responsive:[
            {
                breakpoint:1051,
                settings:{
                    draggable:true,
                }
            },
        ]
    });

    $('.shop-content__filter-btn').on('click', function() {
        $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
        $(this).addClass('shop-content__filter-btn--active');
    });

    $('.button-list').on('click', function() {
        $('.product-item').addClass('product-item--list');
        $('.shop-content__inner').addClass('shop-content__nogrid');
    });

    $('.button-grid').on('click', function() {
        $('.product-item').removeClass('product-item--list');
        $('.shop-content__inner').removeClass('shop-content__nogrid');
    });

    $('.select-style, .product-one__item-num').styler();

    $('.filter-price__input').ionRangeSlider({
        type: "double",
        prefix: "$",
        onStart: function(data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
        onChange: function(data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
    });

    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true
    });


    $(".star").rateYo({
        starWidth: "17px",
        normalfill: "#ccccce",
        ratedFill: "#e74c3c",
        readOnly: true,
        starSvg: '<?xml version="1.0" encoding="UTF-8"?> <svg xmlns = "http://www.w3.org/2000/svg"xmlns: xlink = "http://www.w3.org/1999/xlink"width = "18px"height = "16px"viewBox = "0 0 18 16"version = "1.1" ><g id = "surface1" ><path d = "M 11.914062 4.695312 L 16.402344 5.359375 C 16.773438 5.414062 17.085938 5.675781 17.207031 6.035156 C 17.324219 6.398438 17.226562 6.789062 16.960938 7.058594 L 13.703125 10.253906 L 14.472656 14.835938 C 14.535156 15.210938 14.382812 15.589844 14.070312 15.8125 C 13.757812 16.035156 13.351562 16.0625 13.015625 15.882812 L 9.003906 13.742188 L 4.992188 15.882812 C 4.65625 16.0625 4.246094 16.035156 3.9375 15.8125 C 3.628906 15.589844 3.472656 15.210938 3.539062 14.835938 L 4.304688 10.253906 L 1.050781 7.058594 C 0.78125 6.789062 0.683594 6.398438 0.804688 6.035156 C 0.921875 5.675781 1.230469 5.414062 1.605469 5.359375 L 6.09375 4.695312 L 8.105469 0.5625 C 8.273438 0.21875 8.621094 0 9.003906 0 C 9.386719 0 9.738281 0.21875 9.902344 0.5625 Z M 11.914062 4.695312 " / ></g> </svg>'
    });

    function getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        return {
            total,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function initializeClock(id, endtime) {
        const clock = document.querySelector('.promo__clock');
        const daysSpan = clock.querySelector('.promo__days');
        const hoursSpan = clock.querySelector('.promo__hours');
        const minutesSpan = clock.querySelector('.promo__minutes');
        const secondsSpan = clock.querySelector('.promo__seconds');

        function updateClock() {
            const t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        const timeinterval = setInterval(updateClock, 1000);
    }

    const deadline = $('.promo__clock').attr('data-time');
    initializeClock('promo__clock', deadline);

});
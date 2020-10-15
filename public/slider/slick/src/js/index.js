import 'slick-carousel';

$('.hoge-slick').slick({
    autoplaySpeed: 3000,
    dots: true,
    slidesToShow: 1,
    speed: 800,
    autoplay: true,
    // fade: true
});

$('.slick-list, .slick-arrow').hover(function () {
    $('.slick-arrow').addClass('-show');
});

$('.slick-list').mouseleave(function () {
    $('.slick-arrow').removeClass('-show');
});
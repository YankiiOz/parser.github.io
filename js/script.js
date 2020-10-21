$(document).ready(function() {
$('.slider').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    easing: 'linear', 
    infinite: true,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnFocuse: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: false,
    
});
});

$(document).ready(function() {
$('.photo-slider').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 600,
    easing: 'linear',
    infinite: true,
    initialSlide: 0,
    autoplay: false,
    draggable: false,


});
});
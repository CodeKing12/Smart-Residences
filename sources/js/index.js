$(document).ready(function() {
    $(".header-slick").slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3200,
        fade: true,
        dots: false,
        speed: 500,
        arrows: false,
        zIndex: 100,
        asNavFor: '.image-slider',
        // variableWidth: true,
        // slidesToShow: 1,
        // slidesToScroll: 1,
    });

    $(".image-slider").slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3200,
        fade: true,
        dots: false,
        speed: 500,
        arrows: false,
        zIndex: 100,
        asNavFor: '.header-slick',
    })

    // $(".owl-header").owlCarousel({
    //     items: 1,
    //     animateOut: 'fadeOut',
    //     loop: true,
    // })
})
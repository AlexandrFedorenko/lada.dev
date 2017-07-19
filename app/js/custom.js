$(function() {

    // no dragstart img
    $("img, a").on("dragstart", function(event) { event.preventDefault(); });

    //slider
    $('.mainSlider').slick({
        arrows:true,
        prevArrow: '<div class="prev"></div>',
        nextArrow: '<div class="next"></div>',
        dots:true,
        autoplay:true,
        autoplaySpeed:9000,
        responsive: [
            {
                breakpoint: 555,
                settings: {
                    autoplay:true,
                    autoplaySpeed:7000,
                    arrows:false,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 360,
                settings: {
                    autoplay:true,
                    autoplaySpeed:7000,
                    arrows:false,
                    infinite: true,
                    dots: false
                }
            }
            ]
    });
});


//preloader
$(window).load(function() {

    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

});
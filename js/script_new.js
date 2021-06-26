$(document).ready(function () {
    // BX.addCustomEvent('onAjaxSuccess', function () {
    //     var page = window.location.pathname;
    //
    //     setTimeout(function(){
    //         $.ajax({
    //             url: '/local/_ajax/getFilterCustomText.php',
    //             type: 'POST',
    //             data: {page: page},
    //         }).done(function (data) {
    //             if (data.length > 1)
    //             {
    //                 //$('[data-ajax="custom_text"]').html(data);
    //             }
    //         });
    //     }, 60 * 15);
    // });





    // -------- Slick slider -----------
    var sliders = $('.b-catalog__slider');
    sliders.each(function(i, elem){
        var slider_pos = $(elem).attr('data-slider-pos');

        $('[data-slider-pos="'+ slider_pos +'"]').slick({
            prevArrow: $('[data-section-pos="'+ slider_pos +'"] .flex-prev'),
            nextArrow: $('[data-section-pos="'+ slider_pos +'"] .flex-next'),
            dotsClass: 'slick-dots slick-dots--white',
            speed: 600,
            swipeToSlide: true,
            infinite: true,
            slidesToShow: 4,
            centerMode: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: false,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                    }
                },
                // {
                //   breakpoint: 1924,
                //   settings: "unslick"
                // }
            ]
        });
    });
    // -------- /Slick slider -----------
});
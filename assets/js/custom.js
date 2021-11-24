
(function($){
    "use strict"

    var $window = $(window);
    var zero = 0;

    //sticky header
    $window.on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('.main-header-area').addClass('navbar-sticky');
        } else {
            $('.main-header-area').removeClass('navbar-sticky');
        }
    });

    // :: 4.0 SCROLL LINK ACTIVE CODE
    var scrollLink = $('.scroll');


    // :: 3.0 WHATSAPP BTN ACTIVE CODE
    var offset = 300;
    var duration = 500;

    $window.on('scroll', function () {
        if ($(this).scrollTop() > offset) {
            $(".float").fadeIn(duration);
        } else {
            $(".float").fadeOut(duration);
        }
    });

    // :: 5.0 SMOOTH SCROLLING ACTIVE CODE
    scrollLink.on('click', function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    // :: 8.0 PREVENT DEFAULT ACTIVE CODE
    $("a[href='#']").on('click', function($) {
        $.preventDefault();
    });

    //sider Menu
    $('#toggle_menu').click(() => {
        $('#sidemenu').addClass('side_active');
    })
    $('.close-svg').click(() => {
        $('#sidemenu').removeClass('side_active');
    })

    $('#sidemenu ul li a').click(function () {
    $('#sidemenu ul li a').removeClass('active1');
    $(this).addClass('active1');
    $('#sidemenu').removeClass('side_active');
    })


    $('.header_list ul li a').click(function () {
        $('.header_list ul li a').removeClass('active1');
        $(this).addClass('active1');

    })

    $('#sidemenu ul li a').click(function () {
        $('#sidemenu ul li a').removeClass('active2');
        $(this).addClass('active2');

    })

    //Testimonials SLIDER ACTIVE CODE
            $('.testi-slider.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                dots: false,
                smartSpeed: 2000,
                autoplay: true,
                responsiveClass: true,
                autoplayTimeout: 4000,
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    576: {
                        items: 2
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 2
                    }
                }
            });
            
            //Team SLIDER ACTIVE CODE
            $('.team-slider.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                dots: false,
                smartSpeed: 2000,
                autoplay: true,
                responsiveClass: true,
                autoplayTimeout: 4000,
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    576: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    992: {
                        items: 4
                    }
                }
            });

            //Team SLIDER ACTIVE CODE
            $('.featured-slider.owl-carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: true,
                dots: false,
                smartSpeed: 2000,
                autoplay: true,
                responsiveClass: true,
                autoplayTimeout: 4000,
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 2
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 2
                    }
                }
            });

}(jQuery));
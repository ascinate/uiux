// <!--    isotope-js-script-->
$(document).ready(function () {
    $('.portfolio-item').isotope(function () {
        itemSelector: '.item'
    });

    $('.portfolio-menu ul li').click(function () {
        $('.portfolio-menu ul li').removeClass('active');
        $(this).addClass('active');


        var selector = $(this).attr('data-filter');
        $('.portfolio-item').isotope({
            filter: selector
        })
        return false;
    });
});



//    <!--    counter-js-script-->
$('.counting').each(function () {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({
        countNum: $this.text()
    }).animate({
            countNum: countTo
        },

        {

            duration: 8500,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
                //alert('finished');
            }

        });


});

//
//        $(".about-us-wrap").scroll(function() {
//            alert("ok");
//            $('.counting').each(function() {
//                var $this = $(this),
//                    countTo = $this.attr('data-count');
//
//                $({
//                    countNum: $this.text()
//                }).animate({
//                        countNum: countTo
//                    },
//
//                    {
//
//                        duration: 8500,
//                        easing: 'linear',
//                        step: function() {
//                            $this.text(Math.floor(this.countNum));
//                        },
//                        complete: function() {
//                            $this.text(this.countNum);
//                            //alert('finished');
//                        }
//
//                    });
//
//
//            });
//        });


//    <!--    banner-part-->
//        $('#owl-carousel1').owlCarousel({
//            loop: true,
//            margin: 10,
//            dots: false,
//            nav: true,
//            mouseDrag: false,
//            autoplay: true,
//            autoplayTimeout: 6000,
//            animateOut: 'slideOutUp',
//            responsive: {
//                0: {
//                    items: 1
//                },
//                600: {
//                    items: 1
//                },
//                1000: {
//                    items: 1
//                }
//            }
//        });

//    <!--    testimonial-part-->
$('#owl-carousel3').owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 20,
    loop: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        768: {
            items: 2,
            nav: false
        },
        992: {
            items: 3,
            nav: false,
            loop: true
        }
    }
})

//    <!--    blog-part-->
$('.owl-carousel2').owlCarousel({
    autoplay: true,
    autoplayTimeout: 4000,
    margin: 15,
    loop: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        768: {
            items: 1,
            nav: false
        },
        992: {
            items: 2,
            nav: false,
            loop: true
        }
    }
})

//    <!--    sticky-header-script-->
$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('.header').addClass("sticky");
    } else {
        $('.header').removeClass("sticky");
    }
});


//    <!--    nice-select-->
$(document).ready(function () {
    $('select').niceSelect();
});




// Datepicker Config
//$.noConflict();
$(document).ready(function () {
    $(".check-in").datepicker({
        dateFormat: "d MM yy",
        duration: "medium"
    });
    $(".check-out").datepicker({
        dateFormat: "d MM yy",
        duration: "medium"
    });
});

// $.noConflict();
// jQuery(document).ready(function($) {
// $("#datepicker").datepicker();
// });

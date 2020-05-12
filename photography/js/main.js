//------- Mobile Nav  js --------//  

if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
        id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
        'class': '',
        'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fas fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="lnr lnr-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function (e) {
        $(this).next().toggleClass('menu-item-active');
        $(this).nextAll('ul').eq(0).slideToggle();
        $(this).toggleClass("lnr-chevron-up lnr-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function (e) {
        $('body').toggleClass('mobile-nav-active');
        $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
        $('#mobile-body-overly').toggle();
    });

    $(document).click(function (e) {
        var container = $("#mobile-nav, #mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            if ($('body').hasClass('mobile-nav-active')) {
                $('body').removeClass('mobile-nav-active');
                $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                $('#mobile-body-overly').fadeOut();
            }
        }
    });
} else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
}

//------- Smooth Scroll  js --------//  

$('.nav-menu a, #mobile-nav a, .scrollto').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        if (target.length) {
            var top_space = 0;

            if ($('#header').length) {
                top_space = $('#header').outerHeight();

                if (!$('#header').hasClass('header-fixed')) {
                    top_space = top_space;
                }
            }

            $('html, body').animate({
                scrollTop: target.offset().top - top_space
            }, 1500, 'easeInOutExpo');

            if ($(this).parents('.nav-menu').length) {
                $('.nav-menu .menu-active').removeClass('menu-active');
                $(this).closest('li').addClass('menu-active');
            }

            if ($('body').hasClass('mobile-nav-active')) {
                $('body').removeClass('mobile-nav-active');
                $('#mobile-nav-toggle i').toggleClass('lnr-times lnr-bars');
                $('#mobile-body-overly').fadeOut();
            }
            return false;
        }
    }
});

$(document).ready(function () {

    $('html, body').hide();

    if (window.location.hash) {

        setTimeout(function () {

            $('html, body').scrollTop(0).show();

            $('html, body').animate({

                scrollTop: $(window.location.hash).offset().top - 108

            }, 1000)

        }, 0);

    } else {

        $('html, body').show();

    }

});

//------- Header Scroll Class  js --------//  

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
    } else {
        $('#header').removeClass('header-scrolled');
    }
});

//-------Owl carousel --------//  

var changeSlide = 4; // mobile -1, desktop + 1
// Resize and refresh page. slider-two slideBy bug remove
var slide = changeSlide;
if ($(window).width() < 600) {
    var slide = changeSlide;
    slide--;
} else if ($(window).width() > 999) {
    var slide = changeSlide;
    slide++;
} else {
    var slide = changeSlide;
}
$(document).ready(function () {
    $('#one').owlCarousel({
        nav: true,
        items: 1,
    })
    $('#two').owlCarousel({
        nav: true,
        margin: 10,
        mouseDrag: true,
        touchDrag: true,
        responsive: {
            0: {
                items: changeSlide - 1,
                slideBy: changeSlide - 1
            },
            600: {
                items: changeSlide,
                slideBy: changeSlide
            },
            1000: {
                items: changeSlide + 1,
                slideBy: changeSlide + 1
            }
        }
    })
    var owl = $('#one');
    owl.owlCarousel();
    owl.on('translated.owl.carousel', function (event) {
        $(".right").removeClass("nonr");
        $(".left").removeClass("nonl");
        if ($('.one .owl-next').is(".disabled")) {
            $(".slider .right").addClass("nonr");
        }
        if ($('.one .owl-prev').is(".disabled")) {
            $(".slider .left").addClass("nonl");
        }
        $('.slider-two .item').removeClass("active");
        var c = $(".slider .owl-item.active").index();
        $('.slider-two .item').eq(c).addClass("active");
        var d = Math.ceil((c + 1) / (slide)) - 1;
        $(".slider-two .owl-dots .owl-dot").eq(d).trigger('click');
    })
    $('.right').click(function () {
        $(".slider .owl-next").trigger('click');
    });
    $('.left').click(function () {
        $(".slider .owl-prev").trigger('click');
    });
    $('.slider-two .item').click(function () {
        var b = $(".item").index(this);
        $(".slider .owl-dots .owl-dot").eq(b).trigger('click');
        $(".slider-two .item").removeClass("active");
        $(this).addClass("active");
    });
    var owl2 = $('#two');
    owl2.owlCarousel();
    owl2.on('translated.owl.carousel', function (event) {
        $(".right-t").removeClass("nonr-t");
        $(".left-t").removeClass("nonl-t");
        if ($('.two .owl-next').is(".disabled")) {
            $(".slider-two .right-t").addClass("nonr-t");
        }
        if ($('.two .owl-prev').is(".disabled")) {
            $(".slider-two .left-t").addClass("nonl-t");
        }
    })
    $('.right-t').click(function () {
        $(".slider-two .owl-next").trigger('click');
    });
    $('.left-t').click(function () {
        $(".slider-two .owl-prev").trigger('click');
    });
});

//-------Owl carousel --------//  

var changeSlide = 4; // mobile -1, desktop + 1
// Resize and refresh page. slider-two slideBy bug remove
var slide = changeSlide;
if ($(window).width() < 600) {
    var slide = changeSlide;
    slide--;
} else if ($(window).width() > 999) {
    var slide = changeSlide;
    slide++;
} else {
    var slide = changeSlide;
}
$(document).ready(function () {
    $('#three').owlCarousel({
        nav: true,
        items: 1,
    })
    $('#four').owlCarousel({
        nav: true,
        margin: 10,
        mouseDrag: true,
        touchDrag: true,
        responsive: {
            0: {
                items: changeSlide - 1,
                slideBy: changeSlide - 1
            },
            600: {
                items: changeSlide,
                slideBy: changeSlide
            },
            1000: {
                items: changeSlide + 1,
                slideBy: changeSlide + 1
            }
        }
    })
    var owl = $('#three');
    owl.owlCarousel();
    owl.on('translated.owl.carousel', function (event) {
        $(".right").removeClass("nonr");
        $(".left").removeClass("nonl");
        if ($('.one .owl-next').is(".disabled")) {
            $(".slider .right").addClass("nonr");
        }
        if ($('.one .owl-prev').is(".disabled")) {
            $(".slider .left").addClass("nonl");
        }
        $('.slider-two .item').removeClass("active");
        var c = $(".slider .owl-item.active").index();
        $('.slider-two .item').eq(c).addClass("active");
        var d = Math.ceil((c + 1) / (slide)) - 1;
        $(".slider-two .owl-dots .owl-dot").eq(d).trigger('click');
    })
    $('.right').click(function () {
        $(".slider .owl-next").trigger('click');
    });
    $('.left').click(function () {
        $(".slider .owl-prev").trigger('click');
    });
    $('.slider-two .item').click(function () {
        var b = $(".item").index(this);
        $(".slider .owl-dots .owl-dot").eq(b).trigger('click');
        $(".slider-two .item").removeClass("active");
        $(this).addClass("active");
    });
    var owl2 = $('#four');
    owl2.owlCarousel();
    owl2.on('translated.owl.carousel', function (event) {
        $(".right-t").removeClass("nonr-t");
        $(".left-t").removeClass("nonl-t");
        if ($('.two .owl-next').is(".disabled")) {
            $(".slider-two .right-t").addClass("nonr-t");
        }
        if ($('.two .owl-prev').is(".disabled")) {
            $(".slider-two .left-t").addClass("nonl-t");
        }
    })
    $('.right-t').click(function () {
        $(".slider-two .owl-next").trigger('click');
    });
    $('.left-t').click(function () {
        $(".slider-two .owl-prev").trigger('click');
    });
});

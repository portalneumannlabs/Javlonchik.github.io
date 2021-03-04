$(function () {

    $('.slider__inner, .news__slider-inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false
    });

    //========================

    $('select').styler();

    //========================

    $('.header__btn-menu').on('click', function () {
        $('.menu ul').slideToggle();
    })


    //========================

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1200) {
            $('.to-top').fadeIn();
        } else {
            $('.to-top').fadeOut();
        }
    })

    $('.to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 2000)
    });


    //========================

    var $nav = $('.header__content-inner');
    var $header = $('header');
    // console.log(scrollY);
    var flag = false;

    function fixedNav() {
        if (scrollY >= $header.innerHeight() && !flag) {
            $nav.addClass('fixed-top').css('opacity', 0).animate({
                opacity: 1,
            }, 500);
            $nav.css('background-color', "white");
            flag = true;
        } else if (scrollY < $header.innerHeight() && flag) {
            $nav.animate({
                opacity: 0,
            }, 500, function () {
                $nav.removeClass('fixed-top').css('opacity', 1).animate({
                    opacity: 1,
                }, 200);
            });
            $nav.css('background-color', "transparent");
            flag = false;
        }
    }

    $(window).on('scroll', fixedNav)
    fixedNav();

    //========================

    var $links = $('.menu ul li a');
    $links.click(function (e) {
        e.preventDefault();
        $links.parent().removeClass('active');
        $(this).parent().addClass('active');

        var $id = $(this).attr('href');
        var $target = $($id).offset().top - 50;

        $('html, body').animate({
            scrollTop: $target,
        }, 1000)
    })


})
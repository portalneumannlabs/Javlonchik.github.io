$(document).ready(function() {
    var $nav = $('nav');
    var $header = $('header');
    // console.log(scrollY);
    var flag = false;
    
    function fixedNav() {
        if(scrollY >= $header.innerHeight() && !flag){
            $nav.addClass('fixed-top').css('opacity', 0).animate({
                opacity: 1,
            }, 500);
            $nav.css('background-color', 'black');
            flag = true;
        }
        else if(scrollY < $header.innerHeight() && flag){
            $nav.animate({
                opacity: 0,
            }, 1000, function() {
                $nav.removeClass('fixed-top').css('opacity', 1)
            });
            $nav.css('background-color', 'transparent');
            flag = false;
        }
    }
    
    $(window).on('scroll', fixedNav)
    fixedNav();
    
    
    $(window).scroll(function() {
        console.log($(this).scrollTop());
        if($(this).scrollTop() > 1500){
            $('.to-top').fadeIn();
        }
        else{
            $('.to-top').fadeOut();
        }
    })
    
    $('.to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0,
        }, 1000)
    })
    
});
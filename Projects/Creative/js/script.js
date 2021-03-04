$(document).ready(function(){
    $(window).scroll(function(){
        console.log($(this).scrollTop());
        if($(this).scrollTop() > 1500){
            $('.to-top').fadeIn();
        }
        else{
            $('.to-top').fadeOut();
        }
    })
    
    $('.to-top').click(function(){
        $('html').animate({
            scrollTop: 0
        }, 2000)
    })
    
    // ===========================================
    
    var $links = $('.navbar-nav li a')
    $links.click(function(e) {
        e.preventDefault();
        $links.removeClass('active');
        var id = $(this).addClass('active').attr('href');
        var $target = $(id).offset().top - 87;
        
        $('html, body').animate({
            scrollTop: $target,
        }, 1000)
    })
    
    $(window).scroll(function() {
        var scroll = $(this).scrollTop();
        
        $links.each(function() {
            var target = $(this).attr('href');
            var selector = $(target).offset().top - 150;
            
            if(scroll >= selector){
                $links.removeClass('active');
                $(this).addClass('active');
            }
        })
    })
    
    
    
})
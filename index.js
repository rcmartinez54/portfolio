

function fadeInIntro () {
    $('.hero-container h1').fadeIn(500, function () {
        $('.hero-container h2').delay(1000).fadeIn(500);
    });
}

function fadeNavOnScroll() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 30) {
            $('#header').fadeOut(400);
        } else {
            $('#header').fadeIn(400);
        }
    });
}

function smoothScroll() {
    $('.links').find('a').click(function() {
        let $href = $(this).attr('href');
        let $anchor = $('#'+href).offset();
        $('body').animate({ scrollTop: $anchor.top }, 3000);
        return false;
    });
}

$('a[href^="#"]').on('click', function(event) {

    let target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});
    
function handler () {
    fadeInIntro();
    fadeNavOnScroll();
    smoothScroll();
}

$(handler);
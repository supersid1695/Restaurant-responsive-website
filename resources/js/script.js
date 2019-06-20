$(document).ready(function () {
    // stickky nav bar
    $('.jq-section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky-nav');
        } else {
            $('nav').removeClass('sticky-nav');
        }
    }, {
        offset: '60px;'
    });

    //Scrool on click
    $('.jq-scroll-to-plans').click(function () {
        $('html, body').animate({
            scrollTop: $('.jq-section-plans').offset().top
        }, 1000);
    })

    $('.jq-scroll-to-start').click(function () {
        $('html, body').animate({
            scrollTop: $('.jq-section-features').offset().top
        }, 1000);
    })

    // Navigation scrool
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });


    // Animation
    //animation for features
    $('.jq-wp-1').waypoint(function (direction) {
        $('.jq-wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    //animation for phone image
    $('.jq-wp-2').waypoint(function (direction) {
        $('.jq-wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    //animation for cities
    $('.jq-wp-3').waypoint(function (direction) {
        $('.jq-wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    //animation for plan
    $('.jq-wp-4').waypoint(function (direction) {
        $('.jq-wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });


    // Nav mobile icon
    $('.jq-nav-icon').click(function (direction) {
        var nav = $('.jq-main-nav');
        var icon = $('.jq-nav-icon i');
        nav.slideToggle(200);

        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }else {
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
        }

    });

    // Mobile navigation
});
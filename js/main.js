$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 30,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 3
        },
        992: {
            items: 5
        }
    }
});

$(function () {
    $(window).scroll(function () {
        var winTop = $(window).scrollTop();
        if (winTop >= 30) {
            $(".navbar").addClass("sticky-header");
        } else {
            $(".navbar").removeClass("sticky-header");
        }
    })
})






//material contact form animation
var floatingField = $('.material-form .floating-field').find('.form-control');
var formItem = $('.material-form .input-block').find('.form-control');

//##case 1 for default style
//on focus
formItem.focus(function () {
    $(this).parent('.input-block').addClass('focus');
});
//removing focusing
formItem.blur(function () {
    $(this).parent('.input-block').removeClass('focus');
});

//##case 2 for floating style
//initiating field
floatingField.each(function () {
    var targetItem = $(this).parent();
    if ($(this).val()) {
        $(targetItem).addClass('has-value');
    }
});

//on typing
floatingField.blur(function () {
    $(this).parent('.input-block').removeClass('focus');
    //if value is not exists
    if ($(this).val().length == 0) {
        $(this).parent('.input-block').removeClass('has-value');
    } else {
        $(this).parent('.input-block').addClass('has-value');
    }
});




$(document).ready(function () {
    $('.menu-toggler').on('click', function() {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function() {
        $('.menu-toggler').toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('nav a[href*="#"]').on('click', function() {
        $('html, body').animate( {
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1000);
    });

    $('#up').on('click', function() {
        $('html, body').animate( {
            scrollTop: 0
        }, 1000);
    });

    $(document).ready(function () {
        $('.submit').click(function (event){
            event.preventDefault()
            console.log('Clicked Button')

            var name = $('.name').val()
            var email = $('.email').val()
            var message = $('.message').val()
            var statusElm = $('.status')
            statusElm.empty()

            if(email.length > 5 && email.includes('@') && email.includes('.')) {
                statusElm.append('<div>Email is valid.</div>')
            } else {
                statusElm.append('<div>Email is invalid.</div>')
            }

            if(name.length > 2) {
                statusElm.append('<div>Name is not valid.</div>')
            } else {
                statusElm.append('<div>Name is not valid.</div>')
            }
            if(message.length > 10) {
                statusElm.append('<div>Message length is valid.</div>')
            } else {
                statusElm.append('<div>Message length is not valid.</div>')
            }
        })
    })

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    })

    
});
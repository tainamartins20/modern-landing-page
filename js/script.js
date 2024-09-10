


$('nav.desktop a').hover(function() {
    $('nav li').removeClass('selected');
    $(this).parent().addClass('selected');
})

$('nav.mobile img').click(function() {
    $('ul.nav-mobile').slideToggle();
})
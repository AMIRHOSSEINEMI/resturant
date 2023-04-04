$('.foo-slider').slick({dots:true});
$('.foo-slider-2').slick({
dots:false,
fade:true,
speed:1000,
cssEase : 'linear'
});

$('.foo-slider-3').slick({
    dots:true,
    slidesToShow: 2,
    slidesToScroll:2
});

$('.foo-slider-4').slick({
    dots:true,
    slidesToShow: 3, 
    centerMode : true,
});

$('.foo-slider-5').slick({
    dots : true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover:true,
    pouseOnFocous:true,
});

$('.foo-slider-6').slick({
    dots : true,
    slidesToShow: 3,
    speed : 200,
    infinite : false,
    appendArrows:$('#navigation-arrows'),
    appendDots:$('#navigation-dots'),
});


$(document).ready(function(){
    $('.program_box').slick({
        rows: 2,
        arrows:false,
        dots:true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        dotsClass : $('.p_control'),


    });
    $(".program_box .slick-slide.slick-active").attr("tabindex",'-1');
    $(".program_box .slick-slide.slick-current").attr("tabindex",'-1');
});
$(document).ready(function(){
    // 실시간정책순위
    var $suggest = $('.suggest');
    $suggest.slick({
        slide: 'a',
        slidesToShow : 1,
        slidesToScroll : 1,
        dots: false,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        loop : true,
        speed: 1000,
        autoplay: true,
    });

    //지원가능한사업
    new Swiper('.swiper-container', {
        slidesPerView: 5,
        loop : false,
        slidesOffsetBefore: 0,
        // loopAdditionalSlides : 1,
        spaceBetween: 30,
        // 스크롤바 loop 
        scrollbar : {
            el : '.swiper-scrollbar',
            draggable: false,
            dragSize: 40,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1704: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
            1400: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1110: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            840: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            550: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            200: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
       },
    });

    // 청년공간 m_slide2
    $('.m_slide2').slick({
        slide: 'a',
        slidesToShow : 1,
        slidesToScroll : 1,
        dots: false,
        // arrows: true,
        arrows: false,
        speed: 1000,
        autoplay: true,
    });
    $('.auto_control .btn').click(function(){
        if($(this).hasClass('stop')){
            $(this).removeClass('stop').addClass('play')
            $('.m_slide2').slick('slickPause');
        }else{
            $('.m_slide2').slick('slickPlay');
            $(this).removeClass('play').addClass('stop')
        }
    });

     // 알림존 m_slide3
     var helpers = {
        addZeros: function (n) {
            return (n < 10) ? '0' + n : '' + n;
        }
    };
    
    function sliderInit() {
        var $slider = $('.m_slide3');
        $slider.each(function() {
            var $sliderParent = $(this).parent();
            $(this).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            appendArrows: $('.alrArrows'),
            prevArrow: $('.alrPrev'),
            nextArrow: $('.alrNext'),    
        });
    
        if ($(this).find('.item').length > 1) {
          $(this).siblings('.slides-numbers').show();
        }
    
        $(this).on('afterChange', function(event, slick, currentSlide){
            $sliderParent.find('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1));
        });
    
        var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
        $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));
    
    });
        $('.alrPrev').click(function(){
            $(".m_slide3").slick('slickPrev');
        });

        $('.alrNext').click(function(){
            $(".m_slide3").slick('slickNext');
        });
        $('.alrcontrol').click(function(){
            if($(this).hasClass('stop')){
                $(this).removeClass('stop').addClass('play')
                $('.m_slide3').slick('slickPause');
            }else{
                $('.m_slide3').slick('slickPlay');
                $(this).removeClass('play').addClass('stop')
            }
        });

    };
    
    sliderInit();
});
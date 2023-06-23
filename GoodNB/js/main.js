$(document).ready(function(){
    // 메인슬라이더
    $('.main-slide').slick({
        rows: 1,
        infinite : true,
        slidesToShow : 1,
        slidesToScroll : 1,
        dots: true,
        dotsClass: 'custom-dots',
        draggable: true,
        accessibility: true
    });

    // 탭박스
    $(".conBox").hide();
    $(".tab_cont .conBox:first-child").show();
    $(".tap_tit > li >a").on('click', function(){
        $(".tap_tit > li").removeClass("on");
        $(this).parent().addClass("on");
        $(this).closest("ul").siblings().find(".conBox").hide();

        var activeTab = $(this).attr('rel');
        $("#"+activeTab).fadeIn();
        console.log(activeTab);

    })

    // 서브 슬라이드
    $('.sub_slide_box .slide').slick({
        rows: 1,
        infinite : true,
        slidesToShow : 4,
        slidesToScroll : 1,
        draggable: true,
        accessibility: true
    });

    /* quick_menu */

    $('.quick_menu > a').on('click', function(){
        if($('.quick_menu').hasClass('on')){
            $('.quick_menu').removeClass('on')

        }else{
            $('.quick_menu').addClass('on')

        }
    })


});

$(document).ready(function(){
    // 메인 슬라이드
    $('.main_slider').slick({
        slide: 'a',
        rows: 1,
        arrows: true,
        dots: true,
        appendDots: $('#dots'),
        slidesToShow : 1,
        slidesToScroll : 1,
        infinite : true,
        adaptiveHeight: true,
        dotsClass: 'dots_custom',
    });
    $('.play').click(function(){
        $('.main_slider').slick('slickPlay');
    });
     
    $('.stop').click(function(){
        $('.main_slider').slick('slickPause');
    });

    // 실시간 순위 슬라이드
    $('.rank_slide').slick({
        slide: 'a',
        rows: 1,
        slidesToShow : 2,
        slidesToScroll : 2,
        arrows: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });

    // 탭메뉴 여러개일때 필요
    /* $('.tab_btn').click(function(){
        var $this = $(this);
        var index = $this.index();
        
        $this.addClass('active');
        $this.siblings('button.active').removeClass('active');
        
        var $outer = $this.closest('.tab_content');
        var $current = $outer.find(' > .tabs > .tab.active');
        var $post = $outer.find(' > .tabs > .tab').eq(index);
        
        $current.removeClass('active');
        $post.addClass('active');
        // 위의 코드는 탭메뉴 코드입니다.
        
        $('.tab_slider').slick('setPosition');
    }); */
    $('.tab_slider').slick({
        slide: 'a',
        slidesToShow : 6,
        slidesToScroll : 6,
        dots: true,
        dotsClass: 'tab-dots',
        infinite : false,
        initialSlide: 0,
        arrows: false,
        appendArrows: $('.tabArrows'),
        prevArrow: $('.tabPrev'),
        nextArrow: $('.tabNext'),
        responsive: [
            {
                breakpoint: 1401,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 381,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }

        ]
    });
    $('.tabPrev').click(function(){
        $('.tab_slider').slick('slickPrev');
    });

    $('.tabNext').click(function(){
        $('.tab_slider').slick('slickNext');
    });
    // data-type js
    const itemTab = document.querySelector('.buttons');
    const item = document.querySelectorAll('.item');

    itemTab.addEventListener('click', (e) => {
        handleEvent(e.target);
    });

    itemTab.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            handleEvent(e.target);
        }
    });

    function handleEvent(clickedElement) {
        const filter = clickedElement.dataset.filter;
            if (filter == null) {
                return;
            }

            $(".tab_slider").slick('slickUnfilter');

            if (['a', 'b', 'c', 'd', 'e'].includes(filter)) {
                $('.tab_slider').slick('slickFilter', '.' + filter);
                $('.item.slick-slide.slick-active').attr('tabindex','0');

            } else {
                $('.tab_slider').slick('slickUnfilter');
            }


            //tab_btn 클래스 추가
            if (clickedElement.classList.contains('tab_btn')) {
                clickedElement.classList.add('active');
            }

            //tab_btn 다른 요소들에서 클래스 제거
            const allElements = document.querySelectorAll('.tab_btn');
            allElements.forEach((element) => {
                if (element !== clickedElement) {
                    element.classList.remove('active');
                }
            });

    };

    // 충남 SNS 소식
     // 탭박스
    $(".conBox").hide();
    $(".conBox:first-child").show();
    $(".tap_tit > li >a").on('click', function(){
        $(".tap_tit li").removeClass("on");
        $(this).parent().addClass("on");
        $(this).closest("ul").siblings().find(".conBox").hide();

        var activeTab = $(this).attr('rel');
        $("#"+activeTab).fadeIn();
        console.log(activeTab);
    });

});

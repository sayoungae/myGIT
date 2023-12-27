
// 20231117
$(document).ready(function(){
    // textarea
    $(".resizeHght").on("input", function() {
        this.style.height = "auto";
        this.style.height = (this.scrollHeight) + "px";
    });
    /* header */
    $('.depth1 >li').mouseover(function(){
        var depi1 = $(this).index();
        $('.depth2_box').removeAttr('id');
        $('.depth2_box .depIn').removeClass('on');
        $('.depth2_box').attr('id','on' + depi1);
        $('.depth2_box .depIn').eq(depi1).addClass('on');
    });

    $('.depth1 >li').mouseleave(function(){
        $('.depth2_box').removeAttr('id');
        $('.depth2_box .depIn').removeClass('on');
    });

    $(".depth2").each(function() {
        if ($(this).next(".depth3").length > 0) {
            $("<span>+</span> ").appendTo($(this));
        }
    }).on('click keydown', function(e) {
        if (e.type === 'click' || (e.type === 'keyup' && e.key === 'Enter')) {
            $(this).find('span').each(function() {
                if ($(this).text() === "+") {
                    $(this).text('-');
                }else{
                    $(this).text('+');
                }
            });
            $(this).next().slideToggle(200);
        }
    });
    $('.depIn').mouseover(function(){
        var depi2 = $(this).index();
        $('.depth2_box').removeAttr('id');
        $('.depth2_box').attr('id','on' + depi2);
    });

    // gnb
    const gnb = $("#gnb");
    const dep1 = $('.depth1 >li >a');
    const depth2 = $('.depth2_box');

    $(dep1).on('mouseover focus', function(e) {
        if (!$('.search_btn').hasClass('on')) {
            navOpen();
        }
    });

    $(gnb).on('mouseleave', function(){
        if (!$('.search_btn').hasClass('on')) {
            navHide();
        }
    });
    $('#gnb a').focusout(function(){
        setTimeout(function(){
            if($('#gnb a:focus').length < 1){
                navHide();
            }
        },100);
    });
    $('.search_btn').on('click keydown', function(e) {
        if (e.type === 'click' || (e.type === 'keyup' && e.key === 'Enter')) {
            if($(this).hasClass('on')){
                searchHide();
            } else {
                searchOpen();
            }
        }
    });
    $('.totalSearch a').focusout(function(){
        setTimeout(function(){
            if($('.totalSearch a:focus').length < 1){
                $('.search_btn').focus();
            }
        },100);
    });
    function navOpen(){
        if (!$('.search_btn').hasClass('on')) {
            $(depth2).stop().slideDown(200);
            $('#wrap').addClass('pms');
        }
    }

    function navHide(){
        $(depth2).stop().slideUp(200);
        $('#wrap').removeClass('pms');
    }

    function searchOpen(){
        $('#wrap').addClass('pms');
        $('.totalSearch').stop().slideDown(200);
        $('.search_btn').addClass('on').attr('title','검색창 닫기');
        $('.search_btn').find('img').attr('src','./images/close_icon01.png');
        $('#fKeyword').focus();
    }

    function searchHide(){
        $('#wrap').removeClass('pms');
        $('.totalSearch').stop().slideUp(200);
        $('.search_btn').find('img').attr('src','./images/search_icon01.png')
        $('.search_btn').removeClass('on').attr('title','검색창 열기');
    }


    let focusedElBefore;
    const allMenu = $('.all_menu');
    const allMenuOpen = $('.hambur_box');

    allMenuOpen.on('click', openAllmenu);

    function openAllmenu() {
        $('.all_menu').fadeIn(0, function(){
            $('body').addClass('setAni');
        });

        focusedElBefore = document.activeElement;

        allMenu.on('keydown', trapTabKey);

        let allMenuClose = allMenu.find('.all_menu_close');
        allMenuClose.on('click', closeAllmenu);

        let focusableElString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
        let focusableEl = allMenu.find(focusableElString);
        focusableEl = Array.prototype.slice.call(focusableEl);

        let firstTabStop = focusableEl[0];
        let lastTabStop = focusableEl[focusableEl.length - 1];

        allMenu.css('display', 'block');

        firstTabStop.focus();

        function trapTabKey(e) {
            if (e.keyCode === 9) {

                if (e.shiftKey) {
                    if (document.activeElement === firstTabStop) {
                        e.preventDefault();
                        lastTabStop.focus();
                    }

                } else {
                    if (document.activeElement === lastTabStop) {
                        e.preventDefault();
                        firstTabStop.focus();
                    }
                }
            }

            // ESCAPE
            if (e.keyCode === 27) {
                closeModal();
            }
        }
    }

    function closeAllmenu() {
        $('body').removeClass('setAni');
        setTimeout(function(){
            $('.all_menu').stop().fadeOut(250);
        },400);

        focusedElBefore.focus();
    }

    // 모바일 전체 메뉴
    let $mobAllmenuTabBtn = $('.all_menu_inner > ul > li >a');
    $mobAllmenuTabBtn.on('click', function(e){
        if (window.innerWidth < 1025){
            $('.all_menu_inner > ul > li').removeClass('on');
            $(this).parent().addClass('on');
        }
    });

    /*  footer */
    $('.f_banner').slick({
        slide: 'a',
        slidesToShow : 5,
        slidesToScroll : 1,
        // 접근성 문제로 infinite false
        infinite : false,
        arrows: false,
        prevArrow: $('.f_banner_prev'),
        nextArrow: $('.f_banner_next'),
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
        ]
    });
    
   
    $('.f_banner_prev').click(function(){
        $('.f_banner').slick('slickPrev');
    });

    $('.f_banner_next').click(function(){
        $('.f_banner').slick('slickNext');
    });
    $('.f_play').click(function(){
        $('.f_banner').slick('slickPlay');
    });

    $('.f_stop').click(function(){
        $('.f_banner').slick('slickPause');
    });

    
    // popup
    $('.pop_close').on('click keydown', function(e) {
        if (e.type === 'click' || (e.type === 'keyup' && e.key === 'Enter')) {
            $('#popup_content').hide();
        }
    });

    // 공통 탭 tap1

    $(".conBox").hide();
    $(".conBox:first-child").show();
    $(".tap_tit > li >a").on('click', function(){
        $(this).parent().siblings().removeClass("on");
        $(this).parent().addClass("on");
        $(this).closest("ul").siblings().find(".conBox").hide();

        var activeTab = $(this).attr('rel');
        $("#"+activeTab).fadeIn();

        // 메인, 청년생활꿀팁 탭+슬라이드
        $('.tab_in_slide').slick('setPosition');
    });

    // tap2
    $(".conBox").hide();
    $(".conBox:first-child").show();
    $(".chk_tap_tit > li >a").on('click', function(){
        $(this).parent().siblings().removeClass("on");
        $(this).parent().addClass("on");
        $(this).closest("ul").siblings().find(".conBox").hide();

        var activeTab = $(this).attr('rel');
        $("#"+activeTab).fadeIn();

    });

    // 통합검색
    $('.tabmenu >a').on('click keydown', function(e) {
        if (e.type === 'click' || (e.type === 'keyup' && e.key === 'Enter')) {
            $(".tabs >li").removeClass("on");
		    $(this).parent().addClass("on");
            let activeTab = $(this).parent().attr('data-tab');
            $.ajax({
                type: 'GET',
                url: activeTab+".html",
                dataType: "html",
                error: function (request, status, error) {
                    alert("통신오류!");
                },
                success: function (data) {
                    $('#tabcontent').html(data);
                }
            });
            // 접근성 head titlt
            let headTit = $(this).text();
            document.title = `다이나믹충남청년 < 통합검색 < ${headTit}`;
        }
    });
    
    // rank_tab
    $(".rank").hide();
    $(".cont_box > .rank:nth-child(1)").show();
    $(".rank_tab").on('click', function(){
        $(".rank_tab").removeClass("on");
        $(".rank").hide();
        var activeTab = $(this).attr('rel');
        $("#"+activeTab).fadeIn();
    });

});
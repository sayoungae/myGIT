
// 20231026
$(document).ready(function(){
    // textarea
    $(".resizeHght").on("input", function() {
        this.style.height = "auto";
        this.style.height = (this.scrollHeight) + "px";
    });
    /* header */
    // gnb
    let dep1 = $('.depth1 >li >a');

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

    $('.depth2_box').mouseleave(function(){
        $('#wrap').removeClass('pms');
        $('.depth2_box').stop().slideUp(200);
    });

    $('#gnb a').focusout(function(){
        setTimeout(function(){
            if($('#gnb a:focus').length < 1){
                $('#wrap').removeClass('pms');
                $('.depth2_box').stop().slideUp(200);
            }
        },100);
    });

    dep1.bind('focus mouseover',function(){
        var ww = window.innerWidth;
        var isSearchBtnOn = $('.search_btn').hasClass('on');
        var navShowHandler = function() {
            $('#wrap').addClass('pms');
            $('.depth2_box').stop().slideDown(200);
            $(this).addClass('on');
        };
        var searchOff = function() {
            $('.totalSearch').slideUp(200);
            $('.search_btn').find('img').attr('src','/chnYouth/images/search_icon01.png')
            $('.search_btn').removeClass('on').attr('title','검색창 열기');
            $('.depth2_box').stop().slideDown(200);
        };

    	if (ww > 1650){
			if (! $('#wrap').hasClass('pms')){
                $(dep1).on('focus mouseover', navShowHandler);
			}
            else if($('.search_btn').hasClass('on')){
                $(dep1).on('focus mouseover', searchOff);
            }
		}

        if(ww > 1024){
            if($('.search_btn').hasClass('on')){
                $('.depth2_box').hide();
            }else{
                $('#wrap').addClass('pms');
                $('.depth2_box').stop().slideDown(200);
                $(this).addClass('on');
            }
        }
	});

    // totalSearch open
    $('.search_btn').on('click keydown', function(e) {
        if (e.type === 'click' || (e.type === 'keyup' && e.key === 'Enter')) {
            $('.depth2_box').hide();
            if(!$(this).hasClass('on')){
                $('#wrap').addClass('pms');
                $('.totalSearch').slideDown(200);
                $(this).attr('title','검색창 닫기').addClass('on');
                $(this).find('img').attr('src','./images/close_icon01.png');
                $('#fKeyword').focus();
            }else{
                $('#wrap').removeClass('pms');
                $('.totalSearch').slideUp(200);
                $(this).find('img').attr('src','./images/search_icon01.png')
                $('.search_btn').removeClass('on').attr('title','검색창 열기');
                $('#wrap').removeClass('pms');

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

     // all_menu open
    $('.nav_all').on('click keyup', function(e) {
        if (e.type === 'click' || (e.type === 'keyup' && e.key === 'Enter')) {
            openAllmenu();
        }
    });
     //  all_menu close
    $('.all_menu_close').on('click keyup', function(e) {
        if (e.type === 'click' || (e.type === 'keyup' && e.key === 'Enter')) {
            closeAllmenu();
        }
    });

    let $mobAllmenuTabBtn = $('.all_menu_inner > ul > li >a');
    $mobAllmenuTabBtn.on('click', function(e){
        if (window.innerWidth < 1250){
            $('.all_menu_inner > ul > li').removeClass('on');
            $(this).parent().addClass('on');
        }
    })
    
    function openAllmenu(){
        $('.all_menu').fadeIn(0, function(){ $('body').addClass('setAni'); });
    }
    function closeAllmenu(){
        $('body').removeClass('setAni');
        setTimeout(function(){$('.all_menu').stop().fadeOut(250)},400);
    }

    /*  footer */
    $('.f_banner').slick({
        slide: 'a',
        slidesToShow : 5,
        slidesToScroll : 1,
        infinite : true,
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
    $(".tabs").find("a").bind("click", function(){
		$(".tabs >li").removeClass("on");
		$(this).parent().addClass("on");
	})
    // rank_tab
    $(".rank").hide();
    $(".cont_box > .rank:nth-child(1)").show();
    $(".rank_tab").on('click', function(){
        $(".rank_tab").removeClass("on");
        $(".rank").hide();
        var activeTab = $(this).attr('rel');
        $("#"+activeTab).fadeIn();
        var ww = $(window).width();
    });

    
});
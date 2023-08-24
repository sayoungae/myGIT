$(document).ready(function(){
    /* header */
    // gnb
    let dep1 = $('.depth1 >li >a');
    dep1.bind('focus mouseover',function(){
		if (window.innerWidth > 480){
			if (! $('.header-menu').hasClass('pms')){
				$('.header-menu').addClass('pms');
				$('.depth1 > li').removeClass('on');
				$(this).next('.depth2').slideDown(200);
				$(this).parents('li').addClass('on');
				$("#wrap").addClass('Menu-bg');
			}else{
				$('.depth1 > li').removeClass('on');
				$(this).parents('li').addClass('on');
				$('.depth2').hide();
				$(this).next('.depth2').show();
			}
		}
	});
    $('.depth2').mouseleave(function(){        
        $('.depth1 >li').removeClass('on')
        $('.depth2').stop().slideUp(200);
    });
    dep1.focusout(function(){
        setTimeout(function(){
            if($('.depth1 a:focus').length < 1){
                $(".depth1 > li").removeClass('on');
                $(".depth2").removeClass('on');
                $(".depth2").slideUp(200);
            }
        },100);
	});

    // totalSearch open
    $('.search_btn').on('click keydown', function(e) {
        if (e.type === 'click' || (e.type === 'keyup' && e.key === 'Enter')) {
            $('.totalSearch').slideDown(200);
            $('#fKeyword').focus();
        }
    });
    // totalSearch close
    $('.search_form_close').on('click keyup', function(e) {
        if (e.type === 'click' || (e.type === 'keyup' && e.key === 'Enter')) {
            $('.totalSearch').slideUp(200);
            $('.search_btn').focus();
        }
    });
     // all_menu open
    $('.nav_all').on('click keyup', function(e) {
        if (e.type === 'click' || (e.type === 'keyup' && e.key === 'Enter')) {
            $('.all_menu').slideDown(200);
        }
    });
     //  all_menu close
    $('.all_menu_close').on('click keyup', function(e) {
        if (e.type === 'click' || (e.type === 'keyup' && e.key === 'Enter')) {
            $('.all_menu').slideUp(200);
        }
    });

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
});
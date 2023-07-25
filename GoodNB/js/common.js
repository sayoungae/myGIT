$(document).ready(function(){
    $(function () {
        screenResponse();
    });
 
    $(window).on('resize', function () {
            screenResponse();
        });
    
    
    function screenResponse(){
        let $html = $('html'),
        pc = matchMedia("screen and (min-width:1025px)").matches,
        mob =  matchMedia("screen and (max-width:600px)").matches;
    
        $html.removeAttr("class");
        
        if(pc){
            isPc = true;
            $html.addClass('pc');
            //이벤트    
        }else{
            isDesktop = false;
            $html.addClass("mob");
        }
        
        if(mob){
            isPhone = true;
            $('.main-slide').addClass('mob');
        }else{
            isPhone = false;
            $('.main-slide').removeClass('mob');
        }
    }
    // GNB
    const   dep1 = $('.depth1 > li >a'),
            dep2 = $('.depth2 >ul ');

    $('.depth2 >ul').hide();

    $(dep1).on('mouseenter focusin', function(){
        $('.depth1 > li').removeClass('on')
        $('.depth2').hide();
        $(dep2).hide();
        if(!$('.depth1').hasClass('pms')){
            $('.depth1').addClass('pms');

            $(this).siblings('.depth2').stop().slideDown(200);
            $(this).siblings('.depth2').find('ul').show();
            $(this).parent('li').addClass('on');

        }else{
            $(dep2).hide();
            $(this).siblings('.depth2').show();
            $(this).siblings('.depth2').find('ul').show();
            $(this).parent('li').removeClass('on');
        }
    });

    $('#gnb').on('mouseleave', function(){
        $('.depth2').stop().slideUp(200);
        $('.depth1').removeClass('pms');
        $('.depth1 >li').removeClass('on');
    });

    $('#gnb').find($('.dona-area')).find('li:last-child >a').on('focusout',function(){
        $('.depth1').removeClass('pms');
        $('.depth2').stop().slideUp(200);
        $('.depth1 > li').removeClass('on')
    })


    // mob_gnb
    $(".hamburger-box").click(function(){
        $(".hamburger").toggleClass("is-active");
        if( $(".hamburger").hasClass("is-active")){
            $(".mob_nav").addClass("on")
        }else{
            $(".mob_nav").removeClass("on")
        }
    });

    $(".m_depth1 >li > a").click(function(){
        $(".m_depth2").stop().slideUp(200);
        if($(this).hasClass("on")){
            $(this).removeClass("on").next(".m_depth2").stop().slideUp(200);
        }else{
            $(this).addClass('on').next(".m_depth2").stop().slideDown(200);

        }

    })


    // footer
    $('input[type="text"] , input[type="checkbox"]').keydown(function(event) {
        if (event.keyCode === 13) {
          event.preventDefault();
        };
      });

})
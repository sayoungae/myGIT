$(document).ready(function(){

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
            $(this).parent('li').addClass('on');
        }
    });

    $('#gnb').on('mouseleave ', function(){
        $('.depth2').stop().slideUp(200);
        $('.depth1').removeClass('pms');
    });

    $('#gnb').find($('.dona-area')).find('div:last-child >a').focusout(function(){
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
            $(this).addClass("on").next(".m_depth2").stop().slideUp(200);
        }else{
            $(this).addClass("on").next(".m_depth2").stop().slideDown(200);

        }

    })


    // footer
    $('input[type="text"] , input[type="checkbox"]').keydown(function(event) {
        if (event.keyCode === 13) {
          event.preventDefault();
        };
      });

})
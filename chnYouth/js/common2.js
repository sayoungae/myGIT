window.onload = function(){
    // 메인배너
    $('.main_slide').slick({
      slide: 'a',
      rows: 1,
      slidesToShow : 3,
      slidesToScroll : 1,
      dots: true,
      dotsClass: 'dots_custom',
      arrows: true,
    });

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

    // #main-f4 
    $('.tab_tit2 >li >a').on('click', function(){
      $(".tab_tit2 >li ").removeClass("on");
      $(this).parent().addClass("on");
      $(this).closest("ul").siblings().find(".conBox").hide();

      var activeTab = $(this).attr('rel');
      $("#"+activeTab).fadeIn();
      console.log(activeTab);
    })

    $('.tab_menu .list > li >a').on('click', function(){
      $(this).parent().siblings().removeClass('is_on');
      $(this).parent().addClass('is_on');

    })

    // 공지사항
    $('.noti_slide').slick({
      slide: 'a',
      rows: 1,
      slidesToShow : 1,
      slidesToScroll : 1,
      arrows: true,
      vertical: true,
      
    });

    // 달력
    document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: 'dayGridMonth'
        });
        calendar.render();
        
      });
}
// 수정: 20231226
$(document).ready(function(){
    // sub_nav_wrap
    $(".deapth_tit").each(function() {
        if ($(this).next(".deapth_inner").length > 0) {
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

    //share_link_box
    $('.share_link_box > a').on('click keydown', function(e) {
        if (e.type === 'click' || (e.type === 'keyup' && e.key === 'Enter')) {
            if(!$('.share_link_box').hasClass('on')){
                $('.share_link_box').addClass('on')
                $('.share_link_box.on > a >img').attr('src','../images/share_close01.png')
            }else{
                $('.share_link_box').removeClass('on');
                $('.share_link_box > a >img').attr('src','../images/share_icon01.png')

            }
        }
    });
    // sub1 맞춤형 청년정책
    $('.dtld_btn').on('click keydown', function(e) {
        if (e.type === 'click' || (e.type === 'keyup' && e.key === 'Enter')) {
            if(!$('.dtld_btn').hasClass('on')){
                $(this).addClass('on').attr('title','상세검색 닫기');
                $(this).find('span').text('상세검색 닫기');
                $('.detail_src_in').slideDown(300);
            }else{
                $(this).removeClass('on').attr('title','상세검색 열기');
                $(this).find('span').text('상세검색 열기');
                $('.detail_src_in').slideUp(300);
            }
        }
    });
    // 전체선택
    $(".mySlct").on("click", ".chkAll", function () {
        $(this).parents(".mySlct").find('input').prop("checked", $(this).is(":checked"));
    });

    // 개별 선택
    $(".mySlct").on("click", ".chkN", function() {
        var is_checked = true;

        $(".mySlct .chkN").each(function(){
            is_checked = is_checked && $(this).is(":checked");
        });

        $(this).parent().siblings().find(".chkAll").prop("checked", is_checked);
    });
    // sub1 베스트청년정책
    var titl=$(".cyp_wet_in .weekly_result .desc_box .tit >span");
    $(titl).each(function() {
        var content = $(this).text();
        if (content === '주거') {
            $(this).css('backgroundColor','#20B361');
        }
        else if (content === '교육') {
            $(this).css('backgroundColor','#A062E0');
        }
        else if (content === '영농교육'){
            $(this).css('backgroundColor','#F19300');
        }
        else if (content === '문화지원'){
            $(this).css('backgroundColor','#F450B8');
        }
        else {
            // 일자리
            $(this).css('backgroundColor','#5C79E5');
        }
    });

    // sub1 생애주기별정책
    $('.chk_tap_btn').on('click keydown', function(e) {
        if (e.type === 'click' || (e.type === 'keyup' && e.key === 'Enter')) {
            if(!$(this).hasClass('on')){
                $(this).addClass('on');
                $(this).attr('title','열림');
                $(this).parent().siblings('.bott_con').slideDown(300);
            }else{
                $(this).removeClass('on');
                $(this).attr('title','닫힘');
                $(this).parent().siblings('.bott_con').slideUp(300);
            }
        }
    });

    $('.list > li').hide();
    $(".list > li").slice(0, 10).css("display", "block");
    $('#pageMore').on('click keydown', function(e) {
        if (e.type === 'click' || (e.type === 'keyup' && e.key === 'Enter')) {
            e.preventDefault();
            var $itemsToDisplay = $(".list > li:hidden").slice(0, 10);
            $itemsToDisplay.show(200);
            if ($itemsToDisplay.length < 11) {
                $itemsToDisplay.first().find('a').focus();
                $(this).hide();
            }
        }
    });
    // 썸네일-상세보기
    $('.tagBg').each(function(){
        // 모집예정
        if ($(this).hasClass('plan')) {
            $(this).find('.tags > span:first-child').css('backgroundColor','#53A5E5').text('모집예정');
        }else if($(this).hasClass('requl')){
            // 상시
            $(this).find('.tags > span:first-child').css('backgroundColor','#F55D13').text('상시');
        }else if($(this).hasClass('fini')){
            // 마감
            $(this).find('.tags > span:first-child').css('backgroundColor','#999').text('마감');
        }
    })

    // 나의정책저장
    $('.add_tm >a').on('click keydown', function(e) {
        if (e.type === 'click' || (e.type === 'keyup' && e.key === 'Enter')) {
            if(!$('.add_tm >a').hasClass('added')){
                $(this).addClass('added');
            }else{
                $(this).removeClass('added');
            }
        }
    });

    // sub2
    $('.addClassOn').on('click keydown', function(e) {
        if (e.type === 'click' || (e.type === 'keyup' && e.key === 'Enter')) {
            $(this).addClass('on').siblings().removeClass('on');
        }
    });

    // sub3
    // 청년 재무상담

    $('.sldBox').on('click keydown', function(e) {
        if (e.type === 'click' || (e.type === 'keyup' && e.key === 'Enter')) {
            if(!$(this).parent('.fnc_box').hasClass('on')){
                $(this).parent('.fnc_box').addClass('on').find('.under').stop().slideDown(300);
            }else{
                $(this).parent('.fnc_box').removeClass('on').find('.under').stop().slideUp(300);
            }
        }
    });
    $('.fnc_box.on .under').show();

    $('.opnSld').on('click keydown', function(e) {
        if (e.type === 'click' || (e.type === 'keyup' && e.key === 'Enter')) {
            if(!$(this).hasClass('on')){
                $(this).addClass('on');
                $(this).parent().next('.terms_desc').stop().slideDown(300);
            }else{
                $(this).removeClass('on');
                $(this).parent().next('.terms_desc').stop().slideUp(300);
            }
        }
    })
    // 체크박스 전체 선택
    $("#fnc_step2").on("click", "#q2_all", function () {
        $(this).parents("#fnc_step2").find('input').prop("checked", $(this).is(":checked"));
    });

    // 체크박스 개별 선택
    $("#fnc_step2").on("click", ".q2", function() {
        var is_checked = true;

        $("#fnc_step2 .q2").each(function(){
            is_checked = is_checked && $(this).is(":checked");
        });

        $("#q2_all").prop("checked", is_checked);
    });

    // FAQ 탭박스
    $(".conBox").hide();
    $(".conBox:first-child").show();
    $(".tap_tit > li >a").on('click', function(){
        $(this).parent().siblings().removeClass("on");
        $(this).parent().addClass("on");
        $(this).closest("ul").siblings().find(".conBox").hide();

        var activeTab = $(this).attr('rel');
        $("#"+activeTab).fadeIn();

        $('.tab_in_slide').slick('setPosition');
    });


    // faq
    $('.faq_tab_box .tab_inner a').on('click keydown', function(e) {
        if (e.type === 'click' || (e.type === 'keyup' && e.key === 'Enter')) {
            if(!$(this).hasClass('on')){
                $(this).addClass('on');
                $(this).find('.answr').slideDown(200);
            }else{
                $(this).removeClass('on');
                $(this).find('.answr').slideUp(200);
            }
        }
    });

    // 설문조사 - 개인정보 수집
    $('.opne_tb').on('click keydown', function(e) {
        if (e.type === 'click' || (e.type === 'keyup' && e.key === 'Enter')) {
            $('.pInfo_tbl').slideToggle(200);
        }
    })
    // 마이페이지
    var mbrInfoTapTit = $(".info_tab_box .tap_tit > li >a");
    var mbrInfoTit = $(".mbr_info > h3")
    $(mbrInfoTapTit).on('click keydown', function(e) {
        if (e.type === 'click' || (e.type === 'keyup' && e.key === 'Enter')) {
            var newTit = $(this).text();
            mbrInfoTit.text(newTit);
        }
    });    
    // 마이페이지-관심분야
    // 전체 선택
    $(".myPol").on("click", ".chkAll", function () {
        $(this).parents(".myPol").find('input').prop("checked", $(this).is(":checked"));
    });

    // 개별 선택
    $(".myPol").on("click", ".chkN", function() {
        var is_checked = true;

        $(".myPol .chkN").each(function(){
            is_checked = is_checked && $(this).is(":checked");
        });

        $(this).parents(".myPol").find(".chkAll").prop("checked", is_checked);
    });
    // 마이페이지-회원탈퇴
    $('#wdrlBtn').attr('disabled',true);
    $("#agrChk").on("click", function() {
        var is_checked = true;

        if(is_checked = is_checked && $(this).is(":checked")){
            $('#wdrlBtn').attr('disabled',false);
        }else{
            $('#wdrlBtn').attr('disabled',true);
        }
    });
    $('#wdrlBtn').on('click keydown', function(e) {
        if (e.type === 'click' || (e.type === 'keyup' && e.key === 'Enter')) {
            $('.wdrlPop').show();
        }
    });
    $('#popup_content .cancel').on('click keydown', function(e) {
        if (e.type === 'click' || (e.type === 'keyup' && e.key === 'Enter')) {
            $(this).parents('#popup_content').hide();
        }
    });
    $('.wdrl_close').on('click keydown', function(e) {
        if (e.type === 'click' || (e.type === 'keyup' && e.key === 'Enter')) {
            $(this).parents('#popup_content').hide();
        }
    })

    // 청년지원정보,공간정보 상세보기
    $('.progre').each(function() {
        var content = $(this).text();
        if (content === '신청완료') {
            $(this).addClass('st2');
        }
        else if (content === '관리자보완요청') {
            $(this).addClass('st3');
        }
        else if (content === '게시완료'){
            $(this).addClass('st4');
        }
        else {
            $(this).addClass('st1');
        }

    })
})
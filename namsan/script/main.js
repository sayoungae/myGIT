window.onload = function(){
    /* $('#fullpage').fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        navigation: true,
        navigationPosition: 'right',
        onLeave: function(index, nextIndex, direction){
            const header = $('#header');
            //after leaving section 1
            if(index == 1 && direction =='down'){
                header.addClass('on')
            }else{
                header.removeClass('on')
            }
        }
    }) */

    // 스크롤이벤트
    const header = document.querySelector('#header');

    /* window.addEventListener('scroll', function() {
        
        let scrollY = window.scrollY;
    	if(scrollY < 1000){
            header.classList.remove('on')
        }else{
            header.classList.add('on')
        }
    }); */

    var mHtml = $("html");
    var page = 1;
    mHtml.animate({scrollTop: 0}, 10);

    $(window).on("wheel", function(e) {
        if(mHtml.is(":animated")) return;
        
        if(e.originalEvent.deltaY > 0) {
            if(page == 2) return;
            page++;
            header.classList.add('on');
        } else if(e.originalEvent.deltaY < 0) {
            if(page == 1) return;
            page--;
            header.classList.remove('on');
        }
        console.log(e.originalEvent.deltaY )
        var posTop =(page-1) * $(window).height();
        mHtml.animate({scrollTop : posTop});
    })


    // 메인 배경 이미지
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlide");

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1
        }
        slides[slideIndex - 1].style.display = "block";

        setTimeout(showSlides, 6000); // 6초마다 이미지가 체인지됩니다
    }

    // list_close
    const listCloseBtn = document.querySelector('.list_close_btn');
    const menuList =  document.querySelector('.servis_list');
    menuList.classList.add('appear');
    listCloseBtn.addEventListener('click', function(){
       if(menuList.classList.contains('appear')){
            menuList.classList.remove('appear');
            menuList.classList.add('disappear');
            listCloseBtn.classList.add('on')
       }else{
            menuList.classList.remove('disappear');
            menuList.classList.add('appear');
            listCloseBtn.classList.remove('on')
       }
    });

    AOS.init();
    AOS.init({
        duration: 800,
        easing: 'ease-in', 
    })
}
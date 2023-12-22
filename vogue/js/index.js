// scrollTrigger 초기화
gsap.registerPlugin(ScrollTrigger);

function TodayScrollTrigger(){
    let todays = gsap.timeline({
        scrollTrigger:{
            trigger:".section-list",
            start:"-20px top",
            end: "bottom -100px",
            scrub:3,
            pin:".section-list",
            // markers:true,
        }
    })
    todays
    .to('.todays .rig_box',{
        y: "-100%"
    })
    

    let r_list = gsap.timeline({
        scrollTrigger:{
            trigger:".section-list .rig_box",
            start:"10px top",
            end: "1200px top",
            scrub:1,
            // markers:true,
        }
    })
    r_list
    .from('.right_list',{
        y: "20%"
    })
    .to('.right_list',{
        y: "-20%"
    })


    let l_list = gsap.timeline({
        scrollTrigger:{
            trigger:".section-list .lft_box",
            start:"top top",
            end: "80% top",
            scrub:3,
            // markers: {
            //     startColor: 'yellow',
            //     endColor: 'black',
            //     fontSize: '2rem',
            //     indent: 200
            // }
        }
    })
    l_list
    .to('.section-list .lft_box',{
        y: "-40%"
    })

    gsap.to('.must', {
        scrollTrigger: {
            trigger: '.must',
            start: 'top 70%',
            end: 'bottom 50%',
            toggleClass: 'landed',
            endTrigger: 'body',
            endStart: 'top 50%',
            // markers:true,
        }
    });
    
    let mustUl = gsap.timeline({
        scrollTrigger:{
            trigger:".must",
            start: 'top 80%',
            end: 'bottom 50%',
            endTrigger: 'body',
            endStart: 'top 50%',
            // markers:true,
        }
    })
    mustUl.from('.must ul',{ y: "400px", opacity:0,  duration: 1})

    // keyword
    let keyword = gsap.timeline({
        scrollTrigger:{
            trigger:".keyword",
            start:"100% 100%",
            end: "200% 0%",
            scrub:2.2,
            pin:".keyword",
            // markers: {
            //     startColor: 'red',
            //     endColor: 'black',
            //     fontSize: '1.1rem',
            //     indent: 200
            // }
        }
    })
    keyword
    .from('.keyword .tit_box h2', {
        opacity: 0, x: "-22%",
    })
    .from('.keyword .tit_box span', {
        opacity: 0, y: "22%",
    })
    .from('.keyword ul', {
        opacity: 0, y: "22%",
    })

    // LATEST STORIES
    gsap.utils.toArray(".latest .lft_box > a").forEach(el => {
        let items = el.querySelectorAll(".latest .lft_box > a > .txt_box");
        let ani = gsap.fromTo(items, { opacity:0, y:20 },{
            opacity: 1,
            display: "block",
            y: 0,
            stagger: 0.08,
            paused: true
        });
        el.addEventListener("mouseover", () => ani.play());
        el.addEventListener("focusin", () => ani.play());
        el.addEventListener("mouseout", () => ani.reverse());
        el.addEventListener("focusout", () => ani.reverse());

    });

    ScrollTrigger.create({
        trigger: ".latest .rig_box",
        start: "top top",
        endTrigger: 'body', // 끝 위치의 트리거를 body로 설정
        endStart: 'top -10px', // 끝 위치의 트리거 시작 위치
        toggleClass: {targets: '.latest .rig_box', className: 'stk'},
        // markers:true,
    });


    // footer
    let footer = gsap.timeline({
        scrollTrigger: {
            trigger: "#footer",
            toggleActions: "restart restart restart restart",
            start: "top 100%",
            end: "100% 0%",
            // markers: "true",
        }
    })
    footer
    .from('#footer a, .copyright', {
        opacity: 0, y: "130%", duration: 2.2, ease: "sine",
    })
}

// best stories slide
function setupSlider() {
    const slide1Prev = document.querySelector('.slide_prev');
    const slide1Next = document.querySelector('.slide_next');
    const slideWrap = document.querySelector('.slider1');
    const slideWidth = 403;
    let i = 0;

    function goToSlide(index) {
        // 현재 슬라이드 인덱스에 따라 이동
        slideWrap.style.marginLeft = `-${index * 4 * slideWidth}px`;

        // 마지막 슬라이드에 도달하면 next 버튼 비활성화
        slide1Next.disabled = index === 1;

        // 첫 번째 슬라이드에 도달하면 prev 버튼 비활성화
        slide1Prev.disabled = index === 0;

        // console.log(`Index: ${index}, slide1Next.disabled: ${slide1Next.disabled}`);
    }

    // 다음 슬라이드로 이동
    slide1Next.addEventListener('click', function() {
        if (i < slideWrap.children.length - 1) {
            i++;
            goToSlide(i);
        }
    });

    // 이전 슬라이드로 이동
    slide1Prev.addEventListener('click', function() {
        if (i > 0) {
            i--;
            goToSlide(i);
        }
    });

    // 초기화 시에 버튼 상태 확인
    goToSlide(i);
}

window.onload = () => {
    TodayScrollTrigger();
    setupSlider();
};
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
    });
    
}

// best stories slide
function setupSlider() {
    const slide1Prev = document.querySelector('.slide_prev');
    const slide1Next = document.querySelector('.slide_next');
    const slideWrap = document.querySelector('.slider1');
    const slideWidth = 403;
    let i = 0;

    function goToSlide(index) {
        slideWrap.style.marginLeft = `-${index * 4 * slideWidth}px`;

        // 마지막 슬라이드에 도달하면 next 버튼 비활성화
        slide1Next.disabled = index === 1;

        // 첫 번째 슬라이드에 도달하면 prev 버튼 비활성화
        slide1Prev.disabled = index === 0;

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
// function goToTop(){
//     let Top = document.querySelector('#btn_top');
//     let pageHeight = Math.max(
//         document.body.scrollHeight, document.documentElement.scrollHeight,
//         document.body.offsetHeight, document.documentElement.offsetHeight,
//         document.body.clientHeight, document.documentElement.clientHeight
//     );
//     let footerHeight = 321;
//     let footerStart = pageHeight - footerHeight;
    
//     window.addEventListener('scroll', function () {
//         console.log(footerStart) //9599
//         console.log(this.scrollY) //9327
//         if (this.scrollY > 100 && this.scrollY < footerStart) {
//             Top.classList.add('on');
//             Top.classList.remove('lock');
//         } else if (this.scrollY >= footerStart) {
//             Top.classList.remove('on');
//             Top.classList.add('lock');
//         } else {
//             Top.classList.remove('on', 'lock');
//         }
//     });
//     Top.addEventListener('click', function (e) {
//         e.preventDefault();
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     });
// }
function checkVisible(element, check = 'above') {
    const viewportHeight = window.innerHeight; // Viewport Height
    const scrolltop = window.scrollY; // Scroll Top
    const y = element.offsetTop;
    const elementHeight = element.offsetHeight;
    // console.log(scrolltop > 50)
    // 반드시 요소가 화면에 보여야 할 경우
    if (check === "visible")
        return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));

    // 화면에 안 보여도 요소가 위에만 있으면 (페이지를 로드할 때 스크롤이 밑으로 내려가 요소를 지나쳐 버릴 경우)
    if (check === "above")
        return ((y < (viewportHeight + scrolltop)));
}

const func = function () {
    const footer = document.getElementById('footer');
    const goToTop = document.getElementById('btn_top');
    const scrolltop = window.scrollY;

    if( scrolltop > 50){
        goToTop.classList.add('on');
    }else if(scrolltop < 50){
        goToTop.classList.remove('on');
    }
    if (!isVisible && checkVisible(footer, 'above')) {
        goToTop.classList.add('lock');
    }else{
        goToTop.classList.remove('lock');
    }

    goToTop.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // 만일 리소스가 로드가 되면 더 이상 이벤트 스크립트가 필요하지 않으니 삭제
    // isVisible && window.removeEventListener('scroll', func);
};

// 스크롤 이벤트 등록
window.addEventListener('scroll', func);
// 리소스가 로드 되면 함수 실행을 멈출지 말지 정하는 변수
let isVisible = false;

window.onload = () => {
    TodayScrollTrigger();
    setupSlider();
    // goToTop();
};
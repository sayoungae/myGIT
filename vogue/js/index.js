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
            trigger:".rig_box",
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
            trigger:".lft_box",
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
    .to('.lft_box',{
        y: "-40%"
    })
}

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

        // 디버깅을 위해 로그 추가
        console.log(`Index: ${index}, slide1Next.disabled: ${slide1Next.disabled}`);
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
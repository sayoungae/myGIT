gsap.registerPlugin(ScrollTrigger);

// Landing Page ScrollTrigger
function LandingPageScrollTrigger(){
    // LodingAnimation
    gsap.to('body',{
        opacity:1, duration:0,
    })

    let LandingPageScrollTrigger = gsap.timeline({
        scrollTrigger :{
            trigger:".landingPage",
            toggleAction:"restart restart restart restart",
            start: "0% 100%",
            end : "50% 0%",
            // markers:"true",
        }
    })
    // 페이지 로딩 후 이벤트 실행됨
    LandingPageScrollTrigger
        .from('#logo',{
            opacity:0, x:"-31%", duration:2.2, ease:"sine.in",
        }, 0)
        .from('#Navbar', {
            opacity: 0, x: "40%", duration: 2.2, ease: "sine.in",
        }, 0)
        .from('nav span', {
            opacity: 0, x: "70%", duration: 2.2, stagger: 0.4, ease: "sine.inOut",
        }, 0.2)
        .from('.landingPage section h2 span', {
            opacity: 0, x: "-22%", duration: 2.2, ease: "sine.inOut",
        }, 0.4)
        .from('.landingPage #d', {
            opacity: 0, x: "22%", duration: 2.2, ease: "sine.inOut",
        }, 0.4)
        .from('.landingPage section p span', {
            opacity: 0, x: "-31%", duration: 2.2, stagger: 0.4, ease: "sine",
        }, 0.8)

        let landingPageOnScroll = gsap.timeline({ 
            // 스크롤이 내려가면 실행되는 이벤트
            scrollTrigger: {
                trigger: ".landingPage",
                start: "100% 100%",
                end: "100% 0%",
                // markers: "true",
                scrub: 2.2,
            }
        })
        landingPageOnScroll
            .to('.landingPage', {
                opacity: 0, y: "-31%",
        })
}

function SliderScrollTrigger(){
    let Slide1 = gsap.timeline({
        scrollTrigger:{
            trigger:".slide1", //Modern Living 페이지
            start:"100% 100%",
            end: "300% 0%",            
            scrub:2.2,
            pin:".slide1",
            // markers: {
            //     startColor: 'red',
            //     endColor: 'black',
            //     fontSize: '1.1rem',
            //     indent: 200
            // }
        }
    })
    Slide1
    .from('.slide1 #slide h1', {
        opacity: 0, x: "-22%",
    })
    .from('.slide1 #slide p', {
        opacity: 0, y: "22%",
    })
    .from('.slide1 #ImageContainer', {
        opacity: 0, y: "22%",
    })

    let Slide2 = gsap.timeline({ // Slide2---------------------
        scrollTrigger: {
            trigger: ".slide2",
            start: "100% 100%",
            end: "300% 0%",
            // markers: "true",
            scrub: 2.2,
            pin: ".slide2",
        }
    })
    Slide2
        .from('.slide2 #slide h1', {
            opacity: 0, x: "-22%",
        })
        .from('.slide2 #slide p', {
            opacity: 0, y: "22%",
        })
        .from('.slide2 #ImageContainer', {
            opacity: 0, y: "22%",
        }) // Slide2---------------------

    let Slide3 = gsap.timeline({ // Slide3---------------------
        scrollTrigger: {
            trigger: ".slide3",
            start: "100% 100%",
            end: "300% 0%",
            // markers: "true",
            scrub: 2.2,
            pin: ".slide3",
        }
    })
    Slide3
        .from('.slide3 #slide h1', {
            opacity: 0, x: "-22%",
        })
        .from('.slide3 #slide p', {
            opacity: 0, y: "22%",
        })
        .from('.slide3 #ImageContainer', {
            opacity: 0, y: "22%",
        }) // Slide3---------------------
        let iCodeAyush = gsap.timeline({
            scrollTrigger: {
                trigger: "#codeby",
                toggleActions: "restart restart restart restart",
                start: "48.618% 100%",
                end: "100% 0%",
                // markers: "true",
            }
        })
        iCodeAyush
        .from('#codeby a', {
            opacity: 0, y: "130%", duration: 2.2, ease: "sine",
        })
}

window.onload = () => {
    LandingPageScrollTrigger()
    SliderScrollTrigger()
    if (window.matchMedia("(max-width: 400px)").matches) {
        Navbar()
    } else {
    }
}
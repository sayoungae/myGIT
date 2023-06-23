$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',  // 무료 사용시 해당 라이센스 카피할 것(반드시 있어야함)
		navigation: true,  //우측페이저유무
		navigationPosition: 'right', // left,right(default) 페이저 위치
		autoScrolling:true,
		scrollHorizontally: true,
		slidesNavigation: true, // 슬라이드섹션 네비게이션 유무
		slidesNavPosition: 'bottom', //네비게이션 위치 (top,bottom)
		showActiveTooltip: true,  //네비게이션 hover(default:false)시 툴팁 표기
		fitToSection: true,
		fitToSectionDelay: 1000, // 섹션 넘어갈 때 걸리는 딜레이 시간
		keyboardScrolling: true, // 키보드 방향키로 스크롤 컨트롤 여부
		animateAnchor: true,
		afterLoad: function(anchorLink, index){
			//애니메이션 이벤트 한번
			let section = $('.section');
			if(section.hasClass('active')){
				this.addClass('on')
			};

			if($('.section.box1').hasClass('active')){
				$('.topMenu > .appDwn').fadeOut(300);
				$('.rider-noti').fadeIn(300);
			}else{
				$('.topMenu > .appDwn').fadeIn(100);
				$('.rider-noti').fadeOut(100);
			}

			$('#header').fadeIn(200)
			if($('.section.footer').hasClass('active')){
				$('#header').fadeOut(100);
			}
		}
	});

    var navDot =document.querySelectorAll('#fp-nav >ul > li');
        navDot[0].style.display = 'none';
        navDot[7].style.display = 'none';

	// 방문할때마다 변하는 이미지
	let box1TitAlt = new Array(),
		box2TitAlt = new Array(),
		box3TitAlt = new Array();

	let box1Bg= document.querySelector('.section.box1'),
		box1Tit = document.querySelector('.box1 .tit img'),
		box2Tit = document.querySelector('.box2 .tit img'),
		box3Tit = document.querySelector('.box3 .tit img');



	// 첫페이지 배경이미지
	box1TitAlt = ['든든한 집밥 한상이 간절할 때','따뜻한 라떼 한 잔이 생각날 때','가볍게 맛있게 먹고싶을 때','마음에도 당 충전이 필요할 때','공복에 떡볶이가 그리울 때'];
	box2TitAlt =['바로그거 배민에 다 있다','그것이 무엇이든 다 있다'];
	box3TitAlt =['줄 서서 먹던 맛집도 배달가능','찾아가던 맛집을 원하는 곳에서','줄 서서 먹던 맛집도 우리집으로'];

	const RandomNum5 = [Math.floor(Math.random() * 4)+1],
		  RandomNum3 = [Math.floor(Math.random() * 2)+1];
		  RandomNum2 = [Math.floor(Math.random() * 1)+1];

	let box1BgImg = 'images/main_0'+RandomNum5+'@2x.jpg';
	box1Bg.style.backgroundImage ="url("+box1BgImg+")";

	box1Tit.src ="images/main_text_0"+RandomNum5+"@2x.png";
	box2Tit.src ="images/ctn01_text_0"+RandomNum2+"@2x.png";
	box3Tit.src ="images/ctn02_text_0"+RandomNum3+"@2x.png";
	box1Tit.alt=box1TitAlt[RandomNum5];
	box2Tit.alt=box2TitAlt[RandomNum2];
	box3Tit.alt=box3TitAlt[RandomNum3];

});


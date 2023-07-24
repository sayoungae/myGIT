
$(document).ready(function(){
    $('#fullpage').fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        navigation: true,
        navigationPosition: 'right',
        autoScrolling:true,
        scrollHorizontally: true,
        keyboardScrolling: true,
		slidesNavigation: true,
		slidesNavPosition: 'bottom',
        onLeave: function(){
			$('.section [data-aos]').each(function(){
				$(this).removeClass("aos-animate")
			});
		},
		onSlideLeave: function(){
			$('.slide [data-aos]').each(function(){
				$(this).removeClass("aos-animate")
			});
		},
		afterSlideLoad: function(){
			$('.slide.active [data-aos]').each(function(){
				$(this).addClass("aos-animate")
			});
		},
		afterLoad: function(){
			$('.section.active [data-aos]').each(function(){
				$(this).addClass("aos-animate")
			});
			let section = $('.section');
			section.removeClass('on')
			if(section.hasClass('active')){
				this.addClass('on')
			}else{
				this.removeClass('on')
			}
			
			
		}
    });
	
});


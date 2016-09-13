$(document).ready(function(){
	/*$(document).on('click', '.js--dropdown--clickable', function() {
		$(this).toggleClass('active').next('.js--dropdown--hidden').stop().toggle();
	})

	$(document).on('click', function(e){
		if(!$(e.target).hasClass('js--dropdown--clickable') && $(e.target).closest('js--dropdown--wrapper').length < 1) {
			$('.js--dropdown--hidden').hide();
			$('.js--dropdown--clickable').removeClass('active')
		}
	})*/
	
	function tabs_h() {
		var bl = $('.b-our--decisions--tab--block.js--toggle--block.active');
		var bl_h = bl.outerHeight();

		bl.closest('.b-our--decisions--tab--blocks--wrapper').height(bl_h);
	}
	var int_i = 0;
	var interval_tab = setInterval(function(){
		if(int_i > 5)
			clearInterval(interval_tab)
		tabs_h();
		int_i++;
	}, 1000)
	
	var tabs_avail = true;
	var setT;
	$(document).on('click', '.js--toggle--link[data-toggle-target]', function(e){
		if(tabs_avail == false) {
			return;
		} else {
			tabs_avail = false;
			clearTimeout(setT);
		}

		var target = $(this).attr('data-toggle-target');

		$(this).siblings().removeClass('active').end().addClass('active');
		
		var bl = $('[data-toggle-block="'+target+'"]');
		var bl_wrapper = $('[data-toggle-block="'+target+'"]').closest('.b-our--decisions--tab--blocks--wrapper');

		bl.siblings().removeClass('active')
		var bl_h = bl.outerHeight();
		var setT = setTimeout(function(){
			bl.addClass('active');
			bl_wrapper.css('height', bl_h)
			tabs_avail = true;
		}, 300)
		
		e.preventDefault();
	});

	$(document).on('click', '.js--toggle--information--link[data-toggle-target]', function(e){
		e.preventDefault();

		if($(this).hasClass('active'))
			return;

		var target = $(this).attr('data-toggle-target');

		$('.js--toggle--information--link').removeClass('active');
		$(this).addClass('active');

		var target = $(this).attr('data-toggle-target');

		$('.js--toggle--information--block[data-toggle--information="'+target+'"]').siblings().hide().end().show();
	})

	$(document).on('click', '.js--live--spread--selector--item[data-tab-target]', function(e){
		e.preventDefault();

		if($(this).hasClass('active'))
			return;

		var target = $(this).attr('data-tab-target');

		$(this).siblings().removeClass('active').end().addClass('active');

		$('.js--live--spread--tab[data-tab-block="'+target+'"]').siblings().hide().end().stop().show()
	})

	$('.b-honors--listing').owlCarousel({
		items: 7,
		responsive: {
			0: {
				items: 4
			},
			1200: {
				items: 6
			},
		},
		loop: true,
		autoheight: false,
		pagination: false,
		nav: true
	})

	$(document).on('click', '.js--traiders--table--selector[data-tab--target]', function(e){
		e.preventDefault();

		if($(this).hasClass('active'))
			return;

		var target = $(this).attr('data-tab--target');

		$('.js--traiders--table--selector[data-tab--target]').removeClass('active')
		$(this).addClass('active');

		$('.js--traiders--table--block[data-tab--block="'+target+'"]').siblings().hide().end().stop().show()
	})

	$(document).on('click', '.js--information--tab--target[data-inform--target]', function(e) {
		e.preventDefault();

		if($(this).hasClass('active'))
			return;

		$(this).siblings().removeClass('active').end().addClass('active');

		var target = $(this).attr('data-inform--target');

		$('.js--inform--tab--block[data-inform-tab="'+target+'"]').siblings().hide().end().show();
	})

	$(document).on('click', '.overlay, .popup--close', function(e){
		$('.overlay').fadeOut(200);

		if($('.popup:visible').length > 0 && $('.popup:visible').hasClass('video-popup')) {
			$('.popup:visible').each(function(){
				var frame = $(this).find('iframe');
				var f_src = frame.attr('src');
				frame.attr('src', '');
				// frame.attr('src', f_src);
			})
		}
		$('.popup').fadeOut(200);
	})

	$(document).on('click', '.js--call-popup[data-call-popup]', function(e){
		e.preventDefault();
		var pop = $('[data-popup="'+$(this).attr('data-call-popup')+'"]');

		if($(this).attr('data-call-popup') == '#video--popup' && $(this).attr('data--video--src') != "") {
			pop.find('iframe').attr('src', $(this).attr('data--video--src'))
		}

		pop.fadeIn(200)
		$('.overlay').fadeIn(200);
	})

	$(document).on('click', '.js--call-cabinet', function(e){
		$('.b-cabinet--control').slideToggle(200)
	})

	if($('input[data-inputmask]').length > 0)
		$('input[data-inputmask]').mask("+7 (999) 999-99-99");

	$(document).on("click", '.js--clearinput_cross', function(e){
		$(this).siblings('input').val('');
		check_clearinput_vis($(this))
		e.preventDefault();
	});

	$('.js--clearinput_cross').each(function(){
		check_clearinput_vis($(this));
	})

	$(document).on('keyup', '.js--clearinput_input', function(e){
		if($(this).siblings('.js--clearinput_cross').length > 0)
			check_clearinput_vis($(this).siblings('.js--clearinput_cross'))
	})

	$(document).on('click', '.js--accordion--header', function(e){
		$(this).siblings('.js--accordion--content').slideToggle(200).end().toggleClass('active');
	})

	$(document).on('click', '.js--popup-nav-buttons', function(e){
		var target = $(this).attr('data-target');
		$(this).siblings().removeClass('active').end().addClass('active');
		$('.js--popup--deals--target--block[data-target-block="'+target+'"]').siblings().hide().end().stop().show();
	})

	$('.traider--personal_block').hover(function(e){
		var bl = $(this).attr('data-open-person-popup');
		var block = $('[data-person-popup="'+bl+'"]');
		var top = $(this).offset().top + $(this).outerHeight() + 10;
		var left = $(this).offset().left;

		block.fadeIn(200);
		block.offset({top: top, left: left - (block.outerWidth()-$(this).outerWidth())});
		e.preventDefault();
	}, function(e){
		var bl = $(this).attr('data-open-person-popup');
		var block = $('[data-person-popup="'+bl+'"]');
		block.fadeOut(200);
	});

	$(document).on('click', '.b-header__search-form', function(e){
		if(($(e.target).hasClass('button-search') || $(e.target).closest('button.button-search').length > 0) && !$(this).hasClass('active')) {
			// console.log(e.target)
			$(this).addClass('active');
			$(this).find('.search-input').focus();
			e.preventDefault();
		} else if(!$(e.target).hasClass('button-search') && !$(this).hasClass('active')) {
			$(this).addClass('active');
			$(this).find('.search-input').focus();
		}
	});

	$(document).on('click', function(e){
		if($('.b-header__search-form.active').length > 0 && $(e.target).closest('.b-header__search-form').length < 1 && !$(e.target).hasClass('b-header__search-form')) {
			 $('.b-header__search-form').removeClass('active')
		}

		if(!$(e.target).hasClass('b-locks__filter-wrapper') && $(e.target).closest('.b-locks__filter-wrapper').length < 1 && !$(e.target).hasClass('b-traiders--lock') && $(e.target).closest('.b-traiders--lock').length < 1) {
			$('.b-locks__filter-wrapper:visible').hide();
		}
	});

	$(document).on('click', '[data-open-company--services]', function(e){
		$('.b-company-services').stop().slideToggle(300)
		e.preventDefault();
	});

	$(document).on('click', '.b-notification .icon-clearinput', function(e){
		$(this).closest('.b-notification').slideUp(200);
		e.preventDefault();
	});

	$(document).on('click', '.b-dropdown-wrapper .b-dropdown__listing-item:not(.active)', function(e){
		var text = $(this).text();

		$(this).siblings().removeClass('active').end().addClass('active').closest('.b-dropdown-wrapper').find('.b-dropdown__current').text(text)
		e.preventDefault();
	});

	$(document).on('click', '[data-call-lock-question]', function(e){
		if($(this).hasClass('active')) {
			$('.b-locks__hidden-info').removeClass('active');
			$('[data-call-lock-question]').removeClass('active').find('.icon-question').removeClass('active');
			return;
		} else {
			$('.b-locks__hidden-info').addClass('active');
		}

		$('[data-call-lock-question]').removeClass('active').find('.icon-question').removeClass('active');
		$(this).addClass('active').find('.icon-question').addClass('active');
		var bl = $(this).attr('data-call-lock-question');
		$('[data-block-lock-question="'+bl+'"]').siblings().hide().end().show();
		e.preventDefault();
	});

	$(document).on('click', '.b-traiders--lock', function(e){
		$('.b-locks__filter-wrapper').show();
		e.preventDefault();
	});

	$(document).on('click', '[data-change-popup]', function(e){
		var bl = $(this).attr('data-change-popup');
		$('[data-popup]:visible').fadeOut(200);
		$('[data-popup="'+bl+'"]').stop().fadeIn(200);
		e.preventDefault();
	});
})

function check_clearinput_vis(block) {
	if(block.siblings('.js--clearinput_input').val() != '') {
		block.removeClass('hidden');
	} else {
		block.addClass('hidden');
	}
}






// Open/Close FAQ page elements

$(document).ready(function() {
   	$(document).on('click', '.b-site-faq-content__item-taber', function(event) {
        event.preventDefault();
        if($(this).hasClass("active-taber")) {
        	$(this).removeClass('active-taber').next('.b-site-faq-content__hide-item-taber').stop().slideUp(300);
        } else {
        	$(this).closest('.b-site-faq-content__vertical-taber').siblings().find('.b-site-faq-content__item-taber').removeClass('active-taber').end().find('.b-site-faq-content__hide-item-taber').slideUp(300);
        	$(this).addClass('active-taber').next().slideDown(300);
        }
    });
});


// Open/Close left menu

$(document).ready(function() {

    $(".tree-menu").click(function() {
        $(".sub-tree-menu").toggle(300);
        $(this).toggleClass('close-tree');
        return false


    });

	var loginBarBtn = $('.b-loginbar-btn'),
		loginBarCont = $('.b-loginbar-cont');


	loginBarBtn.click(function(e) {
		if(loginBarCont.hasClass('active') !== true) {
			loginBarCont.addClass('active');
		} else {
			loginBarCont.removeClass('active');
		}

		return false;
	});


    if($('input.data-inputmask, .inputmask').length > 0) {
        $('input.data-inputmask, .inputmask').mask("+7 (999) 999-99-99");
    }

    $(document).on("click", '.dd', function(e) {
        $('.p-oo-content__dropdown-list').toggleClass('active');
        e.preventDefault();
    });

    $("select").styler();
});




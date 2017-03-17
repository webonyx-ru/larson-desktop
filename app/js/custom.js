function tabs_h() {
    var bl = $('.b-our--decisions--tab--block.js--toggle--block.active');
    var bl_h = bl.outerHeight();

    bl.closest('.b-our--decisions--tab--blocks--wrapper').height(bl_h);
}

$(document).ready(function () {
    
    $('.js-scroll-to-link').on('click', function (e) {
      e.preventDefault();
      
      $('body, html').animate({scrollTop: $($(this).attr('data-target')).offset().top}, 1000);
    });
    
    /*$(document).on('click', '.js--dropdown--clickable', function() {
     $(this).toggleClass('active').next('.js--dropdown--hidden').stop().toggle();
     })

     $(document).on('click', function(e){
     if(!$(e.target).hasClass('js--dropdown--clickable') && $(e.target).closest('js--dropdown--wrapper').length < 1) {
     $('.js--dropdown--hidden').hide();
     $('.js--dropdown--clickable').removeClass('active')
     }
     })*/

    var int_i = 0;
    var interval_tab = setInterval(function () {
        if (int_i > 5)
            clearInterval(interval_tab);
        tabs_h();
        int_i++;
    }, 1000);

    var tabs_avail = true;
    var setT;
    $(document).on('click', '.js--toggle--link[data-toggle-target]', function (e) {
        if (tabs_avail == false) {
            return;
        } else {
            tabs_avail = false;
            clearTimeout(setT);
        }

        var target = $(this).attr('data-toggle-target');

        $(this).siblings().removeClass('active').end().addClass('active');

        var bl = $('[data-toggle-block="' + target + '"]');
        var bl_wrapper = $('[data-toggle-block="' + target + '"]').closest('.b-our--decisions--tab--blocks--wrapper');

        bl.siblings().removeClass('active')
        var bl_h = bl.outerHeight();
        var setT = setTimeout(function () {
            bl.addClass('active');
            bl_wrapper.css('height', bl_h)
            tabs_avail = true;
        }, 300)

        e.preventDefault();
    });

    $(document).on('click', '.js--toggle--information--link[data-toggle-target]', function (e) {
        e.preventDefault();

        if ($(this).hasClass('active'))
            return;

        var target = $(this).attr('data-toggle-target');

        $('.js--toggle--information--link').removeClass('active');
        $(this).addClass('active');

        var target = $(this).attr('data-toggle-target');

        $('.js--toggle--information--block[data-toggle--information="' + target + '"]').siblings().hide().end().show();
    })

    $(document).on('click', '.js--live--spread--selector--item[data-tab-target]', function (e) {
        e.preventDefault();

        if ($(this).hasClass('active'))
            return;

        var target = $(this).attr('data-tab-target');

        $(this).siblings().removeClass('active').end().addClass('active');

        $('.js--live--spread--tab[data-tab-block="' + target + '"]').siblings().hide().end().stop().show()
    });

    if ($('.b-honors--listing').length > 0) {
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
    }

    if ($('.parallax-owl-carousel').length > 0) {
        $('.parallax-owl-carousel').owlCarousel({
            responsive: {
                0: {
                    items: 1
                }
            },
            nav: true
        });
    }


    $(document).on('click', '.js--traiders--table--selector[data-tab--target]', function (e) {
        e.preventDefault();

        if ($(this).hasClass('active'))
            return;

        var target = $(this).attr('data-tab--target');

        $('.js--traiders--table--selector[data-tab--target]').removeClass('active')
        $(this).addClass('active');

        $('.js--traiders--table--block[data-tab--block="' + target + '"]').siblings().hide().end().stop().show()
    })

    $(document).on('click', '.js--information--tab--target[data-inform--target]', function (e) {
        e.preventDefault();

        if ($(this).hasClass('active'))
            return;

        $(this).siblings().removeClass('active').end().addClass('active');

        var target = $(this).attr('data-inform--target');

        $('.js--inform--tab--block[data-inform-tab="' + target + '"]').siblings().hide().end().show();
    })

    $(document).on('click', '.overlay, .popup--close', function (e) {
        $('.overlay').fadeOut(200);

        if ($('.popup:visible').length > 0 && $('.popup:visible').hasClass('video-popup')) {
            $('.popup:visible').each(function () {
                var frame = $(this).find('iframe');
                var f_src = frame.attr('src');
                frame.attr('src', '');
                // frame.attr('src', f_src);
            })
        }
        $('.popup').fadeOut(200);
    })

    $(document).on('click', '.js--call-popup[data-call-popup]', function (e) {
        e.preventDefault();
        var pop = $('[data-popup="' + $(this).attr('data-call-popup') + '"]');

        if ($(this).attr('data-call-popup') == '#video--popup' && $(this).attr('data--video--src') != "") {
            pop.find('iframe').attr('src', $(this).attr('data--video--src'))
        }

        pop.fadeIn(200)
        $('.overlay').fadeIn(200);
    })

    $(document).on('click', '.js--call-cabinet', function (e) {
        $('.b-cabinet--control').slideToggle(200)
    })

    if ($('input[data-inputmask]').length > 0)
        $('input[data-inputmask]').mask("+7 (999) 999-99-99");

    $(document).on("click", '.js--clearinput_cross', function (e) {
        $(this).siblings('input').val('');
        check_clearinput_vis($(this))
        e.preventDefault();
    });

    $('.js--clearinput_cross').each(function () {
        check_clearinput_vis($(this));
    })

    $(document).on('keyup', '.js--clearinput_input', function (e) {
        if ($(this).siblings('.js--clearinput_cross').length > 0)
            check_clearinput_vis($(this).siblings('.js--clearinput_cross'))
    })

    $(document).on('click', '.js--accordion--header', function (e) {
        $(this).siblings('.js--accordion--content').slideToggle(200).end().toggleClass('active');
    })

    $(document).on('click', '.js--popup-nav-buttons', function (e) {
        var target = $(this).attr('data-target');
        $(this).siblings().removeClass('active').end().addClass('active');
        $('.js--popup--deals--target--block[data-target-block="' + target + '"]').siblings().hide().end().stop().show();
    })

    $('.traider--personal_block').hover(function (e) {
        var bl = $(this).attr('data-open-person-popup');
        var block = $('[data-person-popup="' + bl + '"]');
        var top = $(this).offset().top + $(this).outerHeight() + 10;
        var left = $(this).offset().left;

        block.fadeIn(200);
        block.offset({top: top, left: left - (block.outerWidth() - $(this).outerWidth())});
        e.preventDefault();
    }, function (e) {
        var bl = $(this).attr('data-open-person-popup');
        var block = $('[data-person-popup="' + bl + '"]');
        block.fadeOut(200);
    });

    $(document).on('click', '.b-header__search-form', function (e) {
        if (($(e.target).hasClass('button-search') || $(e.target).closest('button.button-search').length > 0) && !$(this).hasClass('active')) {
            // console.log(e.target)
            $(this).addClass('active');
            $(this).find('.search-input').focus();
            e.preventDefault();
        } else if (!$(e.target).hasClass('button-search') && !$(this).hasClass('active')) {
            $(this).addClass('active');
            $(this).find('.search-input').focus();
        }
    });

    $(document).on('click', function (e) {
        if ($('.b-header__search-form.active').length > 0 && $(e.target).closest('.b-header__search-form').length < 1 && !$(e.target).hasClass('b-header__search-form')) {
            $('.b-header__search-form').removeClass('active')
        }

        if (!$(e.target).hasClass('b-locks__filter-wrapper') && $(e.target).closest('.b-locks__filter-wrapper').length < 1 && !$(e.target).hasClass('b-traiders--lock') && $(e.target).closest('.b-traiders--lock').length < 1) {
            $('.b-locks__filter-wrapper:visible').hide();
        }
    });

    $(document).on('click', '[data-open-company--services]', function (e) {
        $('.b-company-services').stop().slideToggle(300)
        e.preventDefault();
    });

    $(document).on('click', '.b-notification .icon-clearinput', function (e) {
        $(this).closest('.b-notification').slideUp(200);
        e.preventDefault();
    });

    $(document).on('click', '.b-dropdown-wrapper .b-dropdown__listing-item:not(.active)', function (e) {
        var text = $(this).text();

        $(this).siblings().removeClass('active').end().addClass('active').closest('.b-dropdown-wrapper').find('.b-dropdown__current').text(text)
        e.preventDefault();
    });

    $(document).on('click', '[data-call-lock-question]', function (e) {
        if ($(this).hasClass('active')) {
            $('.b-locks__hidden-info').removeClass('active');
            $('[data-call-lock-question]').removeClass('active').find('.icon-question').removeClass('active');
            return;
        } else {
            $('.b-locks__hidden-info').addClass('active');
        }

        $('[data-call-lock-question]').removeClass('active').find('.icon-question').removeClass('active');
        $(this).addClass('active').find('.icon-question').addClass('active');
        var bl = $(this).attr('data-call-lock-question');
        $('[data-block-lock-question="' + bl + '"]').siblings().hide().end().show();
        e.preventDefault();
    });

    $(document).on('click', '.b-traiders--lock', function (e) {
        $('.b-locks__filter-wrapper').show();
        e.preventDefault();
    });

    $(document).on('click', '[data-change-popup]', function (e) {
        var bl = $(this).attr('data-change-popup');
        $('[data-popup]:visible').fadeOut(200);
        $('[data-popup="' + bl + '"]').stop().fadeIn(200);
        e.preventDefault();
    });
});

function check_clearinput_vis(block) {
    if (block.siblings('.js--clearinput_input').val() != '') {
        block.removeClass('hidden');
    } else {
        block.addClass('hidden');
    }
}


// Open/Close FAQ page elements

$(document).ready(function () {
    $(document).on('click', '.b-site-faq-content__item-taber', function (event) {
        event.preventDefault();
        if ($(this).hasClass("active-taber")) {
            $(this).removeClass('active-taber').next('.b-site-faq-content__hide-item-taber').stop().slideUp(300);
        } else {
            $(this).closest('.b-site-faq-content__vertical-taber').siblings().find('.b-site-faq-content__item-taber').removeClass('active-taber').end().find('.b-site-faq-content__hide-item-taber').slideUp(300);
            $(this).addClass('active-taber').next().slideDown(300);
        }
    });

    /*$(document).on('click', '.b-nav--menu--dropdown--item--link.has-dropdown', function (e) {
        e.preventDefault();
        var parentNode = $(this).parent();

        if(parentNode.hasClass('active')) {
            parentNode.removeClass('active');
            parentNode.find('.traider-submenu').slideUp();
        } else {
            parentNode.addClass('active');
            parentNode.find('.traider-submenu').slideDown();
        }

        return false;
    });*/
});


// Open/Close left menu

$(document).ready(function () {
    var upButtonTimeout,
        upButton = $('.js-up-button');
    $(window).scroll(function () {
        clearInterval(upButtonTimeout);
        upButtonTimeout = setTimeout(function () {
            if($(window).scrollTop() > 1000)
                upButton.addClass('visible');
            else
                upButton.removeClass('visible');
        }, 500);
    });

    upButton.click(function (e) {
        e.preventDefault();

        $('body, html').animate({scrollTop: 0}, 1000);
    });

    $(".tree-menu").click(function () {
        $(".sub-tree-menu").toggle(300);
        $(this).toggleClass('close-tree');
        return false
    });

    var loginBarBtn = $('.b-loginbar-btn'),
        loginBarCont = $('.b-loginbar-cont');


    loginBarBtn.click(function (e) {
        if (loginBarCont.hasClass('active') !== true) {
            loginBarCont.addClass('active');
            loginBarBtn.addClass('active');
        } else {
            loginBarCont.removeClass('active');
            loginBarBtn.removeClass('active');
        }

        e.preventDefault();
    });


    if ($('input.data-inputmask, .inputmask-phone').length > 0) {
        $('input.data-inputmask, .inputmask-phone').mask("+7 (999) 999-99-99");
    }

    if ($('input.data-inputmask, .inputmask-bithday').length > 0) {
        $('input.data-inputmask, .inputmask-bithday').mask("99 99 999");
    }

    $(document).on("click", '.dd-table__title', function (e) {
        var el = $(this);
        var elWrapper = el.closest(".dd-tables-wrapper");
        if (el.hasClass("active")){
            el.siblings('.content-table-wrapper').stop().slideUp(300);
            elWrapper.find(".dd-table__title").removeClass("active");

        }
        else{
            elWrapper.find(".dd-table__title").removeClass("active");
            el.closest('.dd-table__title').addClass('active');
            elWrapper.find('.content-table-wrapper').stop().slideUp(300);
            el.siblings('.content-table-wrapper').stop().slideDown(300);
        }

        e.preventDefault();

    });

    $(document).on("click", '.b-results-and-honors-title', function (e) {
        $(this).siblings('.b-results-and-honors').stop().slideDown(400, tabs_h);
        $(this).closest('.b-results-and-honors-title').stop().slideUp(400, tabs_h);
        e.preventDefault();
    });

    $(document).on("click", '.b-results-and-honors__close', function (e) {
        $('.b-results-and-honors').stop().slideUp(400, tabs_h);
        $('.b-results-and-honors-title').stop().slideDown(400, tabs_h);
        e.preventDefault();
    });




    $(document).on("click", '.b-content__read-more-title', function (e) {
        var title = $(this);

        var bl = title.closest(".b-content__read-more-list");

        if (title.closest('.arrow-text').hasClass('active')) {
            bl.find('.arrow-text').removeClass('active');
            title.siblings('.b-content__text').stop().slideToggle(400, tabs_h);
            title.siblings('.b-content__text').addClass("active");
            title.closest('.arrow-text').removeClass('active');

        } else {
            bl.find('.arrow-text').removeClass('active');
            bl.find('.b-content__text').stop().slideUp(400);
            title.siblings('.b-content__text').stop().slideToggle(400, tabs_h);
            title.siblings('.b-content__text').removeClass("active");
            title.closest('.arrow-text').addClass('active');
        }

        e.preventDefault();
    });

    $(document).on("click", '[data-roll]', function (e) {
        var el = $(this);

        if (el.hasClass("active")){
            el.removeClass("active");
            el.text(el.data('roll-start'));
        }
        else{
            el.addClass("active");
            el.text(el.data('roll-end'));

        }
    });

    if ($("select, input:radio, input:checkbox").length > 0) {
        $("select, input:radio, input:checkbox").styler();
    }

    $(document).on("click", '[data-tab]', function (e) {
        var this_tab = $(this).data("tab");

        if ($(this).hasClass("all")) {
            $("[data-tab]").removeClass("active");
            $(this).addClass("active");

            $("[data-tab-content]").addClass("active");
        } else {
            $("[data-tab]").removeClass("active");
            $(this).addClass("active");

            $("[data-tab-content]").removeClass("active");
            $("[data-tab-content=" + this_tab + "]").addClass("active");
        }

        e.preventDefault();
    });


        $('.block-info').delegate('.step', 'click', function(){
            var step = (($(this).attr('id')).split('-'))[1]
                ,   t    = new Date();

            t.setTime(+ t + 600000);

            $('.block-info .cell').removeClass('cell-hover');
            $(this).closest('.cell').addClass('cell-hover');

            $.cookie('copydeal', step, {path: '/', expires: t});
        });

        // -------------------------------------------------------------------------------

        var isSend = false
            ,   ajaxLoader = function(url, data, callback){
            if (isSend) {
                return false;
            }

            isSend = true;

            $.ajax({
                url: url,
                data: data,
                success: function (content) {
                    if (typeof content == 'object') {
                        $('#mql5-dialog').dialog('close');
                        $.IM.MessageBox(content.content);

                        if (401 == content.code) {
                            setTimeout(function(){
                                window.location.href = copyDealsLinkLogin;
                            }, 3000);
                        }
                    } else {
                        $('#mql5-dialog').html(content).dialog('open');

                        if (callback) {
                            callback.apply(null);
                        }
                    }

                    isSend = false;
                }
            });
        };

    var map = $('.map'),
        mapImage = map.find('.map-image');

    if(mapImage !== 'undefined' && map !== 'undefined' && map.length > 0 && mapImage > 0) {
        var mapImageWidth = mapImage.get(0).naturalWidth,
            mapImageHeight = mapImage.get(0).naturalHeight,
            mapPopup = map.find('.popup'),
            mapWidth = map.outerWidth();

        $('[data-coords]').each(function (e) {
            var _self = $(this),
                t = _self, position = t.data('coords').split(','),
                x = (parseInt(position[0]) * 100) / mapImageWidth, y = (parseInt(position[1]) * 100) / mapImageHeight,
                css = {
                    top: y + '%',
                    left: x + '%'
                };

            _self.css(css);

            _self.click(function (e) {
                e.preventDefault();

                var mapEventFunc = function () {
                    var mapPopupHeight = (parseInt(mapPopup.outerHeight()) * 100) / mapImageHeight,
                        mapPopupWidth = (parseInt(mapPopup.outerWidth()) * 100) / mapImageWidth,
                        mapPopupTopPosition = ((y - (mapPopupHeight / 2 ) - 1) - 2),
                        mapPopupLeftPosition = x - (mapPopupWidth / 2);

                    var mapSettings = {
                        top: 0,
                        left: 0
                    };

                    if(mapPopupLeftPosition <= 5) mapSettings.left = 5 + (mapPopupWidth / 2);
                    else {
                        if((mapPopupWidth + mapPopupLeftPosition) >= 95) mapSettings.left = 95 -  (mapPopupWidth / 2);
                        else mapSettings.left = x;
                    }

                    if(mapPopupTopPosition <= 10) mapSettings.top = y + (mapPopupHeight / 2) + 5;
                    else {
                        if((mapPopupHeight + mapPopupTopPosition) >= 95) mapSettings.top = 95 -  (mapPopupHeight / 2);
                        else mapSettings.top = mapPopupTopPosition;
                    }

                    mapPopup.css({
                        top: mapSettings.top + '%',
                        left: mapSettings.left + '%'
                    });
                };

                if(mapPopup.hasClass('active') !== true) {
                    mapPopup.addClass('active');
                    mapPopup.find('.popup-cont').html(_self.html());

                    $('[data-coords]').removeClass('active');
                    _self.addClass('active');

                    setTimeout(function () {
                        mapEventFunc();
                    }, 300);
                } else {
                    if(_self.hasClass('active') !== true) {
                        $('[data-coords]').removeClass('active');
                        _self.addClass('active');
                        mapPopup.find('.popup-cont').html(_self.html());

                        setTimeout(function () {
                            mapEventFunc();
                        }, 300);
                    } else {
                        $('[data-coords]').removeClass('active');
                        mapPopup.removeClass('active');
                        mapPopup.find('.popup-cont').html('');
                    }

                }

                return false;
            })
        });

        $('[data-map-popup-exit]').click(function (e) {
            e.preventDefault();

            mapPopup.removeClass('active');
            mapPopup.find('.popup-cont').html('');

            return false;
        });
    }


    /*$('.map').craftmap({
        cookies:false, // (bool) remember position
        fullscreen:false, // (bool) fullscreen
        container:{
            name:'imgContent' // (string) class name for an image container
        },
        image:{
            width: 899, // (int) image width
            height: 478, // (int) image height
            name:'imgMap' // (string) class name for an image
        },
        map:{
            position:'center'  // (string) map position after loading - 'X Y', 'center', 'top_left', 'top_right', 'bottom_left', 'bottom_right'
        },
        marker:{
            name:'marker', // (string) class name for a marker
            center:true, // (bool) set true to pan the map to the center
            popup:true, // (bool) set true to show a popup
            popup_name:'popup-map', // (string) class name for popup
            onClick:function (marker, popup) {
            },
            onClose:function (marker, popup) {
            }
        },
        controls:{
            init: false, // (bool) set true to control a map from any place on the page
            name:'controls', // (string) class name for controls container
            onClick:function (marker) {
            }
        },
        preloader:{
            init: false, // (bool) set true to preload an image
            name:'preloader', // (string) class name for a preload container
            onLoad:function (img, dimensions) {
            }
        }
    });*/
});

var LH = {};

LH.menu = function (className) {
    var menu = {};

    menu.el = $(className);
    menu.item = menu.el.find('.b-nav--menu--dropdown--item');
    menu.itemLink = menu.item.find('.b-nav--menu--dropdown--item--link.has-dropdown');
    menu.itemParent = menu.el.find('.b-nav--menu--dropdown');

    menu.init = function () {
        menu.itemParent.each(function () {
            $(this).find('.b-nav--menu--dropdown--item:not(.active)').find('.traider-submenu').hide();
        });
    };

    menu.open = function (item) {
        if(!item.find('.traider-submenu').length > 0)
            return;

        item.siblings().removeClass('active').find('.traider-submenu').stop().slideUp(100);
        item.addClass('active').find('.traider-submenu').stop().slideDown(100);
    };

    menu.close = function (item) {
        item.removeClass('active').find('.traider-submenu').stop().slideUp(100);
    };

    menu.itemLink.click(function (e) {
        var _this = $(this);
        var parent = _this.closest('.b-nav--menu--dropdown--item');

        if(parent.hasClass('active')) {
            menu.close(parent);
        } else {
            menu.open(parent);
        }
        e.preventDefault();
    });

    menu.init();
};

LH.menu('.b-nav--menu_units');
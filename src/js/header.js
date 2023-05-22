// set size classes content in header
const setHeaderClassesContentWidth = () => {
    let overlayClassesWidth = $('.header_nav_item_overlay.classes').outerWidth()
    let headerNavContainerWidth = $('.header_nav_container').width();

    $('.classes_list').css('--width', `${overlayClassesWidth}px`)
    $('.header_classes_content')
        .css('--headerNavContainerWidth', `${headerNavContainerWidth}px`)
        .css('--headerNavDropListWidth', `${overlayClassesWidth}px`)
    ;
}


// header fixed on scroll
const setHeaderFixed = () => {
    if ($(this).scrollTop() > 10) {
        $('.header').addClass('header_fixed');
        $('.header_title_wrapper').addClass('header_fixed');
        $('.header_nav_container').addClass('header_fixed');
        $('.theme_toggle_wrapper').addClass('header_fixed');

    } else {
        $('.header').removeClass('header_fixed');
        $('.header_title_wrapper').removeClass('header_fixed');
        $('.header_nav_container').removeClass('header_fixed');
        $('.theme_toggle_wrapper').removeClass('header_fixed');
    }
}


// overlay on menu item when hover
const navItemOverlay = () => {
    const clearClassesDropItemStyle = (isThis) => {
        if (!isThis) {
            $('.classes_drop_item').removeClass('hover')
            $('.class_number').removeClass('hover')
            $('.classes_list').removeClass('classes_hover')
        }
        $('.classes_drop_item').not(this).removeClass('hover')
        $(this).find('.class_number').removeClass('hover')
        $('.header_classes_content').removeClass('hover')
        $(this).parent('.classes_list').removeClass('classes_hover')
        $('.header_nav_item_overlay.classes').addClass('concave_disable')

    }

    $('.header_nav_item_overlay').hover(
        function () {
            $(this).addClass('hover')
            $(this).find('.header_nav_drop_list').addClass('hover')
            $(this).find('.header_arrow').addClass('hover')
            $(this).find('.menu_icon').addClass('active')
            $(this).parent('.header_nav_item').addClass('hover')
            clearClassesDropItemStyle(false)
        },
        function () {
            $(this).removeClass('hover')
            $(this).find('.header_nav_drop_list').removeClass('hover')
            $(this).find('.header_arrow').removeClass('hover')
            $(this).find('.menu_icon').removeClass('active')
            $(this).parent('.header_nav_item').removeClass('hover')
        }
    )

    $('.classes_drop_item').hover(
        function () {
            // remove previous
            clearClassesDropItemStyle(true)

            // display new content
            $(this).addClass('hover')
            $(this).find('.class_number').addClass('hover')
            $(this).find('.header_classes_content').addClass('hover')
            $(this).parent('.classes_list').addClass('classes_hover')
            $(this).parent('.header_nav_item_overlay').addClass('classes_hover')
            $('.header_nav_item_overlay.classes').removeClass('concave_disable')

        },
        function () {
        }
    )
}


// tablet header and menu
const setTabletHeader = () => {
    // clear prev
    $('.mobile_header_List').empty();
    // create new
    let mobileList = document.querySelector('.mobile_header_List')
    let classesItems = document.querySelectorAll('.classes_drop_item')
    let headerNavItems = document.querySelectorAll('.header_nav_item')


    let tem = (span, content) => (`<li class="header_nav_item_title m_nav_item">
                            <div class="m_nav_item_title">
                            ${span.outerHTML}
                                ${content ? `<div class="m_nav_item_arrow">
                                    <span></span>
                                    <span></span>
                                </div>` : ``}
                            </div>
                            ${content ? `<div class="m_nav_item_content">
                                <nav>
                                    ${content.innerHTML}
                                </nav>
                            </div>` : ``}
                        </li>`)
    if (mobileList.children.length < 1) {
        !isMobile() && classesItems.forEach(el => {
            if (!el.classList.contains('mobileEnable')) {
                return ''
            }
            const span = el.querySelector('.class_number')
            const content = el.querySelector('.header_classes_content')
            mobileList.insertAdjacentHTML('beforeend', tem(span, content))
        })
        headerNavItems.forEach(el => {
            if (el.classList.contains('classes')) {
                return ''
            }
            const span = el.querySelector('.header_nav_item_title')
            const content = el.querySelector('.header_nav_item_drop')
            if (span) {
                mobileList.insertAdjacentHTML('beforeend', tem(span, content))
            }
        })
        tabletMenuToggle()
    }
    let regionCityName = document.querySelector('.region_city_name')
    let citySelectForm = document.querySelector('#city_select_form')
    let mobileRegionNameWrapper = document.querySelector('.mobile_region_name_wrapper')
    let mobileFormWrapper = document.querySelector('.mobile_form_wrapper')

    if (mobileFormWrapper.children.length < 1) {
        let name = regionCityName.cloneNode(true)
        let form = citySelectForm.cloneNode(true)
        mobileRegionNameWrapper.insertAdjacentElement("afterbegin", name);
        mobileFormWrapper.insertAdjacentElement("afterbegin", form);
    }

}

const removeTabletHeader = () => {
    $(".mobile_header_List").empty();
}

const setTabletThemeToggle = () => {
    if ($('.header_container').children('.header_theme_toggle').length < 1) {
        $('.header_theme_toggle').clone().appendTo($('.header_container'))
        themeToggle()
    }
}

const removeTabletThemeToggle = () => {
    if ($('.header_container').children('.header_theme_toggle').length > 0) {
        $('.header_container').children('.header_theme_toggle').remove()
    }
}

const tabletMenuToggle = () => {
    $('.m_nav_item_title').click(function () {
        $(this).toggleClass('active');
        $(this).next('.m_nav_item_content').slideToggle();
        $(this).find('.m_nav_item_arrow').toggleClass('active');
    });
}


// display menu mobile on click menu icon
const displayMenuMobile = () => {
    $('.mobile_menu_icon').click(function () {
        $('.m_nav_item_content').slideUp();
        $('.mobile_form_wrapper').slideUp()
        $('.m_nav_item_arrow').removeClass('active');

        $(this).find('.mobile_icon_container').toggleClass('active');
        $('.header').toggleClass('activeMobile');
        $('.mobile_header_nav_container').toggleClass('active');
        $('body').toggleClass('disableScroll')
        $('.header_title_wrapper').toggleClass('transparent')
        $('.mobile_header_menu').toggleClass('active')
        $('.theme_toggle_wrapper').toggleClass('visible')
        if (isTablet()) {
            $('.theme_toggle_wrapper').toggleClass('header_fixed');
        }
    })
}



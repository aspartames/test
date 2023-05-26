const isDesktop= () => $(window).width() > 983
const isTablet = () => $(window).width() <= 983
const isMobile = () => $(window).width() <= 500


// sliders
const mapCardSlider = () =>{
        let $carousel = $('.map_card_slider');
        let $slideNumber = $('.slide_number');
        $carousel.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: $('.prev_arrow'),
            nextArrow: $('.next_arrow'),
            dots: false,
            appendDots: $slideNumber,
            customSlideNumber: function (slider, currentSlide) {
                return (currentSlide + 1) + '/' + slider.slideCount;
            },
            responsive: [
                {
                    breakpoint: 600,
                    settings: "unslick"
                }
            ]
        });


        $carousel.on('afterChange', function (event, slick, currentSlide) {
            $slideNumber.html(slick.options.customSlideNumber(slick, currentSlide));
        });
        // Initial slide number display
        $slideNumber.html($carousel.slick('getSlick').options.customSlideNumber($carousel.slick('getSlick'), 0));
}


const setContent = () =>{
    $('.map_card_description').click(function (){
        $('.map_card_section').find('*').removeClass('active');

        $(this).addClass('active')
        $('.left').addClass('active')

    })
    $('.map_card_position').click(function (){
        $('.map_card_section').find('*').removeClass('active');

        $(this).addClass('active')
        $('.card_map_wrapper').addClass('active')
    })
    $('.map_card_contacts').click(function (){
        $('.map_card_section').find('*').removeClass('active');

        $(this).addClass('active')
        $('.map_card_links').addClass('active')
    })
}





// check window size
const windowSizeCheck = (desktopSetting, tabletSettings, mobileSettings) => {
    if(isMobile()){
        mobileSettings();
    }
    if (isTablet()) {
        tabletSettings();
    }
    if(isDesktop()) {
        desktopSetting();
    }
}

// if window width > isTablet set this settings
const setDesktopSettings = () => {
    removeTabletHeader()
    removeTabletThemeToggle()

    const t = setTimeout(() => {
        setHeaderClassesContentWidth()
    }, 500)

    return () => clearTimeout(t)
}

// if window width == isTablet set this settings
const setTabletSettings = () => {
    setTabletHeader()
    setTabletThemeToggle()
}

// if window width == isMobile set this settings
const setMobileSettings = () => {
    setTabletHeader()
    setTabletThemeToggle()
    removeSlider()
}


const init = () =>{
    setHeaderFixed()
    navItemOverlay()
    themeToggle()

    region()
    modalWindow()

    // tablet and mobile
    setTabletHeader()
    regionTablet()
    displayMenuMobile()

    // forms
    submitFormCitySelectTablet()
    submitFormCitySelect()






    mapCardSlider()
    commonHover()
    setContent()



    const t = setTimeout(() => {
        setHeaderClassesContentWidth()
    }, 500)

    return () => clearTimeout(t)













}


const onScroll = () =>{
    setHeaderFixed()
}


$(document).ready(function () {

    init()

    $(window).on('resize', ()=> windowSizeCheck(setDesktopSettings, setTabletSettings, setMobileSettings))

    $(window).scroll(()=> onScroll())

});


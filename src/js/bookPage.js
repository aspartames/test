const isDesktop= () => $(window).width() > 983
const isTablet = () => $(window).width() <= 983
const isMobile = () => $(window).width() <= 500


// sliders







// hover

const bookPageHovers = () => {
    $('.book_page_nav_button').hover(
        function () {
            $(this).find('.book_page_nav_arrow').addClass('hover')
        },
        function () {
            $(this).find('.book_page_nav_arrow').removeClass('hover')
        }
    )
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





    bookPageHovers()











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


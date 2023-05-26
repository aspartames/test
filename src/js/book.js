const isDesktop= () => $(window).width() > 983
const isTablet = () => $(window).width() <= 983
const isMobile = () => $(window).width() <= 500


// sliders

// hover
const classSelect = () =>{
    const x = (classNum, xThis) => {
            $('.classes_content_list').removeClass('active')
            $('.book_class_number').removeClass('active')
            xThis && $(xThis).addClass('active')
            $(`.class${classNum}`).addClass('active')
    }

    $('#class5').click(function (){
        x(5, this)
    })
    $('#class6').click(function (){
        x(6, this)
    })
    $('#class7').click(function (){
        x(7, this)
    })
    $('#class8').click(function (){
        x(8, this)
    })

    $('#book_class_select').change(function (){
        const classNumber = $(this).val()
        switch (classNumber){
            case '5': x(5)
                break
            case '6': x(6)
                break
            case '7': x(7)
                break
            case '8': x(8)
                break
        }
    })
}
// set content


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



    classSelect()





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


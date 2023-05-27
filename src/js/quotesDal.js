const isDesktop= () => $(window).width() > 983
const isTablet = () => $(window).width() <= 983
const isMobile = () => $(window).width() <= 500


// sliders

const quoteFilter = () =>{
    $('.checkbox_letter').click(function() {
        let checkbox = $(this).find('input[type="checkbox"]');
        $('.checkbox_letter').not(this).removeClass('selected').find('input[type="checkbox"]').prop('checked', false);
        checkbox.prop('checked', !checkbox.prop('checked'));
        if (checkbox.prop('checked')) {
            $(this).addClass('selected');
        } else {
            $(this).removeClass('selected');
        }
    });
}

const setQuoteNav = () =>{
    let startCode = 'А'.charCodeAt(0);  // Код символа 'А'
    let endCode = 'Я'.charCodeAt(0);    // Код символа 'Я'
    let letters = [];

    for (let i = startCode; i <= endCode; i++) {
        letters.push(String.fromCharCode(i));
    }
    const checkboxTemplate = (letter) => {
        return `
        <label class="checkbox_letter">
            <input class="checkbox_letter_input" type="checkbox" name="${letter}" value="${letter}">
                ${letter}
        </label>`
    }

    $.each(letters, function(index, letter) {
        $('.checkbox_letters_wrapper').append(checkboxTemplate(letter))
    });
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

    setQuoteNav()

    quoteFilter()
    setMobileLink()

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


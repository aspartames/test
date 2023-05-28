const isDesktop= () => $(window).width() > 1100
const isTablet = () => $(window).width() <= 1100
const isMobile = () => $(window).width() <= 600


const getCallbacks = (callbacks) => {
    if(callbacks){
        for (let i = 0; i < callbacks.length; i++) {
            callbacks[i]();
        }
    }
}

const init = (callbacks) => getCallbacks(callbacks)

const onScroll = (callbacks) => getCallbacks(callbacks)


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
const setDesktopSettings = (callbacks) => (() => getCallbacks(callbacks))

// if window width == isTablet set this settings
const setTabletSettings = (callbacks) => (() => getCallbacks(callbacks))

// if window width == isMobile set this settings
const setMobileSettings = (callbacks) => (() => getCallbacks(callbacks))

// execute
const isDocumentReady = (settings) => {
    console.log(settings)
    $(document).ready(function () {

        init(settings.init)

        $(window).on('resize', ()=> windowSizeCheck(
            setDesktopSettings(settings.desktop),
            setTabletSettings(settings.tablet),
            setMobileSettings(settings.mobile)
        ))

        $(window).scroll(()=> onScroll(settings.scroll))

    });
}
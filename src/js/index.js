
// sliders
const sliderIntro = () => {
    $('.introduction_slider').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
    })

}

const sliderMainPage = () =>{
    let $carousel = $('.slick_carousel');
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
        }
    });

    $carousel.on('afterChange', function (event, slick, currentSlide) {
        $slideNumber.html(slick.options.customSlideNumber(slick, currentSlide));
    });
    // Initial slide number display
    $slideNumber.html($carousel.slick('getSlick').options.customSlideNumber($carousel.slick('getSlick'), 0));
}


// animate navigation item when hover
const mainPageNavAnimate = () =>{
    $('.main_navigation_item').hover(
        function () {
            $(this).find('.main_navigation_item_arrow').addClass('hover')
        },
        function () {
            $(this).find('.main_navigation_item_arrow').removeClass('hover')
        }
    )
}

// svg animation when hover
const svgHover = () => {
    $('.buttonSVG').hover(
        function () {
            $(this).css('background-color', '#e87b5a');
            $(this).find('.arr').css('fill', 'white')
        },
        function () {
            $(this).css('background-color', '');
            $(this).find('.arr').css('fill', '#e87b5a')
        }
    )

    $('.book_download').hover(
        function () {
            $(this).find('.book_download_path').addClass('hover')
        },
        function () {
            $(this).find('.book_download_path').removeClass('hover')
        }
    )
    $('.introduction_button').hover(function (){
        $(this).find('.arr').addClass('hover')
        $(this).find('.buttonNextSVG').addClass('hover')
    },
        function (){
            $(this).find('.arr').removeClass('hover')
            $(this).find('.buttonNextSVG').removeClass('hover')
        }
        )
}


// mobile select classes
const mobileSelectClasses = () => {
    const mobileClassesContent = $('.mobile_main_classes_content')
    const setContent = (number) => {
        const clone = $('.header_classes_content').clone()[number].children
        mobileClassesContent.append(clone)
    }

    setContent(0)

    $('#mobile_selected_class').change(function () {
        mobileClassesContent.empty()

        const selectedClassNumber = $('#mobile_selected_class').val()

        switch (true) {
            case selectedClassNumber === '5':
                setContent(0)
                break
            case selectedClassNumber === '6':
                setContent(1)
                break
            case selectedClassNumber === '7':
                setContent(2)
                break
            case selectedClassNumber === '8':
                setContent(3)
                break
            default:
                return ''
        }
    })
}


// cookie
const cookie = () => {
    $('.cookie_button').click(function (){
        $('.cookie').addClass('accepted')
    })
}


const initSettings = [
    setHeaderFixed,
    sliderIntro,
    sliderMainPage,
    mainPageNavAnimate,
    svgHover,

    mobileSelectClasses,

    cookie,
]

const settings = {
    init: initSettings,
    scroll: [setHeaderFixed],
    desktop: [],
    tablet: [],
    mobile: []
}


// execute
isDocumentReady(settings)

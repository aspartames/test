
// sliders
const sliderIntro = () => {
    $('.introduction_slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        arrows: false,
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
        $(this).addClass('hover')
        $(this).find('.arr').addClass('hover')
        $(this).find('.buttonNextSVG').addClass('hover')
    },
        function (){
            $(this).removeClass('hover')
            $(this).find('.arr').removeClass('hover')
            $(this).find('.buttonNextSVG').removeClass('hover')
        }
        )
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

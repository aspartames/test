
// slider
const setSlideDescription = (currentSlide) => {
    let slideWrapper = $('.book_page_slider').find('.book_page_slide_wrapper').eq(currentSlide + 1)
    let slideName = slideWrapper.find('.book_page_slide_name').clone()
    let copy = slideName.addClass('visible')
    $('.book_page_slide_description').html(copy);
}

const bookPageSlider = () =>{
        let $carousel = $('.book_page_slider');
        let $slideNumber = $('.slide_number');
        if(!$carousel.hasClass('slick-initialized')) {
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
                setSlideDescription(currentSlide)
            });
            // Initial slide number display
            $slideNumber.html($carousel.slick('getSlick').options.customSlideNumber($carousel.slick('getSlick'), 0));
        }
}

const slideDescription = () =>{
    $('.book_page_slider').on('init', function (event, slick ){
        setSlideDescription(slick.currentSlide)
    })
}

const setSlideBG = () =>{
    $('.book_page_slide').each(function (){
        const img = $(this).find('.book_page_slider_img').clone()
        const imgBG = img.removeClass('book_page_slider_img').addClass('book_page_slider_img_background')
        $(this).prepend(imgBG)
    })
}

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
}


// set content
const setContent = () =>{
    $('.book_page_nav_text').click(function (){
        $('.book_page_content').find('*').removeClass('active');
        $('.book_page_content_nav').find('*').removeClass('active');

        $(this).addClass('active')
        $('.book_page_content_essential').addClass('active')
        $('.book_page_geography').addClass('active')

    })
    $('.book_page_nav_audio').click(function (){
        $('.book_page_content').find('*').removeClass('active');
        $('.book_page_content_nav').find('*').removeClass('active');
        $('.book_page_geography').removeClass('active')
        $(this).addClass('active')
        $('.book_page_content_audio').addClass('active')
        $('.book_page_content_video').addClass('active')
    })
    $('.book_page_nav_picture').click(function (){
        sliderRefresh()
        $('.book_page_content').find('*').removeClass('active');
        $('.book_page_content_nav').find('*').removeClass('active');
        $('.book_page_geography').removeClass('active')
        $(this).addClass('active')
        $('.book_page_slider_container').addClass('active')
    })
    $('.book_page_nav_download').click(function (){
        $('.book_page_content').find('*').removeClass('active');
        $('.book_page_content_nav').find('*').removeClass('active');
        $('.book_page_geography').removeClass('active')
        $(this).addClass('active')
        $('.book_page_content_documents').addClass('active')
        $('.main_book_content_library').addClass('active')

    })
}

const mobileBookPageNav = () => {
    $('.book_page_mobile_nav_bg').click(function() {
        $('.book_page_dropdown_content').toggle();
    });

    $('.book_page_dropdown_content button').click(function() {
        var selectedSection = $(this).text();
        $('.book_page_mobile_dropbtn').text(selectedSection);
        $('.book_page_dropdown_content').hide();
    });

    $(document).click(function(event) {
        var target = $(event.target);
        if (!target.closest('.book_page_mobile_nav').length) {
            $('.book_page_dropdown_content').hide();
        }
    });
}


const sliderRefresh = () => {
    if(!isMobile()){
        setTimeout(() => {
            $('.book_page_slider').slick('refresh')
        }, 1000)
    }
}

const settings =[
    bookPageHovers,
    mediaLinksHover,
    setMobileLink,
    setAudioControl,
    slideDescription,
    bookPageSlider,
    setSlideBG,
    setContent,
    mobileBookPageNav,
    sliderRefresh,
]


isDocumentReady({
    init: settings,
    tablet: [bookPageSlider, removeMobileLink],
    mobile: [setContent, setMobileLink]
})

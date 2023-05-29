
const mapCardSlider = () =>{
        let $carousel = $('.map_card_slider');
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
            });
            // Initial slide number display
            $slideNumber.html($carousel.slick('getSlick').options.customSlideNumber($carousel.slick('getSlick'), 0));
        }
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



isDocumentReady({
    init: [mapCardSlider, commonHover, setContent],
    tablet: [mapCardSlider],
})



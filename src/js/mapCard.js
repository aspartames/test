
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

const removeSlider = () =>{


    const x = $('<div></div>', { class: "book_page_mobile_image" }); // Исправление создания элемента с классом

    $('.book_page_slide_wrapper').each(function () {
        const img = $(this).find('.book_page_slider_img');
        const text = $(this).find('.book_page_slide_name');

        const template = `
                            <div class="book_page_mobile_image_wrapper">
                              ${img[0].outerHTML}
                              ${text[0].outerHTML}
                            </div>
                          `;
        x.append($(template));
        text[0].remove()
        img[0].remove()
    });

    $(".book_page_content").append(x);
    $('.book_page_slider_container').remove()
}


isDocumentReady({
    init: [mapCardSlider, commonHover, setContent],
    tablet: [mapCardSlider],
    mobile: [removeSlider]
})



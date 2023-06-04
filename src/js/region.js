// region
const region = () => {
    $('.region_hidden').click(function () {
        $('.region_check_wrapper').addClass('hidden')
    })

    $('.region_city_name').click(function () {
        $('.region_check_wrapper').removeClass('hidden')
    })
}

const regionTablet = () =>{
    const close = $('.m_form_close')

    $('.region_city_name').click(function () {
        $('.mobile_form_wrapper').slideDown()
        close.css('opacity', '1')
    })
    close.click(function () {
        $('.mobile_form_wrapper').slideUp()
        $(this).css('opacity', '0')
    })
}


// modal Window
const modalWindow = () => {
    $('.modal_open').click(function () {
        $('.modal').addClass('active')
        $('body').addClass('disableScroll')
    })
    $('.modal_close_wrap').click(function () {
        closeModal()
    })
    $('.modal_background').click(function () {
        closeModal()
    })
}

const closeModal = () => {
    $('.modal').removeClass('active')
    $('body').removeClass('disableScroll')
    $('.region_check_wrapper').addClass('hidden')
}

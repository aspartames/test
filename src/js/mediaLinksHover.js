const mediaLinksHover = () => {
    $('.media_link').hover(
        function () {
            $(this).find('.media_link_inner').addClass('hover')
            $(this).find('.media_link_icon').addClass('hover')
            $(this).find('.media_link_icon_wrapper').addClass('hover')

        },
        function () {
            $(this).find('.media_link_inner').removeClass('hover')
            $(this).find('.media_link_icon').removeClass('hover')
            $(this).find('.media_link_icon_wrapper').removeClass('hover')
        },
    )
}

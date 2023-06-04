
const commonHover = () => {
    $('.nav_button_back').hover(
        function () {
            $(this).find('.nav_arrow').addClass('hover')
        },
        function () {
            $(this).find('.nav_arrow').removeClass('hover')
        }
    )
    if(!isTablet()) {
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
}

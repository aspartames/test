// theme goggle
const themeToggle = () => {
    $('.theme_toggle').change(function () {
        if ($(this).is(':checked')) {
            $('.theme_toggle').each(function () {
                $(this).prop('checked', true)
                $(this).addClass('dark')
            })
            $(':root').css('--theme', 'var(--dark)');
        } else {
            $('.theme_toggle').each(function () {
                $(this).prop('checked', false)
                $(this).removeClass('dark')
            })
            $(':root').css('--theme', 'var(--light)');
        }
    });
}

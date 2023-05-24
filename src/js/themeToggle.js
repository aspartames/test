// theme goggle
const themeToggle = () => {
    $('.theme_toggle').change(function () {
        const root = $(':root')

        if ($(this).is(':checked')) {
            root.css('--backgroundColor', 'var(--darkBackground)');
            root.css('--mainPageHeaderGradient1', 'var(--textGradientDark1)');
            root.css('--mainPageHeaderGradient2', 'var(--textGradientDark2)');
            root.css('--themeColor', 'var(--dark)');
            root.css('--theme', 'light');
            root.css('--borderColor', 'var(--light)');
            root.css('--titleColor', 'white');
            root.css('--textColor', 'var(--textColorDark)');
            root.css('--objectBackground', 'var(--dark2)');
            root.css('--objectBackground2', 'var(--dark2)');


            $('.theme_toggle').each(function () {
                $(this).prop('checked', true)
                $(this).addClass('dark')
            })
        } else {
            $('.theme_toggle').each(function () {
                $(this).prop('checked', false)
                $(this).removeClass('dark')
            })
            root.css('--backgroundColor', 'var(--lightBackground)');
            root.css('--mainPageHeaderGradient1', 'var(--textGradientLight1)');
            root.css('--mainPageHeaderGradient2', 'var(--textGradientLight2)');
            root.css('--themeColor', 'var(--light)');
            root.css('--theme', 'dark');
            root.css('--borderColor', 'black');
            root.css('--titleColor', 'black');
            root.css('--textColor', 'var(--textColorLight)');
            root.css('--objectBackground', 'var(--light)');
            root.css('--objectBackground2', 'white');

        }
    });
}

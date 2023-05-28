const setAudioControl = () => {
    $(".audio_wrapper").each(function () {
        let audio = $(this).find(".audio")[0];
        let audioButton = $(this).find(".audio_button");
        let playButton = $(this).find(".play_button");
        let pauseButton = $(this).find(".pause_button");

        playButton.on("click", function () {
            audio.play();
            audioButton.addClass('played')
        });

        pauseButton.on("click", function () {
            audio.pause();
            audioButton.removeClass('played')
        });

        audio.addEventListener('ended', function () {
            audioButton.removeClass('played')
        })
    });
}

const setMobileLink = () => {
    if(isMobile()){
        $('.media_item').each(function () {
            const link = $(this).find('a')
            const name = $(this).find('.media_name_wrapper')
            const fileSize = $(this).find('.file_size')
            const mediaName = $(this).find('.media_name')

            $(this).html(link.append(name))
            mediaName.append(fileSize)
        })
    }
}

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

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



const mapFilter = () =>{
    $('.checkbox_button').click(function() {
        var checkbox = $(this).find('input[type="checkbox"]');
        checkbox.prop('checked', !checkbox.prop('checked'));
        if (checkbox.prop('checked')) {
            $(this).addClass('selected');
        } else {
            $(this).removeClass('selected');
        }
    });
}

const mapItemHover = () => {
    $('.map_item').hover(function () {
            $(this).addClass('hover')
            $(this).find('.map_item_image_wrapper').addClass('hover')
        },
        function () {
            $(this).removeClass('hover')
            $(this).find('.map_item_image_wrapper').removeClass('hover')
        }
    )
}

const mapScroll = () => {
    const mapWrapper = $('.map_wrapper')

    mapWrapper.on("touchstart", function(event) {
        if (event.originalEvent.touches.length === 2) {
            $(this).addClass('active')
        }
    });

    mapWrapper.on("touchend", function(event) {
        alert('sd')
        $(this).removeClass('active')
    });

}

isDocumentReady({init: [commonHover, mapFilter, mapItemHover, mapScroll]})

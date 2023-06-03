
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

isDocumentReady({init: [commonHover, mapFilter, mapItemHover]})

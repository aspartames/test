
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

isDocumentReady({init: [commonHover, mapFilter]})

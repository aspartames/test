
const loadItems = () =>{

    $('.show_more').click(function() {

        $.ajax({
            url: '',
            type: 'POST',
            data: requestData,
            success: function(response) {
                if (response) {

                    $('.documents_items_wrapper').append(response);
                } else {
                    $('.show_more').hide();
                }
            },
            error: function() {
                console.log('error');
            }
        });
    });
}

isDocumentReady({
    init: [mediaLinksHover, setMobileLink],
    tablet: [removeMobileLink],
    mobile: [setMobileLink]

})










const galleryFilter = () =>{
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

const classSelect = () =>{
    const x = (classNum, xThis) => {
/*
        $('.classes_content_list').removeClass('active')
*/
        $('.gallery_class_number').removeClass('active')
        xThis && $(xThis).addClass('active')
        $(`.class${classNum}`).addClass('active')
    }

    $('#all').click(function (){
        x(5, this)
    })
    $('#class5').click(function (){
        x(5, this)
    })
    $('#class6').click(function (){
        x(6, this)
    })
    $('#class7').click(function (){
        x(7, this)
    })
    $('#class8').click(function (){
        x(8, this)
    })

    $('#book_class_select').change(function (){
        const classNumber = $(this).val()
        switch (classNumber){
            case 'all': x(5)
                break
            case '5': x(5)
                break
            case '6': x(6)
                break
            case '7': x(7)
                break
            case '8': x(8)
                break
        }
    })
}

const imageZoom = () => {
    const overlay = $('.gallery_image_overlay')
    const modal =  $('.gallery_modal')
    overlay.hover(function () {
            $(this).addClass('hover')
        },
        function () {
            $(this).removeClass('hover')
        }
    )
    overlay.click(function (){
        const img = $(this).siblings('img').clone()
        modal.html(img)
        modal.addClass('active')
        $('body').addClass('disableScroll')
        $('header').css('display', 'none')
    })
    modal.click(function (){
        $(this).removeClass('active')
        $('body').removeClass('disableScroll')
        $('header').css('display', 'block')

    })
}


isDocumentReady({init: [imageZoom, galleryFilter, classSelect]})




const classSelect = () =>{
    const x = (classNum, xThis) => {
            $('.classes_content_list').removeClass('active')
            $('.book_class_number').removeClass('active')
            xThis && $(xThis).addClass('active')
            $(`.class${classNum}`).addClass('active')
    }

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

isDocumentReady({init: [classSelect]})


const quotesLink = () => {
    if(isMobile()){
        $('.media_item').each(function () {
            const href = $(this).find('a').attr('href')
            const link = `<a class="mobile_link" href="${href}"></a>`

            !$(this).parent().is('.mobile_link') && $(this).wrap(link)

        })
    }
}

const removeQuotesLink = () => {
    if(!isMobile()){
        $('.media_item').each(function () {
            $(this).parent().is('.mobile_link') && $(this).unwrap()
        })
    }
}


isDocumentReady({
    init: [quotesLink, mediaLinksHover],
    tablet: [removeQuotesLink],
    mobile: [quotesLink,]
})









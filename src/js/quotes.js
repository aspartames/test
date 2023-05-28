
const quotesLink = () => {
    if(isMobile()){
        $('.media_item').each(function () {
            const href = $(this).find('a').attr('href')
            const link = `<a href="${href}"></a>`

            $(this).wrap(link)
        })
    }
}

isDocumentReady({init: [quotesLink, mediaLinksHover]})









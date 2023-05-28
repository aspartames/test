
const quoteFilter = () =>{
    $('.checkbox_letter').click(function() {
        let checkbox = $(this).find('input[type="checkbox"]');
        $('.checkbox_letter').not(this).removeClass('selected').find('input[type="checkbox"]').prop('checked', false);
        checkbox.prop('checked', !checkbox.prop('checked'));
        if (checkbox.prop('checked')) {
            $(this).addClass('selected');
        } else {
            $(this).removeClass('selected');
        }
    });
}

const setQuoteNav = () =>{
    let startCode = 'А'.charCodeAt(0);  // Код символа 'А'
    let endCode = 'Я'.charCodeAt(0);    // Код символа 'Я'
    let letters = [];

    for (let i = startCode; i <= endCode; i++) {
        letters.push(String.fromCharCode(i));
    }
    const checkboxTemplate = (letter) => {
        return `
        <label class="checkbox_letter">
            <input class="checkbox_letter_input" type="checkbox" name="${letter}" value="${letter}">
                ${letter}
        </label>`
    }

    $.each(letters, function(index, letter) {
        $('.checkbox_letters_wrapper').append(checkboxTemplate(letter))
    });
}

isDocumentReady({init: [setQuoteNav, quoteFilter, setMobileLink]})

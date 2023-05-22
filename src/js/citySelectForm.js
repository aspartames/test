// submit form city select
const submitFormCitySelect = () => {
    $("#cities_list input").change(function () {
        let selectedCity = $("input[name='city']:checked").val();
        $("input[name='cityInput']").val(selectedCity);
        $("#city_select_form").submit(function () {
            return false
        });
        closeModal()

    });
    $(".city_tag input").change(function () {
        let selectedCity = $("input[name='city']:checked").val();
        $("input[name='cityInput']").val(selectedCity);
        $("#city_select_form").submit(function () {
            return false
        });
        closeModal()
    });

}

const submitFormCitySelectTablet = () => {
    $(".mobile_city_submit").click(function () {
        $("#city_select_form").submit(function () {
            return false
        });
    })
}

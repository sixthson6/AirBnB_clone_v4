$(document).ready(function () {
    const amenity = {};
    $('input').change(function () {
        if ($(this).is(':checked')) {
            amenity[$(this).attr('data-id')] = $(this).attr('data-name');
        } else {
            delete amenity[$(this).attr('data-id')]
        }
        $('.amenities H4').text(Object.values(amenity).join(', '));
    });
});
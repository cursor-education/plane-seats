$(function() {
    // References to info containers
    var $places = $('#count');
    var $placesLeft = $('#count-left');
    var $placesRight = $('#count-right');

    var $plane = $('.plane');

    var $seats = $plane.find('.chair');
    var $seatsLeft = $plane.find('.left').find('.chair');
    var $seatsRight = $plane.find('.right').find('.chair');

    $places.text('There are ' + $seats.length + ' seats on plane at all');
    $placesLeft.text('There are ' + $seatsLeft.length + ' seats on the left');
    $placesRight.text('There are ' + $seatsRight.length + ' seats on the right');

    var $info = $('.info');

    var $free = $seats.filter('.free');
    $info.prepend('<div>There are ' + $free.length + ' free seats on the plane</div>');

    $.each($seats, function(index, element) {
        $(element).text($(element).data('option'));
    });
});

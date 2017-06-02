'use strict';

var projectView = {};

projectView.tabSelector = function () {
    $('.template').hide();
    $('main section').hide();
    $('.tab').on('click', function() {
        var $selected = $(this).attr('name');
        $('section').attr('id', $selected ).fadeIn(500);
    });

};

$(document).ready(function () {
    projectView.tabSelector();
});
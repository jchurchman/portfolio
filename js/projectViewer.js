'use strict';

var projectView = {};

projectView.pageLoader = function () {
    $('.template').hide();
    $('main>section').hide();

};

projectView.tabSelector = function () {

    $('.tab').on('click', function() {
        var $selected = $(this).attr('name');

        $('main>section').hide();
        console.log($('section').attr('id', $selected ));
        $('section').attr('id', $selected ).fadeIn(500);
    });

};

$(document).ready(function () {
    projectView.pageLoader();
    // projectView.tabSelector();
});
'use strict';

var projectView = {};

projectView.pageLoader = function () {
    $('.template').hide();
    $('.content').hide();
    $('#home').fadeIn(500);
};

projectView.tabSelector = function () {
    $('.tab').on('click', function() {
        $('.content').hide();
        var selected = $(this).attr('name');
        $(`#${selected}`).fadeIn(500);
        $('#main-nav').slideToggle(400);
    });
};

projectView.togglePhoneMenu = function () {
    $('.icon-menu').on('click',function(){
        $('#main-nav').slideToggle(400);
    });
    
};

$(document).ready(function () {
    projectView.togglePhoneMenu();
    projectView.pageLoader();
    projectView.tabSelector();
});
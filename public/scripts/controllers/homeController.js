'use strict';
var app = app || {};

(function (module) {
    const homeController = {};
    homeController.index = () => {
        $('#home').show().siblings().hide();
        app.projectView.togglePhoneMenu();
        // $('#site-heading nav').hide();
    };
    module.homeController = homeController;
}(app));
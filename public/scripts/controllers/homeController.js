'use strict';
var app = app || {};

(function (module) {
    const homeController = {};
    homeController.index = () => {
        // console.log('app.homeController.index');
        $('#home').show().siblings().hide();
        $('#site-heading nav').slideToggle(400);
    };
    app.projectView.togglePhoneMenu();
    module.homeController = homeController;
}(app));
'use strict';
var app = app || {}; //eslint-disable-line 

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
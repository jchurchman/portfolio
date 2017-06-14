'use strict';
var app = app || {};

(function (module) {
    const homeController = {};
    homeController.index = () => {
        $('section [data-category="home"]').show().siblings().hide();
    };
    module.homeController = homeController;
    // app.projectView.initIndexPage();
    app.homeController.index();
    app.projectView.togglePhoneMenu();
}(app));
'use strict';
var app = app || {};

(function (module) {
    const aboutController = {};
    aboutController.index = () => {
        console.log('app.aboutController.index');
        $('#about').show().siblings().hide();
        $('#site-heading nav').slideToggle(400);
        app.About.checkETag();
        // app.aboutView.initIndexAbout();
    };

    module.aboutController = aboutController;
}(app));
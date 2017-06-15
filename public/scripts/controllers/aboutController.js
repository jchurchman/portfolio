'use strict';
var app = app || {};

(function (module) {
    const aboutController = {};
    aboutController.index = () => {
        $('#about').show().siblings().hide();
        $('#site-heading nav').slideToggle(400);
        app.About.checkETag();
    };

    module.aboutController = aboutController;
}(app));
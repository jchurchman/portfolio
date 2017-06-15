'use strict';
var app = app || {};

(function (module) {
    const aboutController = {};
    aboutController.index = () => {
        app.About.validateETag(app.aboutView.initIndexAbout);
        $('#about').show().siblings().hide();
    };

    module.aboutController = aboutController;
}(app));
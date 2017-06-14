'use strict';
var app = app || {};

(function (module) {
    const aboutController = {};
    aboutController.index = () => {
        app.About.validateEtag(app.aboutView.initIndexAbout);
        $('#about').show().siblings().hide();
    };

    module.aboutController = aboutController;
}(app));
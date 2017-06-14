'use strict';
var app = app || {};

(function (module) {
    const aboutController = {};
    aboutController.index = () => {
        app.About.validateEtag(app.aboutView.initIndexAbout);
        $('.project-template, .about-template, main section, #site-heading nav').hide();
        $('section [data-category="about"]').fadeIn(500);
    };

    module.aboutController = aboutController;
}(app));
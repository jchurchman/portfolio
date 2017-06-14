'use strict';
var app = app || {};

(function (module) {
    const projectController = {};
    projectController.index = () => {
        app.Project.validateEtag(app.projectView.initIndexPage);
        $('.project-template, .about-template, main section, #site-heading nav').hide();
        $('section [data-category="home"]').fadeIn(500);
    };

    module.projectController = projectController;
}(app));
'use strict';
var app = app || {};

(function (module) {
    const projectController = {};
    projectController.index = () => {
        app.Project.validateEtag(app.projectView.initIndexPage);
        $('#portfolio').show().siblings().hide();
    };

    module.projectController = projectController;
}(app));
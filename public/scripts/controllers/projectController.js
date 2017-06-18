'use strict';
var app = app || {}; //eslint-disable-line 

(function (module) {
    const projectController = {};
    projectController.index = () => {
        $('#portfolio').show().siblings().hide();
        $('#site-heading nav').slideToggle(400);
        app.Project.checkETag();
    };

    module.projectController = projectController;
}(app));
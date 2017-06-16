'use strict';
var app = app || {};

(function (module) {
    const aboutController = {};
    aboutController.index = () => {
        $('#about').show().siblings().hide();
        $('#site-heading nav').slideToggle(400);
        app.About.checkETag();
        app.repos.requestRepos(app.repoView.index);
    };

    module.aboutController = aboutController;
}(app));
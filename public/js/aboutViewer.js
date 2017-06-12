'use strict';

var app = app || {};

(function (module) {
    const aboutView = {};

    aboutView.initIndexAbout = () => {
        app.About.all.forEach( (about) => {
            $('section[data-category="about"] header').after(about.toHTML());
        });
    };

    module.aboutView = aboutView;
}(app));
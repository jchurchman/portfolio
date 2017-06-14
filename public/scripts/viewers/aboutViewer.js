'use strict';

var app = app || {}; // eslint-disable-line

(function (module) {
    const aboutView = {};

    aboutView.initIndexAbout = () => {
        app.About.all.forEach( (about) => {
            $('section[data-category="about"] header').after(about.toHTML());
        });
    };

    module.aboutView = aboutView;
}(app));
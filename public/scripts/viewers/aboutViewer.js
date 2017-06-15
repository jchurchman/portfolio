'use strict';

var app = app || {}; // eslint-disable-line

(function (module) {
    const aboutView = {};

    aboutView.initIndexAbout = () => {
        
        app.About.all.forEach( aboutObj => {
            $('#about header').after(aboutObj.toHTML('#about-template'));
        });
    };

    module.aboutView = aboutView;
}(app));
'use strict';

var app = app || {}; // eslint-disable-line

(function (module) {
    const aboutView = {};

    aboutView.initIndexAbout = () => {
        app.About.all.forEach( (aboutObj) => {
            console.log(aboutObj);
            console.log(aboutObj.toHTML(this));
            $('#about header').after(aboutObj.toHTML(this));
        });
    };

    module.aboutView = aboutView;
}(app));
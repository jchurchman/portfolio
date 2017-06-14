'use strict';

var app = app || {}; // eslint-disable-line

(function (module) {
    function About(aboutObject) {
        this.heading = aboutObject.heading;
        this.info = aboutObject.info;
    }

    About.all = [];

    About.prototype.toHTML = () => {
        let template = Handlebars.compile($('.about-template').html());
        return template(this);
    };

    About.loadAll = (rawAbout) => {
        app.About.all = rawAbout.map( (ele) => new About(ele) );
    };

    About.runWhenDone = (data) =>{
        localStorage.setItem('rawAbout', JSON.stringify(data));
        app.About.loadAll(data);
        app.aboutView.initIndexAbout();
    };

    About.runWhenErr = (err) => console.error( 'error', err );

    About.getDBData = () => {
        $.ajax({
            type: 'GET',
            url: './abouts.json',
            success: app.About.runWhenDone, error: app.About.runWhenErr});
    };

    About.checkETag = () => {
        $.ajax({
            type: 'HEAD',
            url: './data/abouts.json',
            success: app.About.validateETag,
            error: app.About.runWhenErr
        });
    };

    About.validateETag = (data, message, xhr) => {
        let eTag = xhr.getResponseHeader('ETag');
        if(eTag === JSON.parse(localStorage.getItem('lsAboutTag'))) {
            app.About.loadAll(JSON.parse(localStorage.rawAbout));
            app.aboutView.initIndexAbout();
        } else {
            localStorage.setItem('lsAboutTag', JSON.stringify(eTag));
            app.About.getDBData();
        }
    };

    module.About = About;
}(app));
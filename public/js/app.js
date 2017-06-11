'use strict';

var app = app || {};

(function (module) {

    function Project(projectObject) {
        this.title = projectObject.title;
        this.link = projectObject.link;
        this.thumbnail = projectObject.thumbnail;
        this.date = projectObject.date;
        this.pitch = projectObject.pitch;
        this.blurb = projectObject.blurb;
    }

    Project.all = [];

    Project.prototype.toHTML = function () {
        var template = Handlebars.compile($('.project-template').html());
        return template(this);
    };

    Project.loadAll = function (rawData) {
        rawData.forEach(function (ele) {
            app.Project.all.push(new Project(ele));
        });
    };

    Project.runWhenDone = function (data) {
        localStorage.setItem('rawData', JSON.stringify(data));
        app.Project.loadAll(data);
        app.projectView.initIndexPage();
    };

    Project.runWhenErr = function (err) {
        console.error('error', err);
    };

    Project.getDBData = function () {
        $.ajax({
            type: 'GET',
            url: './data/projects.json',
            success: app.Project.runWhenDone,
            error: app.Project.runWhenErr
        });
    };

    Project.checkETag = function () {
        $.ajax({
            type: 'HEAD',
            url: './data/projects.json',
            success: app.Project.validateETag,
            error: app.Project.runWhenErr
        });
    };

    Project.validateETag = function (data, message, xhr) {
        let eTag = xhr.getResponseHeader('ETag');
        if (eTag === JSON.parse(localStorage.getItem('lsProjectTag'))) {
            app.Project.loadAll(JSON.parse(localStorage.rawData));
            app.projectView.initIndexPage();
        } else {
            localStorage.setItem('lsProjectTag', JSON.stringify(eTag));
            app.Project.getDBData();
        }
    };

    // projectEntries.forEach(function (projectObject) { //eslint-disable-line
    //     projects.push(new Project(projectObject));
    // });

    // projects.forEach(function (project) {
    //     $('section[data-category="portfolio"]').append(project.toHTML());
    // });

    function About(aboutObject) {
        this.heading = aboutObject.heading;
        this.info = aboutObject.info;
    }

    About.all = [];

    About.prototype.toHTML = function () {
        var template = Handlebars.compile($('.about-template').html());
        return template(this);
    };

    About.loadAll = function (rawAbout) {

        app.About.all = rawAbout.map(function (ele) {
            console.log(ele);
            console.log(new About(ele));
            return new About(ele);
        });

        // rawData.forEach(function(ele) {
        //     About.all.push( new About(ele) );
        // });
    };

    About.runWhenDone = function (data) {
        localStorage.setItem('rawAbout', JSON.stringify(data));
        app.About.loadAll(data);
        app.projectView.initIndexAbout();
    };

    About.runWhenErr = function (err) {
        console.error('error', err);
    };

    About.getDBData = function () {
        $.ajax({
            type: 'GET',
            url: './data/abouts.json',
            success: app.About.runWhenDone,
            error: app.About.runWhenErr
        });
    };

    About.checkETag = function () {
        $.ajax({
            type: 'HEAD',
            url: './data/abouts.json',
            success: app.About.validateETag,
            error: app.About.runWhenErr
        });
    };

    About.validateETag = function (data, message, xhr) {
        let eTag = xhr.getResponseHeader('ETag');
        if (eTag === JSON.parse(localStorage.getItem('lsAboutTag'))) {
            app.About.loadAll(JSON.parse(localStorage.rawAbout));
            app.projectView.initIndexAbout();
        } else {
            localStorage.setItem('lsAboutTag', JSON.stringify(eTag));
            app.About.getDBData();
        }
    };

    // aboutEntries.forEach(function (aboutObject){ //eslint-disable-line
    //     abouts.push(new About(aboutObject));
    // });;

    // abouts.forEach(function (about){
    //     $('section[data-category="about"] header').after(about.toHTML());
    // });
    module.About = About;
    module.Project = Project;

}(app));
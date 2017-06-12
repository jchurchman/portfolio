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
        app.Project.all = rawData.map(function (ele) {
            return new Project(ele);
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
            return new About(ele);
        });

    };

    About.runWhenDone = function (data) {
        localStorage.setItem('rawAbout', JSON.stringify(data));
        app.About.loadAll(data);
        app.aboutView.initIndexAbout();
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
            app.aboutView.initIndexAbout();
        } else {
            localStorage.setItem('lsAboutTag', JSON.stringify(eTag));
            app.About.getDBData();
        }
    };

    module.About = About;
    module.Project = Project;

}(app));
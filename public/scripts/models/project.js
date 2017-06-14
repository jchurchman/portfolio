'use strict';
var app = app || {}; 

(function (module) {

    function Project(projectObject) {
        Object.keys(projectObject).forEach(key => this[key] = projectObject[key]);
    }

    Project.all = [];

    Project.prototype.toHTML = () => {
        var template = Handlebars.compile($('.project-template').html());
        return template(this);
    };

    Project.loadAll = (rawData) => {
        app.Project.all = rawData.map( (ele) => new Project(ele));
    };

    Project.runWhenDone = (data) => {
        localStorage.setItem('rawData', JSON.stringify(data));
        app.Project.loadAll(data);
        app.projectView.initIndexPage();
    };

    Project.runWhenErr = ( err ) => console.error( 'error', err );

    Project.getDBData = () => {
        $.ajax({
            type: 'GET',
            url: './data/projects.json',
            success: app.Project.runWhenDone,
            error: app.Project.runWhenErr
        });
    };

    Project.checkETag = () => {
        $.ajax({
            type: 'HEAD',
            url: './data/projects.json',
            success: app.Project.validateEtag,
            error: app.Project.runWhenErr
        });
    };

    Project.validateEtag = (data, message, xhr) => {
        let eTag = xhr.getResponseHeader('ETag');
        if (eTag === JSON.parse(localStorage.getItem('lsProjectTag'))) {
            app.Project.loadAll(JSON.parse(localStorage.rawData));
            app.projectView.initIndexPage();
        } else {
            localStorage.setItem('lsProjectTag',
            JSON.stringify(eTag));
            app.Project.getDBData();
        }
    };

    module.Project = Project;
}(app));
'use strict';
var app = app || {};  //eslint-disable-line 

(function (module) {

    function Project(projectObject) {
        Object.keys(projectObject).forEach(key => this[key] = projectObject[key]);
    }

    Project.all = [];

    Project.prototype.toHTML = function () {
        let template = Handlebars.compile($('#project-template').text());
        return template(this);
    };

    Project.loadAll = (rawData) => {
        app.Project.all = rawData.map((ele) => new Project(ele));
    };

    Project.runWhenDone = (data) => {
        localStorage.setItem('rawData', JSON.stringify(data));
        app.Project.loadAll(data);
        app.projectView.initIndexPage();
    };

    Project.runWhenErr = (err) => console.error('error', err);

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
            success: app.Project.validateETag,
            error: app.Project.runWhenErr
        });
    };

    Project.validateETag = (data, message, xhr) => {
        let eTag = xhr.getResponseHeader('ETag');
        if (eTag === localStorage.getItem('lsProjectTag')) {
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
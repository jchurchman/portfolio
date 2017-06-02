'use strict';

var projects = [];

function Project(projectObject) {
    this.title = projectObject.title;
    this.link = projectObject.link;
    this.thumbnail = projectObject.thumbnail;
    this.date = projectObject.date;
    this.pitch = projectObject.pitch;
    this.blurb = projectObject.blurb;
}

Project.prototype.toHTML = function () {
    var $newProject = $('article.template').clone().removeClass('template');
    $newProject.find('h3').text(this.title);
    $newProject.find('.projectLink').attr('href', this.link);
    $newProject.find('img').attr('src', this.thumbnail);
    $newProject.find('.date').text(this.date);
    $newProject.find('figcaption').text(this.pitch);
    $newProject.find('.blurb').text(this.blurb);

    return $newProject;
};

projectEntries.forEach(function (projectObject) {
    projects.push(new Project(projectObject));
});

projects.forEach(function (project) {
    $('#portfolio').append(project.toHTML());
});
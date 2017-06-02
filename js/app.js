'use strict';

var projects = [];

function Project(title, link, thumbnail, date, pitch, blurb) {
    this.title = title;
    this.link = link;
    this.thumbnail = thumbnail;
    this.date = date;
    this.pitch = pitch;
    this.blurb = blurb;
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
    $('#portfolio').append(project.toHtml());
});
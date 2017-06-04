'use strict';

var projects = [];

var abouts = [];

function Project(projectObject) {
    this.title = projectObject.title;
    this.link = projectObject.link;
    this.thumbnail = projectObject.thumbnail;
    this.date = projectObject.date;
    this.pitch = projectObject.pitch;
    this.blurb = projectObject.blurb;
}

Project.prototype.toHTML = function () {
    var $newProject = $('article.project-template').clone().removeClass('project-template');
    $newProject.find('h3').text(this.title);
    $newProject.find('.projectLink').attr('href', this.link);
    $newProject.find('img').attr('src', this.thumbnail);
    $newProject.find('.date').text(this.date);
    $newProject.find('figcaption').text(this.pitch);
    $newProject.find('.blurb-body').html(this.blurb);

    return $newProject;
};

projectEntries.forEach(function (projectObject) { //eslint-disable-line
    projects.push(new Project(projectObject));
});

projects.forEach(function (project) {
    $('section[data-category="portfolio"]').append(project.toHTML());
});

function About(aboutObject) {
    this.heading = aboutObject.heading;
    this.info = aboutObject.info;
}

About.prototype.toHTML = function () {
    var $newAbout = $('article.about-template').clone().removeClass('about-template');
    $newAbout.find('h4').text(this.heading);
    $newAbout.find('p').html(this.info);

    return $newAbout;
};

aboutEntries.forEach(function (aboutObject){ //eslint-disable-line
    abouts.push(new About(aboutObject));
});

abouts.forEach(function (about){
    $('section[data-category="about"] header').after(about.toHTML());
});
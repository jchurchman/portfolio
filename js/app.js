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
    var template = Handlebars.compile($('.project-template').html());
    console.log(template(this));

    return template(this);
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
    var template = Handlebars.compile($('.about-template').html());
    console.log(template(this));
    return template(this);
};

aboutEntries.forEach(function (aboutObject){ //eslint-disable-line
    abouts.push(new About(aboutObject));
});

abouts.forEach(function (about){
    $('section[data-category="about"] header').after(about.toHTML());
});
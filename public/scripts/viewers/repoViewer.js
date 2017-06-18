'use strict';
var app = app || {}; //eslint-disable-line 

(function (module) {
    const repoView = {};

    const ui = function () {
        let $about = $('#about');

        $about.find('ul').empty();
        $about.show().siblings().hide();
    };

    repoView.index = function () {
        var render = Handlebars.compile($('#repo-template').text());
        ui();
        $('#about ul').append(app.repos.with('name').map(render));
    };

    module.repoView = repoView;
}(app));
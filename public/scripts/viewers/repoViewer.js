'use strict';
var app = app || {};

(function (module) {
    const repoView = {};

    const ui = function () {
        let $about = $('#about');

        $about.find('ul').empthy();
        $about.show().siblings().hide();
    };

    repoView.index = function () {
        ui();
        var render = Handlebars.compile($('#repo-template').text());
        $('#about ul').append(app.repos.with('owner.login' === 'jchurchman').map(render));
    };

    module.repoView = repoView;
})(app);
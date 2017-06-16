'use strict';
var app = app || {};

(function (module) {
    const repoView = {};

    const ui = function () {
        let $about = $('#about');

        $about.find('ul').empty();
        $about.show().siblings().hide();
    };

    repoView.index = function () {
        ui();
        var render = Handlebars.compile($('#repo-template').text());
        // console.log('render is ', render);
        // console.log('app.repos.all is ', app.repos.all);
        // console.log('app.repos.with("name") is ', app.repos.with('name'));
        $('#about ul').append(app.repos.with('name').map(render));
    };

    module.repoView = repoView;
})(app);
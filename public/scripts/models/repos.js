'use strict';
var app = app || {}; //eslint-disable-line 

(function (module) {
    const repos = {};

    repos.all = [];

    repos.requestRepos = function (callback) {
        $.get('github/user/repos')
            .then(data => repos.all = data, err => console.error(err))
            .then(callback);
    };

    repos.with = attr => repos.all.filter(repo => repo[attr]);

    module.repos = repos;
}(app));
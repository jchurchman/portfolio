'use strict';
var app = app || {};  //eslint-disable-line 

(function (module) {
    const projectView = {};

    projectView.togglePhoneMenu = function () {
        // console.log('app.projectView.togglePhoneMenu');
        $('.icon-menu').on('click', function () {
            // console.log('menu icon clicked');
            $('#site-heading nav').slideToggle(400);
        });
    };

    projectView.limitBlurb = function () {
        $('.blurb-body').hide();
        $('article').on('click', '.read-more', function (e) {
            e.preventDefault();
            console.log('link got clicked');
            if ($(this).text() === 'Read more →') {
                $(this).parent().find('*').fadeIn(500);
                $(this).html('Show less &larr;');
                $('body').animate({
                    scrollTop: $(this).parent().offset().top
                }, 400);
            } else {
                $('body').animate({
                    scrollTop: $(this).parent().offset().top
                }, 400);
                $(this).html('Read more &rarr;');
                $(this).parent().find('.blurb-body').hide();
            }
        });
    };

    projectView.initIndexPage = function () {

        app.Project.all.forEach( projectObj => {
            $('#portfolio').append(projectObj.toHTML('#project-template'));
        });

        app.projectView.limitBlurb();

    };

    module.projectView = projectView;

}(app));
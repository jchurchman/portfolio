'use strict';
var app = app || {};

page( '/', app.homeController.index );
page( '/about', app.aboutController.index );
page( '/project', app.projectController.index );
page( '/contact', app.contactController.index );
page();
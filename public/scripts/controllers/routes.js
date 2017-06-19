'use strict';
var app = app || {};

page( '/', init, app.homeController.index );
page( '/about', init, app.aboutController.index );
page( '/project',init, app.projectController.index );
page( '/contact',init, app.contactController.index );

page();

function init ( ctx, next ) {
    next( ctx );
}
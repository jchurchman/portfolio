'use strict';
var app = app || {};

(function (module) {
    const contactController = {};
    contactController.index = () => {
        $('#contact').show().siblings().hide();
        $('#site-heading nav').slideToggle(400);
        //this controller will have script that will initialize the slide controllers on the contact form
    };

    module.contactController = contactController;
}(app));
'use strict';

var AngularSpringApp = {};

var App = angular.module('AngularCourseApp', ['AngularSpringApp.filters', 'AngularSpringApp.services', 'AngularSpringApp.directives', 'ngRoute']);

// Declare app level module which depends on filters, and services
App.config(['$routeProvider', function ($routeProvider) {
	console.log("Config Route Provider");

    $routeProvider.when('/class1', {
        templateUrl: 'class1/layout',
        controller: Class1Controller
    });

    $routeProvider.otherwise({redirectTo: '/class1'});
}]);

App.config(['$httpProvider', function($httpProvider) {
    console.log("Config Http Provider");
	$httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
	}
]);

'use strict';

/* Directives */

var AppDirectives = angular.module('AngularSpringApp.directives', []);

AppDirectives.directive('appVersion', ['version', function (version) {
    return function (scope, elm, attrs) {
        elm.text(version);
    };
}]);

AppDirectives.directive("productGallery", function(){
	return{
		restrict: "E",
		templateUrl: "resources/templates/class5/product-gallery.html",
		controller: function(){
			/*this.current = 0;
			this.setCurrent = function(){
				this.current = imageNumber || 0;
			};*/
		},
		controllerAs: "gallery"
	};
});

AppDirectives.directive("productGallerySimple", function(){
	return{
		restrict: "E",
		templateUrl: "resources/templates/class5/product-gallery-simple.html",
		controller: function(){
			/*this.current = 0;
			this.setCurrent = function(){
				this.current = imageNumber || 0;
			};*/
		},
		controllerAs: "gallerySimple"
	};		
});

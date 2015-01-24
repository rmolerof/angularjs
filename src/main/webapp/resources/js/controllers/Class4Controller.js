'use strict';

/**
 * CarController
 * @constructor
 */
var Class4Controller = function($scope, $http) {
	var  gems =[{
		name: 'Dodecahedron',
		price: 2,
		description: 'Some gems',
		canPurchase: true,
		images:[{full:'resources/images/dod1.jpg', thumb: 'resources/images/dod1thumb.jpg'},
		        {full:'resources/images/dod2.png', thumb: 'resources/images/dod2thumb.png'}],
        reviews:[{
			stars: 5,
			body: "I love this product",
			author: "joe@thomas.com"
		},{
			stars: 1, 
			body: "This product sucks",
			author: "time@hater.com"
		}]        
	},{
		name: 'Pentagonal Gem',
		price: 5.95,
		description: 'You are a gem',
		canPurchase: false,
		images:[{full:'resources/images/dod2.png', thumb: 'resources/images/dod2thumb.png'},
		        {full:'resources/images/dod1.jpg', thumb: 'resources/images/dod1thumb.jpg'}],
        reviews:[]        
	}];
	
	$scope.products = gems;
};

App.directive('productTitle', function(){
	return {
		restrict: 'E', // E: element custom-directive
		templateUrl: 'resources/templates/class4/product-title.html'
	};
});

App.directive('productTitleAttribute', function(){
	return {
		restrict: 'A', // A: attribute custom-directive
		templateUrl: 'resources/templates/class4/product-title.html'
	};
});


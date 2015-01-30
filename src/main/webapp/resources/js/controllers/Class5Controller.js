'use strict';

/**
 * CarController
 * @constructor
 */
var Class5Controller = function($scope, $http) {
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

App.controller('StoreController', ['$http', function($http){
	var store = this;
	store.products = [];
	$http.get('resources/templates/class5/store-products.json').success(function(data){
		store.products = data;
		console.log(data);
	}).error(function(){
		console.log("data cannot be retrieved");
	});
	
	$http.get('http://rest-service.guides.spring.io/greeting').success(function(data){
		console.log(data);
	}).error(function(){
		console.log("data cannot be retrieved");
	});
}]);
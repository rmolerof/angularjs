'use strict';

/**
 * CarController
 * @constructor
 */
var Class1Controller = function($scope, $http) {

	$scope.testVar = "Rudy from server";
	
	var rock = {
			name: 'emerald',
			price: 100,
			description: 'Rock found in Colombia',
			onSale: true,
			soldOut: false
	};
	
	var rock2 = {
			name: 'gold',
			price: 100,
			description: 'Rock found in South Africa',
			onSale: false,
			soldOut: true
	};
	
	var  gems =[{
		name: 'Dodecahedron',
		price: 2,
		description: 'Some gems',
		canPurchase: true
	},{
		name: 'Pentagonal Gem',
		price: 5.95,
		description: 'You are a gem',
		canPurchase: false
	},{
		name: 'Awesome Multi-touch Keyboard',
		price: 250.00,
		description: "used for Mac and PC",
		canPurchase: true
	},{
		name: 'Android phone',
		price: 50.00,
		description: "has camera and iWallet",
		canPurchase: true
	}];
	
	$scope.product = rock2;
	$scope.products = gems;
};
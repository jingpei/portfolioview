	
	var portfolioApp = angular.module('portfolioSharingApp', ['ngRoute']);

	portfolioApp.config(function($routeProvider){
		$routeProvider
			.when('/portfolios', { controller : 'PortfolioListController', templateUrl : 'app/partials/portfolio_list_partial.html'})
			.when('/portfolios/:portfolio_name', { controller : 'PortfolioViewController', templateUrl : 'app/partials/single_view_partial.html'})
			.when('/', { redirectTo : '/portfolios' })
			.otherwise({ redirectTo : '/404_page' });
	});
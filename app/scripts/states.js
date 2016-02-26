'use strict';

angular
	.module('app')
	.config(function ($stateProvider, $urlRouterProvider) {

 		$stateProvider
 			.state('access', {
      	url: '/access',
      	templateUrl: 'views/access.html',
      	controller: 'AccessController'
    	})
    	.state('chat', {
    		url: '/chat',    		
    		templateUrl: 'views/chat.html',
    		controller: 'ChatController'  		
    	})

		$urlRouterProvider.otherwise('/access');
	});
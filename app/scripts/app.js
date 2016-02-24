'use strict';

angular
	.module('app', ['ngResource'])
	.config(function ($httpProvider) {

  	$httpProvider.defaults.useXDomain = true;
  	
		$httpProvider.interceptors.push(
			function ($q, $window) {
				console.log('aca');
				return {
	        request: function(config) {	

						config.headers = config.headers || {};
         
	        	config.headers['Content-Type'] = 'application/json';
	        	config.headers['Accept'] = 'json';
	        	
	          if ($window.sessionStorage.user) {
	          	console.log('aca');  
	        		config.headers['X-User-Id'] = $window.sessionStorage.user;
	          }	          
	          return config;
	      	}
	      };
    	}
    );

	});

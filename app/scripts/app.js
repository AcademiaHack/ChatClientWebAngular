'use strict';

angular
	.module('app', ['ngResource','ui.router'])
	.config(function ($httpProvider) {

  	$httpProvider.defaults.useXDomain = true;
  	
		$httpProvider.interceptors.push(
			function ($q, $window) {
				return {
	        request: function(config) {	

						config.headers = config.headers || {};
         
	        	config.headers['Content-Type'] = 'application/json';
	        	config.headers['Accept'] = 'json';
	        	
	          if ($window.sessionStorage.getItem('user')) {
	        		config.headers['X-User-Id'] = $window.sessionStorage.getItem('user');
	          }	          
	          return config;
	      	}
	      };
    	}
    );

	});

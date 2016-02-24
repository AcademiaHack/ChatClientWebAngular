'use strict';

angular
	.module('app')
	.factory('Session', function ($http, $window) {

		return {
			access: function (user, callback) {
				
				$http({
					method: 'post',
					url:'http://localhost:3000/users',
					data: user
				})
				.success(function (userResponse) {
					if (callback) callback(userResponse);
					$window.sessionStorage.user = userResponse.id;				
				});	
			}
		}

	})
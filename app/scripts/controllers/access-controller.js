'use strict';

angular
	.module('app')
	.controller('AccessController', function ($state, $scope, Session) {

		$scope.access = function () {						
			Session.access($scope.user, function () {
				$state.go('chat');	
			});			
		};	

	});	
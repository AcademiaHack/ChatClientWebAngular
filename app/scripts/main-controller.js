'use strict';

angular
	.module('app')
	.controller('MainController', 
		function ($scope, $http, $window, Session, Message) {		

			$scope.user = {};

			$scope.refresh = function (index) {
				var message = $scope.messages[index];						
				message.$get();				
			};

			$scope.update = function (index) {
				var message = $scope.messages[index];		
				message.$update();

				/*Message.update({id:message.id}, {message:'joder tio'}, function (message) {
					console.log(message)
				})*/
			};

			$scope.remove = function (index) {
				var message = $scope.messages[index];				
				message.$remove();

				$scope.messages.splice(index, 1);
			}


			$scope.access = function () {			
					//Session.access($scope.user);
					Session.access($scope.user, function (user) {
						console.log(user);					
					});
			};

			$scope.getMessages = function () {
				$scope.messages = Message.query();	
			};

			$scope.isAccess = function () {		
				return !!$window.sessionStorage.user;
			};	

			$scope.exit = function () {
				$window.sessionStorage.removeItem('user');
			}

		}
	);
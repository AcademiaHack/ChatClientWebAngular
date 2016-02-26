'use strict';

angular
	.module('app')
	.controller('MainController', 
		function ($scope, $http, $window, Session, Message) {		
			
			/*$scope.user = {};
			$scope.msg = {
				selected: true
			};
			$scope.messages = [];

			/*$interval(function () {
				if ($scope.isAccess()) {
					$scope.getMessages();
					console.log('update');
				}
			},2000);

			$scope.send = function () {
				$scope.messages.push(Message.save($scope.msg));
				$scope.msg = {};
			}

			$scope.refresh = function (index) {
				$scope.messages[index].$get();
			};

			$scope.update = function (index) {
				$scope.messages[index].$update();		

				/*Message.update({id:message.id}, {message:'joder tio'}, function (message) {
					console.log(message)
				})
			};

			$scope.remove = function (index) {
				var message = $scope.messages[index].$remove();

				$scope.messages.splice(index, 1);
			}

			$scope.destroy = function () {
				$scope.messages = Message.destroyAll(function (response) { console.log(response);});
			}

			$scope.access = function () {			
				Session.access($scope.user);
			};

			$scope.getMessages = function () {
				$scope.messages = Message.query();
			};

			$scope.isAccess = function () {		
				return Session.isConnected();
			};	

			$scope.exit = function () {
				$window.sessionStorage.removeItem('user');
			}*/
		}
	);
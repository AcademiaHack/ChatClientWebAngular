'use strict';

angular
	.module('app')
	.controller('ChatController', function ($window, $scope, $state, Message) {
		$scope.messages = Message.query();
		$scope.getMessages = function () {
			$scope.messages = Message.query();
		};

		$scope.send = function () {
			$scope.messages.push(Message.save($scope.msg));
			$scope.msg = {};
		};

		$scope.refresh = function (index) {
			$scope.messages[index].$get();
		};

		$scope.update = function (index) {
			$scope.messages[index].$update();		

			/*Message.update({id:message.id}, {message:'joder tio'}, function (message) {
				console.log(message)
			})*/
		};
		
		$scope.destroy = function () {
			$scope.messages = Message.destroyAll(function (response) { console.log(response);});
		};

		$scope.remove = function (index) {
			var message = $scope.messages[index].$remove();

			$scope.messages.splice(index, 1);
		};

		$scope.exit = function () {
			$window.sessionStorage.removeItem('user');
			$state.go('access');
		};
	})


'use strict';

angular
	.module('app')
	.factory('Message', function ($resource) {
		return $resource(
			'http://localhost:3000/messages/:id',
			{id: '@id'},
			{
				update: {
					method: 'put'
				}
			}
		)
	});
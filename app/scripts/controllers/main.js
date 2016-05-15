'use strict';

/**
 * @ngdoc function
 * @name firstProApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firstProApp
 */
angular.module('firstProApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    var todoInStore = localStorageService.get('todos');

    $scope.todos = todoInStore || [];

    $scope.$watch('todos', function () {
        localStorageService.set('todos', $scope.todos);
    }, true);

    // initialize the new todo item to ''
    $scope.todo = '';

    $scope.addTodo = function () {
    	if($scope.todos.indexOf($scope.todo)===-1) {
	    	$scope.todos.push($scope.todo);
			$scope.todo = '';
    	} else {
    		alert('Item already existed, try another one!');
			$scope.todo = '';
    	}
    };

    $scope.removeTodo = function (index) {
    	$scope.todos.splice(index, 1);
    };

  });

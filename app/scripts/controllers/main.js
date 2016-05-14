'use strict';

/**
 * @ngdoc function
 * @name firstProApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firstProApp
 */
angular.module('firstProApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = ['Item 1', 'Item 2', 'Item 3'];
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

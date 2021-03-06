'use strict';

angular.module('MyTest')
    .directive('myFoo', ['$rootScope',
        function ($rootScope) {
            return {
                restrict: 'E',
                replace: true,
                scope: {},
                templateUrl: '/views/my-foo.html',
		link: function ($scope, $element, $iAttrs, controller) {
                	$scope.bar = 'foo';
            	},
            	controller: function ($scope) {
                	$scope.foo = 'bar';
            	}
            };
        }]);

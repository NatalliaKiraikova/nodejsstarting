(function () {
    'use strict';

    angular.module('app')
        .config(appConfig);

    /** @ngInject */
    function appConfig($routeProvider) {
        $routeProvider.when('/violations', {
            templateUrl: 'tpl/violations-table.html',
            controller: 'ViolationsCtrl'
        }).when('/database', {
            templateUrl: 'tpl/violations-table.html',
            controller: 'ViolationsCtrl'
        }).otherwise({
            redirectTo: '/'
        });

    }
})();

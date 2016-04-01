(function () {
    'use strict';

    angular.module('app')
        .controller('DatabaseTableViewController', DatabaseTableViewController);

    /** @ngInject */
    function DatabaseTableViewController($scope, items, DatabaseService) {
        $scope.items = items.data;

        $scope.searchBySubstring = function (searchString) {
            DatabaseService.getDatabaseItemsBySubstring(searchString).then(function (res) {
                $scope.items = res.data;
            }, function (reason) {
                //error
                $scope.items = [];
            });
        };

        $scope.searchByCarType = function (carType) {
            DatabaseService.getDatabaseItemsByCarType(carType).then(function (res) {
                //TODO process several carTypes searches
                $scope.items = res.data;
            });
        }
    }
})();

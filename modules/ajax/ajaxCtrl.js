angular.module('ajaxModule')
    .controller('ajaxController', function ($scope, $http) {
        $scope.hello = 'Hello'; //Xử lý logic ở đây
        $http.get("modules/ajax/data.txt").success(function (response) {
            $scope.students = response;
        })

    });
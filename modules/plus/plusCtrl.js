angular.module('plusModule')
    .controller('plusController', function ($scope, plusService) {
        $scope.hello = 'Hello'; //Xử lý logic ở đây
        $scope.plusMe = function () {
            $scope.result = plusService.nhan2so($scope.so1,$scope.so2)
        }
    });
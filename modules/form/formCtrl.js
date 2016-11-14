angular.module('formModule')
    .controller('formController', function ($scope,plusService) {
        $scope.hello = 'Hello'; //Xử lý logic ở đây
        $scope.nguoi = {
            name:"Long",
            email:"zzsushiboyzz@gmail.com"
        };


        $scope.plusThis = function () {
            $scope.ketqua = plusService.cong2so($scope.soThuNhat,$scope.soThuHai)
        }

    });

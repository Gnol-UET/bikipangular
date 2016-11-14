angular.module('featureModule')
    .controller('featureController', function ($scope) {
        $scope.phanminhtu = {
            name:"Tu",
            email: "zzsushiboyzz@gmail.com"
        }
        $scope.reset = function(){
            $scope.firstName = "Mahesh";
            $scope.lastName = "Parashar";
            $scope.email = "MaheshParashar@tutorialspoint.com";
        }

        $scope.reset();

    });

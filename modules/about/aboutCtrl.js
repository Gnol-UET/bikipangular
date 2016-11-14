angular.module('aboutModule')
    .controller('aboutController', function ($scope) {
        $scope.aboutinfo = 'Higgsup'; //Xử lý logic ở đây
        $scope.tien = 500; //Xử lý logic ở đây
        $scope.person = {
            name: "Long",
            age: "20",
            getInfo: function () {
                return this.name + this.age;
            }

        }; //Xử lý logic ở đây

        $scope.subjects = [
            {"name": "Toan", "diemthi": 10},
            {"name": "Ly", "diemthi": 8},
            {"name": "Hoa", "diemthi": 9},
        ];
        $scope.clickcounter = 1;
        $scope.reset = function(){
            $scope.person.name = "Mahesh";
            $scope.person.age = "Parashar"
        }

    });
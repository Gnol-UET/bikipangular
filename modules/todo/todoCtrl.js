angular.module('todoModule')
    .controller('todoController', function ($scope) {
        $scope.class = "red";
        $scope.changeClass = function(){
            if ($scope.class === "red")
                $scope.class = "blue";
            else
                $scope.class = "red";
        };
        $scope.itemList = [];
        $scope.inProgress = [];
        $scope.finished = [];

        $scope.submit = function () {
            if($scope.submitItem != null){
                $scope.itemList.push(
                    {
                        title: $scope.submitItem,
                        done: false
                    }
                );
            }
        };
        $scope.delete = function (item) {
            for (var i = 0; i < $scope.itemList.length; i++) {
                if ($scope.itemList[i].title === item.title) {
                    $scope.itemList.splice(i, 1);
                    break;
                }
            }

        }
        $scope.finish = function (item) {
            var a =0;
            for (var i = 0; i < $scope.finished.length; i++) {
                if($scope.finished[i].title == item.title){
                    a=1;
                }
            }
            if(a==0) $scope.finished.push(item);


            for (var i = 0; i < $scope.inProgress.length; i++) {
                if ($scope.inProgress[i].title === item.title) {
                    $scope.inProgress.splice(i, 1);
                    break;
                }
            }
        }

        $scope.notYet = function (item) {
            for (var i = 0; i < $scope.finished.length; i++) {
                if($scope.finished[i].title === item.title){
                    $scope.finished.splice(i,1);
                    break;
                }
            }
            $scope.inProgress.push(item);
        }
    });


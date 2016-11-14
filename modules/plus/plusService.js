//Nhớ thêm tên service vào controller
angular.module('plusModule')
    .service('plusService', function () {

        var service = {
            cong2so : cc,
            nhan2so : nn
        };
        return service;

        function cc(a, b) {
            return a + b;
        }
        function nn(a, b) {
            return a * b;
        }
    });
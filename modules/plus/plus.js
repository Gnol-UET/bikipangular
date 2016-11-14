//Nhớ thêm tên module vào app.js
angular.module('plusModule', ['ui.router',])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        // nested list with custom controller
            .state('plus', { //Định nghĩa 1 state
                url: '/plus',     //Khai báo URl hiển thị
                templateUrl: 'modules/plus/plus.html', //Đường dẫn view
                controller: 'plusController'   //Khai báo Controller phụ vụ state này
            })


    });

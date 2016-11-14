angular.module('ajaxModule', ['ui.router',])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        // nested list with custom controller
            .state('ajax', { //Định nghĩa 1 state
                url: '/ajax',     //Khai báo URl hiển thị
                templateUrl: 'modules/ajax/ajax.html', //Đường dẫn view
                controller: 'ajaxController'   //Khai báo Controller phụ vụ state này
            })


    });

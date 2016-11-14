angular.module('formModule', ['ui.router',])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        // nested list with custom controller
            .state('form', { //Định nghĩa 1 state
                url: '/form',     //Khai báo URl hiển thị
                templateUrl: 'modules/form/form.html', //Đường dẫn view
                controller: 'formController'   //Khai báo Controller phụ vụ state này
            })


    });

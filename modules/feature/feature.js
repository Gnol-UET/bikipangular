angular.module('featureModule', ['ui.router',])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        // nested list with custom controller
            .state('feature', { //Định nghĩa 1 state
                url: '/feature',     //Khai báo URl hiển thị
                templateUrl: 'modules/feature/feature.html', //Đường dẫn view
                controller: 'featureController'   //Khai báo Controller phụ vụ state này
            })


    });

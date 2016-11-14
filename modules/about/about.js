angular.module('aboutModule', ['ui.router',])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        // nested list with custom controller
            .state('about', { //Định nghĩa 1 state
                url: '/about',     //Khai báo URl hiển thị
                templateUrl: 'modules/about/about.html', //Đường dẫn view
                controller: 'aboutController'   //Khai báo Controller phụ vụ state này
            })


    });

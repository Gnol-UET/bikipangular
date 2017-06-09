//Nhớ thêm tên module vào app.js
angular.module('tweenMaxModule', ['ui.router',])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        // nested list with custom controller
            .state('tweenMax', { //Định nghĩa 1 state
                url: '/tweenMax',     //Khai báo URl hiển thị
                templateUrl: 'modules/tweenMax/tweenMax.html', //Đường dẫn view
                controller: 'tweenMaxController'   //Khai báo Controller phụ vụ state này
            })


    })
    .directive('myMove',function () {

        return{
            templateUrl: 'modules/tweenMax/move.html',
            link: function (scope,element,attrs) {
                TweenMax.to(element.find('.card'),1,  {left:600});
            }
        }
    });

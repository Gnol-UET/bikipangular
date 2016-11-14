//Nhớ thêm tên module vào app.js
angular.module('todoModule', ['ui.router',])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        // nested list with custom controller
            .state('todo', { //Định nghĩa 1 state
                url: '/todo',     //Khai báo URl hiển thị
                templateUrl: 'modules/todo/todo.html', //Đường dẫn view
                controller: 'todoController'   //Khai báo Controller phụ vụ state này
            })


    });

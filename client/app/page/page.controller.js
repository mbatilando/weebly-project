'use strict';

angular.module('weeblyProjectApp')
  .controller('PageCtrl', function ($scope, $cookies, $location, loginService, pageService, $stateParams) {
    $scope.loginService = loginService;
    var init = (function () {
        if ($cookies.user && $cookies.api_key) {
            loginService.cookieLogin();
        } else {
            $location.path('/');
        }

        pageService.getAllPages().then(function () {
            if ($stateParams.id) { pageService.selectPage($stateParams.id) }
        });
    })();
  });

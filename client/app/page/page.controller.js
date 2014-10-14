'use strict';

angular.module('weeblyProjectApp')
  .controller('PageCtrl', function ($scope, $cookies, $location, loginService, pageService) {
    $scope.loginService = loginService;
    pageService.getAllPages();

    if ($cookies.user && $cookies.api_key) {
        loginService.cookieLogin();
        $location.path('/page');
    } else {
    	$location.path('/');
    }
  });

'use strict';

angular.module('weeblyProjectApp')
  .factory('loginService', function ($http, $cookies) {
    var service = {};
    service.user = '';
    service.apiKey = '';

    service.login = function (authResult) {
      return $http.post('/api/users', { name: authResult.client_id })
        .success(function (data) {
          service.user = data.user;
          service.apiKey = data.api_key;
        })
    };

    service.cookieLogin = function () {
      service.user = $cookies.user;
      service.apiKey = $cookies.api_key;
    };

    return service;
  });

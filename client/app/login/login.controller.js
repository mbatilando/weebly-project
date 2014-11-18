'use strict';

angular.module('weeblyProjectApp')
  .controller('LoginCtrl', function ($scope, loginService, $location, $cookies) {
  	// console.log('In LoginCtrl');
    $scope.showLogin = false;

    $scope.signInCallback = function (authResult) {
        loginService.login(authResult).then(function () {
            // $location.path('/page');
        });
    }

    // Render the sign in button.
    $scope.renderSignInButton = function() {
        gapi.signin.render('customBtn',
            {
                'callback': $scope.signInCallback,
                'clientid': '191808270280-1lthrs7cl39jenb75bjnh46v2v4c38ha.apps.googleusercontent.com',
                'requestvisibleactions': 'http://schemas.google.com/AddActivity',
                'scope': 'https://www.googleapis.com/auth/plus.login',
                'cookiepolicy': 'single_host_origin'
            }
        );
    }

    var init = (function () {
        if ($cookies.user && $cookies.api_key) {
            loginService.cookieLogin();
            $location.path('/page');
            return;
        } else {
            $scope.showLogin = true;
            $scope.renderSignInButton();
        }
    })();

  });

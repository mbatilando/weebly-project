'use strict';

angular.module('weeblyProjectApp')
  .controller('LoginCtrl', function ($scope) {
  	console.log('In LoginCtrl');
    $scope.signInCallback = function (authResult) {
    	debugger
    	console.log(authResult);
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

    // Start function in this example only renders the sign in button.
    $scope.start = function() {
        $scope.renderSignInButton();
    };

    // Call start function on load.
    $scope.start();
  });

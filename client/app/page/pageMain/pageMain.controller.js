'use strict';

angular.module('weeblyProjectApp')
  .controller('PagemainCtrl', function ($scope, pageService, $stateParams, $location) {
    // console.log('PagemainCtrl');

    // var init = (function () {
    // 	pageService.getAllPages().then(function () {
    // 		if ($stateParams.id) { pageService.selectPage($stateParams.id) }
    // 	});
    // })();

    $scope.pageService = pageService;

    $scope.selectPage = function (pageId) {
    	pageService.selectPage(pageId);
    	$location.path('/page/'+pageId, false);
    }
  });

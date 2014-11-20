'use strict';

angular.module('weeblyProjectApp')
  .controller('PagemainCtrl', function ($scope, pageService, $stateParams, $location) {
    // console.log('PagemainCtrl');

    $scope.pageService = pageService;
    $scope.deleteHover = false;

    $scope.selectPage = function (pageId) {
    	pageService.selectPage(pageId);
    	$location.path('/page/'+pageId, false);
    }

    $scope.updatePage = function (page) {
    	pageService.updatePage(page);
    }
  });

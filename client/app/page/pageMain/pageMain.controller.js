'use strict';

angular.module('weeblyProjectApp')
  .controller('PagemainCtrl', function ($scope, pageService) {
    // console.log('PagemainCtrl');
    $scope.pageService = pageService;
    $scope.selectPage = function (pageId) {
    	pageService.selectPage(pageId);
    }
  });

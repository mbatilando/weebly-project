'use strict';

angular.module('weeblyProjectApp')
  .controller('PagesidebarCtrl', function ($scope, pageService) {
    console.log('PagesidebarCtrl');
    $scope.pageService = pageService;
    $scope.focusPage = function (page, $event) {
    	 $($event.srcElement).closest('.element-wrapper').find('input').focus();
    }

    $scope.addPage = function () {
        pageService.addPage({name: $scope.newPageName});
    	$scope.newPageName = '';
    };

    $scope.deletePage = function (page) {
    	pageService.deletePage(page._id);
    };
  });

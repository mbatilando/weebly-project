'use strict';

angular.module('weeblyProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('page', {
        url: '/page/:id',
        templateUrl: 'app/page/page.html',
        views: {
        	'': {
        		templateUrl: 'app/page/page.html',
                controller: 'PageCtrl'
        	},
        	'sidebar@page': {
        		templateUrl: 'app/page/pageSidebar/pageSidebar.html',
        		controller: 'PagesidebarCtrl'
        	},
        	'main@page': {
        		templateUrl: 'app/page/pageMain/pageMain.html',
        		controller: 'PagemainCtrl'
        	}
        }
      });
      // .state('page2', {
      //   url: '/page/:id',
      //   templateUrl: 'app/page/page.html',
      //   views: {
      //       '': {
      //           templateUrl: 'app/page/page.html',
      //           controller: 'PageCtrl'
      //       },
      //       'sidebar@page2': {
      //           templateUrl: 'app/page/pageSidebar/pageSidebar.html',
      //           controller: 'PagesidebarCtrl'
      //       },
      //       'main@page2': {
      //           templateUrl: 'app/page/pageMain/pageMain.html',
      //           controller: 'PagemainCtrl'
      //       }
      //   }
      // });
  });
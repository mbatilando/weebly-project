'use strict';

angular.module('weeblyProjectApp')
  .factory('pageService', function ($http) {
    var service = {};
    service.allPages = [];

    service.getAllPages = function () {
		return $http.get('/api/pages')
		    .success(function (pages) {
		      service.allPages = pages;
		    });
    };

    service.getPage = function (pageId) {
		return $http.get('/api/pages/' + pageId)
		    .success(function (page) {
		      service.currPage = page;
		    });
    };

    service.addPage = function (page) {
    	return $http.post('/api/pages/', page)
		    .success(function (page) {
		    	service.allPages.push(page);
		    });
    };

    service.deletePage = function (pageId) {
		return $http.delete('/api/pages/' + pageId)
		    .success(function (page) {
		      // remove page from service.allPages
		      for (var i = 0, len = service.allPages.length; i < len; i++) {
		      	if (service.allPages[i]._id === pageId) {
		      		service.allPages.splice(i, 1);
		      	}
		      }
		    });
    };

    service.updatePage = function (page) {
		return $http.put('/api/pages/' + page._id, page)
		    .success(function (page) {
		    	for (var i = 0, len = service.allPages.length; i < len; i++) {
		    		if (service.allPages[i]._id === page._id) {
		    			service.allPages[i] = page;
		    			break;
		    		}
		    	}
		    });
    };

    return service;
  });

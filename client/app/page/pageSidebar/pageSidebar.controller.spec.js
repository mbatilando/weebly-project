'use strict';

describe('Controller: PagesidebarCtrl', function () {

  // load the controller's module
  beforeEach(module('weeblyProjectApp'));

  var PagesidebarCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PagesidebarCtrl = $controller('PagesidebarCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

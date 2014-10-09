'use strict';

describe('Controller: PageCtrl', function () {

  // load the controller's module
  beforeEach(module('weeblyProjectApp'));

  var PageCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PageCtrl = $controller('PageCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

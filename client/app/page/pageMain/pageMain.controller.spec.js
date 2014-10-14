'use strict';

describe('Controller: PagemainCtrl', function () {

  // load the controller's module
  beforeEach(module('weeblyProjectApp'));

  var PagemainCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PagemainCtrl = $controller('PagemainCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

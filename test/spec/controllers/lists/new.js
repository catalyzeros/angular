'use strict';

describe('Controller: ListsNewCtrl', function () {

  // load the controller's module
  beforeEach(module('homerunApp'));

  var ListsNewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListsNewCtrl = $controller('ListsNewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListsNewCtrl.awesomeThings.length).toBe(3);
  });
});

'use strict';

describe('Controller: ListsShowCtrl', function () {

  // load the controller's module
  beforeEach(module('homerunApp'));

  var ListsShowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListsShowCtrl = $controller('ListsShowCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListsShowCtrl.awesomeThings.length).toBe(3);
  });
});

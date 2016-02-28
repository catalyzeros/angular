'use strict';

describe('Controller: ListsSlugCtrl', function () {

  // load the controller's module
  beforeEach(module('homerunApp'));

  var ListsSlugCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListsSlugCtrl = $controller('ListsSlugCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListsSlugCtrl.awesomeThings.length).toBe(3);
  });
});

'use strict';

describe('Controller: FilesNewCtrl', function () {

  // load the controller's module
  beforeEach(module('homerunApp'));

  var FilesNewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FilesNewCtrl = $controller('FilesNewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FilesNewCtrl.awesomeThings.length).toBe(3);
  });
});

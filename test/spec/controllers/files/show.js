'use strict';

describe('Controller: FilesShowCtrl', function () {

  // load the controller's module
  beforeEach(module('homerunApp'));

  var FilesShowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FilesShowCtrl = $controller('FilesShowCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FilesShowCtrl.awesomeThings.length).toBe(3);
  });
});

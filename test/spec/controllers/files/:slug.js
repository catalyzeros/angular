'use strict';

describe('Controller: FilesSlugCtrl', function () {

  // load the controller's module
  beforeEach(module('homerunApp'));

  var FilesSlugCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FilesSlugCtrl = $controller('FilesSlugCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FilesSlugCtrl.awesomeThings.length).toBe(3);
  });
});

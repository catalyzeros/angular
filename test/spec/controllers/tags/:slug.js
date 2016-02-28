'use strict';

describe('Controller: TagsSlugCtrl', function () {

  // load the controller's module
  beforeEach(module('homerunApp'));

  var TagsSlugCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TagsSlugCtrl = $controller('TagsSlugCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TagsSlugCtrl.awesomeThings.length).toBe(3);
  });
});

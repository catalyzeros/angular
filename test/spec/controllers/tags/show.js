'use strict';

describe('Controller: TagsShowCtrl', function () {

  // load the controller's module
  beforeEach(module('homerunApp'));

  var TagsShowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TagsShowCtrl = $controller('TagsShowCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TagsShowCtrl.awesomeThings.length).toBe(3);
  });
});

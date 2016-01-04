'use strict';

describe('Controller: ReposCtrl', function () {

  // load the controller's module
  beforeEach(module('anguGHApp'));

  var ReposCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReposCtrl = $controller('ReposCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReposCtrl.awesomeThings.length).toBe(3);
  });
});

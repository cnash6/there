'use strict';

describe('Controller: CreateapptmtCtrl', function () {

  // load the controller's module
  beforeEach(module('thereApp'));

  var CreateapptmtCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateapptmtCtrl = $controller('CreateapptmtCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CreateapptmtCtrl.awesomeThings.length).toBe(3);
  });
});

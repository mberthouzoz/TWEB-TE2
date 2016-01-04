'use strict';

describe('Service: repos', function () {

  // load the service's module
  beforeEach(module('anguGHApp'));

  // instantiate service
  var repos;
  beforeEach(inject(function (_repos_) {
    repos = _repos_;
  }));

  it('should do something', function () {
    expect(!!repos).toBe(true);
  });

});

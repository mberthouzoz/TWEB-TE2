'use strict';

describe('Service: anguGH', function () {

  // load the service's module
  beforeEach(module('anguGHApp'));

  // instantiate service
  var anguGH;
  beforeEach(inject(function (_anguGH_) {
    anguGH = _anguGH_;
  }));

  it('should do something', function () {
    expect(!!anguGH).toBe(true);
  });

});

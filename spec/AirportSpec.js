'use strict';

describe("Airport", function() {

  var airport;
  var plane;
  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it("instructs an plane at an airport", function() {
    expect(airport.land(plane)).not.toBeUndefined()
  });
});

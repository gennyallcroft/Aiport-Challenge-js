'use strict';

describe("Airport", function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane',['land']);
  });

  it("it has no planes by default", function() {
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for landing', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('can clear planes for take off', function() {
    airport.clearForTakeoff(plane);
    expect(airport.planes()).toEqual([]);
  });

  it('can check for stormy conditions', function(){
    expect(airport.isStormy()).toBeFalsy();
  })

});

describe('under stormy conditions', function(){
  it('does not clear planes for takeoff', function(){
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){ airport.clearForTakeOff(plane); }).toThrowError( 'cannot take off during storm');
  });
});

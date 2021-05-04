'use strict';

describe("Thermostat", function(){
  let thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  });
  
  it("thermostat starts at 20 degrees", function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20)
  });

  it("we can increase the temperature", function(){
    thermostat.up(1);
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

});

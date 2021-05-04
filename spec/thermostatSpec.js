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
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it("we can decrease the temperature", function(){
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });


  it("has a minimum temprature of 10 degrees", function(){
    for(let i = 0; i < 11; i ++){
      thermostat.down()
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

});

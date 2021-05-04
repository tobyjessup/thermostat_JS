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

  it("has power saving mode on by default", function(){
    expect(thermostat.isPowerSavingModeOn()).toBeTruthy
  });

  it("it can switch PSM off", function(){
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBeFalsey;
  });

  it("it can switch PSM on after switching to off", function(){
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBeFalsey;
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBeTruthy;
  });

  describe("when power saving mode is on", function(){
    it("has max temp of 25", function(){
      for(let i = 0; i < 6; i++){
        thermostat.up();
      }

      expect(thermostat.getCurrentTemperature()).toEqual(25)
    });
  });

  describe("it can be reset to default temp", function(){
    it("default to 20", function(){
      for(let i = 0; i < 6; i++){
        thermostat.up();
      }
      thermostat.resetTemperature()
      expect(thermostat.getCurrentTemperature()).toEqual(20)
    });
  });



});

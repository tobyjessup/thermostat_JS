'use strict';

class Thermostat{
  constructor() {
    this.temperature = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this.poweSavingMode = true;
  };

  getCurrentTemperature(){
    return this.temperature;
  };

  up(){
    this.temperature += 1;
  };

  down(temp){
    if (this.isMinimumTemperature()){
      return;
    } else {
      this.temperature -= 1;
    }
  };

  isMinimumTemperature(){
    return this.temperature === this.MINIMUM_TEMPERATURE;
  };
  
  isPowerSavingModeOn(){
    return this.poweSavingMode === true;
  };

  switchPowerSavingModeOff(){
    this.powerSavingMode = false;
  };

  switchPowerSavingModeOn(){
    this.powerSavingMode = true;
  };
};

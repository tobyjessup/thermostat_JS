'use strict';

class Thermostat{
  constructor() {
    this.temperature = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
    this.powerSavingMode = true;
  };

  getCurrentTemperature(){
    return this.temperature;
  };

  up(){
    if (this.isMaximumTemperature()) {
      return;
    }
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

  isMaximumTemperature(){
    if (this.isPowerSavingModeOn() === false){
      return this.temperature === this.MAX_LIMIT_PSM_OFF;
    }
    return this.temperature === this.MAX_LIMIT_PSM_ON;
  }
  
  isPowerSavingModeOn(){
    return this.powerSavingMode === true;
  };

  switchPowerSavingModeOff(){
    this.powerSavingMode = false;
  };

  switchPowerSavingModeOn(){
    this.powerSavingMode = true;
  };

  resetTemperature(){
    this.temperature = 20;
  };

  energyUsage(){
    if (this.temperature < 18){
      return 'low-usage'
    } else if (this.temperature > 25) {
      return 'high-usage'
    } else {
      return 'medium-usage'
    }
    
  }
};

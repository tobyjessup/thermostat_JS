document.addEventListener("DOMContentLoaded", function() {

  fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric')
  .then(function(response){
    return response.json()
  })
  .then(function(data) {
    document.querySelector('#current-temperature').innerText = data.main.temp;
  });

  function updateTemperature() {
    document.querySelector('#temperature').innerText = thermostat.temperature;
    document.querySelector('#temperature').className = thermostat.energyUsage();
  };

  const thermostat = new Thermostat();
  updateTemperature()

  document.querySelector("#temperature-up").addEventListener('click', function(){
    thermostat.up();
    updateTemperature()
  })

  document.querySelector('#temperature-down').addEventListener('click', function() {
    thermostat.down();
    updateTemperature()
  })

  document.querySelector('#temperature-reset').addEventListener('click', function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  document.querySelector('#powersaving-on').addEventListener('click', function() {
    thermostat.switchPowerSavingModeOn();
    document.querySelector('#power-saving-status').innerText = 'on';
    updateTemperature();
  })

  document.querySelector('#powersaving-off').addEventListener('click', function() {
    thermostat.switchPowerSavingModeOff();
    document.querySelector('#power-saving-status').innerText = 'off';
    updateTemperature();
  })
});


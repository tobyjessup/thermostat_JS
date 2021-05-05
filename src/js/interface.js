document.addEventListener("DOMContentLoaded", function() {
  const thermostat = new Thermostat();
  console.log(thermostat)
  document.querySelector('#temperature').innerText = thermostat.temperature

  document.querySelector("#temperature-up").addEventListener('click', function(){
    console.log(thermostat)
    thermostat.up();
    document.querySelector('#temperature').innerText = thermostat.temperature;
  })

  document.querySelector('#temperature-down').addEventListener('click', function() {
    thermostat.down();
    document.querySelector('#temperature').innerText = thermostat.temperature;
  })

});


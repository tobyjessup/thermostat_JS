document.addEventListener("DOMContentLoaded", () => {
//   const selectElement = document.querySelector('#current-city');
// selectElement.addEventListener('change', (event) => {
  const displayWeather = (city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric`
  
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        document.querySelector('#current-temperature').innerText = data.main.temp;
      })
  }  

  displayWeather('');

document.querySelector('#select-city').addEventListener('submit', (event) => {
    event.preventDefault();
    const city = document.querySelector('#current-city').value;
    
    displayWeather(city);
  })
  
  function updateTemperature() {
        document.querySelector('#temperature').innerText = thermostat.temperature;
        document.querySelector('#wrapper').className = thermostat.energyUsage();
    }
  
    const thermostat = new Thermostat();
    updateTemperature();
  
    document.querySelector('#temperature-up').addEventListener('click', () => {
      thermostat.up();
      updateTemperature();
    })
  
    document.querySelector('#temperature-down').addEventListener('click', () => {
      thermostat.down();
      updateTemperature();
    })

    document.querySelector('#temperature-reset').addEventListener('click', () => {
        thermostat.resetTemperature();
        updateTemperature();
      });
    
      document.querySelector('#powersaving-on').addEventListener('click', () => {
        thermostat.switchPowerSavingModeOn();
        document.querySelector('#power-saving-status').innerText = 'on';
        updateTemperature();
      })
    
      document.querySelector('#powersaving-off').addEventListener('click', () => {
        thermostat.switchPowerSavingModeOff();
        document.querySelector('#power-saving-status').innerText = 'off';
        updateTemperature();
      })
})
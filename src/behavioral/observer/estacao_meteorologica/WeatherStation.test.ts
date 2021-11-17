import WeatherData from './WeatherData'
import Subject from './Subject';
import CurrentConditionsDisplay from './CurrentConditionsDisplay';
import DisplayElement from './DisplayElement';
import ForecastDisplay from './ForecastDisplay';
import StatisticsDisplay from './StatisticsDisplay';

test("Should display current conditions", () => {
  const weatherData: WeatherData = new WeatherData();
  const currentConditionsDisplay: DisplayElement = new CurrentConditionsDisplay(weatherData);
  const statisticsDisplay: DisplayElement = new StatisticsDisplay(weatherData);
  const forecastDisplay: DisplayElement = new ForecastDisplay(weatherData);

  weatherData.setMeasurements(80, 65, 30.4);
  weatherData.setMeasurements(82, 70, 29.2);
  weatherData.setMeasurements(78, 90, 29.2);

})
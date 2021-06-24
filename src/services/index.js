import axios from "axios";
import { restructureForecastData } from "../utils";
const appId = "5d1417c13f72a60daae2d7b905a3ab80";
const weatherService = {
  getWeatherDataByCityName: async (name) => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${appId}&units=metric`
      );
      console.log(data);
      const {
        coord,
        name: cityName,
        main,
        wind: { speed: windSpeed, gust: windGust },
        weather,
      } = data;
      return {
        coord,
        cityName,
        ...main,
        windSpeed,
        windGust,
        weather: weather[0],
      };
    } catch (err) {
      throw new Error("Invalid city name");
    }
  },
  getForcastData: async ({ lat, lon }) => {
    try {
      const {
        data: { daily },
      } = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${appId}&units=metric`
      );
      return restructureForecastData(daily);
    } catch (err) {
        throw new Error("Invalid coordinates");
    }
  },
};

export default weatherService;

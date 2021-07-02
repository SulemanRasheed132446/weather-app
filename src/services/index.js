import axios from "axios";
const appId = process.env.REACT_APP_WEATHER_API_KEY;
const weatherService = {
  getWeatherDataByCityName: async (name) => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${appId}&units=metric`
      );
      const {
        coord,
        name: cityName,
        main,
        wind: { speed: windSpeed },
        weather,
      } = data;
      return {
        coord,
        cityName,
        ...main,
        windSpeed,
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
      return daily;
    } catch (err) {
        throw new Error("Invalid coordinates");
    }
  },
};

export default weatherService;

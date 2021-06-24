import axios from "axios";
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
      console.log(err);
      throw new Error("Invalid city name");
    }
  },
};

export default weatherService;

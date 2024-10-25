import axios, { AxiosResponse } from "axios";
import { API_KEY, OPEN_WEATHER_API } from "../constants";

export const openWeatherApi = async (city: string) => {
  try {
    const axiosRes: AxiosResponse = await axios.get(OPEN_WEATHER_API, {
      params: {
        q: city,
        appid: API_KEY,
      },
    });
    const weatherData = axiosRes.data;
    return weatherData;
  } catch (error) {
    console.log(error);
  }
};

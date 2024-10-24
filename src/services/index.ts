import { IGetIncidentsParams, IPostIncidentPayload } from "../interfaces";
import Incident from "../database/models/incident";
import { Op } from "sequelize";
import { openWeatherApi } from "../../external_api/open.weather.api";

export const incidentReport = async (payload: IPostIncidentPayload) => {
  try {
    console.log(payload)
    const weatherData = await openWeatherApi(payload.city);
    const newData = await Incident.create({
      client_id: payload.client_id,
      city: payload.city,
      country: payload.country,
      incident_desc: payload.incident_desc,
      weather_report: weatherData,
    });
    return newData.dataValues;
  } catch (error) {
    console.log(error);
  }
};

export const getFilteredIncidents = async (params: IGetIncidentsParams) => {
  const { city, tempmin, tempmax, hummin, hummax } = params;

  const whereConditions: any = {};

  if (city) {
    whereConditions.city = city;
  }

  if (tempmin || tempmax) {
    whereConditions["weather_report.main.temp"] = {
      ...(tempmin && { [Op.gte]: parseInt(tempmin) }),
      ...(tempmax && { [Op.lte]: parseInt(tempmax) }),
    };
  }

  if (hummin || hummax) {
    whereConditions["weather_report.main.humidity"] = {
      ...(hummin && { [Op.gte]: parseInt(hummin) }),
      ...(hummax && { [Op.lte]: parseInt(hummax) }),
    };
  }

  try {
    const incidents = await Incident.findAll({
      where: whereConditions,
    });
    console.log(whereConditions);
    return incidents;
  } catch (error) {
    console.log(error);
  }
};

export const searchIncident = async (body: any) => {
  const { country } = body;
  console.log(country)
  try {
    const searchResult = await Incident.findAll({
      // where: {
      //   [Op.and]: [
      //     { country: country },
      //     { "weather_report.sys.country": country },
      //   ],
      // },
      where: { country: country},
    });
    return searchResult;
  } catch (error) {
    console.log(error);
  }
};

import { STATUSCODE } from "../constants";
export interface IPostIncidentPayload {
  client_id: number;
  incident_desc: string;
  city: string;
  country: string;
}

export interface IGetIncidentsParams {
  city?: string;
  tempmin?: string;
  tempmax?: string;
  hummin?: string;
  hummax?: string;
}

export interface IAppErrorArgs {
  status?: string;
  statusCode: STATUSCODE;
  message: any;
}


import { object, string, number } from "zod";

export const incidentReportSchema = object({
  body: object({
    client_id: number({ required_error: "Client ID is required" })
      .gte(4,"this number must be greater than or equal to 4")
      .positive(),
    incident_desc: string({ required_error: "Description is required" }).min(
      10,
      "Description must be more than 10 characters"
    ),
    city: string({ required_error: "City is required" }),
    country: string({ required_error: "Country is required" }).min(
      2,
      "Name must be more than 10 characters"
    ),
  }),
});

export const searchIncidentSchema = object({
  body: object({
    country: string({ required_error: "Country is required" }).min(
      2,
      "Country must be greater than or equal to 4 characters"
    ),
  }),
});

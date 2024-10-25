import { Request, Response, NextFunction } from "express";
import {
  // debouncedSearch,
  getFilteredIncidents,
  incidentReport,
  searchIncident,
} from "../services";

export const INCIDENT_REPORT = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await incidentReport(req.body);
    res.status(201).json({
      message: `Operation was succesful`,
      data: result,
    });
  } catch (error) {
    return next(error);
  }
};

export const GET_INCIDENTS = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const resp = await getFilteredIncidents(req.query);
    res.status(200).json({
      message: `Filtered incidents`,
      data: resp,
    });
  } catch (error) {
    return next(error);
  }
};

export const SEARCH_INCIDENT = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await searchIncident(req.body);
    // const result = await debouncedSearch(req.body);
    if (result === undefined || result.length == 0) {
      res.status(200).json({
        message: `Operation Was Succesful But No Results Found!!!`,
      });
    } else {
      res.status(200).json({
        message: `Operation was succesful`,
        data: result,
      });
    }
  } catch (error) {
    return next(error);
  }
};

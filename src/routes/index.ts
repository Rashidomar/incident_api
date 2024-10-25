import { Router } from "express";
import {
  GET_INCIDENTS,
  INCIDENT_REPORT,
  SEARCH_INCIDENT,
} from "../controllers";
import { validateInput } from "../middleware/validateInput";
import { incidentReportSchema, searchIncidentSchema } from "../schema";

const router = Router();

router.post("/incident", validateInput(incidentReportSchema), INCIDENT_REPORT);

router.get("/incidents", GET_INCIDENTS);

router.post("/incidents/search",validateInput(searchIncidentSchema), SEARCH_INCIDENT);

export default router;

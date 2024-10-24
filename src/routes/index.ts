import { Router } from "express";
import { GET_INCIDENTS, INCIDENT_REPORT, SEARCH_INCIDENT } from "../controllers";

const router = Router();

router.post("/incident", INCIDENT_REPORT);

router.get("/incidents", GET_INCIDENTS);

router.post("/incidents/search", SEARCH_INCIDENT);

export default router;

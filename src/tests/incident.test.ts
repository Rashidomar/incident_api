import * as chai from "chai";
import chaiHttp from "chai-http";
import request from "supertest";
import { app } from "../server";

chai.use(chaiHttp);
const { expect } = chai;

describe("GET /api", () => {
  it("should return a welcome message with status 200", (done) => {
    request(app)
      .get("/api/v1/welcome")
      .end((_, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal("Welcome to the API");
        done();
      });
  });

  it("should return an array of all incidents and a sucess message given no params", (done) => {
    request(app)
      .get("/api/v1/incidents")
      .end((_, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal("Filtered incidents");
        expect(res.body.data).to.be.an("array");
        done();
      });
  });

  it("should return an array of filtered incidents with a message given some specific params", (done) => {
    request(app)
      .get("/api/v1/incidents")
      .query({ city: "Accra" })
      .end((_, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal("Filtered incidents");
        expect(res.body.data).to.be.an("array");
        done();
      });
  });
});

describe("POST /api", () => {
  it("should create a new incident in database and return it", (done) => {
    request(app)
      .post("/api/v1/incident")
      .send({
        client_id: 122,
        city: "tema",
        country: "Togo",
        incident_desc: "test",
        weather_report: ` {'weatherData'}`,
      })
      .end((_, res) => {
        expect(res.status).to.equal(201);
        expect(res.body.message).to.equal("Operation was succesful");
        done();
      });
  });
});

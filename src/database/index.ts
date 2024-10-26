import { Sequelize } from "sequelize";
import config from "./config/database";
import Incident, { initIncident } from "./models/incident";

const db: any = {};
let sequelize;
if (process.env.NODE_ENV === "production") {
  console.log(`The app is running in ${process.env.NODE_ENV}`);
  sequelize = new Sequelize(
    config.production.database,
    config.production.username,
    config.production.password,
    {
      host: config.production.host,
      logging: false,
      dialect: "postgres",
    }
  );
} else {
  console.log(`The app is running in ${process.env.NODE_ENV}`);
  sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {
      logging: false,
      dialect: "postgres",
    }
  );
}

const models = {
  Incident,
};

export const initModels = async () => {
  initIncident(sequelize);

  Object.values(models)
    .filter((model: any) => typeof model.associate === "function")
    .forEach((model: any) => model.associate(models));
};

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;

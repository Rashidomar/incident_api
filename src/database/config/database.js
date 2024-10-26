const config = {
  development: {
    username: "postgres",
    password: "1234",
    database: "omar",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: "postgres",
    database: "omar",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "incident_db_f3h3_user",
    password: "nIn27XcIlPzymweVAtKk5jaWK4NzzSR3",
    database: "incident_db_f3h3",
    host: "dpg-csei5d68ii6s7394ikvg-a",
    dialect: "postgres",
  },
};

export default config;

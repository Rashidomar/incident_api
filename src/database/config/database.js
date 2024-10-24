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
    username: "root",
    password: "postgres",
    database: "omar",
    host: "127.0.0.1",
    dialect: "postgres",
  },
};

export default config;

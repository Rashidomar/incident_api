import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from "sequelize";

class Incident extends Model<
  InferAttributes<Incident>,
  InferCreationAttributes<Incident>
> {
  public id!: CreationOptional<number>;
  public client_id!: number;
  public incident_desc!: string;
  public country!: string;
  public city!: string;
  public weather_report!: JSON;
}

export const initIncident = (sequelize: Sequelize) => {
  Incident.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      client_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      incident_desc: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      weather_report: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
    },
    {
      modelName: "Incidents",
      tableName: "Incidents",
      timestamps: true,
      sequelize,
    }
  );
};

export default Incident;

import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Habitacion extends Model {
  public CodigoHabitacion!: number;
  public TipoHabitaciones!: string;
  
  

}

export interface HabitacionI {
     CodigoHabitacion: number;
     TipoHabitaciones: string;
}

Habitacion.init(
  {
    CodigoHabitacion: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    TipoHabitaciones: {
        type: DataTypes.STRING,
        allowNull: false
      } 
    
  },
  {
    tableName: "Habitacion",
    sequelize: database,
    timestamps: true
  }
);
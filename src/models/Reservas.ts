import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Reserva extends Model {
  public NumeroReserva!: number;
  public FechaIngreso!: Date;
  public FechaSalida!: Date;
  public HoraIngreso!: Date;
}

export interface ReservaI {
     NumeroReserva: number;
     FechaIngreso: Date;
     FechaSalida: Date;
     HoraIngreso: Date;
}

Reserva.init(
  {
    NumeroReserva: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    FechaIngreso: {
        type: DataTypes.DATE,
        allowNull: false
      },
    FechaSalida: {
        type: DataTypes.DATE,
        allowNull: false
      },
     HoraIngreso: {
        type: DataTypes.TIME,
        allowNull: false
      } 
      
    
  },
  {
    tableName: "Reserva",
    sequelize: database,
    timestamps: true
  }
);
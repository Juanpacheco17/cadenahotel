import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Personas extends Model {
  public Cedula!: number;
  public Nombre!: string;
  public Apellidos!: string;
  public Direccion!: string;
  public Telefono!: number;
}

export interface PersonasI {
     Cedula: number;
     Nombre: string;
     Apellidos: string;
     Direccion: string;
     Telefono: number;
}

Personas.init(
  {
    Cedula: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    Nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
    Apellidos: {
        type: DataTypes.STRING,
        allowNull: false
      },
     Direccion: {
        type: DataTypes.STRING,
        allowNull: false
      },  
      Telefono: {
        type: DataTypes.INTEGER,
        allowNull: false
      } 
    
  },
  {
    tableName: "Personas",
    sequelize: database,
    timestamps: true
  }
);
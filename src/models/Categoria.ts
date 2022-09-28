import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Categoria extends Model {
  public Descripcion!: string;
  public Iva!: number;
  public Nivel!: string;
  

}

export interface CategoriI {
     Descripcion: string;
     Iva: number;
     Nivel: string;
}

Categoria.init(
  {
    Descripcion: {
        type: DataTypes.STRING,
        allowNull: false
      },
    Iva: {
        type: DataTypes.FLOAT,
        allowNull: false
      },

      Nivel: {
        type: DataTypes.STRING,
        allowNull: false
      }
    
  },
  {
    tableName: "Categoria",
    sequelize: database,
    timestamps: true
  }
);

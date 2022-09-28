import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Habitacion, HabitacionI } from '../models/Habitacion';

export class HabitacionControllers {


    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para Habitacion')
        } catch (error) {

        }
    }

    public async getAllHabitacion(req: Request, res:Response){
        try {
            const habitacion: HabitacionI[] = await Habitacion.findAll(
                {
                    where: {activo: true}
                }
            ) 
            res.status(200).json({habitacion})
        } catch (error) {

        }
    }
}

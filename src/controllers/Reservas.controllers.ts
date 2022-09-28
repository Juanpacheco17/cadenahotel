import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Reserva, ReservaI } from '../models/Reservas';

export class ReservasControllers {


    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para Cliente')
        } catch (error) {

        }
    }

    public async getAllReserva(req: Request, res:Response){
        try {
            const reserva: ReservaI[] = await Reserva.findAll(
                {
                    where: {activo: true}
                }
            ) 
            res.status(200).json({reserva})
        } catch (error) {

        }
    }
}

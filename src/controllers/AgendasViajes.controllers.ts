import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { AgendasViajes,  AgendasViajesI} from '../models/AgendasViajes';

export class AgendasViajesControllers {


    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para Cliente')
        } catch (error) {

        }
    }

    public async getAllAgendasViajes(req: Request, res:Response){
        try {
            const agendasViajes: AgendasViajesI[] = await AgendasViajes.findAll(
                {
                    where: {activo: true}
                }
            ) 
            res.status(200).json({agendasViajes})
        } catch (error) {

        }
    }
}

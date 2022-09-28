import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import {Personas ,  PersonasI } from '../models/Personas';

export class  PersonasControllers {


    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para Cliente')
        } catch (error) {

        }
    }

    public async getAllPersonas(req: Request, res:Response){
        try {
            const personas: PersonasI[] = await Personas.findAll(
                {
                    where: {activo: true}
                }
            ) 
            res.status(200).json({personas})
        } catch (error) {

        }
    }
}

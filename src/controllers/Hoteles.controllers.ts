import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import {Hoteles ,  HotelesI } from '../models/Hoteles';

export class  HotelesControllers {


    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para Cliente')
        } catch (error) {

        }
    }

    public async getAllHoteles(req: Request, res:Response){
        try {
            const hoteles: HotelesI[] = await Hoteles.findAll(
                {
                    where: {activo: true}
                }
            ) 
            res.status(200).json({hoteles})
        } catch (error) {

        }
    }
}

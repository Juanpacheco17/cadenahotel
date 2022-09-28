import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Categoria, CategoriI} from '../models/Categoria';

export class CategoriaControllers {


    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para Cliente')
        } catch (error) {

        }
    }

    public async getAllCategoria(req: Request, res:Response){
        try {
            const categoria: CategoriI[] = await Categoria.findAll(
                {
                    where: {activo: true}
                }
            ) 
            res.status(200).json({categoria})
        } catch (error) {

        }
    }
}

import { Request, Response, Application, Router } from "express";

import { CategoriaControllers } from '../controllers/Categoria.controllers';

export class CategoriaRoutes {
    public categoriaControllers: CategoriaControllers =  new CategoriaControllers();

    public routes(app: Application): void {
        app.route("/categoria/test").get(this.categoriaControllers.test)
        app.route("/categoria").get(this.categoriaControllers.getAllCategoria)
    }
}

import { Request, Response, Application, Router } from "express";

import { PersonasControllers } from '../controllers/Personas.controllers';

export class PersonasRoutes {
    public  personasControllers:  PersonasControllers =  new  PersonasControllers();

    public routes(app: Application): void {
        app.route("/personas/test").get(this.personasControllers.test)
        app.route("/personas").get(this.personasControllers.getAllPersonas)
    }
}
import { Request, Response, Application, Router } from "express";

import { AgendasViajesControllers } from '../controllers/AgendasViajes.controllers';

export class AgendaRoutes {
    public agendasviajesControllers: AgendasViajesControllers =  new AgendasViajesControllers();

    public routes(app: Application): void {
        app.route("/agendasviajes/test").get(this.agendasviajesControllers.test)
        app.route("/agendasviajes").get(this.agendasviajesControllers.getAllAgendasViajes)
    }
}

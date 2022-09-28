import { Request, Response, Application, Router } from "express";

import { ReservasControllers } from '../controllers/Reservas.controllers';

export class ReservasRoutes {
    public  reservasControllers:  ReservasControllers =  new ReservasControllers();

    public routes(app: Application): void {
        app.route("/reserva/test").get(this.reservasControllers.test)
        app.route("/reserva").get(this.reservasControllers.getAllReserva)
    }
}
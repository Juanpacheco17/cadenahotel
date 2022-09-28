import { Request, Response, Application, Router } from "express";

import { HabitacionControllers } from '../controllers/Habitacion.controllers';

export class HabitacionRoutes {
    public habitacionControllers: HabitacionControllers =  new HabitacionControllers();

    public routes(app: Application): void {
        app.route("/habitacion/test").get(this.habitacionControllers.test)
        app.route("/habitacion").get(this.habitacionControllers.getAllHabitacion)
    }
}
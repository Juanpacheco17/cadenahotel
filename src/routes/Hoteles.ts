import { Request, Response, Application, Router } from "express";

import { HotelesControllers } from '../controllers/Hoteles.controllers';

export class HotelesRoutes {
    public hotelesControllers: HotelesControllers =  new HotelesControllers();

    public routes(app: Application): void {
        app.route("/hoteles/test").get(this.hotelesControllers.test)
        app.route("/hoteles").get(this.hotelesControllers.getAllHoteles)
    }
}
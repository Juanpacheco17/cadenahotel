import {CategoriaRoutes } from './Categoria';
import {AgendaRoutes } from './AgendasViajes';
import {HabitacionRoutes } from './Habitacion';
import {HotelesRoutes} from './Hoteles';
import {PersonasRoutes} from './Personas';
import {ReservasRoutes} from './Reservas';

export class Routes {
    public agendaRoutes: AgendaRoutes = new AgendaRoutes();
    public categoriaRoutes: CategoriaRoutes = new CategoriaRoutes();
    public habitacionRoutes:HabitacionRoutes = new HabitacionRoutes();
    public hotelesRoutes: HotelesRoutes = new HotelesRoutes();
    public personaRoutes: PersonasRoutes = new PersonasRoutes();
    public reservaRoutes: ReservasRoutes = new ReservasRoutes();
}
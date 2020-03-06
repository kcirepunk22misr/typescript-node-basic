import server from '../server/server';
import InventoryRoutes from './Inventory.routes';
import UserRoutes from './user.routes';
import PropertiesRoutes from './properties.routes';
import LocationRoutes from './Location.routes';
import ReportRoutes from './Report.routes';

const routes = server.instance;

routes.app.use('/inventory', InventoryRoutes);
routes.app.use('/user', UserRoutes);
routes.app.use('/properties', PropertiesRoutes);
routes.app.use('/location', LocationRoutes);
routes.app.use('/report', ReportRoutes)

export default routes;
import server from '../server/server';
import InventoryRoutes from './Inventory.routes';
import UserRoutes from './user.routes';
import PropertiesRoutes from './properties.routes';

const routes = server.instance;

routes.app.use('/inventory', InventoryRoutes);
routes.app.use('/user', UserRoutes);
routes.app.use('/properties', PropertiesRoutes);

export default routes;
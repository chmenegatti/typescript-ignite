import { Router } from 'express';
import { categoryRoutes } from './categories.routes';
import { specRoutes } from './specifications.routes';

const routes = Router();

routes.use('/categories', categoryRoutes);
routes.use('/specificatiosn', specRoutes);

export { routes };

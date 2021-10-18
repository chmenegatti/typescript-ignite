import { Router } from 'express';
import { createSpecificationController } from '../modules/cars/useCases/createSpecification';

const specRoutes = Router();

specRoutes.post('/', (request, response) => {
  return createSpecificationController.handle(request, response);
});

export { specRoutes };

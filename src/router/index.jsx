import {
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { MainRoute } from './Main';

const router = createBrowserRouter(createRoutesFromElements([MainRoute()]));

export default router;

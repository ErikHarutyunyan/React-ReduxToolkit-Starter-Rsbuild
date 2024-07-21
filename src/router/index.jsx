import { createBrowserRouter } from 'react-router-dom';
import { DashboardRoute } from './Dashboard';
import { MainRoute } from './Main';

export const router = createBrowserRouter([...MainRoute, ...DashboardRoute]);

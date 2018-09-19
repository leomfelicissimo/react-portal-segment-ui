import { CampanhaManagementPage, StatusManagementPage, HomePage } from './pages';

const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/campanha',
    component: CampanhaManagementPage,
  },
  {
    path: '/status',
    component: StatusManagementPage,
  },
];

export default routes;

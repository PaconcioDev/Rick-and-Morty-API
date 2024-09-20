import { Navigate, useRoutes } from 'react-router-dom';
import { Characters } from '../pages/Characters/Characters';
import { Locations } from '../pages/Locations/Locations';

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Navigate replace to='/characters' /> },
    { path: '/characters', element: <Characters /> },
    { path: '/locations', element: <Locations /> }
  ]);

  return routes;
};

export { AppRoutes };
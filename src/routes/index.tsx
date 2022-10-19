import { useRoutes } from 'react-router-dom';
import { Landing } from '@/features/misc';

import { protectedRoutes } from './protected';
//import { publicRoutes } from './public';

export const AppRoutes = () => {

    const commonRoutes = [{path: '/', element: <Landing />}];

    const routes = protectedRoutes;

    const element = useRoutes([...routes, ...commonRoutes]);

    return <>{element}</>
}
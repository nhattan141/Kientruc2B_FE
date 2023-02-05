import { lazy } from "react";

import UserLayout from "../layout/UserLayout";

const MainHome = lazy(() => import('../pages/user/Home/MainHome'));

const UserRoutes = {
    path: '/',
    element: <UserLayout />,
    children: [
        {
            path: '/',
            element: <MainHome />
        }
    ]
};

export default UserRoutes;
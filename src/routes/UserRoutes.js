import { lazy } from "react";

import UserLayout from "../layout/UserLayout";

const MainHome = lazy(() => import('../pages/user/Home/MainHome'));
const ListProduct = lazy(() => import('../pages/user/ListProduct/ListProduct'));

const UserRoutes = {
    path: '/',
    element: <UserLayout />,
    children: [
        {
            path: '/',
            element: <MainHome />
        },
        {
            path: 'category/:cate_id',
            element: <ListProduct />
        }
    ]
};

export default UserRoutes;
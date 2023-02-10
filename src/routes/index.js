import { useRoutes } from "react-router";

import UserRoutes from '../routes/UserRoutes';

export default function Routes() {
    return useRoutes([UserRoutes])
}

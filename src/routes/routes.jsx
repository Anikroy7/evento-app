import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Home from "../pages/Home/Home";
import HomeDetails from "../pages/HomeDetails/HomeDetails";
import Main from "../pages/Main/Main";
import SearchPage from "../pages/SearchPage/SearchPage";

const routes = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/signup',
                    element: <Signup />
                },
                {
                    path: '/login',
                    element: <Login />
                },
                {
                    path: '/searchPage',
                    element: <SearchPage />
                },
                {
                    path: '/homeDetails/:homeId',
                    element: <HomeDetails />
                }
            ]
        },

    ]
)


export default routes;


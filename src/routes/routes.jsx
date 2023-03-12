import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../pages/Main/Main";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
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
                }
            ]
        },

    ]
)


export default routes;


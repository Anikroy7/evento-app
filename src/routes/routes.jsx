import { createBrowserRouter } from "react-router-dom";
import HostExperienceForm from "../Components/HostExperienceForm/HostExperienceForm";
import HostHomeRegister from "../Components/HostHomeForm/HomeRegisterForm";
import HostHomeForm from "../Components/HostHomeForm/HostHomeForm";
import Checkout from "../pages/Checkout/Checkout";
import Home from "../pages/Home/Home";
import HomeDetails from "../pages/HomeDetails/HomeDetails";
import Main from "../pages/Main/Main";
import MyHomes from "../pages/MyHomes/MyHomes";
import SearchPage from "../pages/SearchPage/SearchPage";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

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
                },
                {
                    path: '/checkout/:homeId',
                    element: <Checkout />
                },
                {
                    path:'/hostHomeRegister',
                    element:<HostHomeRegister/>
                },
                {
                    path:'/hostHome',
                    element:<HostHomeForm/>
                },
                {
                    path:'/myHomes',
                    element:<MyHomes/>
                },
                {
                    path:'/hostExperience',
                    element:<HostExperienceForm/>
                }
            ]
        },

    ]
)


export default routes;


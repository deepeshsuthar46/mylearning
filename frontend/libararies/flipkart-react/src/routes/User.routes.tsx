import { Outlet } from "react-router-dom";
import { Home, Login, Register } from "../views";
import { Content } from "../views/content/Content.page";
import { Navbar } from "../components/navbar/Navbar.com";

export let UserRoutes={
    path:'/client',
    element:<div>
        <Navbar/>
        <Outlet/>
        </div>,
    children:[
        {
            path:'home',
            element:<Home/>
        },
        {
            path:'login',
            element:<Login/>
        }
        , {
            path:'register',
            element:<Register/>
        }
        , {
            path:'content',
            element:<Content/>
        }
    ]
}
import { createBrowserRouter } from "react-router-dom";
import Root from "../../App";
import { Home, SignIn, SignUp, Layout, Profile } from '../components/index'
const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children:[
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"/signin",
                element: <SignIn/>
            },
            {
                path:"/signup",
                element: <SignUp/>
            }
        ]
    },
    {
        path:"/",
        element:<Layout/>,
        children: [
            {
                path:"/profile",
                element: <Profile/>
            },
        ]
    }
])
export default router
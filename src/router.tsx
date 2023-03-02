import {createHashRouter} from "react-router-dom";
import App from "./App";

import {ReactNode} from "react";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import {Profile} from "./Components/Profile/Profile";
import Login from "./Components/Login/Login";
import PasswordCreate from "./Components/PasswordCreate/PasswordCreate";
import PasswordRestore from "./Components/PasswordRestore/PasswordRestore";
import Register from "./Components/Register/Register";
import Test from "./Components/Test/Test";

type RouteProps = {
    path: string
    name: string
    element: ReactNode
}
export const routes: RouteProps[] = [
    {path: '/profile', name: 'Profile', element: <Profile/>},
    {path: '/login', name: 'Login', element: <Login/>},
    {path: '/register', name: 'Register', element: <Register/>},
    {path: '/passwordCreate', name: 'PasswordCreate', element: <PasswordCreate/>},
    {path: '/passwordRestore', name: 'PasswordRestore', element: <PasswordRestore/>},
    {path: '/test', name: 'Test', element: <Test/>},
]

export const router = createHashRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <PageNotFound/>,
        children: [
            {index: true, element: <Profile/>},
            ...routes.map(route => ({
                path: route.path === '/' ? undefined : route.path,
                element: route.element,
            }))],
    },
])
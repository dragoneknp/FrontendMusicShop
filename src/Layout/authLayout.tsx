import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Hooks/redux";
import { loginUser } from "../Store/ActionCreators/loginAction";

interface RouteProps {
    name: string;
    path: string;
    element: React.FC;
    private: boolean;
}
interface AuthLayoutProps {
    router: RouteProps[];
}
const AuthLayout = ({ router }: AuthLayoutProps) => {
    const { isLogin } = useAppSelector((store) => store.login);
    const dispatch = useAppDispatch();

    if (!isLogin) {
        const token = localStorage.getItem("token");
        const data = token?.split(";");
        if (data) {
            dispatch(loginUser({ email: data[0], password: data[1] }));
        }
    }
    return (
        <Routes>
            {router.map((route: RouteProps) =>
                route.private ? (
                    isLogin ? (
                        <Route
                            key={route.name}
                            path={route.path}
                            element={<route.element />}
                        />
                    ) : null
                ) : (
                    <Route
                        key={route.name}
                        path={route.path}
                        element={<route.element />}
                    />
                )
            )}
        </Routes>
    );
};
export default AuthLayout;

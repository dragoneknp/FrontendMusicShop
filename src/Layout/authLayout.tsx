import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAppSelector } from "../Hooks/redux";

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

import React from "react";
import Loader from "../Components/Loader/loader";

export const useLoading = () => {
    const load = ({
        flag,
        component,
    }: {
        flag: boolean;
        component: React.ReactNode | React.ReactNode[];
    }) =>
        flag ? (
            <div style={{ textAlign: "center" }}>
                <Loader />
            </div>
        ) : (
            component
        );

    return [load];
};

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useError = (error: string) => {
    const history = useNavigate();
    useEffect(() => {
        if (error) {
            history("/error");
        }
    }, [error]);
};

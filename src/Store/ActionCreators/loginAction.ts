import { AppDispatch } from "../store";
import axios from "axios";
import { loginSlice } from "../Slices/loginSlice";
import { UserProps } from "../../types/types";

export const loginUser =
    ({
        displayName,
        password,
        isRemembered,
    }: {
        displayName: string;
        password: string;
        isRemembered: boolean;
    }) =>
    async (dispatch: AppDispatch) => {
        try {
            dispatch(loginSlice.actions.loginStart());

            const response = await axios.get(
                `https://nftshop-4237c-default-rtdb.firebaseio.com/accounts/${displayName};${password}.json`
            );
            if (response.data === null) {
                throw new Error("Item not found");
            }

            localStorage.removeItem("token");
            localStorage.setItem(
                "token",
                `${displayName};${password};${
                    Object.keys(response.data)[0]
                };${isRemembered}`
            );

            dispatch(
                loginSlice.actions.loginSuccess(
                    Object.values(response.data)[0] as UserProps
                )
            );
        } catch (e: any) {
            dispatch(loginSlice.actions.loginFailed(e.message));
        }
    };

import { AppDispatch } from "../store";
import axios from "axios";
import { loginSlice } from "../Slices/loginSlice";
import { UserProps } from "../../types/types";
export const loginUser =
    ({ email, password }: { email: string; password: string }) =>
    async (dispatch: AppDispatch) => {
        try {
            dispatch(loginSlice.actions.loginStart());
            const response = await axios.get(
                `https://nftshop-4237c-default-rtdb.firebaseio.com/accounts/${email};${password}.json`
            );

            dispatch(
                loginSlice.actions.loginSuccess(
                    Object.values(response.data)[0] as UserProps
                )
            );
        } catch (e: any) {
            dispatch(loginSlice.actions.loginFailed(e));
        }
    };

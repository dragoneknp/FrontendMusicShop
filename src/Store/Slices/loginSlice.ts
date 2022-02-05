import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserProps } from "../../types/types";

interface LoginProps {
    error: string;
    isLoading: boolean;
    isLogin: boolean;
    userData: UserProps;
}
const initialState: LoginProps = {
    error: "",
    isLoading: false,
    isLogin: false,
    userData: {
        firstName: "",
        lastName: "",
        emailAdress: "",
        phoneNumber: "",
        displayName: "",
        password: "",
        joinedAt: "",
    },
};
export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loginStart(state) {
            state.error = "";
            state.isLoading = true;
            state.isLogin = false;
        },
        loginSuccess(state, action: PayloadAction<UserProps>) {
            state.error = "";
            state.isLoading = false;
            state.isLogin = true;
            state.userData = action.payload;
        },
        loginFailed(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.isLoading = false;
            state.isLogin = false;
        },
        logout(state) {
            state.error = "";
            state.isLoading = false;
            state.isLogin = false;
            state.userData = {
                firstName: "",
                lastName: "",
                emailAdress: "",
                phoneNumber: "",
                displayName: "",
                password: "",
                joinedAt: "",
            };
        },
        changeErrorStatus(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
    },
});

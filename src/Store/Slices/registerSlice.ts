import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface RegisterState {
    error: string;
    isLoading: boolean;
    isRegister: boolean;
}

const initialState: RegisterState = {
    error: "",
    isLoading: false,
    isRegister: false,
};
export const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        registerStart(state) {
            state.isLoading = true;
            state.error = "";
            state.isRegister = false;
        },
        registerSuccess(state) {
            state.isLoading = false;
            state.error = "";
            state.isRegister = true;
        },
        registerFailed(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
            state.isRegister = false;
        },
    },
});

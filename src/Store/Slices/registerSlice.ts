import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface RegisterState{
  error: string;
  isLoading: boolean;
}
const initialState: RegisterState = {
    error: "",
    isLoading: false,
};
export const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        registerStart(state) {
            state.isLoading = true;
            state.error = "";
        },
        registerSuccess(state) {
            state.isLoading = false;
            state.error = "";
        },
        registerFailed(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

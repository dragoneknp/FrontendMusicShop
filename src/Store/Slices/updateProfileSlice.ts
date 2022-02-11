import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UpdateProfileProps {
    isLoading: boolean;
    error: string;
}
const initialState: UpdateProfileProps = {
    isLoading: false,
    error: "",
};

export const updateProfileSlice = createSlice({
    name: "updateProfile",
    initialState,
    reducers: {
        updateStart(state) {
            state.error = "";
            state.isLoading = true;
        },
        updateSuccess(state) {
            state.isLoading = false;
        },
        updateFailed(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.isLoading = false;
        },
    },
});

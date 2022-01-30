import { AppDispatch } from "../store";
import { loginSlice } from "../Slices/loginSlice";
export const logout = () => (dispatch: AppDispatch) => {
    localStorage.removeItem("token");
    dispatch(loginSlice.actions.logout());
};

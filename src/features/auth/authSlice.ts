import { createSlice } from "@reduxjs/toolkit";
import {IAuthState} from "@/utils/types/auth/index"


const initialState: IAuthState = {
    isAuthenticated: false,
    user: null,
    token: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
            state.isAuthenticated = !!action.payload;
        },
        setToken(state, action) {
            state.token = action.payload;
        },
        setIsAuthenticated(state, action) {
            state.isAuthenticated = action.payload;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
        }
    }
});
export const { setUser, setToken, setIsAuthenticated, logout } = authSlice.actions;
export default authSlice.reducer;
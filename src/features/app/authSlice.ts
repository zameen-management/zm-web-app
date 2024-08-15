import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
	user: null,
	accessToken: "",
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser(state, action) {
			state.user = action.payload;
		},
		setAccessToken(state, action) {
			state.accessToken = action.payload;
		},
	},
});

export const { setUser, setAccessToken } = authSlice.actions;

export const getUser = (state: any) => state.auth.user;
export const getAccessToken = (state: any) => state.auth.accessToken;

export default authSlice.reducer;

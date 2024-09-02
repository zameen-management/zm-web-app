import { createSlice } from "@reduxjs/toolkit";
import {
	addLocalData,
	getLocalData,
	removeLocalData,
} from "../utils/localStorage";
import { Application, EmptyApplication } from "../types/Application.types";

type InitialStateType = {
	application: Application;
	token: any;
};
const initialState: InitialStateType = {
	application: EmptyApplication,
	token: getLocalData("application"),
};

const applicationSlice = createSlice({
	name: "application",
	initialState,
	reducers: {
		setApplication(state, action) {
			state.application = action.payload;
		},
		setApplicationToken(state, action) {
			const token = action.payload;
			addLocalData("application", token);
			state.token = token;
		},
		removeApplicationToken(state, _action) {
			removeLocalData("application");
			state.token = null;
		},
	},
});

export const { setApplication, setApplicationToken, removeApplicationToken } =
	applicationSlice.actions;

export const getApplication = (state: any) => {
	return state.application.application as Application;
};

export const getApplicationToken = (state: any) => {
	return state.application.token as string;
};

export default applicationSlice.reducer;

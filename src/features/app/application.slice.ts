import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Application, Empty_Application } from "../types/Application.type";

interface InitialState {
	step: string;
	application: Application;
}

const initialState: InitialState = {
	step: "Start",
	application: Empty_Application,
};

const applicationSlice = createSlice({
	name: "application",
	initialState,
	reducers: {
		setStep(state, action: PayloadAction<string>) {
			state.step = action.payload;
		},
		setApplication(state, action: PayloadAction<Application>) {
			state.application = action.payload;
		},
		resetApplication(state) {
			state.application = Empty_Application;
		},
	},
});

export const { setStep, setApplication, resetApplication } =
	applicationSlice.actions;

export const getApplicationStep = (state: RootState) => state.application.step;
export const getApplication = (state: RootState) =>
	state.application.application;

export default applicationSlice.reducer;

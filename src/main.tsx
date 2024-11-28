import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./features/styles/Theme.styled.ts";
import { GlobalStyles } from "./features/styles/Global.styled.ts";
import { Provider } from "react-redux";
import { store } from "./features/app/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</Provider>
);

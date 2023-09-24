import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SearchContextProvider from "./components/contexts/SearchContextProvider/SearchContextProvider";
import DarkModeContextProvider from "./components/contexts/DarkModeContextProvider/DarkModeContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<DarkModeContextProvider>
			<SearchContextProvider>
				<App />
			</SearchContextProvider>
		</DarkModeContextProvider>
	</React.StrictMode>
);

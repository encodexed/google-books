import styles from "./App.module.scss";
import Home from "./components/Home/Home";
import { useContext } from "react";
import { SearchContext } from "./components/contexts/SearchContextProvider/SearchContextProvider";
import ResultsPage from "./components/ResultsPage/ResultsPage";
import Navbar from "./components/Navbar/Navbar";
import { DarkModeContext } from "./components/contexts/DarkModeContextProvider/DarkModeContextProvider";

const App = () => {
	const { hasSearched } = useContext(SearchContext);
	const { darkMode } = useContext(DarkModeContext);

	let pageContainerClass = styles.page_container;
	if (darkMode) {
		pageContainerClass = styles.page_container_dark;
	}

	return (
		<>
			<Navbar />
			{!hasSearched && (
				<div className={pageContainerClass}>
					<Home />
				</div>
			)}
			{hasSearched && <ResultsPage />}
		</>
	);
};

export default App;

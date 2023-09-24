import styles from "./App.module.scss";
import Home from "./components/Home/Home";
import { useContext } from "react";
import { SearchContext } from "./components/contexts/SearchContextProvider/SearchContextProvider";
import ResultsPage from "./components/ResultsPage/ResultsPage";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
	const { hasSearched } = useContext(SearchContext);

	return (
		<>
			{!hasSearched && (
				<div className={styles.page_container}>
					<Home />
				</div>
			)}
			{hasSearched && (
				<>
					<Navbar />
					<ResultsPage />
				</>
			)}
		</>
	);
};

export default App;

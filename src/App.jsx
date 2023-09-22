import styles from "./App.module.scss";
import Home from "./components/Home/Home";
import { createContext, useState } from "react";
export const SearchContext = createContext(null);

const App = () => {
	const [searchTerm, setSearchTerm] = useState(null);

	return (
		<SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
			<div className={styles.page_container}>
				<Home />
			</div>
		</SearchContext.Provider>
	);
};

export default App;

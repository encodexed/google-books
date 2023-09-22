import { useContext, useRef } from "react";
import { SearchContext } from "../contexts/SearchContextProvider/SearchContextProvider";
import styles from "./SearchForm.module.scss";
import Button from "../UI/Button/Button";

const SearchForm = () => {
	const searchInput = useRef(null);
	const { setSearchTerm, setHasSearched } = useContext(SearchContext);

	const handleSearch = (e) => {
		e.preventDefault();
		setSearchTerm(searchInput.current.value);
		setHasSearched(true);
		console.log("Search submitting...");
		console.log({ searchTerm: searchInput.current.value });
	};

	return (
		<form className={styles.search_form}>
			<input type='text' ref={searchInput} />
			<Button text={"Search Google Books"} onClick={handleSearch} />
		</form>
	);
};

export default SearchForm;

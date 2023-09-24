/* eslint-disable react/prop-types */
import { useContext, useRef } from "react";
import { SearchContext } from "../contexts/SearchContextProvider/SearchContextProvider";
import styles from "./SearchForm.module.scss";
import Button from "../UI/Button/Button";

const SearchForm = ({ flex, btnText }) => {
	const searchInput = useRef(null);
	const { setSearchTerm, setHasSearched } = useContext(SearchContext);

	const handleSearch = (e) => {
		e.preventDefault();
		setSearchTerm(searchInput.current.value);
		setHasSearched(true);
	};

	let formClasses = "";
	if (flex === "col") {
		formClasses = ` ${styles.search_form__flex_col}`;
	} else {
		formClasses = ` ${styles.search_form__flex_row}`;
	}

	return (
		<form className={formClasses}>
			<input
				className={styles.search_form__input}
				type='text'
				ref={searchInput}
			/>
			<Button text={btnText} onClick={handleSearch} />
		</form>
	);
};

export default SearchForm;

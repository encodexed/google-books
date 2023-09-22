/* eslint-disable react/prop-types */
import { useRef, useContext } from "react";
import styles from "./Home.module.scss";
import GoogleHeader from "../GoogleHeader/GoogleHeader";
import Button from "../UI/Button/Button";
import { SearchContext } from "../../App";

const Home = () => {
	const searchInput = useRef();
	const { searchTerm, setSearchTerm } = useContext(SearchContext);

	return (
		<div className={styles.home__container}>
			<div className={styles.home__header}>
				<GoogleHeader />
				{searchTerm === null && <h3>Millions of books at your fingertips</h3>}
			</div>
			<div className={styles.home__search}>
				<input type='text' ref={searchInput} />
				<Button text={"Search Google Books"} onClick={setSearchTerm} />
			</div>
		</div>
	);
};

export default Home;

/* eslint-disable react/prop-types */
import styles from "./Home.module.scss";
import GoogleHeader from "../GoogleHeader/GoogleHeader";
import SearchForm from "../SearchForm/SearchForm";
import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContextProvider/DarkModeContextProvider";

const Home = () => {
	const { darkMode } = useContext(DarkModeContext);

	let h3Class = styles.home__header__h3;
	if (darkMode) {
		h3Class = styles.home__header__h3_dark;
	}

	return (
		<div className={styles.home__container}>
			<div className={styles.home__header}>
				<GoogleHeader size='80px' spacing='-3px' />
				<h3 className={h3Class}>Millions of publications at your fingertips</h3>
			</div>
			<SearchForm flex='col' btnText='Search Google Books' />
		</div>
	);
};

export default Home;

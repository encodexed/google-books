/* eslint-disable react/prop-types */
import styles from "./Home.module.scss";
import GoogleHeader from "../GoogleHeader/GoogleHeader";
import SearchForm from "../SearchForm/SearchForm";

const Home = () => {
	return (
		<div className={styles.home__container}>
			<div className={styles.home__header}>
				<GoogleHeader size='80px' spacing='-3px' />
				<h3>Millions of publications at your fingertips</h3>
			</div>
			<SearchForm flex='col' btnText='Search Google Books' />
		</div>
	);
};

export default Home;

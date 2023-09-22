/* eslint-disable react/prop-types */
import styles from "./Home.module.scss";
import GoogleHeader from "../GoogleHeader/GoogleHeader";
import SearchForm from "../SearchForm/SearchForm";

const Home = () => {
	return (
		<div className={styles.home__container}>
			<div className={styles.home__header}>
				<GoogleHeader />
				<h3>Millions of books at your fingertips</h3>
			</div>
			<SearchForm />
		</div>
	);
};

export default Home;

/* eslint-disable react/prop-types */
import { useRef } from "react";
import styles from "./Home.module.scss";
import GoogleHeader from "../GoogleHeader/GoogleHeader";
import Button from "../UI/Button/Button";

const Home = () => {
	const searchInput = useRef();

	return (
		<div className={styles.home__container}>
			<div className={styles.home__header}>
				<GoogleHeader />
				<h3>Millions of books at your fingertips</h3>
			</div>
			<div className={styles.home__search}>
				<input type='text' ref={searchInput} />
				<Button
					text={"Search Google Books"}
					onClick={() => console.log(searchInput.current.value)}
				/>
			</div>
		</div>
	);
};

export default Home;

import styles from "./App.module.scss";
import Home from "./components/Home/Home";

const App = () => {
	return (
		<>
			<div className={styles.page_container}>
				<Home />
			</div>
		</>
	);
};

export default App;

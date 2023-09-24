import styles from "./Navbar.module.scss";
import GoogleHeader from "../GoogleHeader/GoogleHeader";
import SearchForm from "../SearchForm/SearchForm";

const Navbar = () => {
	return (
		<header>
			<nav>
				<div className={styles.nav__left}>
					<GoogleHeader />
				</div>
				<div>
					<SearchForm flex='row' btnText='Search' />
				</div>
				<div>{/* dark mode here soon */}</div>
			</nav>
		</header>
	);
};

export default Navbar;

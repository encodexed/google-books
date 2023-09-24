import styles from "./Navbar.module.scss";
import GoogleHeader from "../GoogleHeader/GoogleHeader";
import SearchForm from "../SearchForm/SearchForm";
import darkModeIcon from "../../assets/dark-mode.svg";
import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContextProvider/SearchContextProvider";

const Navbar = () => {
	const { setHasSearched } = useContext(SearchContext);

	const returnHome = () => {
		setHasSearched(false);
	};

	return (
		<header>
			<nav>
				<div>
					<div onClick={returnHome}>
						<GoogleHeader />
					</div>
				</div>
				<div className={styles.nav__right}>
					<SearchForm flex='row' btnText='Search' />
					<div className={styles.nav__dark_mode_container}>
						<img
							className={styles.nav__dark_mode_icon}
							src={darkModeIcon}
							alt='An icon for toggling dark mode'
						/>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;

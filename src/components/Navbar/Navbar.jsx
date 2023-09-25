import styles from "./Navbar.module.scss";
import GoogleHeader from "../GoogleHeader/GoogleHeader";
import SearchForm from "../SearchForm/SearchForm";
import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContextProvider/SearchContextProvider";
import { DarkModeContext } from "../contexts/DarkModeContextProvider/DarkModeContextProvider";
import DarkModeIcon from "../UI/DarkModeIcon/DarkModeIcon";

const Navbar = () => {
	const { hasSearched, setHasSearched } = useContext(SearchContext);
	const { darkMode } = useContext(DarkModeContext);

	let headerClass;
	if (darkMode) {
		if (hasSearched) {
			headerClass = styles.header_dark;
		} else {
			headerClass = styles.header_dark__clean;
		}
	} else {
		if (hasSearched) {
			headerClass = styles.header;
		} else {
			headerClass = styles.header__clean;
		}
	}

	if (!hasSearched) {
		headerClass;
	}

	const returnHome = () => {
		setHasSearched(false);
	};

	return (
		<header className={headerClass}>
			<nav>
				<div>
					{hasSearched && (
						<div onClick={returnHome}>
							<GoogleHeader />
						</div>
					)}
				</div>
				<div className={styles.nav__right}>
					{hasSearched && <SearchForm flex='row' btnText='Search' />}
					<DarkModeIcon />
				</div>
			</nav>
		</header>
	);
};

export default Navbar;

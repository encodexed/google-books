import darkModeIcon from "../../../assets/dark-mode.svg";
import styles from "./DarkModeIcon.module.scss";
import { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkModeContextProvider/DarkModeContextProvider";

const DarkModeIcon = () => {
	const { darkMode, setDarkMode } = useContext(DarkModeContext);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<div className={styles.dark_mode__container}>
			<img
				onClick={toggleDarkMode}
				className={styles.dark_mode__icon}
				src={darkModeIcon}
				alt='An icon for toggling dark mode'
			/>
		</div>
	);
};

export default DarkModeIcon;

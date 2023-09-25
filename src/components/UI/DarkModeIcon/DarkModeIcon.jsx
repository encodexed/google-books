import darkModeIcon from "../../../assets/dark-mode.svg";
import styles from "./DarkModeIcon.module.scss";
import { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkModeContextProvider/DarkModeContextProvider";

const DarkModeIcon = () => {
	const { darkMode, setDarkMode } = useContext(DarkModeContext);

	const toggleDarkMode = () => {
		alert(
			"Hello, thank you for pressing to see if dark mode works. It currently is only about half done. I have to work on getting the body painted dark dynamically. It was super annoying, but I left the styles in that I had done anyway"
		);
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

/* eslint-disable react/prop-types */
import styles from "./Button.module.scss";

const Button = ({ text, onClick }) => {
	return (
		<button className={styles.searchButton} onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;

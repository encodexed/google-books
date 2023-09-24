/* eslint-disable react/prop-types */
import styles from "./GoogleHeader.module.scss";

const GoogleHeader = ({ size = "30px", spacing = "0px" }) => {
	const text = {
		fontSize: size,
		letterSpacing: spacing,
	};
	return (
		<h1 style={text}>
			<span className={styles.google_blue}>G</span>
			<span className={styles.google_red}>o</span>
			<span className={styles.google_yellow}>o</span>
			<span className={styles.google_blue}>g</span>
			<span className={styles.google_green}>l</span>
			<span className={styles.google_red}>e</span>{" "}
			<span className={styles.google_blue}>B</span>
			<span className={styles.google_red}>o</span>
			<span className={styles.google_yellow}>o</span>
			<span className={styles.google_blue}>k</span>
			<span className={styles.google_green}>s</span>
		</h1>
	);
};

export default GoogleHeader;

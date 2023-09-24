/* eslint-disable react/prop-types */
import styles from "./BookTile.module.scss";

const BookTile = ({ info }) => {
	const { title, authors, imageLinks, publisher } = info;
	const authorsStr = authors.reduce((total, next) => (total += ", " + next));

	return (
		<article className={styles.bookTile}>
			<div className={styles.bookTile__cover}>
				<img
					className={styles.bookTile__image}
					src={imageLinks.medium}
					alt={`Book cover image for ${title}`}
				/>
				<div className={styles.bookTile__hover}>
					<div className={styles.bookTile__hover_box}>
						<p>Click for more information</p>
					</div>
				</div>
			</div>
			<div className={styles.bookTile__content}>
				<h3>{title}</h3>
				<p>{authorsStr}</p>
				<p className={styles.bookTile__content__publisher}>{publisher}</p>
			</div>
		</article>
	);
};

export default BookTile;

/* eslint-disable react/prop-types */
import BookTile from "../BookTile/BookTile";
import styles from "./ResultsList.module.scss";

const ResultsList = ({ booksData }) => {
	return (
		<section className={styles.results_list}>
			{booksData &&
				booksData.map((book, index) => {
					return <BookTile key={`book-${index}`} info={book} />;
				})}
		</section>
	);
};

export default ResultsList;

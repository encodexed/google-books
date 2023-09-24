/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../contexts/SearchContextProvider/SearchContextProvider";
import requestBooksData from "../../scripts/requestBooksData";
import BookTile from "../BookTile/BookTile";
import styles from "./ResultsList.module.scss";

const ResultsList = ({ updateBooksMetadata }) => {
	const { searchTerm } = useContext(SearchContext);
	const [booksData, setBooksData] = useState(null);

	const handleData = async () => {
		await requestBooksData(searchTerm).then((data) => {
			setBooksData(data);
			const { totalItems } = data;
			updateBooksMetadata({ totalItems });
		});
	};

	useEffect(() => {
		handleData();
	}, [searchTerm]);

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

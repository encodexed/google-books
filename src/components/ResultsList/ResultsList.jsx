import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../contexts/SearchContextProvider/SearchContextProvider";
import requestBooksData from "../../scripts/requestBooksData";
import BookTile from "../BookTile/BookTile";
import styles from "./ResultsList.module.scss";

const ResultsList = () => {
	const { searchTerm } = useContext(SearchContext);
	const [booksData, setBooksData] = useState(null);
	console.log(booksData);

	const handleData = async () => {
		await requestBooksData(searchTerm).then((data) => setBooksData(data));
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

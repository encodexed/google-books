import { useContext, useEffect } from "react";
import { SearchContext } from "../contexts/SearchContextProvider/SearchContextProvider";

const ResultsPage = () => {
	const { searchTerm } = useContext(SearchContext);

	const requestBooksData = async (input) => {
		const preparedInput = input.replace(" ", "+");
		const response = await fetch(
			`https://www.googleapis.com/books/v1/volumes?q=${preparedInput}`
		);
		const booksData = await response.json();

		// console.log(booksData.items[0]);
		const usefulBookData = booksData.items.map((book) => {
			const {
				authors,
				categories,
				description,
				imageLinks,
				publisher,
				publishedDate,
				title,
			} = book.volumeInfo;
			return {
				authors,
				categories,
				description,
				imageLinks,
				publisher,
				publishedDate,
				title,
			};
		});

		console.log(usefulBookData);
	};

	useEffect(() => {
		requestBooksData(searchTerm);
	}, [searchTerm]);

	return <div>Show results for {`"${searchTerm}"`}</div>;
};

export default ResultsPage;

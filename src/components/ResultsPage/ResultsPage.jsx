import ResultsList from "../ResultsList/ResultsList";
import ResultsSummary from "../ResultsSummary/ResultsSummary";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../contexts/SearchContextProvider/SearchContextProvider";
import requestBooksData from "../../scripts/requestBooksData";

const ResultsPage = () => {
	const [booksData, setBooksData] = useState(null);
	const { setIsSearching, searchTerm, resultsNavInfo } =
		useContext(SearchContext);
	const { startIndex, maxResults } = resultsNavInfo;

	useEffect(() => {
		setIsSearching(true);
		const handleData = async () => {
			await requestBooksData(searchTerm, startIndex, maxResults)
				.then((data) => setBooksData(data))
				.catch((err) => console.log(err.message))
				.finally(() => setIsSearching(false));
		};
		handleData();
	}, [searchTerm, setIsSearching, startIndex, maxResults]);

	return (
		<>
			<ResultsSummary booksData={booksData} />
			<ResultsList booksData={booksData} />
		</>
	);
};

export default ResultsPage;

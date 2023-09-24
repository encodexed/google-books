import ResultsList from "../ResultsList/ResultsList";
import ResultsSummary from "../ResultsSummary/ResultsSummary";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../contexts/SearchContextProvider/SearchContextProvider";
import requestBooksData from "../../scripts/requestBooksData";

const ResultsPage = () => {
	const [booksData, setBooksData] = useState(null);
	const { searchTerm, resultsNavInfo } = useContext(SearchContext);
	const { startIndex, maxResults } = resultsNavInfo;

	useEffect(() => {
		const handleData = async () => {
			await requestBooksData(searchTerm, startIndex, maxResults).then(
				(data) => {
					setBooksData(data);
				}
			);
		};
		handleData();
	}, [searchTerm, startIndex, maxResults]);

	return (
		<>
			<ResultsSummary booksData={booksData} />
			<ResultsList booksData={booksData} />
		</>
	);
};

export default ResultsPage;

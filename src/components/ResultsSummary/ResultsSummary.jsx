/* eslint-disable react/prop-types */
import { SearchContext } from "../contexts/SearchContextProvider/SearchContextProvider";
import { useContext, useEffect, useState } from "react";
import styles from "./ResultsSummary.module.scss";
import Pagination from "../Pagination/Pagination";

const ResultsSummary = ({ booksData }) => {
	const { searchTerm, isSearching, resultsNavInfo } = useContext(SearchContext);
	const { startIndex, maxResults, pageNumber } = resultsNavInfo;
	const [resultsCount, setResultsCount] = useState(null);

	useEffect(() => {
		if (booksData === null) return;
		setResultsCount(booksData.totalItems);
	}, [resultsNavInfo, booksData]);

	const toResults =
		startIndex + maxResults < resultsCount
			? startIndex + maxResults
			: resultsCount;

	const summaryStr = `Showing ${
		startIndex + 1
	}-${toResults} of ${resultsCount} for "${searchTerm}"`;

	return (
		<>
			{isSearching && (
				<div className={styles.results_summary}>Retrieving volumes...</div>
			)}
			{!isSearching && booksData && (
				<>
					<div className={styles.results_summary}>
						<div>{summaryStr}</div>
					</div>
					<Pagination pageNumber={pageNumber} />
				</>
			)}
			{!isSearching && !booksData && <p>Ummmm... something went wrong?</p>}
		</>
	);
};

export default ResultsSummary;

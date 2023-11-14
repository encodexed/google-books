/* eslint-disable react/prop-types */
import { SearchContext } from "../contexts/SearchContextProvider/SearchContextProvider";
import { useContext, useEffect, useState } from "react";
import styles from "./ResultsSummary.module.scss";
import Pagination from "../Pagination/Pagination";
import { DarkModeContext } from "../contexts/DarkModeContextProvider/DarkModeContextProvider";

const ResultsSummary = ({ booksData }) => {
	const { searchTerm, isSearching, resultsNavInfo } = useContext(SearchContext);
	const { startIndex, maxResults, pageNumber } = resultsNavInfo;
	const [resultsCount, setResultsCount] = useState(null);
	const { darkMode } = useContext(DarkModeContext);

	let summaryClass = styles.results_summary;
	if (darkMode) {
		summaryClass = styles.results_summary_dark;
	}

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
			{isSearching && <div className={summaryClass}>Retrieving volumes...</div>}
			{!isSearching && booksData && (
				<>
					<div className={summaryClass}>
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

/* eslint-disable react/prop-types */
import { SearchContext } from "../contexts/SearchContextProvider/SearchContextProvider";
import { useContext } from "react";
import styles from "./ResultsSummary.module.scss";

const ResultsSummary = ({ booksMetadata }) => {
	const { searchTerm } = useContext(SearchContext);

	return (
		<div className={styles.results_summary}>
			<div>Showing results for &quot;{searchTerm}&quot; </div>
			<div>Display 1-10 of {booksMetadata.totalItems}</div>
		</div>
	);
};

export default ResultsSummary;

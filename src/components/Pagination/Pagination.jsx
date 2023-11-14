/* eslint-disable react/prop-types */
import styles from "./Pagination.module.scss";
import arrowRight from "../../assets/arrow-right.svg";
import arrowLeft from "../../assets/arrow-left.svg";
import { SearchContext } from "../contexts/SearchContextProvider/SearchContextProvider";
import { useContext } from "react";

const Pagination = ({ pageNumber }) => {
	const { resultsNavInfo, setResultsNavInfo } = useContext(SearchContext);
	const { startIndex, maxResults } = resultsNavInfo;

	const navToPrevPage = () => {
		if (pageNumber === 1) return;
		setResultsNavInfo({
			startIndex: startIndex - maxResults,
			maxResults,
			pageNumber: pageNumber - 1,
		});
	};

	const navToNextPage = () => {
		setResultsNavInfo({
			startIndex: startIndex + maxResults,
			maxResults,
			pageNumber: pageNumber + 1,
		});
	};

	return (
		<div className={styles.pagination}>
			<button onClick={navToPrevPage} className={styles.pagination__button}>
				<img
					className={styles.pagination__arrow}
					src={arrowLeft}
					alt='A button to navigate to the previous page'
				/>
			</button>

			<div className={styles.pagination__page}>
				<p>{pageNumber}</p>
			</div>
			<button onClick={navToNextPage} className={styles.pagination__button}>
				<img
					className={styles.pagination__arrow}
					src={arrowRight}
					alt='A button to navigate to the next page'
				/>
			</button>
		</div>
	);
};

export default Pagination;

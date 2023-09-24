import { useState } from "react";
import ResultsList from "../ResultsList/ResultsList";
import ResultsSummary from "../ResultsSummary/ResultsSummary";

const ResultsPage = () => {
	const [booksMetadata, setBooksMetadata] = useState(null);

	const updateBooksMetadata = (metadata) => {
		setBooksMetadata(metadata);
	};

	return (
		<>
			<ResultsSummary booksMetadata={booksMetadata} />
			<ResultsList updateBooksMetadata={updateBooksMetadata} />
		</>
	);
};

export default ResultsPage;

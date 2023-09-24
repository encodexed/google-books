import ResultsList from "../ResultsList/ResultsList";
import SearchForm from "../SearchForm/SearchForm";

const ResultsPage = () => {
	return (
		<>
			<SearchForm flex='row' />
			<ResultsList />
		</>
	);
};

export default ResultsPage;

/* eslint-disable react/prop-types */
import { useState, createContext } from "react";
export const SearchContext = createContext(null);

const SearchContextProvider = ({ children }) => {
	const [searchTerm, setSearchTerm] = useState(null);
	const [isSearching, setIsSearching] = useState(false);
	const [hasSearched, setHasSearched] = useState(false);
	const [resultsNavInfo, setResultsNavInfo] = useState({
		startIndex: 0,
		maxResults: 12,
		pageNumber: 1,
	});

	return (
		<SearchContext.Provider
			value={{
				searchTerm,
				setSearchTerm,
				isSearching,
				setIsSearching,
				hasSearched,
				setHasSearched,
				resultsNavInfo,
				setResultsNavInfo,
			}}
		>
			{children}
		</SearchContext.Provider>
	);
};

export default SearchContextProvider;

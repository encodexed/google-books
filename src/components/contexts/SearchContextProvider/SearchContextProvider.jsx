/* eslint-disable react/prop-types */
import { useState, createContext } from "react";
export const SearchContext = createContext(null);

const SearchContextProvider = ({ children }) => {
	const [searchTerm, setSearchTerm] = useState(null);
	const [hasSearched, setHasSearched] = useState(false);

	return (
		<SearchContext.Provider
			value={{ searchTerm, setSearchTerm, hasSearched, setHasSearched }}
		>
			{children}
		</SearchContext.Provider>
	);
};

export default SearchContextProvider;

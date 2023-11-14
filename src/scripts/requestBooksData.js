const requestBooksData = async (input, startIndex = 0, maxResults = 12) => {
	const preparedInput = input.replaceAll(" ", "+");
	const baseUrl = "https://www.googleapis.com/books/v1/volumes";
	const apiKey = import.meta.env.VITE_API_KEY;
	const response = await fetch(
		`${baseUrl}?q=${preparedInput}&startIndex=${startIndex}&maxResults=${maxResults}&key=${apiKey}`
	);
	const booksData = await response.json();
	console.log(booksData);
	const usefulBookData = booksData.items.map((book) => {
		const {
			categories,
			description,
			infoLink,
			pageCount,
			publishedDate,
			publisher,
			subtitle,
			title,
		} = book.volumeInfo;
		const authors = book.volumeInfo?.authors || [""];
		const imageLinks = book.volumeInfo?.imageLinks || {};
		if (imageLinks.thumbnail !== undefined) {
			imageLinks.medium = imageLinks.thumbnail + "&fife=w400-h600";
			imageLinks.largest = imageLinks.thumbnail + "&fife=w20000-h20000";
		} else {
			imageLinks.medium =
				"https://libreture.com/static/images/book-placeholder.png";
			imageLinks.largest =
				"https://libreture.com/static/images/book-placeholder.png";
		}
		const { id } = book;
		const { saleability } = book.saleInfo;
		const amount = book?.saleInfo?.listPrice?.amount || undefined;
		const currencyCode = book.saleInfo?.listPrice?.currencyCode || undefined;
		return {
			amount,
			authors,
			categories,
			currencyCode,
			description,
			id,
			imageLinks,
			infoLink,
			pageCount,
			publishedDate,
			publisher,
			saleability,
			subtitle,
			title,
		};
	});

	usefulBookData.totalItems = booksData.totalItems;

	return usefulBookData;
};

export default requestBooksData;

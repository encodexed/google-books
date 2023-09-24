const requestBooksData = async (input) => {
	const preparedInput = input.replaceAll(" ", "+");
	const response = await fetch(
		`https://www.googleapis.com/books/v1/volumes?q=${preparedInput}&key=${
			import.meta.env.VITE_API_KEY
		}`
	);
	const booksData = await response.json();
	console.log(booksData);
	const usefulBookData = booksData.items.map((book) => {
		const { authors, categories, publishedDate, publisher, subtitle, title } =
			book.volumeInfo;
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
			id,
			imageLinks,
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

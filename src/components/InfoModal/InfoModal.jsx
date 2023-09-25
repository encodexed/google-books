/* eslint-disable react/prop-types */
import styles from "./InfoModal.module.scss";

const InfoModal = ({ info, authors, close }) => {
	console.log({ info });

	let categoriesStr = "";
	if (info.categories) {
		categoriesStr = info.categories.reduce(
			(total, next) => (total += ", " + next)
		);
	}

	const price =
		info.saleability === "NOT_FOR_SALE"
			? "Not for sale"
			: `${info.currencyCode}$${info.amount}`;

	let description = "No description.";
	if (info.description && info.description.length > 800) {
		description = info.description.slice(0, 800) + "...";
	}

	return (
		<aside onClick={() => close()} className={styles.infoModal__container}>
			<div className={styles.infoModal__content_container}>
				<div className={styles.infoModal__content}>
					<div className={styles.infoModal__content__image_container}>
						<img
							className={styles.infoModal__content__image}
							src={info.imageLinks.medium}
							alt=''
						/>
					</div>
					<div className={styles.infoModal__content__text}>
						<div>
							<h2 className={styles.infoModal__title}>{info.title}</h2>
							{info.subtitle && (
								<p className={styles.infoModal__subtitle}>{info.subtitle}</p>
							)}
						</div>

						<h3 className={styles.infoModal__authors}>{authors}</h3>
						<ul className={styles.infoModal__extra_info}>
							<li>
								<strong>Publisher:</strong> {info.publisher || "-"}
							</li>
							<li>
								<strong>Published Date:</strong> {info.publishedDate || "-"}
							</li>
							{info.categories && (
								<li>
									<strong>Categories:</strong> {categoriesStr}
								</li>
							)}
							{info.amount && (
								<li>
									<strong>Price:</strong> {price}
								</li>
							)}
							<li>
								<strong>Pages:</strong> {info.pageCount || "-"}
							</li>
						</ul>
						<p className={styles.infoModal__description}>{description}</p>
						{info.infoLink && <a href={info.infoLink}>Get this book</a>}
					</div>
				</div>
			</div>
		</aside>
	);
};

export default InfoModal;

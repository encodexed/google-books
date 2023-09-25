/* eslint-disable react/prop-types */
import styles from "./BookTile.module.scss";
import bookIcon from "../../assets/book.svg";
import InfoModal from "../InfoModal/InfoModal";
import { useState } from "react";

const BookTile = ({ info }) => {
	const [showModal, setShowModal] = useState(false);
	const { title, authors, imageLinks, publisher } = info;
	const authorsStr = authors.reduce((total, next) => (total += ", " + next));

	const displayModal = () => {
		setShowModal(true);
	};

	const hideModal = () => {
		setShowModal(false);
	};

	return (
		<article className={styles.bookTile}>
			<div className={styles.bookTile__cover}>
				<img
					className={styles.bookTile__image}
					src={imageLinks.medium}
					alt={`Book cover image for ${title}`}
				/>
				<div onClick={displayModal} className={styles.bookTile__hover}>
					<div className={styles.bookTile__hover_box}>
						<p className={styles.bookTile__hover_box__text}>
							Click for more information
						</p>
					</div>
				</div>
			</div>
			<div className={styles.bookTile__content}>
				<h3>{title}</h3>
				<p>{authorsStr}</p>
				<p className={styles.bookTile__content__publisher}>{publisher}</p>
			</div>
			<div className={styles.bookTile__see_more}>
				<button
					onClick={displayModal}
					className={styles.bookTile__see_more__button}
				>
					<img
						className={styles.bookTile__see_more__icon}
						src={bookIcon}
						alt='Click this book icon to learn more!'
					/>
					<p>More information</p>
				</button>
			</div>
			{showModal && (
				<InfoModal info={info} authors={authorsStr} close={hideModal} />
			)}
		</article>
	);
};

export default BookTile;

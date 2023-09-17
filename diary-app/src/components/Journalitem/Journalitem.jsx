import styles from './Journalitem.module.css';

function JournalItem({ title, date, text }) {
	const formatedDate = new Intl.DateTimeFormat('ru-RU').format(date);
	return (
		<>
			<h1 className={styles['journal-item__header']}>{title}</h1>
			<div className={styles['journal-item__body']}>
				<div className={styles['journal-item__date']}>{formatedDate}</div>
				<div className={styles['journal-item__text']}>{text}</div>
			</div>
		</>
	);
}

export default JournalItem;

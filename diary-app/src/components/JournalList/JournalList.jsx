import styles from './JournalList.module.css';
import CardButton from '../CardButton/CardButton';
import JournalItem from '../Journalitem/Journalitem';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

function JournalList({ items, setItem }) {
	const { userId } = useContext(UserContext);
	if (items.length === 0) {
		return (
			<div className={styles['journal-list']}>
				<p>Данных еще нет</p>
			</div>
		);
	}
	const sortedItems = (a, b) => {
		if (a.date < b.date) {
			return 1;
		} else return -1;
	};
	const filterItems = items
		.filter((el) => el.userId === userId)
		.sort(sortedItems);

	return (
		<div className={styles['journal-list']}>
			{filterItems.map((el) => (
				<CardButton key={el.id} onClick={() => setItem(el)}>
					<JournalItem title={el.title} date={el.date} text={el.text} />
				</CardButton>
			))}
		</div>
	);
}

export default JournalList;

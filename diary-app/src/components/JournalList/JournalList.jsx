import './JournalList.css';
import CardButton from '../CardButton/CardButton';
import JournalItem from '../Journalitem/Journalitem';

function JournalList({ items }) {
	if (items.length === 0) {
		return (
			<div className="journal-list">
				<p>Данных еще нет</p>
			</div>
		);
	}
	const sortedItems = (a, b) => {
		if (a.date < b.date) {
			return 1;
		} else return -1;
	};

	return (
		<div className="journal-list">
			{items.sort(sortedItems).map((el) => (
				<CardButton key={el.id}>
					<JournalItem title={el.title} date={el.date} text={el.text} />
				</CardButton>
			))}
		</div>
	);
}

export default JournalList;

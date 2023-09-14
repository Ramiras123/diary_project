import './App.css';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JorunalForm from './components/JournalForm/JournalForm';
import { useState } from 'react';

const INITIAL_DATA = [
	// {
	// 	id: 1,
	// 	title: 'Подготовка к обновлению курсов',
	// 	date: new Date(),
	// 	text: 'Сегодня провёл весь день за...'
	// },
	// {
	// 	id: 2,
	// 	title: 'Поход в годы',
	// 	date: new Date(),
	// 	text: 'Думал, что очень много време...'
	// }
];

function App() {
	const [items, setItems] = useState(INITIAL_DATA);

	const pushItem = (item) => {
		setItems((oldItems) => [
			...oldItems,
			{
				text: item.text,
				title: item.title,
				date: new Date(item.date),
				id: oldItems.length > 0 ? Math.max(...oldItems.map((i) => i.id)) + 1 : 1
			}
		]);
	};

	return (
		<>
			<div className="app">
				<LeftPanel>
					<Header />
					<JournalAddButton />
					<JournalList items={items}></JournalList>
				</LeftPanel>
				<Body>
					<JorunalForm onSubmit={pushItem}></JorunalForm>
				</Body>
			</div>
		</>
	);
}

export default App;

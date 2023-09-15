import './App.css';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JorunalForm from './components/JournalForm/JournalForm';
import { useEffect, useState } from 'react';

function App() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('data'));
		if (data) {
			setItems(
				data.map((item) => ({
					...item,
					date: new Date(item.date)
				}))
			);
		} else {
			localStorage.setItem('data', JSON.stringify([]));
		}
	}, []);

	useEffect(() => {
		if (items.length) {
			localStorage.setItem('data', JSON.stringify(items));
		}
	}, [items]);

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

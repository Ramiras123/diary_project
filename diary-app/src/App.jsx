import './App.css';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JorunalForm from './components/JournalForm/JournalForm';
import { useLocalStorage } from './hooks/use-localstorage.hook';
import { UserContextProvidev } from './context/user.context';
import { useState } from 'react';

function mapItems(items) {
	if (!items) {
		return [];
	}
	return items.map((i) => ({
		...i,
		date: new Date(i.date)
	}));
}

function App() {
	const [items, setItems] = useLocalStorage('data');
	const [selectItem, setSelectItem] = useState(null);

	const pushItem = (item) => {
		if (!item.id) {
			setItems([
				...mapItems(items),
				{
					...item,
					date: new Date(item.date),
					id: items.length > 0 ? Math.max(...items.map((i) => i.id)) + 1 : 1
				}
			]);
		} else {
			return setItems([
				...mapItems(items).map((i) => {
					if (i.id === item.id) {
						return {
							...item
						};
					}
					return i;
				})
			]);
		}
	};
	const setDelete = (id) => {
		setItems([...items.filter((i) => i.id !== id)]);
	};

	return (
		<UserContextProvidev>
			<>
				<div className="app">
					<LeftPanel>
						<Header />
						<JournalAddButton clear={() => setSelectItem(null)} />
						<JournalList
							items={mapItems(items)}
							setItem={setSelectItem}
						></JournalList>
					</LeftPanel>
					<Body>
						<JorunalForm
							onSubmit={pushItem}
							selectItem={selectItem}
							setDelete={setDelete}
						></JorunalForm>
					</Body>
				</div>
			</>
		</UserContextProvidev>
	);
}

export default App;

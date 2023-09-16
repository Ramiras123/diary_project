import './App.css';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JorunalForm from './components/JournalForm/JournalForm';
import { useLocalStorage } from './hooks/use-localstorage.hook';

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

	const pushItem = (item) => {
		setItems([
			...mapItems(items),
			{
				text: item.text,
				title: item.title,
				date: new Date(item.date),
				id: items.length > 0 ? Math.max(...items.map((i) => i.id)) + 1 : 1
			}
		]	);
	};

	return (
		<>
			<div className="app">
				<LeftPanel>
					<Header />
					<JournalAddButton />
					<JournalList items={mapItems(items)}></JournalList>
				</LeftPanel>
				<Body>
					<JorunalForm onSubmit={pushItem}></JorunalForm>
				</Body>
			</div>
		</>
	);
}

export default App;

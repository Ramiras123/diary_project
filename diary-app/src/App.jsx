import './App.css';
import Button from './components/Button/Button.jsx';
import JournalItem from './Journalitem/Journalitem';
import CardButton from './components/CardButton/CardButton';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';

function App() {
	const data = [
		{
			title: 'Подготовка к обновлению курсов',
			date: new Date(),
			text: 'Сегодня провёл весь день за...'
		},
		{
			title: 'Поход в годы',
			date: new Date(),
			text: 'Думал, что очень много време...'
		}
	];
	return (
		<>
			<div className="app">
				<LeftPanel>
					<Header />
					<JournalAddButton />
					<JournalList>
						<CardButton>
							<JournalItem
								title={data[0].title}
								date={data[0].date}
								text={data[0].text}
							/>
						</CardButton>
						<CardButton>
							<JournalItem
								title={data[1].title}
								date={data[1].date}
								text={data[1].text}
							/>
						</CardButton>
					</JournalList>
				</LeftPanel>
				<Body>
					<Button />
				</Body>
			</div>
		</>
	);
}

export default App;

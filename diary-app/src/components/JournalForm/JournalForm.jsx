import './JorunalForm.css';
import Button from '../Button/Button';

function JorunalForm({ onSubmit }) {
	const addJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		onSubmit(formProps);
	};

	return (
		<>
			<form className="journal-form" onSubmit={addJournalItem}>
				<input type="title" name="title" />
				<input type="date" name="date" />
				<input type="text" name="tag" />
				<textarea name="text" id="" cols="30" rows="10"></textarea>
				<Button text={'Сохранить'}></Button>
			</form>
		</>
	);
}

export default JorunalForm;

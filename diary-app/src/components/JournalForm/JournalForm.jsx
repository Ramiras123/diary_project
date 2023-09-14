import './JorunalForm.css';
import Button from '../Button/Button';
import { useState } from 'react';

function JorunalForm({ onSubmit }) {
	const [formValidState, setFormValidState] = useState({
		title: true,
		text: true,
		date: true
	});

	const addJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		let isValid = true;
		if (!formProps.title?.trim().length) {
			setFormValidState((state) => ({ ...state, title: false }));
			isValid = false;
		} else {
			setFormValidState((state) => ({ ...state, title: true }));
		}
		if (!formProps.text?.trim().length) {
			setFormValidState((state) => ({ ...state, text: false }));
			isValid = false;
		} else {
			setFormValidState((state) => ({ ...state, text: true }));
		}
		if (!formProps.date) {
			setFormValidState((state) => ({ ...state, date: false }));
			isValid = false;
		} else {
			setFormValidState((state) => ({ ...state, date: true }));
		}
		if (!isValid) {
			return;
		}
		onSubmit(formProps);
	};

	return (
		<>
			<form className="journal-form" onSubmit={addJournalItem}>
				<input
					type="title"
					name="title"
					className={`input ${formValidState.title ? '' : 'invalid'}`}
				/>
				<input
					type="date"
					name="date"
					className={`input ${formValidState.date ? '' : 'invalid'}`}
				/>
				<input type="text" name="tag" />
				<textarea
					name="text"
					id=""
					cols="30"
					rows="10"
					className={`input ${formValidState.text ? '' : 'invalid'}`}
				></textarea>
				<Button text={'Сохранить'}></Button>
			</form>
		</>
	);
}

export default JorunalForm;

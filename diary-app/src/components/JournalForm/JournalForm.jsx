import styles from './JorunalForm.module.css';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import cn from 'classnames';

const INIT_STATE = {
	title: true,
	text: true,
	date: true
};

function JorunalForm({ onSubmit }) {
	const [formValidState, setFormValidState] = useState(INIT_STATE);
	useEffect(() => {
		let timerValidState;
		if (!formValidState.title || !formValidState.text || !formValidState.date) {
			timerValidState = setTimeout(() => setFormValidState(INIT_STATE), 2000);
		}
		return () => {
			clearTimeout(timerValidState);
		};
	}, [formValidState]);

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
			<form className={styles['journal-form']} onSubmit={addJournalItem}>
				<div>
					{' '}
					<input
						type="title"
						name="title"
						className={cn(styles['input-title'], {
							[styles['invalid']]: !formValidState.title
						})}
					/>
				</div>
				<div className={styles['form-row']}>
					<label htmlFor="date" className={styles['form-label']}>
						<img src="/date.svg" alt="" />
						<span>Дата</span>
					</label>
					<input
						type="date"
						name="date"
						id="date"
						className={cn(styles['input'], {
							[styles['invalid']]: !formValidState.date
						})}
					/>
				</div>
				<div className={styles['form-row']}>
					<label htmlFor="tag" className={styles['form-label']}>
						<img src="/folder.svg" alt="" />
						<span>Метки</span>
					</label>
					<input type="text" id="tag" name="tag" className={styles['input']} />
				</div>
				<textarea
					name="text"
					id=""
					cols="30"
					rows="10"
					className={cn(styles['input'], {
						[styles['invalid']]: !formValidState.text
					})}
				></textarea>
				<Button text={'Сохранить'}></Button>
			</form>
		</>
	);
}

export default JorunalForm;

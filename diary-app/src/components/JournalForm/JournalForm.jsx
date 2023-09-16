import styles from './JorunalForm.module.css';
import Button from '../Button/Button';
import { useEffect, useReducer } from 'react';
import cn from 'classnames';
import { INITIAL_STATE, formReduce } from './JorunalForm.state';

function JorunalForm({ onSubmit }) {
	const [formState, dispatchForm] = useReducer(formReduce, INITIAL_STATE);
	const { isValid, values, isFormReadyToSubmit } = formState;
	useEffect(() => {
		let timerValidState;
		if (!isValid.title || !isValid.text || !isValid.date) {
			timerValidState = setTimeout(
				() => dispatchForm({ type: 'RESET_VALIDITY' }),
				2000
			);
		}
		return () => {
			clearTimeout(timerValidState);
		};
	}, [isValid]);

	useEffect(() => {
		if (isFormReadyToSubmit) {
			onSubmit(values);
			dispatchForm({ type: 'CLEAR' });
		}
	}, [isFormReadyToSubmit, values, onSubmit]);
	const addJournalItem = (e) => {
		e.preventDefault();
		dispatchForm({ type: 'SUBMIT' });
	};
	const onChange = (e) => {
		dispatchForm({
			type: 'SET_VALUE',
			payload: { [e.target.name]: e.target.value }
		});
	};

	return (
		<>
			<form className={styles['journal-form']} onSubmit={addJournalItem}>
				<div>
					{' '}
					<input
						type="title"
						name="title"
						onChange={onChange}
						value={values.title}
						className={cn(styles['input-title'], {
							[styles['invalid']]: !isValid.title
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
						onChange={onChange}
						value={values.date}
						id="date"
						className={cn(styles['input'], {
							[styles['invalid']]: !isValid.date
						})}
					/>
				</div>
				<div className={styles['form-row']}>
					<label htmlFor="tag" className={styles['form-label']}>
						<img src="/folder.svg" alt="" />
						<span>Метки</span>
					</label>
					<input
						type="text"
						id="tag"
						name="tag"
						onChange={onChange}
						value={values.tag}
						className={styles['input']}
					/>
				</div>
				<textarea
					name="text"
					id=""
					cols="30"
					rows="10"
					onChange={onChange}
					value={values.text}
					className={cn(styles['input'], {
						[styles['invalid']]: !isValid.text
					})}
				></textarea>
				<Button text={'Сохранить'}></Button>
			</form>
		</>
	);
}

export default JorunalForm;

import styles from './JorunalForm.module.css';
import Button from '../Button/Button';
import { useContext, useEffect, useReducer, useRef } from 'react';
import cn from 'classnames';
import { INITIAL_STATE, formReduce } from './JorunalForm.state';
import Input from '../Input/Input';
import { UserContext } from '../../context/user.context';

function JorunalForm({ onSubmit }) {
	const [formState, dispatchForm] = useReducer(formReduce, INITIAL_STATE);
	const { isValid, values, isFormReadyToSubmit } = formState;
	const titleRef = useRef();
	const dateRef = useRef();
	const textRef = useRef();
	const { userId } = useContext(UserContext);

	const focuseError = (isValid) => {
		switch (true) {
		case !isValid.title:
			titleRef.current.focus();
			break;
		case !isValid.date:
			dateRef.current.focus();
			break;
		case !isValid.text:
			textRef.current.focus();
			break;
		}
	};

	useEffect(() => {
		let timerValidState;
		if (!isValid.title || !isValid.text || !isValid.date) {
			focuseError(isValid);
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
					{userId}
					<Input
						type="title"
						name="title"
						ref={titleRef}
						onChange={onChange}
						value={values.title}
						isValid={isValid.title}
						appearence="title"
					/>
				</div>
				<div className={styles['form-row']}>
					<label htmlFor="date" className={styles['form-label']}>
						<img src="/date.svg" alt="" />
						<span>Дата</span>
					</label>
					<Input
						type="date"
						name="date"
						ref={dateRef}
						onChange={onChange}
						value={values.date}
						isValid={isValid.date}
						id="date"
					/>
				</div>
				<div className={styles['form-row']}>
					<label htmlFor="tag" className={styles['form-label']}>
						<img src="/folder.svg" alt="" />
						<span>Метки</span>
					</label>
					<Input
						type="text"
						id="tag"
						name="tag"
						onChange={onChange}
						value={values.tag}
					/>
				</div>
				<textarea
					name="text"
					id=""
					ref={textRef}
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
